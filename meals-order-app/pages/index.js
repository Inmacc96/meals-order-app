import Layout from "../layout/Layout";
import useMealsOrder from "../hooks/useMealsOrder";

export default function Home() {
  const {currentCategory} = useMealsOrder()
  return (
    <Layout page={`Menú ${currentCategory?.name}`}>
      <h1 className="text-4xl font-black">{currentCategory?.name}</h1>
      <p className="text-2xl my-10">
        Elige y personaliza tu pedido a continuación
      </p>
    </Layout>
  );
}
