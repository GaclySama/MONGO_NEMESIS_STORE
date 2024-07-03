from fastapi import APIRouter, HTTPException
from fastapi.responses import JSONResponse
from config.config import database

router = APIRouter(
    prefix="/product",
    tags=["Product"],
)

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
def get_products():
    products = list(collection.find())
    for product in products:
        product["_id"] = str(product["_id"])
    return products
