import styles from '../styles/Layout.module.css'
import {useEffect} from 'react'

const Contact =()=>{

    
    useEffect(() => {
        document.getElementById("contact").className = "active";
        document.getElementById("about").classList.remove("active");
        document.getElementById("services").classList.remove("active");
        document.getElementById("gallery").classList.remove("active");

        
    }, [])

    return <div className={styles.layy}>
        ContactContactContactContact
    </div>
}

export default Contact