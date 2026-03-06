//rafce = react arrow function component export
import React from 'react'
//props = mecanimso do react que permite que valores sejam passados
const Pedido = ({icone, titulo, descricao}) => {
    return (
        
            <div className="d-flex">
                <div className="d flex align-items-center">
                    <i className={`fa-solid fa-${icone} fa-2x`}></i>
                </div>
                <div className="ms-2 flex-grow-1 border rounded p-2">
                    <h4 className="text-center">{titulo}</h4>
                    <p className="text-center">{descricao}</p>
                </div> 
            </div>
           
    )
}

export default Pedido