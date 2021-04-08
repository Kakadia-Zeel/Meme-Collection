import React from 'react';
import './Footer.css';
import github from '../../icons/github.svg';
import linkedin from '../../icons/linkedin.svg';

const Footer = () => {
    return (
        <footer className="container-fluid footer pt-2">
            <div className="row d-flex justify-content-center mt-2">
                <h3>About Me</h3>
            </div>
            <br />
            <div className="row">
                <div className="about-site">                        
                    <div className="row ">
                        <div className="col-md-6  p-auto">
                         
                            <div className="pl-2 ">
                            <h4 className="heading">Zeel Kakadia 😄 </h4>
                            <p className="text-md-start " >A college sophomore who loves Java, React.js and sometimes Backend . As a part of Crio's Winter Externship Program, I've created this Project.</p>
                            <p>Hope you like it !!🤟</p>
                            </div>
                        </div>
                    
                    <div className="  col-md-6">
                    <div className="">
                        <h4 className="d-flex-center heading">Tech Stack :</h4>
                        
                                👉Frontend : React.js <br/>  
                                👉Backend: Express.js <br/>     
                                👉Database : SQLite3<br/>
                            <br/> 
                            <p className="text-md-start">Along with Dependencies like Axios, Formik, Bootstrap and Yup !!!⚛️</p>
                            </div>
                            </div>
                            </div>
                </div>                          
                </div>    
                <div className="social-media-icons row ">
                <ul className="mx-auto">
                    <li><a href="https://github.com/Kakadia-Zeel"><img src={github} alt="" /></a></li>
                    <li><a href="https://www.linkedin.com/in/zeel-kakadia/"><img src={linkedin} alt="" /></a></li>
                </ul>
            </div>
            <span className="row copyright"><h5>©️{new Date().getFullYear()}</h5></span>
        </footer>
    );
}

export default Footer;