import "../styles/globals.css";
import { MealsOrderProvider } from "../context/MealsOrderProvider";

function MyApp({ Component, pageProps }) {
  return (
    <MealsOrderProvider>
      <Component {...pageProps} />
    </MealsOrderProvider>
  );
}

export default MyApp;
