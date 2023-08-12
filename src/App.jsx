import Header from "./Header"
import Container from "./Container"
import Footer from "./Footer"
import { useState, useEffect } from "react"
import AOS from "aos"
import 'aos/dist/aos.css'

function App() {
  const [theme, setTheme] = useState(false);
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    AOS.init();
  }, [])

 
 
  return (
    <div className={`container ${theme ? 'container-dark' : ''}`}>
    <div className={`wrapper ${isShow ? 'show-wrapper' : ''}`}></div>

      <Header setTheme={setTheme} theme={theme} />
        <Container isShow={isShow} setIsShow={setIsShow}/>
      <Footer theme={theme}/>
    </div>
    
  )
}

export default App
