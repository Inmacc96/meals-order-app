import Head from "next/head";
import Sidebar from "../components/Sidebar";
import ProductModal from "../components/ProductModal";
import Modal from "react-modal";
import useMealsOrder from "../hooks/useMealsOrder";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#__next");

export default function Layout({ children, page }) {
  const { modal } = useMealsOrder();
  return (
    <>
      <Head>
        <link rel="icon" type="image/svg+xml" href="/assets/img/logo.svg" />
        <title>Café - {page}</title>
        <meta name="description" content="Quiosco Cafeteria" />
      </Head>

      <div className="md:flex">
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5">
          <Sidebar />
        </aside>
        <main className="md:8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
          <div className="p-10">{children}</div>
        </main>
      </div>

      {modal && (
        <Modal isOpen={modal} style={customStyles}>
          <ProductModal />
        </Modal>
      )}
    </>
  );
}
