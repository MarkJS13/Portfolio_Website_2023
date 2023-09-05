import forum from '/src/assets/images/screenshots/forum.png'
import todolist from '/src/assets/images/screenshots/todo.png'
import news from '/src/assets/images/screenshots/news.png'
import shortly from '/src/assets/images/screenshots/shortly.png'
import sneako from '/src/assets/images/screenshots/e-commerce.png' 
import { FaGithub } from 'react-icons/fa'
import { BsBoxArrowUpRight } from 'react-icons/bs'

const Projects = () => {
    return(
        <section className="projects">
            <div className="project-title" data-aos="zoom-in" data-aos-duration="800">
                <h1> Projects </h1>
            </div>

           <div className="project-container" data-aos="fade-up" data-aos-duration="1000">
            
            <div className="project">
                <div className="project-details">
                    <div className="project-name">
                        <h2> Todo List </h2>
                    </div>
                    
                    <div className="details">
                        <p> 
                            A minimalist to-do list application with a dark/light theme toggle and uses localStorage. Manages your task and helps you to stay organized.
                        </p>

                        <div className="tech-used">
                                <p>#React JS</p>
                                <p>#CSS </p>
                        </div>
                    </div>
                    
                </div>
                <div className="project-img">
                    <img src={todolist} alt="todo" />
                    <div className="demo" >
                        <h1> Todo List </h1>
                        <div className="demo-tile">
                            <a href="https://mjs13-todolist.vercel.app/" target='_blank'> <BsBoxArrowUpRight/></a>
                            <a href="https://github.com/MarkJS13/Todo_List_Frontend_Mentor.git" target='_blank'> <FaGithub/> </a>
                        </div>
                    </div>
                </div>

            </div>

            <div className="project">
                <div className="project-details">
                    <div className="project-name">
                        <h2> Shortly </h2>
                    </div>
                    
                    <div className="details">
                        <p> 
                            Shortly is a URL Shortener App built using React that provides users the ability to convert long URLs into concise links. This app utilizes an API to generate and manage these shortened links.
                        </p>

                        <div className="tech-used">
                                <p>#CSS</p>
                                <p>#React JS </p>
                                <p>#API</p>
                        </div>
                    </div>
                    
                </div>
                <div className="project-img">
                    <img src={shortly} alt="shortly" />
                    <div className="demo" >
                        <h1> Shortly </h1>
                        <div className="demo-tile">
                            <a href="https://shortly-mjs13.vercel.app" target='_blank'> <BsBoxArrowUpRight/></a>
                            <a href="https://github.com/MarkJS13/Shortly_Frontend_Mentor.git" target='_blank'> <FaGithub/> </a>
                        </div>
                    </div>
                </div>

            </div>

            <div className="project">
                <div className="project-details">
                    <div className="project-name">
                        <h2> SNeak-O </h2>
                    </div>
                    
                    <div className="details">
                        <p> 
                        Sneak-O is an e-commerce shoe store featuring an advanced filtering system and seamless add-to-cart functionality.
                        </p>

                        <div className="tech-used">
                                <p>#CSS</p>
                                <p>#React JS </p>
                                <p>#Redux Toolkit</p>
                        </div>
                    </div>
                    
                </div>
                <div className="project-img">
                    <img src={sneako} alt="ecommerce" />
                    <div className="demo" >
                        <h1> SNeak-O </h1>
                        <div className="demo-tile">
                            <a href="https://sneak-o-markjs13.vercel.app/" target='_blank'> <BsBoxArrowUpRight/></a>
                            <a href="https://github.com/MarkJS13/SNeak-O_e-commerce_shoes.git" target='_blank'> <FaGithub/> </a>
                        </div>
                    </div>
                </div>

            </div>

            <div className="project">
                <div className="project-details">
                    <div className="project-name">
                        <h2> Rabbit Forum App </h2>
                    </div>
                    
                    <div className="details">
                        <p> 
                            Rabbit is a forum application. It's designed for simple user interaction, allowing users to post, comment, reply, and like in a secure environment. The authentication system is powered by Laravel Breeze.
                        </p>

                        <div className="tech-used">
                                <p>#CSS</p>
                                <p>#Javascript </p>
                                <p>#Laravel</p>
                                <p>#MySQL</p>
                        </div>
                    </div>
                    
                </div>
                <div className="project-img">
                    <img src={forum} alt="forum" />
                    <div className="demo" >
                        <h1> Rabit Forum App</h1>
                        <div className="demo-tile">
                            <a href="http://markjhosting.x10.mx/" target='_blank'> <BsBoxArrowUpRight/></a>
                            <a href="https://github.com/MarkJS13/Rabbit_Forum-App.git" target='_blank'> <FaGithub/> </a>
                        </div>
                    </div>
                </div>

            </div>
            
           </div>

            <div className="checkout">
                <p> See all my mini projects on <a href="https://github.com/MarkJS13" target='_blank'> Github. </a> </p>
            </div>

        </section>
    )
}

export default Projects;