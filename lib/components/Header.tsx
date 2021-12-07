import styles from '../../styles/Header.module.css'

export default function Header() {
    return (
        <>
            <div className={`pagewidth`}>
                <nav className={styles.nav}>
                    <a>Base64</a>
                    <a className={styles.navButtons}>Alpha</a>
                    <a className={styles.navButtons}>Portfolio</a>
                    <a className={styles.navButtons}>Discord</a>
                    <a className={styles.navButtons}>Twitter</a>
                </nav>
            </div>
        </>
    )
}