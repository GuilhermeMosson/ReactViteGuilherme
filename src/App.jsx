import './App.css'
import Card from './components/Card'
import img01 from "../assets/Imgs/foto-1.png"
import img02 from "../assets/Imgs/foto-2.jfif"
import img03 from "../assets/Imgs/foto-3.jpg"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card
      title = 'Foto lua'
      image = {img01}
      text01 = "descrição da paisagem"
      text02 = "Curitiba/PR"
      />
      <Card
      title = 'Foto do Sol'
      image = {img02}
      text01 = "descrição da paisagem"
      text02 = "Curitiba/PR"
      />
      <Card
      title = 'Foto Da Terra'
      image = {img03}
      text01 = "descrição da paisagem"
      text02 = "Curitiba/PR"
      />
    </>
  )
}

export default App
