import React,{useState} from 'react'
import classes from "./MainForm.module.css"
function MainForm() {
    const [buttonCLicked, setbuttonCLicked] = useState(false)
const [Enableform, setEnableform] = useState(false);
const [EnableForm1, setEnableForm1] = useState(false)
const [EnableForm2, setEnableForm2] = useState(false)
console.log(Enableform)
return (
    <div className={classes.mainForm}>
       {!buttonCLicked &&
         <div className={classes.container}>
         <div className={classes.heading}>
             NEW MEDICARE BENEFITS UPDATE
             </div>
             <div>
             Americans Ages 65+ In Rajasthan Have 10 days to claim additional benefits & get up to $240 monthly in OTC benefits
             </div>
             <div>
             Thanks to a new Medicare Advantage package, Americans age 65+ could get $148.50* monthly added to their social security check with No-Cost Vision & Dental Benefits.
             </div>
          <button className={classes.btn} onClick={(e)=>setbuttonCLicked(!e.target.value)}>See If You Qualify</button>                
 
         </div>
       }
       {
        buttonCLicked && <div>
            <div className={classes.sub}>You May Be Eligible For A New US Solar Program.</div>
<div className={classes.completion}></div>
        </div>

       }
{buttonCLicked && !Enableform &&
<div>

<div className={classes.form1}>
    <div>What is your average monthly electric bill?</div>
    {/* Make all input as radio  */}
    <input type="radio" id="html" name="fav_language" value="HTML" onClick={(e)=>setEnableform(!Enableform)}/>
    <input type="radio" id="html" name="fav_language" value="HTML" onClick={(e)=>setEnableform(!Enableform)}/>
    <input type="radio" id="html" name="fav_language" value="HTML" onClick={(e)=>setEnableform(!Enableform)}/>
     </div>
     </div>
     }
{Enableform && !EnableForm1 &&
<div>
    <div>How much shade does your home have?</div>
<div className={classes.icon}>
    <div className={classes.subicon}  onClick={(e)=>setEnableForm1(!EnableForm1)}></div>
    <div className={classes.subicon}  onClick={(e)=>setEnableForm1(!EnableForm1)}></div>
    <div className={classes.subicon}  onClick={(e)=>setEnableForm1(!EnableForm1)}></div>
</div>
</div>
}
{
    EnableForm1 && !EnableForm2 &&
    <div className={classes.enableForm2}>
        <input type="text"  onClick={(e)=>setEnableForm2(!EnableForm2)}/>
        <input type="text"  onClick={(e)=>setEnableForm2(!EnableForm2)}/>
        </div>
}
</div>



    // </div>
  )
}

export default MainForm