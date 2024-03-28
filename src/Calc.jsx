import Menu from "./components/Menu"
import style from "./Calc.module.css"
import { useState, useEffect } from "react"

export const Calc = () => {
    const [numero1, setNumero1] = useState()
    const [numero2, setNumero2] = useState()
    const [respSoma, setRespSoma] = useState()
    const [respSub, setRespSub] = useState()
    const [respMult, setRespMult] = useState()
    const [respDiv, setRespDiv] = useState()

    useEffect(() => {
        if(numero1 !== undefined && numero2 !== undefined){
            setRespSoma(parseFloat(numero1) + parseFloat(numero2))
            setRespSub(parseFloat(numero1) - parseFloat(numero2))
            setRespMult(parseFloat(numero1) * parseFloat(numero2))
            setRespDiv(parseFloat(numero1) / parseFloat(numero2))
         
        } [numero1,numero2]})
    

    //const handleSoma = () => setRespSoma(parseFloat(numero1) + parseFloat(numero2))
    //const handleSub = () => setRespSub(parseFloat(numero1) - parseFloat(numero2))
    //const handleMult = () => setRespMult(parseFloat(numero1) * parseFloat(numero2))
    //const handleDiv = () => setRespDiv(parseFloat(numero1) / parseFloat(numero2))

    const msgErro = "Digite um número válido"

        return(
            <>
                <Menu />
                <div className={style.selectionCalc}>
                    <h1>Cálculos</h1>
                    <div>
                        <label htmlFor="n1">Número 1:</label>
                        <input type="text" id="n1" value={numero1} onChange={(e) => setNumero1(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="n2">Número 2:</label>
                        <input type="text" id="n2" value={numero2} onChange={(e) => setNumero2(e.target.value)} />
                    </div>
                    <div>
                        <div>
                            <h1>Soma</h1>
                            {!isNaN(respSoma) ? respSoma : msgErro}
                            <button onClick={handleSoma}>SOMAR</button>
                        </div>
                        <div>
                            <h1>Subtração</h1>
                            {!isNaN(respSub) ? respSub : msgErro}
                            <button onClick={handleSub}>SUBTRAIR</button>
                        </div>
                        <div>
                            <h1>Multiplicação</h1>
                            {!isNaN(respMult) ? respMult : msgErro}
                            <button onClick={handleMult}>MULTIPLICAR</button>
                        </div>
                        <div>
                            <h1>Divisão</h1>
                            {!isNaN(respDiv) ? respDiv.toFixed(2) : msgErro}
                            <button onClick={handleDiv}>DIVIDIR</button>
                        </div>
                    </div>
                </div>
            </>
            
        )
    }