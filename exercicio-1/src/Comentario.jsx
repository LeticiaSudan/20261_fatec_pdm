import React from 'react'

const Comentario = ({nome, foto, data, hora, texto}) => {
  return (
    <div className="d-flex">
                <div className="d flex align-items-center">
                    <img src={foto} alt="Foto" width={120} height={150}/>
                </div>
                <div className="ms-2 flex-grow-1 p-2">
                    <h4 className="text-align-justify border-bottom border-2">{nome}</h4>
                    <p className="text-align-justify mb-1">{texto}</p>
                    <h6 className="text-align-left text-muted mb-0">{data}</h6>
                    <h6 className="text-align-left text-muted mb-0">{hora}</h6>
                </div>
            </div>
           
  )
}

export default Comentario