// Consists of the Navbar, Main Content, and Footer

import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState } from "react";

const RootLayout = () => {

    const [cart, setCart] = useState([]) // Used to manage products in cart to view/delete/add

    return (
        <div className="wrapper">
        
        <Header cart={cart}/>

        <Outlet context={ {cart,setCart }}/> {/* Used to render pages depending on whats in the url automatically*/}

        <Footer />

        </div>
    )
}

export default RootLayout;