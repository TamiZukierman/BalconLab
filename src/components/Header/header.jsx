import { Navbar } from "../navBar"


export const Header = () => {
    return (
        <header className="header">
        <div className="header-content"> {/* Contenedor para el logo y el h1 */}
            <div className="logo">
                <img src="../imagenes/rollo.jpg" alt="imgLogo" />
            </div>
            <h1>balcón</h1>
        </div>
        <Navbar />
    </header>
    )
}