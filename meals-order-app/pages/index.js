import { useEffect } from "react";
import { PrismaClient } from "@prisma/client";

export default function Home({ categories }) {
  useEffect(() => {
    const consultDB = async () => {
      const prisma = new PrismaClient();

      const categories = await prisma.category.findMany();
      console.log(categories);
    };
    consultDB();
  }, []);
  console.log(categories);
  return <h1>Next JS</h1>;
}

export const getServerSideProps = async () => {
  const prisma = new PrismaClient();

  const categories = await prisma.category.findMany();

  return {
    props: {
      categories,
    },
  };
};
