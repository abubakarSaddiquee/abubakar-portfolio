import React from 'react'
import Iconbox from '../../Reuseable/Icon/Iconbox'

function Bar(props) {
  const { percent, skill, icon} = props.bar
  return (
  <div className="bar">
      <strong className='flexrow'>
        
        <span>
       {skill}
       </span>
       <Iconbox icon={icon} />
      </strong>
      <div className="track">
        <div className="percentage" style={{width: percent+'%'}}>
        <span>{percent+'%'}</span>
        </div>
      </div>
  </div>
  )
}
export default Bar