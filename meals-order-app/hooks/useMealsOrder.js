import { useContext } from "react";
import MealsOrderContext from "../context/MealsOrderProvider";

const useMealsOrder = () => {
  return useContext(MealsOrderContext);
};

export default useMealsOrder;
