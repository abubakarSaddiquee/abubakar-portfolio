import React from 'react'
import './Banner.css'
import Socialicontab from './Socialicontab'
function Banner(props) {
  const { html, style, height='50vh', className=''} = props
  return <div className={`bannercont ${className}`} style={{height: height??''}}>
      <div className="banner" style={style}></div>
      <Socialicontab />
      {html}
  </div>
}
export default Banner