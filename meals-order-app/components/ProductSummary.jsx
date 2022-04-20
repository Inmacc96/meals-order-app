import Image from "next/image";
import { formatMoney } from "../helpers";

const ProductSummary = ({ product }) => {
  return (
    <div className="shadow p-5 mb-3 flex gap-10 items-center">
      <div className="md:w-1/6">
        <Image
          width={300}
          height={400}
          alt={`Product Image - ${product.name}`}
          src={`/assets/img/${product.image}.jpg`}
        />
      </div>

      <div className="md:w-5/6">
        <p className="text-3xl font-bold">{product.name}</p>
        <p className="text-xl font-bold mt-2">Cantidad: {product.quantity}</p>
        <p className="text-xl font-bold text-amber-500 mt-2">
          Precio: {formatMoney(product.price)}
        </p>
        <p className="text-sm text-gray-700 mt-2">
          Subtotal: {formatMoney(product.price * product.quantity)}
        </p>
      </div>
    </div>
  );
};

export default ProductSummary;
