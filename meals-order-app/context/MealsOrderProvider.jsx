import { useState, useEffect, createContext } from "react";
import axios from "axios";

const MealsOrderContext = createContext();

const MealsOrderProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState({});

  useEffect(() => {
    const getCategories = async () => {
      const { data } = await axios("/api/categories");
      setCategories(data);
    };

    getCategories();
  }, []);

  const handleClickCategory = (id) => {
    const category = categories.filter((cat) => cat.id === id);
    setCurrentCategory(category[0]);
  };

  return (
    <MealsOrderContext.Provider
      value={{ categories, currentCategory, handleClickCategory }}
    >
      {children}
    </MealsOrderContext.Provider>
  );
};

export { MealsOrderProvider };

export default MealsOrderContext;
