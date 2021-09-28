import styles from "../styles/Action.module.css";

import Link from "next/link"


const Action =()=>{
    return <div className={styles.actionwrapper}>
        <div className={styles.actioninfo}><h2>This Is Call To Action Block!</h2>
        <p>This is an optional description for the call to action block.</p>
        </div>
       <button><Link href="/">Get Started</Link> </button>


    </div>
}

export default Action