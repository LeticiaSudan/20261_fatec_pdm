// rafce
import EstacaoClimatica from './EstacaoClimatica'
import React, { useEffect, useState } from 'react'
import Loading from './Loading'

const App = () => {
  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)
  const [estacao, setEstacao] = useState(null)
  const [data, setData] = useState(null)
  const [icone, setIcone] = useState(null)
  const [mensagemDeErro, setMensagemDeErro] = useState(null)

   const icones = {
    'Primavera': 'cloud-sun',
    'Verão': 'sun',
    'Outono': 'leaf',
    'Inverno': 'snowflake'
  }

  const obterEstacao = (dataAtual, latitude) => {
    const ano = dataAtual.getFullYear()
    const d1 = new Date(ano, 5, 21)
    const d2 = new Date(ano, 8, 23)
    const d3 = new Date(ano, 11, 22)
    const d4 = new Date(ano, 2, 21)
    const estaNoSul = latitude < 0
    if(dataAtual >= d1 && dataAtual < d2)
      return estaNoSul ? 'Inverno' : 'Verão'
    if(dataAtual >= d2 && dataAtual < d3)
      return estaNoSul ? 'Primavera' : 'Outono'
    if(dataAtual >= d3 || dataAtual < d4)
      return estaNoSul ? 'Verão' : 'Inverno'
    return estaNoSul ? 'Outono' : 'Primavera'
  }

  const obterLocalizacao = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const dataAtual = new Date()
        const estacao = obterEstacao(dataAtual, position.coords.latitude)
        const icone = icones[estacao]
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
        setEstacao(estacao)
        setIcone(icone)
        setData(dataAtual.toLocaleTimeString())
      }, 
      (err) => {
        console.log(err)
        setMensagemDeErro('É preciso liberar o acesso à localização para usar o aplicativo.')
      }
    )
  }

  useEffect(() => {
    console.log('useEffect executou...')
    obterLocalizacao()
  }, [])
  console.log('renderizou...')

  return (
    <div className='container mt-2'>
      <div className="row justify-content-center">
        <div className="col-12">
          {/* .card>.card-body */}
          {
            (!latitude && !mensagemDeErro) ?
            <Loading /> :
            mensagemDeErro ?
              mensagemDeErro
          :
          <EstacaoClimatica 
            latitude={latitude}
            longitude={longitude}
            estacao={estacao}
            data={data}
            icone={icone}
            mensagemDeErro={mensagemDeErro}
          />
          }
        </div>
      </div>
    </div>
  )
}

export default App