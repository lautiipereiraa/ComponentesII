import Cards from "./cards";
import CartWidget from "./CartWidget";
import ItemListContainer from "./ItemListContainer";
import Search from "./search";

const HeaderPagina = () => {
    return (
        <ul style={{justifyContent: "space-evenly", display:"flex", fontSize: 20 , marginTop: 0, padding : 0}}>
            <li style={{padding: 10}}><a href="#">Inicio</a></li>
            <li style={{padding: 10 }}><a href="#">Nosotros</a></li>
            <li style={{padding : 10}}><a href="https://www.instagram.com/sicko.ind/">Contacto</a></li>

            <CartWidget/>
            <Cards/>
            <Search/>
            <ItemListContainer buscar = 'Buscar'/> 
            
        </ul>
        
    );
        
    }

    export default HeaderPagina;