import styles from "../styles/Features.module.css";

import Image from 'next/image'
import Link from "next/link"

const Features =()=>{

return <div className={styles.featureswrapper}>
<div className={styles.featureshead}>
<h2>Features</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a metus quis lorem malesuada luctus.</p>
</div>
<div className={styles.featuresbody}>

<div className={styles.featuresbanner}>
<div className={styles.featurespic}>
<Image  src="/feature1.svg" alt="Vercel Logo" width={500} height={500} />
</div>
<div className={styles.featuresinfo}>
<h1 className={styles.featurestitle}>
    Welcome to <a href="https://nextjs.org">Next.js!</a>
  </h1>

  <p className={styles.featuresdescription}>
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
  </p> 
  <button className={styles.featuresherobutton}><Link href="/">Hemen Arayın</Link></button>
</div>
</div>


<div className={styles.featuresbannerreverse}>
<div className={styles.featurespic}>
<Image  src="/feature2.svg" alt="Vercel Logo" width={500} height={500} />
</div>
<div className={styles.featuresinfo}>
<h1 className={styles.featurestitle}>
    Welcome to <a href="https://nextjs.org">Next.js!</a>
  </h1>

  <p className={styles.featuresdescription}>
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
  </p> 
  <button className={styles.featuresherobutton}><Link href="/">Hemen Arayın</Link></button>
</div>
</div>


<div className={styles.featuresbanner}>
<div className={styles.featurespic}>
<Image  src="/feature3.svg" alt="Vercel Logo" width={500} height={500} />
</div>
<div className={styles.featuresinfo}>
<h1 className={styles.featurestitle}>
    Welcome to <a href="https://nextjs.org">Next.js!</a>
  </h1>

  <p className={styles.featuresdescription}>
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
  </p> 
  <button className={styles.featuresherobutton}><Link href="/">Hemen Arayın</Link></button>
</div>
</div>
</div>
</div>
}

export default Features