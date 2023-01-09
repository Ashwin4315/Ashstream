import styles from "./Menu.module.css"

function Menu() {
    return (  
        <div className={styles.container}>
            <ul className={styles.links}>
                <li>Sign in</li>
                <li>Search</li>
              
            </ul>
        </div>
    );
}

export default Menu;