import { Link } from "react-router";
import styles from "../styles/Navbar.module.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
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
                </Link>

            </div>

        </nav>
    )
}

export default Navbar;