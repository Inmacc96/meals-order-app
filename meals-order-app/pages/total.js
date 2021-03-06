import { useEffect, useCallback } from "react";
import Layout from "../layout/Layout";
import useMealsOrder from "../hooks/useMealsOrder";
import {formatMoney} from "../helpers";

export default function Total() {
  const { order, name, setName, saveOrder, total } = useMealsOrder();

  const checkOrder = useCallback(() => {
    return order.length === 0 || name === "" || name.length < 3;
  }, [order, name]);

  useEffect(() => {
    checkOrder();
  }, [order, checkOrder]);

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
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mt-10">
          <p className="text-2xl">
            Total a pagar: {""} <span className="font-bold">{formatMoney(total)}</span>
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
