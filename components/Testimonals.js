import styles from "../styles/Testimonals.module.css";

import Image from 'next/image'

const Testimonals =()=>{
    return <div className={styles.featureswrapper}>
<div className={styles.testimonalshead}>
<h2>Testimonals</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a metus quis lorem malesuada luctus.</p>
</div>

<div className={styles.cards}>
<div className={styles.card}>
<div className={styles.info}>
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a metus quis lorem malesuada luctus.
</p>
</div>
<div className={styles.review}>
<Image  src="/writer1.jpg" alt="Vercel Logo" width={500} height={500} />
<cite >Eric Widget</cite>
</div>
</div>


<div className={styles.card}>
<div className={styles.info}>
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a metus quis lorem malesuada luctus.
</p>
</div>
<div className={styles.review}>
<Image  src="/writer2.jpg" alt="Vercel Logo" width={500} height={500} />
<cite >Eric Widget</cite>
</div>
</div>


<div className={styles.card}>
<div className={styles.info}>
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a metus quis lorem malesuada luctus.
</p>
</div>
<div className={styles.review}>
<Image  src="/writer3.jpg" alt="Vercel Logo" width={500} height={500} />
<cite >Eric Widget</cite>
</div>
</div>



</div>



    </div>
}


export default Testimonals