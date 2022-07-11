const ListaDesordenada = (props) => {
    console.log(props)
    return (
        <ul type= "circle" style={{justifyContent: "space-evenly", display:"flex", fontSize: 20 , marginTop: 0, padding : 0}}>
            <li style={{padding: 10}}><a href="#">Inicio</a></li>
            <li style={{padding: 10 }}><a href="#">Nosotros</a></li>
            <li style={{padding : 10}}><a href="https://www.instagram.com/sicko.ind/">Contacto</a></li>
        </ul>
    );
    }

    export default ListaDesordenada;