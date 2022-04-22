import { useEffect, useCallback } from "react";
import Layout from "../layout/Layout";
import useMealsOrder from "../hooks/useMealsOrder";

export default function Total() {
  const { order } = useMealsOrder();

  const checkOrder = useCallback(() => {
    return order.length === 0;
  }, [order]);

  useEffect(() => {
    checkOrder();
  }, [order, checkOrder]);

  const saveOrder = (e) => {
    e.preventDefault();
    console.log("Guardar pedido..");
  };

  return (
    <Layout page="Total y Confirmar Pedido">
      <h1 className="text-4xl font-black"> Total </h1>
      <p className="text-2xl my-10">Confirma tu Pedido a continuación</p>

      <form onSubmit={saveOrder}>
        <div>
          <label
            htmlFor="name"
            className="block uppercase text-slate-800 font-bold text-xl"
          >
            Nombre
          </label>

          <input
            id="name"
            type="text"
            className="bg-gray-200 w-full lg:w-1/3 rounded-md mt-3 p-2"
          />
        </div>

        <div className="mt-10">
          <p className="text-2xl">
            Total a pagar: {""} <span className="font-bold">200€</span>
          </p>
        </div>

        <div className="mt-5">
          <input
            type="submit"
            className={`${
              checkOrder()
                ? "bg-indigo-100"
                : "bg-indigo-600 hover:bg-indigo-800"
            } w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center hover:cursor-pointer`}
            value="Confirmar Pedido"
            disabled={checkOrder()}
          />
        </div>
      </form>
    </Layout>
  );
}
