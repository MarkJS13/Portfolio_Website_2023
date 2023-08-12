import { NavLink } from "react-router-dom";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHouse, faListCheck , faCircleInfo, faIdCard } from "@fortawesome/free-solid-svg-icons";

const Menu = () => {
    return (
        <div className="menu-container">
            <div className="menu-bar">
                <li><NavLink to='/'> <FontAwesomeIcon icon={faHouse} /> </NavLink></li>
                <li><NavLink to='/projects'> <FontAwesomeIcon icon={faListCheck} />  </NavLink> </li>
                <li><NavLink to='/about'> <FontAwesomeIcon icon={faCircleInfo} /> </NavLink></li>
                <li><NavLink to='/contact'> <FontAwesomeIcon icon={faIdCard} /> </NavLink></li>          
            </div>
        </div>
    )
}

export default Menu;