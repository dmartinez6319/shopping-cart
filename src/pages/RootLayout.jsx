// Consists of the Navbar, Main Content, and Footer

import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";

const RootLayout = () => {
    return (
        <div className="wrapper">
        
        <Header />

        <Outlet />

        <Footer />

        </div>
    )
}

export default RootLayout;