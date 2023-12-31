import React from 'react'
import './Icon.css'
import './Socialicon.css'


function Icon(props) {
  const {icon, clickEvent} = props

  return (
    <i className={icon +' icon'} onClick={()=>clickEvent && clickEvent()}></i>
  )
}
export default Icon