import CartWidget from "./CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";


export const Navbar = () =>{
    return (
    <nav>
        
            <Link className="li" to="/">inicio</Link>
            <div className="Categories">
            <NavLink to={"/category/rollitos"} className="li">rollitos</NavLink>
            <NavLink to = {"/category/camaras"}className="li">camaras</NavLink>
            </div>
            <CartWidget />
        
    </nav>
    );
}