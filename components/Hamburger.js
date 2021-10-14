import styles from "../styles/Hamburger.module.css"
import { useState,useEffect  } from "react";
import Link from "next/link"
import { useRouter } from 'next/router';
const Hamburger =()=>{
    const router = useRouter();
    const [open,setOpen] = useState(false);
    useEffect(() =>openSesame(), [open]);
    const openSesame =()=>{
        document.getElementById("menu").style.width = open ? "40vw": "0px";
     
    }
   
    return(
        <div className={styles.container}>
            <div className={styles.box} >
                <button onClick={()=>setOpen(!open)}  className={styles.hamburgerbtn}>
                <span id="1" className={styles.line}></span>
                <span id="2"className={styles.line}></span>
                <span id="3" className={styles.line}></span>
                </button>
            </div>
        <div id="menu" className={styles.openmenu}> <button onClick={()=>setOpen(!open)} className={styles.hamburgerbtn}> <span>x</span> </button>
  <div>
  <h3 className={router.pathname == "/" ? "active" : "" } onClick={()=>setOpen(!open)}><Link  href="/">Anasayfa</Link>   </h3><br/>
  
  <h3 className={router.pathname == "/about" ? "active" : "" } onClick={()=>setOpen(!open)}><Link  href="/about">Kurumsal</Link>   </h3><br/>
   <h3 className={router.pathname == "/services" ? "active" : "" }onClick={()=>setOpen(!open)}><Link href="/services">Hizmetlerimiz</Link>   </h3><br/>

   <h3 className={router.pathname == "/contact" ? "active" : "" }onClick={()=>setOpen(!open)}><Link href="/contact">İletişim</Link>   </h3><br/>


   <h3 className={router.pathname == "/gallery" ? "active" : "" } onClick={()=>setOpen(!open)}><Link href="/gallery">Galeri</Link>   </h3>
      
 
  </div>
        
 
        </div> 
        </div>
    )
}
export default Hamburger