import styles from "../styles/Footer.module.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.creditSection}>
                <p className={styles.nameCredit}>Made by Daniel</p>
                <a className={styles.githubIcon} href="https://github.com/dmartinez6319" target="_blank">
                <FontAwesomeIcon  icon={faGithub}></FontAwesomeIcon>
                </a>
                
                </div>
        </footer>
    )
}

export default Footer;