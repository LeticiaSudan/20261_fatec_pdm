import React from 'react'

const Cartao = (props) => {
  return (
    <div className="card shadow-lg">
      <div className="card-body pb-0">
       {props.children}
      </div>
    </div>
  )
}

export default Cartao