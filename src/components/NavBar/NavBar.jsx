import CartWidget from "./CartWidget/CartWidget"
import PetShop from '../../assets/PetShop.png'
import {Link}  from 'react-router-dom'

const NavBar = () => {
    return(
        <nav>
            <div>
                <Link to='/' >
                    <img src={PetShop} alt="Pet Shop" className="logo"></img>
                </Link>    
            </div>
            <div>          
                <Link to='/Alimentos' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} >
                    <button>Alimentos</button>
                </Link>  
                <Link to='/Snack'  className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>
                    <button>Snack</button>
                </Link>       
                <Link to='/Accesorios' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>
                <button>Accesorios</button>
                </Link>                   
                <Link to='/Higiene'  className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>
                    <button>Higiene</button>
                </Link>                   
                <Link to='/Salud'  className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>
                    <button>Salud</button>
                </Link>                                              
            </div>
            <CartWidget/>            
        </nav>
    )
}

export default NavBar