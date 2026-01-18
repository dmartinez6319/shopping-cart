import styles from "../styles/Header.module.css"
import Navbar from "./Navbar";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Header = ( {cart} ) => {
    return (
        <header className={styles.header}>
            <Navbar cart={cart}/>
        </header>
    )
}

export default Header;