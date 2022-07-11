
import Lupa from '../images/lupa.png';

const Cards = () => { //componente 1
  return(
      <div style={{display: 'flex' , justifyContent: 'right'}}>
          <a href="#"> <img src= {Lupa} alt="" style={{widht : 30 , height : 30, marginRight:10}}/></a>
          <p style={{color: 'black', fontSize: 20, marginRight:10}}>Buscador</p>
      </div>
  )
}
export default Cards