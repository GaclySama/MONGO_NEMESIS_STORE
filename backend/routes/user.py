from fastapi import APIRouter, HTTPException
from fastapi.responses import JSONResponse
from pydantic import ValidationError
from models.user import SingUpSchema, LoginSchema, User
from config.config import database
from passlib.context import CryptContext

# * Creación de router para usuario
router = APIRouter(
    prefix="/user",
    tags=["User"],
)

collection = database["user"]
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


# * Inserta en mongo
def create_user_in_mongo( user_data: SingUpSchema  ):
    try:
      data = {
          "name": user_data.name,
          "lastname": user_data.lastname,
          "email": validar_email(user_data.email),
          "password": hash_password(user_data.password),  
      }

      result = collection.insert_one( data ).inserted_id
      return ( result )
    except HTTPException as e:
       raise e
    except Exception as e:
        raise HTTPException(
            status_code=500, detail=f"Error al crear el usuario: {e}"
        )


# * Hashea la contraseña
def hash_password( password: str ) -> str:
    crypt_pass = pwd_context.hash(password)
    return crypt_pass

# * Verifica la contraseña
def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def validar_email( email ):
    try:
        results = collection.count_documents({ 'email': email })
        
        if results > 0:
          raise HTTPException(
             status_code=400, detail=f"Ya hay una cuenta creada con este email"
             )
        
        return email

    except Exception as e:
      raise HTTPException(
            status_code=500, detail=f"Error: {e}"
        )
    

# ! RUTAS USUARIO ! #
# TODO: CREAR USUARIO
@router.post("/new")
async def new_user( user_data: SingUpSchema ):

  user_dict = user_data.model_dump()
  user = SingUpSchema(**user_dict)

  try:

    # * Envía a Mongo los datos que va a guardar
    response = create_user_in_mongo( user )

    # * Devuelve mensaje de ser exitoso
    return JSONResponse(
        content={"mensaje": f"Usuario creado exitosamente para '{ response }'"},
        status_code=201,
    )
  except HTTPException as e:
        raise e
  except Exception as e:
    raise HTTPException(
          status_code=500, detail=f"Error: {e}"
      )


# TODO: INICIAR SESIÓN
@router.post('/login')
async def sing_in(login_data: LoginSchema):
    email = login_data.email
    password = login_data.password

    try:
        user_data = collection.find_one({'email': email})

        if not user_data:
            raise HTTPException(status_code=404, detail="User not found")

        user_data["_id"] = str(user_data["_id"])  # Convertir ObjectId a str
        user = User(**user_data)

        if not verify_password(password, user.password):
            raise HTTPException(status_code=401, detail="Incorrect password")

        return {
            "authenticated": "true",
            "user": user.model_dump(by_alias=True)
        }
    except Exception as e:
        raise HTTPException(
            status_code=500, detail=f"Error: {e}"
        )
        