import styles from "./Header.module.css"
import logo from "../images/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-free-solid'
import Menu from "../overlay/Menu"
import { useState } from "react"
import { Link } from "react-router-dom"

function Header() {
    const[show,setshow]=useState(false)
const showmenu=()=>{
    setshow(!show)

}

    return (
        <>
        <div className={styles.header}>
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <img src={logo} alt="logo" className={styles.image} />
                    <h1>Ash<span>Stream</span></h1>
                </div>
                <div className={styles.links}>
                    <ul className={styles.list}>
                        <li className={styles.page}><Link to="/About">About</Link></li>
                        <li className={styles.page}><Link to="/Signin">Signin</Link></li>
                        <li className={styles.page}><Link to="/Search">Search</Link></li>
                        <button className={styles.bar}  onClick={showmenu}><FontAwesomeIcon icon="fa-solid fa-bars" className={styles.icon} /></button>
                    </ul>

                </div>
            </nav>
        </div>
        {show &&<Menu/>}
        </>
    );
}

export default Header;