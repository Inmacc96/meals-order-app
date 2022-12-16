import Image from "next/image";
import useMealsOrder from "../hooks/useMealsOrder";

const Category = ({ category }) => {
  const { currentCategory, handleClickCategory } = useMealsOrder();
  const { name, icon, id } = category;
  return (
    <button
      type="button"
      className={`${
        currentCategory?.id === id ? "bg-amber-400" : ""
      } flex items-center gap-4 w-full border p-5 hover:bg-amber-400 text-2xl font-bold hover:cursor-pointer`}
      onClick={() => handleClickCategory(id)}
    >
      <Image
        width={70}
        height={70}
        src={`/assets/img/icono_${icon}.svg`}
        alt="Icon image"
      />

      {name}
    </button>
  );
};

export default Category;
