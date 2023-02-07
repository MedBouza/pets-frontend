//import "@/styles/globals.css";
//import type { AppProps } from "next/app";

//export default function App({ Component, pageProps }: AppProps) {
// return <Component {...pageProps} />;
//}
import { wrapper } from "@/store/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ToastContainer />
      <Component {...pageProps} />
    </>
  );
};
export default wrapper.withRedux(App);
