import styles from "../styles/Homepage.module.css"
import { Link } from "react-router";
import shopperImg from "../assets/shopper.png"

const Homepage = () => {
    return (
        <>
        
            <main className={styles.main}>
                <div className={styles.displayText}>
                    <h1>Your all-in-one shopping destination!</h1>
                    <Link to="store" className={styles.shopButton}>Shop Now</Link>
                </div>
                <div className={styles.displayImage}>
                    
                    <img src={shopperImg} alt="shopper icon" />
                </div>
            </main>

        </>
    )
}

export default Homepage;