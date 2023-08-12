import Home from "./Main/Home";
import Projects from "./Main/Projects";
import About from "./Main/About";
import Contact from "./Main/Contact";
import Menu from "./Menu";
import { Routes, Route } from "react-router-dom";

const Container = (props) => {
    return(
        <main>
            <Menu/>
             <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact isShow={props.isShow} setIsShow={props.setIsShow}/>} />
            </Routes> 
        </main>
    )
}

export default Container;