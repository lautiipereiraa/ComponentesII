import ImagenLul from '../../images/carrito.png';
import '../Body/Header.css'
const Header = () => {
    return <div className='Header'>
                <h1>Sicko App</h1>
                <img src={ImagenLul} alt="logo" width='200px' />
            </div>
};

export default Header