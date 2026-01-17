import { Link } from "react-router";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="store">Store</Link>
        <Link to="cart">Cart</Link>
        </nav>
    )
}

export default Navbar;