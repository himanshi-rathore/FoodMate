import React from 'react'

function NextArrow(props) {
    const { className, style, onClick } = props;
  return (
    <div
      className={className}   //{ classname, style, onClick} are all from react library
      style={{ ...style, backgroundColor:" rgb(207 , 207, 207)", borderRadius: "50%", display:"flex", justifyContent:"center", alignItems:"center", padding:"4px"}}
      onClick={onClick}
    >
      
    </div>
  )
}

export default NextArrow
