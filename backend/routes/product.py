from fastapi import APIRouter, HTTPException, status
from fastapi.responses import JSONResponse
from config.config import database
import logging

router = APIRouter(
    prefix="/product",
    tags=["Product"],
)

logger = logging.getLogger(__name__)
collection = database["products"]

products = []

@router.post("/add")
def add_array_products():
    products_dict = products

    result = collection.insert_many(products_dict)
    if result.inserted_ids:
        return JSONResponse(status_code=201, content=True)
    else:
        raise HTTPException(status_code=500, detail="Failed to insert products")

@router.get("s")
async def get_products():
    try:
      products = list(collection.find())

      if not products: 
          raise HTTPException(
           status_code=status.HTTP_404_NOT_FOUND,
           detail=f'Error: No hay productos en base de datos'
       )

      for product in products:
          product["_id"] = str(product["_id"])
          
      return products
    except Exception as e:
       logger.error(f"Error: {e}")
       raise HTTPException(
           status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
           detail=f'Error: {e}'
       )
