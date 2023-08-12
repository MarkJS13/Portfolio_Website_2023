import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faMoon, faBolt } from '@fortawesome/free-solid-svg-icons';
import { NavLink, Link } from 'react-router-dom';


const Header = (props) => {

    const changeTheme = () => {
        props.theme ? props.setTheme(false) : props.setTheme(true);
      }

    return(
        <div className='header-container' data-aos="fade-down" data-aos-duration="500">
        <header className={props.theme ? 'header-dark' : ''} >
            <div className="logo">
                <h1> 
                    <Link to="/">  
                        MJS <span> <FontAwesomeIcon icon={faCode} /> </span>
                    </Link>
                </h1>
            </div>



            <nav>
                <li> <NavLink to='/projects'> Projects </NavLink> </li>
                <li> <NavLink to='/about'> About </NavLink> </li>
                <li> <NavLink to='/contact'> Contact </NavLink>  </li>
            </nav>
            <div className='darkIcon' onClick={changeTheme}>  
            {props.theme ? <FontAwesomeIcon icon={faBolt} /> : <FontAwesomeIcon icon={faMoon} />}
              </div>

        </header>
        </div>
    )

}

export default Header;