import me from '/src/assets/images/me.jpg'
import { FaHtml5, FaCss3Alt, FaReact, FaPhp, FaLaravel } from 'react-icons/fa'
import { DiJsBadge } from 'react-icons/di'
import { BsGit } from 'react-icons/bs'
import { SiMysql } from 'react-icons/si'
import { BiLogoRedux } from 'react-icons/bi'


const About = () => {
    return (
        <section className="about">
            <div className="about-title" data-aos="zoom-in" data-aos-duration="800">
                <h1> About </h1>
            </div>

            <div className="about-me">
                <div className="hero" data-aos="zoom-in-up" data-aos-duration="1000">
                    <img src={me} alt="me" />
                </div>        
                
                <div className="description" data-aos="zoom-in-up" data-aos-duration="1000">
                    <p>Hello!👋 I'm Mark Joseph T. Serrano, a self-taught frontend developer with a focus on building dynamic and responsive websites. I just earned a  <span> Bachelor of Science in Information Systems </span>  degree and had the honor of interning as a <span>Programmer Trainee </span>  at Tigernethost, OPC, where I gained valuable hands-on experience as a programmer. </p>

                    <p> Currently, my focus is on frontend development using <span> ReactJS </span> . But planning to expand my skills by learning other essential tech stacks such as Typescript, NextJS etc.</p>
                </div>

                <div className="tech-stacks">
                    <p> Here are the technologies I've been working with. </p>

                    <div className="tech-stack-list" data-aos="flip-right" data-aos-duration="1000">
                        <li><FaHtml5/> <span> HTML5 </span></li>
                        <li><FaCss3Alt/> <span>CSS3</span></li>
                        <li className='javascript'><DiJsBadge/> <span> Javascript</span> </li>
                        <li> <FaReact/> <span> ReactJS</span></li>
                        <li><BiLogoRedux/> <span>Redux Toolkit</span></li>
                        <li><FaPhp/> <span> PHP </span></li>
                        <li><SiMysql/> <span>MySQL</span></li>
                        <li><FaLaravel/> <span> Laravel </span></li>
                        <li><BsGit/> <span> Git </span></li>      
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default About;