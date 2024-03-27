import Menu from "./components/Menu"
import style from "./Calc.module.css"

export const Calc = () => {

        return(
            <>
                <Menu />
                <div className={style.selectionCalc}>
                    <h1>Cálculos</h1>
                </div>
            </>
            
        )
    }