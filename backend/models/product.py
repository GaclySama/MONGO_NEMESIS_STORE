from pydantic import BaseModel, Field
from enum import Enum


class CategoryEnum(str, Enum):
    hombre = "hombre"
    mujer = "mujer"
    niña = "niña"
    niño = "niño"


class AvalibleEnum:
    disponible = 1
    no_disponible = 0


class Product(BaseModel):
    imagen: str = Field(...)
    title: str = Field(...)
    stock: int = Field(...)
    price: float = Field(...)
    category: CategoryEnum = Field(...)
    available: AvalibleEnum = Field(...)
