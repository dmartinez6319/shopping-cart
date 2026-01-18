import { Link } from "react-router";
import styles from "../styles/Navbar.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Navbar = ({cart}) => {

    const getTotalQuantity = () => {
        let total = 0
        for (let i = 0; i < cart.length; i++) {
            total += cart[i].cartQuantity 
        }
        return total
    }

    return (
        <nav className={styles.nav}>
            <div className={styles["text-links"]}>
                <Link className={styles.navLink} to="/">Home</Link>
                <Link className={styles.navLink} to="store">Store</Link>
                <Link className={styles.navLink} to="cart">Cart</Link>
            </div>
            <div className={styles["icon-links"]}>

                <Link className={styles.navLink} to="cart">
                    <FontAwesomeIcon className={styles.cartIcon} icon={faCartShopping} />
                    <p>{getTotalQuantity()}</p>
                </Link>

            </div>

        </nav>
    )
}

export default Navbar;