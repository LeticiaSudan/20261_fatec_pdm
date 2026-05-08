//devolver uma lista de JSX do tipo Imagem, usando map para isso
//suponha que ele recebe o photos do App como props
import React from 'react'
import Imagem from './Imagem'

const ListaImagens = ({photos, imgStyle}) => {
  return (
        photos.map((photo, key) => (
          <Imagem
            imgStyle={imgStyle} 
            src={photo.src.small}
            alt={photo.alt}/>
        ))
  )
}

export default ListaImagens