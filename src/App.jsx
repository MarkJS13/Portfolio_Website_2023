import Header from "./Header"
import Container from "./Container"
import Footer from "./Footer"
import { useState, useEffect } from "react"
import AOS from "aos"
import 'aos/dist/aos.css'
import HashLoader from "react-spinners/HashLoader"


function App() {
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState(false);
  const [isShow, setIsShow] = useState(false);


  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, [])

  useEffect(() => {
    AOS.init();
  }, [])
 
  return (
    <div className={`container ${theme ? 'container-dark' : ''}`}>
      <div className={`wrapper ${isShow ? 'show-wrapper' : ''}`} onClick={() => setIsShow(false)}></div>
      { 
        loading ?
          <div className="loader">
            <HashLoader color="#FFC874" />
          </div>
           : 
          <>
            <Header setTheme={setTheme} theme={theme} />
            <Container isShow={isShow} setIsShow={setIsShow}/>
            <Footer theme={theme}/>
          </>
      }
    </div>
    
  )
}

export default App
