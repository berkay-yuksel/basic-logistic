import styles from '../styles/Questions.module.css'
import Image from 'next/image'
import {useState} from "react"


const Questions = ()=> {

  const [A, setA] = useState(0);
  const [B, setB] = useState(0);

    return (
        <div className={styles.faqwrapper}>

        <div className={styles.faqhead}>
    <h2>Frequently Asked Questions</h2>
    <p >Phasellus luctus laoreet arcu, vel porta metus imperdiet sit amet.</p>

<div className={styles.faqaccordeon}>
<ul>
<li>
  <div>
<button className="header1"  onClick={()=>{setA(0);setB(0)}} >Mauris ut tellus id arcu sagittis lacinia quis vel justo?</button>
<div className="button1" ><p>Mauris ut tellus id arcu sagittis lacinia quis vel justo</p></div>
  </div>
</li>

<li>
  <div>
<button className="header2" onClick={()=>{setA(1);setB(0)}} >Aliquam eget purus ante?</button>
<div  className="button2"><p>Aliquam eget purus ante</p></div>
  </div>
</li>

<li>
  <div>
<button className="header3" onClick={()=>{setA(0);setB(1)}}  >Sed scelerisque in ipsum eu sollicitudin?</button>
<div  className="button3"><p>Sed scelerisque in ipsum eu sollicitudin</p></div>
  </div>
</li>

<li>
  <div>
<button className="header4" onClick={()=>{setA(1);setB(1)}}  >Lorem ipsum dolor sit amet asdas aşlsdkaşsd aşlsdkaşsd?</button>
<div className="button4"><p>Lorem ipsum dolor sit amet asdas aşlsdkaşsd aşlsdkaşsd</p></div>
  </div>
</li>

</ul>
</div>


    </div>
    
    <style jsx>
{
    `
  .button1{
    max-height:${A || B ? '0px' : '100%'};
    overflow:hidden;
  }
  .header1{
    color:${A || B ? 'black' : '#007CE3'};
  }
  .button2{
    max-height:${!A || B ? '0px' : '100%'};
   
    overflow:hidden;
  }
  .header2{
    color:${!A || B ? 'black' : '#007CE3'};
  }

  .button3{
    max-height:${A || !B ? '0px' : '100%'};
    color:${A || !B ? 'black' : '#007CE3'};
    overflow:hidden;
  }
.header3{
  color:${A || !B ? 'black' : '#007CE3'};
}
  .button4{
    max-height:${!A || !B ? '0px' : '100%'};
    color:${!A || !B ? 'black' : '#007CE3'};
    overflow:hidden;
 
  }
  .header4{
    color:${!A || !B ? 'black' : '#0072ff'};
  }



     


    `
    
}

    </style>


    </div>
    
    );
}

export default Questions