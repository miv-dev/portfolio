import IonIcon from "@reacticons/ionicons";
import "./styles.css";

type NavbarProps = {
    active: boolean
}

const Navbar = ({active}: NavbarProps) =>{

    
    return (
        <nav className={`nav ${active ? "active" : "inactive"}`}>
            <ul className="nav__menu ">
                <li className="nav__item">
                    <button className="nav__link">
                        About
                    </button>
                </li>
                <li className="nav__item">
                    <button className="nav__link">
                        Projects
                    </button>
                </li>
                <li className="nav__item">
                    <button className="nav__link">
                        Skills
                    </button>
                </li>
                <li className="nav__item">
                    <button className="nav__link">
                        Contact
                    </button>
                </li>
            </ul>
            <button className="nav__btn btn btn--scroll-down">
                <IonIcon name="chevron-down"/>
            </button>
        </nav>
    )
}


export default Navbar