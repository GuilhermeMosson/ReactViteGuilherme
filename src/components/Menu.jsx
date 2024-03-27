import style from './menu.module.css'
export default function Menu(){
    return(
        <div className={style.wrapMenu}>
            <p>
                <a href="/">Cards</a>
            </p>
            <p>
                <a href="/Contact">Contato</a>
            </p>
        </div>

    )
}