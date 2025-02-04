from pydantic import BaseModel, EmailStr, Field
from typing import Optional


# * Modelo del usuario
class updateUser(BaseModel):
    name: Optional[str] = Field(None)
    lastname: Optional[str] = Field(None)
    email: Optional[EmailStr] = Field(None)


# * Modelo de datos para crear usuario
class SingUpSchema(BaseModel):
    name: str = Field(...,min_length=3, max_length=20)
    lastname: str = Field(...,min_length=3, max_length=20)
    email: EmailStr = Field(..., min_length=9, max_length=30)
    password: str = Field(..., min_length=6, max_length=16)


# * Modelo de datos para inicio de sesión
class LoginSchema(BaseModel):
    email: EmailStr = Field(..., min_length=9, max_length=30)
    password: str = Field(..., min_length=6, max_length=16)


class User(BaseModel):
    id: str = Field(None, alias="_id")
    name: str
    lastname: str  # Asegúrate de que el nombre del campo coincide
    email: EmailStr
    password: str
