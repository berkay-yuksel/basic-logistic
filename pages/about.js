import styles from '../styles/Layout.module.css'

import {useEffect} from 'react'

const About =()=>{

  


    useEffect(() => {
        document.getElementById("about").className = "active";
        document.getElementById("contact").classList.remove("active");
        document.getElementById("services").classList.remove("active");
        document.getElementById("gallery").classList.remove("active");

    }, [])

    return <div className={styles.layy}>
        asdasd

    </div>
}

export default About