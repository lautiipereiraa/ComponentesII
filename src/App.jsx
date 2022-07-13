import './App.css'
import LogoNav from './components/Header/LogoNav'
import 'bootstrap/dist/css/bootstrap.min.css'
import FormS from './components/Header/search'
import Cards from './components/Header/cards'
import ListaDesordenada from './components/Header/ListaDesordenada'
import ItemListContainer from './components/Header/ItemListContainer'
import ItemCount from './components/Body/ItemCount'
import Header from './components/Body/Header'
import ListCardUser from './components/Header/ListCardUser'


function App() {
   
  const styleApp = { fontFamily: 'Arial'}

  const onAdd = (valor) => {
    alert(`Compraste ${valor} remeras!`);
  }
  


  return (
      
    <div 
      className="App"
      style={styleApp}
    >
      <div> 
      <ItemCount initial={1} stock={10} onAdd={onAdd} /> 
      </div>
      <div style={{fontSize: 40, backgroundColor: 'gray', color : 'white' , marginTop : 0, padding : 0}}>
        <LogoNav />
        <Cards />
        <FormS/>
        <ItemListContainer buscar="Buscar"/>
        <ListaDesordenada/>
      </div>

      

      <div className='Cards-Container' >

      <ListCardUser />

      </div>

      <div className='App'>

          <Header />

        </div>
    </div>

  )
}

export default App