import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faPaperPlane, faEnvelopeCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';



const Contact = (props)  => {
    const [visibleMsg, setVisibleMsg] = useState(false);
    const [inputs, setInputs] = useState({
        user_name: '',
        user_email: '',
        message: ''
    })

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ujgvyuh', 'template_ocyrnua', form.current, 'eBkNqxkzTpdf41gdp')
        .then((result) => {
            console.log(result.text);
            setInputs({
                user_name: '',
                user_email: '',
                message: ''
            })

            setVisibleMsg(true);
            setTimeout(() => {
                setVisibleMsg(false)
            }, 2500);


        }, (error) => {
            console.log(error.text);
        });
    };
    

    const toggleForm = () => !props.isShow ? props.setIsShow(true) : props.setIsShow(false);

    return(
        <section className="contact">
            <div className="contact-title" data-aos="zoom-in" data-aos-duration="800">
                <h1> Contact </h1>
            </div>

            <div className="get-in-touch" data-aos="fade-up" data-aos-duration="1000">
                <h1>Get in touch, let's talk. </h1>
                <h3>Open to new opportunities and collaborations. Let's work together! Contact me for job opportunities or any inquiries.</h3>

                <div className="send-message">
                    <p> Send me a message
                        <span><FontAwesomeIcon icon={faAnglesRight} fade/></span> 
                    </p>

                    <div className="envelope"> <p onClick={toggleForm}> <FaEnvelope/> </p>  </div> 
                </div>

                <div className="socials">
                    <li> <a href="https://www.linkedin.com/in/mark-joseph-serrano-340190237" target="_black"> <FaLinkedin/> </a> </li>
                    <li> <a href="https://github.com/MarkJS13" target="_blank"> <FaGithub/> </a> </li>
                    <li> <a href="mailto:markjosephserrano123@gmail.com" target="_blank"> <SiGmail/> </a> </li>
                </div>
            </div>

            <div className={`form ${props.isShow ? 'show-form' : ''}`}>
                <form ref={form} onSubmit={sendEmail}>
                    <div>
                        <label htmlFor="user_name"> Name </label>
                        <input type="text" name="user_name" placeholder="Your name" value={inputs.user_name} onChange={(e) => {
                            setInputs({...inputs, user_name: e.target.value})
                        }} required/>
                    </div>

                    <div>
                        <label htmlFor="user_email"> Email </label>
                        <input type="text" name="user_email" placeholder="Your Email" value={inputs.user_email} onChange={(e) => {
                            setInputs({...inputs, user_email: e.target.value})
                        }} required/>
                    </div>

                    <div>
                        <label htmlFor="message" > Message </label>
                        <textarea name="message" placeholder="Your Message"  value={inputs.message} onChange={(e) => {setInputs({...inputs, message: e.target.value})}} required></textarea>
                    </div>

                    <div className="btn">
                        <button type="submit" value="Send"> <FontAwesomeIcon icon={faPaperPlane} className="sendIcon"/> <p className="sendText"> Send </p></button>
                    </div>


                    {visibleMsg && <p className="sent"> Sent! <FontAwesomeIcon icon={faEnvelopeCircleCheck} /> </p>}

                </form>

                <div className="close-form" onClick={toggleForm}>
                    &times;
                </div>  
            </div> 
        </section>
    )
}

export default Contact;