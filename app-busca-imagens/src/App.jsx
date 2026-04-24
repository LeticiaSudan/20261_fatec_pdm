import React from 'react'
import Busca from './Busca'
import ListaImagens from './ListaImagens'
import PexelsLogo from './PexelsLogo'
import { createClient } from 'pexels';
export default class App extends React.Component {

  state = {
    photos: []
  }

  pexelsClient = null

  componentDidMount(){
    this.pexelsClient = createClient('70tZcmtGAnNLCTwcsvSpyhQnMRa8J78F0NQGy6phJa99oiYvKNtzshMx')
  }

  onBuscaRealizada = (termoDeBusca) => {
    this.pexelsClient.photos.search({ 
      query: termoDeBusca
    })
    .then(result => {
      this.setState({ photos: result.photos })
    })
  }
  render(){
    return(
      <div className="grid justify-content-center m-auto w-9 border-round border-1 border-400">
        <div className="col-12">
          <PexelsLogo />
            <h1>Exibir imagens de...</h1>
          </div>
          <div className="col-12">
            <Busca 
              onBuscaRealizada={this.onBuscaRealizada} />
          </div>
          <div className='col-12'>
            <ListaImagens
              photos={this.state.photos}
            />
          </div>
        </div>
      )
    }
  }
