import { useOutletContext } from "react-router";
import styles from "../styles/Cartpage.module.css"

import {getCartTotalPrice} from "../utils/cartUtil"
import CartItem from "../components/CartItem";

const Cartpage = () => {

    const {cart, setCart} = useOutletContext();

    return (
        <main className={styles.cartContainer}>
            <div className={styles.itemContainer}>
                {cart.map((item ) => {
                    return <CartItem 
                        cartItem={item.cartItem}
                        itemQuantity={item.cartQuantity}
                        setCart = {setCart}
                        key = {crypto.randomUUID()}
                    />
                })}
            </div>
            <div className={styles.checkoutContainer}>
                <h2>Order Summary</h2>
                <div className={styles.summaryContainer}>
                    <div className={styles.titles}>
                        <p>Subtotal: </p>
                        <p>Shipping: </p>
                        <p>Tax: </p>
                    </div>
                    <div className={styles.priceContainer}>
                        <p>$ {(getCartTotalPrice(cart,false))}</p>
                        <p>$ {3.99}</p>
                        <p>$ {2.99}</p>
                    </div>
                    
                </div>
                <hr />
                <div className={styles.totalContainer}>
                    <p>Total: </p>
                    <p>$ {getCartTotalPrice(cart,true)}</p>
                </div>
            </div>
        </main>
    )
}

export default Cartpage;