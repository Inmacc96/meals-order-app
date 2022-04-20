import Image from "next/image";
import { formatMoney } from "../helpers";
import useMealsOrder from "../hooks/useMealsOrder";

const Product = ({ product }) => {
  const { handleSetProduct, handleChangeModal } = useMealsOrder();
  const { id, name, price, image } = product;
  return (
    <div className="border p-3">
      <Image
        width={400}
        height={500}
        src={`/assets/img/${image}.jpg`}
        alt={`Image - ${name}`}
      />
      <div className="p-5">
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="mt-5 font-black text-4xl text-amber-500">
          {formatMoney(price)}
        </p>

        <button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold"
          onClick={() => {
            handleChangeModal();
            handleSetProduct(product);
          }}
        >
          Agregar
        </button>
      </div>
    </div>
  );
};

export default Product;
