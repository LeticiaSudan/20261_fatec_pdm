import Pedido from "./Pedido"
import Cartao from "./Cartao"
import Feedback from "./Feedback"

const App = () => {
    const textoOK = "Já recebi"
    const textoNOK = "Ainda não recebi"
    const funcaoOK = () => alert("Que bom que você já recebeu seu pedido!")
    const funcaoNOK = () => alert("Que pena que você ainda não recebeu seu pedido!")
    const componenteFeedback = (
        <Feedback 
        textoOK={textoOK} 
        textoNOK={textoNOK} 
        funcaoOK={funcaoOK} 
        funcaoNOK={funcaoNOK} />
    )

    return <div className="container border mt-2">

            <div className="row">
                <div className="col-12">
                    <i className="fa fa-solid fa-dog"></i>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-12 col-lg-6 col-xxl-3">
                    <Cartao cabecalho="Pedido 1">
                        <Pedido
                            data="15/06/2025"
                            icone="alarm-clock"
                            titulo="Despertador"
                            descricao="Despertador analógico" />
                        {componenteFeedback}
                    </Cartao>
                </div>
                <div className="col-sm-12 col-lg-6 col-xxl-3">
                    <Cartao cabecalho="Pedido 2">
                        <Pedido
                            data="17/06/2025"
                            icone="shirt"
                            titulo="Camisa"
                            descricao="Uma camisa preta" />
                        {componenteFeedback}
                    </Cartao>
                </div>
                <div className="col-sm-12 col-lg-6 col-xxl-3">
                    <Cartao cabecalho="Pedido 3">
                        <Pedido
                            data="14/04/2025"
                            icone="bowling-ball"
                            titulo="Bola de Boliche"
                            descricao="Uma bola de boliche" />
                        {componenteFeedback}
                    </Cartao>
                </div>
                <div className="col-sm-12 col-lg-6 col-xxl-3">
                    <Cartao cabecalho="Pedido 4">
                        <Pedido
                            data="17/06/2025"
                            icone="bicycle"
                            titulo="Bicicleta"
                            descricao="Bicicleta 18 marchas" />
                        {componenteFeedback}
                    </Cartao>
                </div>
            </div>
        </div>
}

export default App