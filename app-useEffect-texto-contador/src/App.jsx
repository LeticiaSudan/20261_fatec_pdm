import {useEffect, useState} from 'react'

const App = () => {
  const [texto, setTexto] = useState('')
  const [contador, setContador] = useState(0)

  //nesse app ela carrega toda vez
  useEffect(() => {
    console.log('Função de efeito colateral executou sem vetor')
  })

  //nesse app só carrega da primeira vez e depois nunca mais, pois não tem nenhuma variável de dependência
  useEffect(() => {
    console.log('Função de efeito colateral executou com vetor vazio')
  }, [])

  //só executa quando o valor de texto for alterado
  useEffect(() => {
    console.log('Função de efeito colateral executou. Dependência: texto.')
  }, [texto])

  //só executa quando o valor de contador for alterado
   useEffect(() => {
    console.log('Função de efeito colateral executou. Dependência: contador.')
  }, [contador])

  return (
    <div style={{padding: 20, borderColor: 'black', borderWidth: 1, borderStyle: 'solid', borderRadius: 8}}>
      <h2>Efeitos Colaterais</h2>
      <div>
        <input 
          type="text" 
          placeholder="Digite algo"
          value={texto} //componente controlado
          onChange={(e) => setTexto(e.target.value)}
          style={{padding: 8}} />
      </div>
      <div>
        <button onClick={() => setContador(contador + 1)}>
          Contador: {contador}
        </button>
      </div>
    </div>
  )
}

export default App