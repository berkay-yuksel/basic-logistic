import Link from "next/link"
import styles from "../styles/Nav.module.css"
import Image from 'next/image'

const Nav = ()=>{
    return (
        <nav className={styles.nav }>
            <Link href="/"><Image  src="/vercel.svg" alt="Vercel Logo" width={110} height={72} /></Link>
<ul>
    <li id="about">
<Link  href="/about">Kurumsal</Link>
    </li>
    <li id="services">
<Link href="/services">Hizmetlerimiz</Link>
    </li>
    <li id="contact">
<Link href="/contact">İletişim</Link>
    </li>
    <li id="gallery">
<Link href="/gallery">Galeri</Link>
    </li>
        

</ul>




        </nav>
    )
    
}

export default Nav