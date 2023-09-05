const Footer = (props) => {
    return(
        <footer className={props.theme ? 'footer-dark' : ''} >
            <p> Built by Mark Joseph Serrano. </p>
            <p>All rights reserved. 2023</p>
        </footer>
    )
}

export default Footer;