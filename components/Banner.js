import styles from '../styles/Banner.module.css'
import Image from 'next/image'
import Link from "next/link"
const Banner =()=>{
    return <>       
    
<div className={styles.banner}>
<div className={styles.pic}>
<Image  src="/bannertruck.svg" alt="Vercel Logo" width={500} height={500} />
</div>
<div className={styles.info}>
<h1 className={styles.title}>
    Welcome to <a href="https://nextjs.org">Next.js!</a>
  </h1>

  <p className={styles.description}>
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
  </p> 
  <button className={styles.herobutton}><Link href="/">Hemen Arayın</Link></button>
</div>


</div>
  
  </>
}

export default Banner