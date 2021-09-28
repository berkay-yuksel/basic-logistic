import styles from "../styles/Footer.module.css"
import Image from "next/image"
import Link from "next/link"

const Footer =()=>{
    return (

        <footer className={styles.footerwrapper}>
<div className={styles.footertop}>

<div className={styles.footercard}>
      <Link href="/"><Image className={styles.footerlogo} src="/vercel.svg" alt="Vercel Logo" width={110} height={72} /></Link>
        <p>Desing and developed by berkay yüksel</p>
      </div>
      <div className={styles.footercard}>
        <h2> Company </h2>
      <Link href="/"><h3>Kurumsal</h3></Link>
      <Link href="/"><h3>Hizmetlerimiz</h3></Link>
      <Link href="/"><h3>İletişim</h3></Link>
      <Link href="/"><h3>Galeri </h3></Link>
    
      </div>
      <div className={styles.footercard}>
        <h2>Social </h2>
        
        <span><Image  src="/instagram.svg" alt="Instagram Logo" width={16} height={16} /><h3>Instagram</h3></span>
       <span> <Image  src="/facebook.svg" alt="Facebook Logo" width={16} height={16} /> <h3>Facebook</h3></span>
        <span><Image  src="/twitter.svg" alt="Twitter Logo" width={16} height={16} /> <h3>Twitter</h3></span>
        <span><Image  src="/linkedin.svg" alt="LinkedIn Logo" width={16} height={16} /> <h3>LinkedIn</h3></span>
        <span><Image  src="/youtube.svg" alt="Youtube Logo" width={16} height={16} /> <h3>Youtube</h3></span>
  
      </div>
      <div className={styles.footercard}>
        <h2> Subscribe</h2>
 <form>
 <p>Stay up to date with our latest developments.</p>
<input  type="email" name="email" aria-labelledby="email-label"  placeholder="Enter email address"></input>
<button>Subscribe  </button>
 </form>
      </div>

</div>
 <div className={styles.footerbottom}>
   <div><span>Terms of Service </span> <span>Privacy Policy</span></div>
   <h3> © Byuksel. All rights reserved.  </h3>
   </div>    
      </footer>
    )
}

export default Footer