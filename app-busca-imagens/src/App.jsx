import React from 'react'
import Busca from './Busca'
import PexelsLogo from './PexelsLogo'
import pexelsClient from './utils/pexelsClient'
import ListaImagens from './ListaImagens'
export default class App extends React.Component{

  state = {
    photos: []
  }

  onBuscaRealizada = (termoDeBusca) => {
    pexelsClient.get('/search', {
      params: {query: termoDeBusca}
    })
    .then(result => this.setState({photos: result.data.photos}))
  }

  //pexelsClient = null
  
  // onBuscaRealizada = (termoDeBusca) => {
  //   this.pexelsClient.photos.search({
  //     query: termoDeBusca
  //   })
  //   .then(result => {
  //     this.setState({photos: result.photos})  
  //   })
  // }
  // componentDidMount(){
  //   this.pexelsClient = createClient('')
  // }

  render(){
    return (
      <div className="grid justify-content-center m-auto w-9 border-round border-1 border-400">
        <div className="col-12">
          <PexelsLogo />
        </div>
        <div className="col-12">
          <h1>Exibir imagens de...</h1>
        </div>
        <div className="col-12">
          <Busca 
            onBuscaRealizada={this.onBuscaRealizada}/>
        </div>
        <div className="col-12">
          <div className="grid">
            <ListaImagens 
              photos={this.state.photos}
              imgStyle={"col-12 md:col-6 lg:col-4 xl:col-3"}/>
          </div>
        </div>
      </div>
    )
  }
}
