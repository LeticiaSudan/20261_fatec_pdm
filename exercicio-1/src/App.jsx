import Cartao from "./Cartao"
import Comentario from "./Comentario"
import Feedback from "./Feedback"

function App() {
  const textoOK = "Aprovar"
      const textoNOK = "Não Aprovar"
      const funcaoOK = () => alert("Comentário Aprovado")
      const funcaoNOK = () => alert("Comentário Reprovado")
      const componenteFeedback = (
          <Feedback 
          textoOK={textoOK} 
          textoNOK={textoNOK} 
          funcaoOK={funcaoOK} 
          funcaoNOK={funcaoNOK} />
      )

  return (
  <div className="container p-4">
    <div className="row">
      <div className="col-sm-12 col-lg-12 col-xxl-12">
        <div className="Pessoa 1">
          <Cartao>
            <Comentario
              nome="Letícia Sudan Gauy"
              foto="Leticia.jpg"
              data="06/03/2026"
              hora="19:30"
              texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "/>  
          </Cartao>
          {componenteFeedback} 
        </div>
      </div>

      <div className="col-sm-12 col-lg-12 col-xxl-12">
        <div className="Pessoa 2">
          <Cartao>
            <Comentario
              nome="Maria Eduarda da Silva"
              foto="sem-foto.png"
              data="02/03/2026"
              hora="12:30"
              texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "/>  
          </Cartao>
          {componenteFeedback} 
        </div>
      </div>

      <div className="col-sm-12 col-lg-12 col-xxl-12">
        <div className="Pessoa 3">
          <Cartao>
            <Comentario
              nome="Beatriz Soares dos Santos"
              foto="sem-foto.png"
              data="01/03/2026"
              hora="08:37"
              texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "/>  
          </Cartao>
          {componenteFeedback} 
        </div>
      </div>
    </div>
  </div>
  )
}

export default App
