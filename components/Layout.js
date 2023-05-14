import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = function ({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
