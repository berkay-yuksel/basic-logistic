import styles from '../styles/Layout.module.css'
import {useEffect} from 'react'
const Gallery =()=>{


    useEffect(() => {
        document.getElementById("gallery").className = "active";
        document.getElementById("about").classList.remove("active");
        document.getElementById("services").classList.remove("active");
        document.getElementById("contact").classList.remove("active");
        
    }, [])

    return <div className={styles.layy}>
        GalleryGalleryGalleryGallery
    </div>
}

export default Gallery