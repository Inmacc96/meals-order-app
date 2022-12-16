import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const MealsOrderContext = createContext();

const MealsOrderProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState({});
  const [product, setProduct] = useState({});
  const [modal, setModal] = useState(false);
  const [order, setOrder] = useState([]);
  const [name, setName] = useState("");
  const [total, setTotal] = useState(0);

  const router = useRouter();

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

  useEffect(() => {
    const newTotal = order.reduce(
      (total, product) => product.price * product.quantity + total,
      0
    );
    setTotal(newTotal);
  }, [order]);

  const handleClickCategory = (id) => {
    const category = categories.filter((cat) => cat.id === id);
    setCurrentCategory(category[0]);
    router.push("/"); // Siempre que selecciones una categoría, te va
    // redirigir al menú
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

  const handleDeleteProduct = (id) => {
    const updatedOrder = order.filter((product) => product.id !== id);
    setOrder(updatedOrder);
  };

  const saveOrder = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/api/orders", {
        orderInfo: order,
        name,
        total,
        date: Date.now().toString(),
      });

      // Reset app
      setCurrentCategory(categories[0]);
      setOrder([]);
      setName("");

      toast.success("Pedido Realizado Correctamente");

      setTimeout(() => {
        router.push("/");
      }, 3000);
    } catch (error) {
      console.log(error);
    }
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
        handleDeleteProduct,
        name,
        setName,
        saveOrder,
        total,
      }}
    >
      {children}
    </MealsOrderContext.Provider>
  );
};

export { MealsOrderProvider };

export default MealsOrderContext;
