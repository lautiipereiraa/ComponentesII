import CarritoPNG from '../../images/carrito.png';

const CartWidget = () => { 
  return(
      <div style = {{display:'flex', justifyContent : 'right'}}>

          <a href="#"> <img src= {CarritoPNG} alt="" style={{widht: 50 , height : 50}}/> </a>

      </div>
  )
}
export default CartWidget