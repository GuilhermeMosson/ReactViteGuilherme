import style from './App.module.css'
import Card from './components/Card'
import img01 from "./assets/Imgs/foto-1.png"
import img02 from "./assets/Imgs/foto-2.jfif"
import img03 from "./assets/Imgs/foto-3.jpg"
import { Tilt } from 'react-tilt'
import Menu from  "./components/Menu"

function App() {

  const defaultOptions = {
    reverse:        true,  // reverse the tilt direction
    max:            35,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          1000,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }

  return (
    <>
    <Menu />
      <div className={style.section01}>
      <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
      <Card
        title = 'Foto lua'
        image = {img01}
        text1 = "descrição da paisagem"
        text2 = "Curitiba/PR"
        />
      </Tilt>
        
      <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
      <Card
        title = 'Foto Da Terra'
        image = {img03}
        text1 = "descrição da paisagem"
        text2 = "Curitiba/PR"
        />
      </Tilt>

      <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
      <Card
        title = 'Foto do Sol'
        image = {img02}
        text1 = "Casa de Rá DEUS SOL"
        text2 = "Curitiba/PR"
        />
      </Tilt>

      <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
      <Card
        title = 'Foto do Sol'
        image = {img02}
        text1 = "Casa de Rá DEUS SOL"
        text2 = "Curitiba/PR"
        />
      </Tilt>

      <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
      <Card
        title = 'Foto do Sol'
        image = {img02}
        text1 = "Casa de Rá DEUS SOL"
        text2 = "Curitiba/PR"
        />
      </Tilt>

      <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
      <Card
        title = 'Foto do Sol'
        image = {img02}
        text1 = "Casa de Rá DEUS SOL"
        text2 = "Curitiba/PR"
        />
      </Tilt>

      <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
      <Card
        title = 'Foto do Sol'
        image = {img02}
        text1 = "Casa de Rá DEUS SOL"
        text2 = "Curitiba/PR"
        />
      </Tilt>

      <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
      <Card
        title = 'Foto do Sol'
        image = {img02}
        text1 = "Casa de Rá DEUS SOL"
        text2 = "Curitiba/PR"
        />
      </Tilt>

      <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
      <Card
        title = 'Foto do Sol'
        image = {img02}
        text1 = "Casa de Rá DEUS SOL"
        text2 = "Curitiba/PR"
        />
      </Tilt>

      <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
      <Card
        title = 'Foto do Sol'
        image = {img02}
        text1 = "Casa de Rá DEUS SOL"
        text2 = "Curitiba/PR"
        />
      </Tilt>

      <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
      <Card
        title = 'Foto do Sol'
        image = {img02}
        text1 = "Casa de Rá DEUS SOL"
        text2 = "Curitiba/PR"
        />
      </Tilt>
      </div>
    </>
  )
}

export default App
