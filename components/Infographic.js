
import styles from "../styles/Infographic.module.css";

import Image from 'next/image'


const Infographic =()=>{
    return <div className={styles.igfwrapper}>
        <div className={styles.igfcard} >
        <Image  src="/earth-grid.png" alt="Vercel Logo" width={100} height={100} />
<h1>14</h1>
<p>Ulusal ve Uluslararası Şirket</p>
        </div>

        <div className={styles.igfcard} >
        <Image  src="/save-money.png" alt="Vercel Logo" width={100} height={100} />
<h1>5</h1>
<p>Uluslararası Yatırımcı</p>
        </div>

        <div className={styles.igfcard} >
        <Image  src="/building.png" alt="Vercel Logo" width={100} height={100} />
<h1>4</h1>
<p>Merkez Ofis</p>
        </div>

        <div className={styles.igfcard} >
        <Image  src="/service.png" alt="Vercel Logo" width={100} height={100} />
<h1>100+</h1>
<p>Personel</p>
        </div>

    </div>
}

export default Infographic