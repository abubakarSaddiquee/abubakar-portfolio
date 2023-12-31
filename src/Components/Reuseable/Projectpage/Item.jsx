import React from 'react'

function Item(props) {
  const {title, text} = props
  return (
    <div className="item">
      <small className="graytext">
        {title}
      </small>
      <span>
      {
     (text.constructor === Array)? 
      text.map(txt=>{
        return <span className='color' title={txt} style={{backgroundColor: txt}}></span>
      })
      :
      <span>{text}</span>
      }
      </span>
    </div>
  )
}
export default Item