import React, { useState } from 'react'
import Cartao from './Cartao'

const Formulario = () => {
  
  const [nome, setNome] = useState('')
  const [classe, setClasse] = useState('Guerreiro')
  const [nivel, setNivel] = useState(1)
  
  return (
    <>
    <div className='border border-secondary rounded p-3 text-muted w-75 mx-auto mb-5'>
      <div className="mb-3">
        <label className="mb-3">
          Nome do Personagem
        </label>
        <input
          type="text"
          className="form-control"
          placeholder='Aldric'
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">
          Classe
        </label>
        <select
          className="form-select"
          value={classe}
          onChange={(e) => setClasse(e.target.value)}
        >
          <option>Guerreiro</option>
          <option>Mago</option>
          <option>Arqueiro</option>
          <option>Curandeiro</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">
          Nível
        </label>
        <div className="d-flex align-items-center gap-2">
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => setNivel(Math.max(1, nivel - 1))}
          >
            -
          </button>

          <span className="fs-5 fw-bold px-3">{nivel}</span>

          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => setNivel(Math.min(20, nivel + 1))}
          >
            +
          </button>
        </div>
      </div>
    </div>
      <Cartao nome={nome} classe={classe} nivel={nivel} />
    </>
    
  )
}

export default Formulario