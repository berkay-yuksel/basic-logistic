import styles from '../styles/Layout.module.css'
import {useEffect} from 'react'
const Services =()=>{


    useEffect(() => {
        document.getElementById("services").className = "active";
        document.getElementById("about").classList.remove("active");
        document.getElementById("contact").classList.remove("active");
        document.getElementById("gallery").classList.remove("active");
        
    }, [])

    return <div className={styles.layy}>
        Services
    </div>
}

export default Services 