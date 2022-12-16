import { useState, useEffect } from "react";
import Image from "next/image";
import useMealsOrder from "../hooks/useMealsOrder";
import { formatMoney } from "../helpers";

const ProductModal = () => {
  const { product, handleChangeModal, handleAddOrder, order } = useMealsOrder();
  const [quantity, setQuantity] = useState(1);
  const [editQuantity, setEditQuantity] = useState(false);

  // Check if the product of the current modal is in the order
  useEffect(() => {
    if (order.some((productState) => productState.id === product.id)) {
      const productToEdit = order.find(
        (productState) => productState.id === product.id
      );
      setEditQuantity(true);
      setQuantity(productToEdit.quantity);
    }
  }, [product, order]);

  return (
    <div className="md:flex gap-10">
      <div className="md:w-1/3">
        <Image
          width={300}
          height={400}
          alt={`product image ${product.name}`}
          src={`/assets/img/${product.image}.jpg`}
        />
      </div>

      <div className="md:w-2/3">
        <div className="flex justify-end">
          <button onClick={handleChangeModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <h1 className="text-3xl font-bold mt-5">{product.name}</h1>
        <p className="mt-5 font-black text-5xl text-amber-500">
          {formatMoney(product.price)}
        </p>

        <div className="flex gap-4 mt-5">
          <button
            type="button"
            onClick={() => {
              if (quantity <= 1) return;
              setQuantity(quantity - 1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>

          <p className="text-3xl">{quantity}</p>
          <button
            type="button"
            onClick={() => {
              if (quantity >= 5) return;
              setQuantity(quantity + 1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>

        <button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 mt-5 text-white font-bold uppercase rounded"
          onClick={() => handleAddOrder({ ...product, quantity })}
        >
          {editQuantity ? "Guardar Cambios" : "Añadir al Pedido"}
        </button>
      </div>
    </div>
  );
};

export default ProductModal;
