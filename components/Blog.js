import styles from "../styles/Blog.module.css"
import Image from "next/image"
import Link from "next/link"

const Blog =()=>{

    return(<div>
        <div className={styles.blogwrapper}>
<div className={styles.bloghead}>
    <h2>Latest Posts</h2>
</div>
<div className={styles.bloglist}>

<Link href="/posts/1">
<article>
<div className={styles.articletop}>
<Image  src="/blog1.jpg" alt="Vercel Logo" width={355} height={250} />
</div>
<div className={styles.articlebottom}>
<h3><Link href="/posts/1">Customer Loyalty Programs That Stick </Link></h3>
<p>A story about customer loyalty curabitur sed consectetur nisi. Integer sit amet commodo massa.</p>
<footer>January 03, 2021, by Jane Doe</footer>
</div>
</article>
</Link>

<Link href="/posts/2">
<article>
<div className={styles.articletop}>
<Image  src="/blog2.jpg" alt="Vercel Logo" width={355} height={250} />
</div>
<div className={styles.articlebottom}>
<h3>Customer Loyalty Programs That Stick </h3>
<p>A story about customer loyalty curabitur sed consectetur nisi. Integer sit amet commodo massa.</p>
<footer>January 03, 2021, by Jane Doe</footer>
</div>
</article>
</Link>

<Link href="/posts/3">
<article>
<div className={styles.articletop}>
<Image  src="/blog3.jpg" alt="Vercel Logo" width={355} height={250} />
</div>
<div className={styles.articlebottom}>
<h3>Customer Loyalty Programs That Stick</h3>
<p>A story about customer loyalty curabitur sed consectetur nisi. Integer sit amet commodo massa.</p>
<footer>January 03, 2021, by Jane Doe</footer>
</div>
</article>
</Link>


</div>

        </div>        
        
        </div>)
}

export default Blog