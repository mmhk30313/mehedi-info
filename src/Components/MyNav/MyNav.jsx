import React, { useState } from 'react';
import { FaFacebookF, FaGithub, FaLinkedin, FaWeebly } from 'react-icons/fa';
import { MdSort } from 'react-icons/md';
import mahadi from '../../images/icon/MMHK.jpg';
import About from '../About/About';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Home from '../Home/Home';
import Projects from '../Projects/Projects';
import Testimonials from '../Testimonials/Testimonials';
import './MyNav.css';
const MyNav = () => {
    const [open, setOpen] = useState(true);
    const openNav = () => {
        // console.log("open")
        setOpen(true);
        // document.getElementById('name1').style.display = "none";
        // document.getElementById('name2').style.display = "block";
        document.getElementById("left-mobile").style.width = "200px";
        // document.getElementById("left-mobile").style.borderRight = "0.1px solid rgb(150, 149, 149)";  
        document.getElementById("left-mobile").style.transition = "0.8s";
        document.getElementById('top-mobile').style.marginLeft = "200px";
        document.getElementById("mobile-right").style.transition = "0.8s";
        document.getElementById("mobile-right").style.marginLeft = "200px";
        // document.getElementById("right-mobile").style.marginLeft = "200px";
    }
    
    const closeNav = () =>{
        // console.log("close")
        setOpen(false);
        document.getElementById('name1').style.display = "block";
        // document.getElementById('name2').style.display = "none";
        document.getElementById("left-mobile").style.width = "0";
        document.getElementById("left-mobile").style.transition = "0.8s";
        document.getElementById("left-mobile").style.borderRight = "none";
        document.getElementById("top-mobile").style.transition = "0.8s";
        document.getElementById('top-mobile').style.marginLeft = "0";
        document.getElementById("mobile-right").style.transition = "0.8s";
        document.getElementById('mobile-right').style.marginLeft = "0";
        // document.getElementById("right-mobile").style.marginLeft= "0";
    }
    const setOpenNav = (flag) => {
        setOpen(flag);
        if(flag){
            openNav();
        }
        else{
            closeNav();
        }
    }
    return (
        <div className="d-flex">
            <div id="left-mobile" className="mobile-left border-right border-dark">
                {/* <div className="left-mobile text-center"> */}
                    <img style={{height: '100px',width: '100px'}} className="img-fluid mb-2 rounded-circle" src={mahadi} alt="MMHK"/>
                    <h6 style={{width: '150px'}} className='text-light px-4'>MEHEDI HASAN</h6>
                    <div id="my-link" className="d-flex flex-column nav-link text-center">
                        <a onClick={() => closeNav()} href="#home-2" className="py-1 bd-highlight text-decoration-none text-light">Home</a>
                        <a onClick={() => closeNav()} href="#about-2" className="py-1 bd-highlight text-decoration-none text-light">About</a>
                        <a onClick={() => closeNav()}href="#projects-2" className="py-1 bd-highlight text-decoration-none text-light">Projects</a>
                        <a onClick={() => closeNav()} href="#blogs-2" className="py-1 bd-highlight text-decoration-none text-light">Blogs</a>
                        <a onClick={() => closeNav()}href="#testimonials-2" className="py-1 bd-highlight text-decoration-none text-light">Testimonials</a>
                        <a onClick={() => closeNav()} href="#contact-2" className="py-1 bd-highlight text-decoration-none text-light">Contact</a>
                    {/* </div> */}
                    <div className="d-flex flex-row justify-content-between px-3 mt-4">
                        <a style={{fontSize: '14px'}} href="https://www.facebook.com/MMHK30313" className="text-decoration-none text-light social-link" rel="noreferrer"><FaFacebookF/></a>
                        <a style={{fontSize: '14px'}} href="https://github.com/mmhk30313" className="text-decoration-none text-light social-link" rel="noreferrer"><FaGithub/></a>
                        <a style={{fontSize: '14px'}} href="https://www.webtalk.co/mmhk" rel="noreferrer" className="text-decoration-none text-light social-link"><FaWeebly/></a>
                        <a style={{fontSize: '14px'}} href="https://www.linkedin.com/in/mehedihasan30313" className="text-decoration-none text-light social-link" rel="noreferrer"><FaLinkedin/></a>
                    </div>
                    <p style={{fontSize: '14px'}} className="text-center text-light"><small>@ {new Date().getFullYear()} MEHEDI HASAN</small></p>
                </div>
            </div>
            <div id="mobile-right" className="mobile-right App">
                <div id="top-mobile" className="mobile fixed-top border-bottom border-dark">
                    <div className="d-flex">
                        {/* <button id="cross" className={`bg-transparent btn btn-dark mr-1 rounded-circle text-light mr-1`} onClick={() => setOpenNav(!open)}>☰</button>  */}
                        <h2 className={`App border-none outline-none my-auto text-light mr-1`} onClick={() => setOpenNav(!open)}><MdSort/></h2> 
                        {/* <h5 className={`App border-none outline-none my-auto text-light mr-1`} onClick={() => setOpenNav(!open)}>☰</h5>  */}
                        <img style={{height: '60px'}} className="img-fluid ml-3 rounded-circle" src={mahadi} alt="MMHK"/>
                        <h6 id="name1" className='text-light font-weight-bold my-auto ml-2'>MEHEDI HASAN</h6>
                    </div>
                    {/* <h6 id="name2" className='text-light font-weight-bold mt-3'>MEHEDI HASAN</h6> */}
                </div>
                <div id="right-mobile" onClick={() => closeNav()} className="text-light border-none">
                    <section id="home-2" className="border-bottom border-dark">
                        <Home/>
                    </section>
                    <div id="about-2" className="border-bottom border-dark py-4">
                        <About/>
                    </div>
                    <div id="projects-2" className="border-bottom border-dark pb-4">
                        <Projects/>
                    </div>
                    <div id="blogs-2" className="border-bottom border-dark py-4">
                        <Blogs/>
                    </div>
                    <div id="testimonials-2" className="border-bottom border-dark py-4">
                        <Testimonials/>
                    </div>
                    <div id="contact-2">
                        <Contact/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyNav;