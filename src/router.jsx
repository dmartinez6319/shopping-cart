import { createBrowserRouter } from "react-router";
import Homepage from "./pages/HomePage";
import Storepage from "./pages/StorePage";
import Cartpage from "./pages/CartPage";
import Errorpage from "./pages/ErrorPage";
import RootLayout from "./pages/Rootlayout";


const router = createBrowserRouter([
    {
        path: "/", // Default Page
        element: <RootLayout />, // Consists of components needed on every page as to not rerender them
        errorElement: <Errorpage />,
        children: [
            {
                index: true, // Defaults to this element/homepage when url is empty
                element: <Homepage />
            },
            {
                path: "store",
                element: <Storepage />
            },
            {
                path: "cart",
                element: <Cartpage />
            }
        ]
    }
])

export default router;