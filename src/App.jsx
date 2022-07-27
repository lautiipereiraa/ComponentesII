import './App.css'
import LogoNav from './components/Header/LogoNav'
import ListCardUser from './components/Body/ListCardUser'
import ItemDetailConteiner from './components/Body/ItemDetailContainer'
import HeaderPagina from './components/Header/HeaderPagina'
import { BrowserRouter } from 'react-router-dom'
import ImgCarrito from './components/Body/ImagenCarrito'

export function App() {
   
  const styleApp = { fontFamily: 'ubuntu', backgroundColor: 'gray'}

  const onAdd = (valor) => {
    console.log(`Compraste ${valor} remeras!`);
  }
  
  return (
      
    <div 
      className="App"
      style={styleApp}
      //onClick={() => alert('soy el evento de app')}
    >

    {/*<CartContext.Provider value={{}}>*/}
      <BrowserRouter>

        <LogoNav/>

        <HeaderPagina/>      

        <ItemDetailConteiner/>

        <ImgCarrito />

        <ListCardUser />   
       
    </BrowserRouter> 
    </div> 
    

  )
}

export default App
