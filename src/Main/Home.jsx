import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faDownload } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <div className="home" data-aos="zoom-in" data-aos-duration="800">
            <div className="name">
                <h1> Mark Joseph Serrano <span role="img" aria-label="waving-hand">👋</span> </h1>
                 <h2> FRONTEND DEVELOPER </h2> 
                <div className="see-more">
                    <p> Download CV <span><FontAwesomeIcon icon={faDownload} /></span> </p>
                    <p> 
                        <Link to='/about'> See More About Me 
                        <span>  <FontAwesomeIcon icon={faArrowRightLong} beatFade />  </span> 
                        </Link>
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default Home;