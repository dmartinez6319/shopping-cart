import styles from "../styles/Header.module.css"
import Navbar from "./Navbar";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <header className={styles.header}>
            <Navbar />
        </header>
    )
}

export default Header;