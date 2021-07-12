import "../../styles/globals.scss";
import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";
import { MenuContextProvider } from "../Contexts/MenuContext";
import WhatsAppButton from "../components/atoms/WhatsAppButton";

function MyApp({ Component, pageProps }) {
  return (
    <MenuContextProvider>
      <div>
        <Header />
        <WhatsAppButton />
        <Component {...pageProps} />
        <Footer />
      </div>
    </MenuContextProvider>
  );
}

export default MyApp;
