import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const MealsOrderContext = createContext();

const MealsOrderProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState({});
  const [product, setProduct] = useState({});
  const [modal, setModal] = useState(false);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const { data } = await axios("/api/categories");
      setCategories(data);
    };

    getCategories();
  }, []);

  useEffect(() => {
    setCurrentCategory(categories[0]);
  }, [categories]);

  const handleClickCategory = (id) => {
    const category = categories.filter((cat) => cat.id === id);
    setCurrentCategory(category[0]);
  };

  const handleSetProduct = (product) => {
    setProduct(product);
  };

  const handleChangeModal = () => {
    setModal(!modal);
  };

  const handleAddOrder = ({ categoryId, ...product }) => {
    if (order.some((productState) => productState.id === product.id)) {
      // Update quantity
      const updatedOrder = order.map((productState) =>
        productState.id === product.id ? product : productState
      );
      setOrder(updatedOrder);
      toast.success("Guardado Correctamente");
    } else {
      setOrder([...order, product]);
      toast.success("Agregado al Pedido");
    }

    setModal(false);
  };

  const handleEditQuantity = (id) => {
    const updatedProduct = order.filter((product) => product.id === id);
    setProduct(updatedProduct[0]);

    setModal(!modal);
  };

  return (
    <MealsOrderContext.Provider
      value={{
        categories,
        currentCategory,
        handleClickCategory,
        product,
        handleSetProduct,
        modal,
        handleChangeModal,
        order,
        handleAddOrder,
        handleEditQuantity,
      }}
    >
      {children}
    </MealsOrderContext.Provider>
  );
};

export { MealsOrderProvider };

export default MealsOrderContext;
