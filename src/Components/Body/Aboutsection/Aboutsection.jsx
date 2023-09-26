import React from 'react'
import { bars } from '../../Appconstant'
import Iconbox from '../../Reuseable/Icon/Iconbox'
import Textarrow from '../../Reuseable/Textarrow/Textarrow'
import Profile from "../../../assets/profile.png"
import './Aboutsection.css'
import Bar from './Bar'
function Aboutsection(props) {
  const {fulltext, limit=5} = props
  const barsrow = bars.slice(0, limit).map(bar=>{
    return  <Bar bar={bar} />
  })


  return (
  <div className="aboutsection">

    {fulltext && 
       <>
     <div className="leftp" data-aos='fade-right'>
       <div className="aboutimg">
       <img src={Profile} alt="profile"/>
      </div>
      </div>
        <div className="upperaboutme aboutcont" id='aboutc'>
             <h3>About Me</h3>
             <p>Extremely motivated to constantly develop my skills and grow professionally. I am confident in my ability to come up with new ideas and enhance my ReactJs , ReactNative , Next.js, Redux , TypeScript and JavaScript.</p>
             </div>
           <div>
         
             <div className='works'>
               <img src="https://i.imgur.com/Azabnhm.png" alt=""/>
             </div>
          </div>
          </>
        } 
   {!fulltext &&
     <div className="leftp" data-aos='fade-right'>
      <div className="aboutimg">
      <img src={Profile} alt="profile"/>
      </div>
      </div>}
    <div className="rightpart" data-aos='fade-left'>
        <div className="aboutcont">
         {!fulltext && 
         <> 
         <div>
          <h2>About Me</h2>
          <small className='graytext'>Self Motivated</small>  
          </div>
         
           <div>
           <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ipsa alias nisi repellat quisquam itaque doloribus facere aspernatur? Quo error explicabo recusandae 
             <span className={'fade'}>unde ab doloribus rem a non dicta provident...</span>
           </p>
         <Textarrow link='/aboutme'/>
         </div> 
         </>
          }
        <div className="bars">
         <h3>
           <span>
            My Skills
           </span>
           <Iconbox icon='fal fa-paint-brush' />  
         </h3>  
          {barsrow}
        </div>
        </div>
     
    </div>

  </div>
  )
}

export default Aboutsection