import CartWidget from "../CartWidget/CartWidget"
import PetShop from '../../assets/PetShop.png'
const NavBar = () => {
    return(
        <nav>
            <div>
                <img src={PetShop} alt="Pet Shop" className="logo"></img>
            </div>
            <div>
                <button>Alimentos</button>
                <button>Snack</button>
                <button>Accesorios</button>
                <button>Higiene</button>
                <button>Salud</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar