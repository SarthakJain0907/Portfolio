import stylesNav from '/styles/Navbar.module.css';
import Link from 'next/link';


export default function Navbar() {
    return(
        <div className={stylesNav.navbar}>
            <div className={stylesNav.card}><Link href='/' className={stylesNav.navLinks}>Home</Link></div>
            <div className={stylesNav.card}><Link href='../links/coding' className={stylesNav.navLinks}>Coding</Link></div>
            <div className={stylesNav.card}><Link href='../links/work' className={stylesNav.navLinks}>Work</Link></div>
            <div className={stylesNav.card}><Link href='../links/contact' className={stylesNav.navLinks}>Connect</Link></div>
        </div>

    )
}
