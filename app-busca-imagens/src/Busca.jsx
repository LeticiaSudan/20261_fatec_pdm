import React, { Component } from 'react'
import { IconField } from 'primereact/iconfield'; 
import { InputIcon } from 'primereact/inputicon'; 
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export default class Busca extends Component {
    state = {
        termoDeBusca: ''
    }
    onTermoAlterado = (evento) => {
        this.setState({ termoDeBusca: evento.target.value })
    }

    onFormSubmit = (evento) => {
        evento.preventDefault()
        this.props.onBuscaRealizada(this.state.termoDeBusca)
    }

  render() {
    return (
        <form onSubmit={this.onFormSubmit}>
      <div className="flex flex-column">
        <IconField iconPosition="left">
          <InputIcon className="pi pi-search" />
          <InputText 
            placeholder="O que deseja ver...?"
            value ={this.state.termoDeBusca}
            className='w-full'
            onChange={this.onTermoAlterado} />
        </IconField>
        
        <Button label="Pesquisar" className="p-button-outlined p-button-secondary" />
        </div>
      </form>
    )
  }
}