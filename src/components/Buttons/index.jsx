import React from 'react'

function Button({text,color=''}) {
  return (
   <a className={`btn ${color}`}>{text}</a>
  )
}

export default Button