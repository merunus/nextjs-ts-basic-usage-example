import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

type TLayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<TLayoutProps> = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
