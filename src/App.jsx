import './App.css'
import SelectDay from './components/SelectDay'
import ButtonInserir from './components/ButtonInserir'
import ButtonsDays from './components/ButtonDays'

function App() {


  return (
    <div className="App">
      <h1 id='cabecalho'> Insira sua agenda </h1>
      <div className='container'>


        <div className='selecionarD'>
          <SelectDay />
          <ButtonInserir />


        </div>
        <div className='mostrarD'>
          <ButtonsDays />
        </div>



      </div>
    </div>
  )
}

export default App
