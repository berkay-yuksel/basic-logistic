import Link from "next/link"
import styles from "../styles/Nav.module.css"
import Image from 'next/image'
import Hamburger from "./Hamburger"
import { useRouter } from 'next/router'

const Nav = ()=>{
    const router = useRouter();
    return (
        <nav className={styles.nav }>
            <Link href="/"><Image  src="/vercel.svg" alt="Vercel Logo" width={110} height={72} /></Link>
<ul>

<li className={router.pathname == "/" ? "active" : "" }  >
<Link  href="/">Anasayfa</Link>
</li>

<li className={router.pathname == "/about" ? "active" : "" }  >
<Link  href="/about">Kurumsal</Link>
</li>

<li className={router.pathname == "/services" ? "active" : "" } >
<Link href="/services">Hizmetlerimiz</Link>
</li>

<li className={router.pathname == "/contact" ? "active" : "" } >
<Link href="/contact">İletişim</Link>
</li>

<li className={router.pathname == "/gallery" ? "active" : "" }>
<Link href="/gallery">Galeri</Link>
</li>
        
 
</ul>

<Hamburger />
        </nav>
    )
    
}

export default Nav