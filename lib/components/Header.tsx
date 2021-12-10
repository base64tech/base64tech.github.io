import Link from 'next/link'

import styles from '../../styles/Header.module.css'

export default function Header() {
    return (
        <>
            <div className={`pagewidth`}>
                <nav className={styles.nav}>
                    <a>Base64</a>
                    <a className={`text-left ${styles.navButtons}`}>Alpha</a>
                    <a className={`text-center ${styles.navButtons}`}>Portfolio</a>
                    <Link href="https://discord.gg/fEr3HZN36x"><a target="_blank" className={`text-center ${styles.navButtons}`}>Discord</a></Link>
                    <Link href="https://twitter.com/base64tech"><a target="_blank" className={`text-right ${styles.navButtons}`}>Twitter</a></Link>
                </nav>
            </div>
        </>
    )
}