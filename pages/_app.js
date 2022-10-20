import "../styles/globals.css";
import "react-slideshow-image/dist/styles.css";
import Navbar2 from "../components/navbar2";

function MyApp({ Component, pageProps }) {
  return (
    <>
        <Navbar2 />
        <Component {...pageProps} />
    </>
  );
}

export default MyApp;
