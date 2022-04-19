import Image from "next/image";
import useMealsOrder from "../hooks/useMealsOrder";
import Category from "./Category";

const Sidebar = () => {
  const { categories } = useMealsOrder();
  return (
    <>
      <Image
        width={300}
        height={100}
        src="/assets/img/logo.svg"
        alt="logo image"
      />

      <nav className="mt-10">
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </nav>
    </>
  );
};

export default Sidebar;
