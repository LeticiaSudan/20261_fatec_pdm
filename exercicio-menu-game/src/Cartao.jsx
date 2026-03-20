import React from 'react'

const Cartao = ({ nome, classe, nivel }) => {

  const classesConfig = {
    Guerreiro: { 
        icone: 'fa-solid fa-khanda', 
        cor: 'red' 
    },
    Mago: { 
        icone: 'fa-solid fa-hat-wizard', 
        cor: 'purple' 
    },
    Arqueiro: { 
        icone: 'fa-solid fa-bullseye', 
        cor: 'green' 
    },
    Curandeiro: { icone: 'fa-solid fa-flask', 
        cor: 'blue' 
    }
  }

  const porcentagem = (nivel / 20) * 100

  return (
    <div className="card mt-3" style={{ border: `2px solid ${classesConfig[classe].cor}`, marginBottom: '5%', width: '50%', margin: '0 auto' }}>
      <div className="card-body text-center">
        <i
          className={`fas ${classesConfig[classe].icone} fa-4x mb-3`}
          style={{ color: classesConfig[classe].cor }}
        ></i>

        <h3>{nome || 'Sem nome'}</h3>
        <p className="text-muted">{classe}</p>
        <p>Nível {nivel}</p>

        <div className="progress" style={{ height: '20px' }}>
          <div
            className="progress-bar"
            style={{
              width: `${porcentagem}%`,
              backgroundColor: classesConfig[classe].cor
            }}
          >
            {Math.round(porcentagem)}%
          </div>
        </div>

        <small className="text-muted">
          {nivel} / 20
        </small>
      </div>
    </div>
  )
}
export default Cartao