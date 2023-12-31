import React from 'react'
import { socialicons } from '../../Appconstant'
import Icon from '../../Reuseable/Icon/Icon'
import Mappedarray from '../Mappedarray/Mappedarray'

function Socialicontab(){

  const socialiconsrow = <Mappedarray array={socialicons}>
     {({prop})=>(
     <a href={prop.link} target='__blank'>
        <Icon icon={prop.icon+' socialicon'}/>
     </a>
    )}
  </Mappedarray>

  return <div className="socialicontab">
    {socialiconsrow}
  </div>
}
export default Socialicontab