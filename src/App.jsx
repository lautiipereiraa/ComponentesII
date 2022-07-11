import './App.css'
import LogoNav from './components/LogoNav'
import 'bootstrap/dist/css/bootstrap.min.css'
import FormS from './components/search'
import Cards from './components/cards'
import ListaDesordenada from './components/ListaDesordenada'
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount'


function App() {
   
  const styleApp = { fontFamily: 'Arial'}

  const onAdd = (valor) => {
    console.log(`Compraste ${valor} remeras!`);
  }
  


  return (
      
    <div 
      className="App"
      style={styleApp}
    >
    
      <div style={{fontSize: 40, backgroundColor: 'gray', color : 'white' , marginTop : 0, padding : 0}}>
        
        <LogoNav />

        <Cards />
        <FormS/>
        <ItemListContainer buscar="Buscar"/>
        
        <ListaDesordenada/>
        
      </div>
      
      <div>
      <ItemCount initial={1} stock={10} onAdd={onAdd} />
      </div>
    </div>
  )
}

export default App