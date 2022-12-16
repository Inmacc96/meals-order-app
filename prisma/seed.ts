import { categories } from "./data/categories";
import { products } from "./data/products";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient(); // Vamos a tener una instancia de prismaClient

const main = async () : Promise<void> => {
    // Promise<void>: Singnidica que es de tipo Promise pero no retorna nada
  try {
      await prisma.category.createMany({
          data: categories
      })
      // Dentro del modelo Category, va a agregar todos los datos que están en categories
      await prisma.product.createMany({
        data: products
    })
  } catch (error) {
    console.log(error);
  }
};
main(); // A esta función la puedes llamar realmente como quieras
