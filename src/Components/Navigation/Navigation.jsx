import React, { useState } from 'react';
import './Navigation.css';
import { MdSort } from "react-icons/md";
import { FaFacebookF, FaGithub, FaLinkedin, FaWeebly } from "react-icons/fa";
import mahadi from '../../images/icon/MMHK.jpg';
import Home from '../Home/Home';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Blogs from '../Blogs/Blogs';
import Testimonials from '../Testimonials/Testimonials';
import Contact from '../Contact/Contact';
const Navigation = () => {
    const [open, setOpen] = useState(true);
    const openNav = () => {
        // console.log("open")
        setOpen(true);
        document.getElementById('name1').style.display = "none";
        // document.getElementById('name2').style.display = "block";
        document.getElementById("sideBar-mobile").style.width = "170px";
        document.getElementById("sideBar-mobile").style.borderRight = "0.1px solid rgb(150, 149, 149)";  
        document.getElementById("sideBar-mobile").style.transition = "0.8s";
        document.getElementById('topBar').style.marginLeft = "170px";
        document.getElementById("main-mobile").style.marginLeft = "170px";
    }
    
    const closeNav = () =>{
        // console.log("close")
        setOpen(false);
        document.getElementById('name1').style.display = "block";
        // document.getElementById('name2').style.display = "none";
        document.getElementById("sideBar-mobile").style.width = "0";
        document.getElementById("sideBar-mobile").style.transition = "0.8s";
        document.getElementById("sideBar-mobile").style.borderRight = "none";
        document.getElementById('topBar').style.marginLeft = "0";
        document.getElementById("main-mobile").style.marginLeft= "0";
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
        <div className="w-100 all-section">
            <div id="topBar" className="mobile App fixed-top border-bottom border-dark">
                <div className="d-flex">
                    {/* <button id="cross" className={`bg-transparent btn btn-dark mr-1 rounded-circle text-light mr-1`} onClick={() => setOpenNav(!open)}>☰</button>  */}
                    <h2 className={`App border-none outline-none my-auto text-light mr-1`} onClick={() => setOpenNav(!open)}><MdSort/></h2> 
                    {/* <h5 className={`App border-none outline-none my-auto text-light mr-1`} onClick={() => setOpenNav(!open)}>☰</h5>  */}
                    <img style={{height: '60px'}} className="img-fluid ml-3 rounded-circle" src={mahadi} alt="MMHK"/>
                    <h6 id="name1" className='text-light font-weight-bold my-auto ml-2'>MEHEDI HASAN</h6>
                </div>
                {/* <h6 id="name2" className='text-light font-weight-bold mt-3'>MEHEDI HASAN</h6> */}
            </div>

            <div id="sideBar-mobile" className="sidebar-mobile text-center border-right border-dark">
                <img style={{height: '100px',width: '100px'}} className="img-fluid mb-2 rounded-circle" src={mahadi} alt="MMHK"/>
                <h6  className='text-light px-4'>MEHEDI HASAN</h6>
                <div id="my-link" className="d-flex flex-column nav-link text-center">
                    <a onClick={() => closeNav()} href="#home-2" className="py-1 bd-highlight text-decoration-none text-light">Home</a>
                    <a onClick={() => closeNav()} href="#about-2" className="py-1 bd-highlight text-decoration-none text-light">About</a>
                    <a onClick={() => closeNav()}href="#projects-2" className="py-1 bd-highlight text-decoration-none text-light">Projects</a>
                    <a onClick={() => closeNav()} href="#blogs-2" className="py-1 bd-highlight text-decoration-none text-light">Blogs</a>
                    <a onClick={() => closeNav()}href="#testimonials-2" className="py-1 bd-highlight text-decoration-none text-light">Testimonials</a>
                    <a onClick={() => closeNav()} href="#contact-2" className="py-1 bd-highlight text-decoration-none text-light">Contact</a>
                </div>
                <div className="d-flex flex-row justify-content-between px-3 mt-4">
                    <a style={{fontSize: '14px'}} href="https://www.facebook.com/MMHK30313" className="text-decoration-none text-light social-link" rel="noreferrer"><FaFacebookF/></a>
                    <a style={{fontSize: '14px'}} href="https://github.com/mmhk30313" className="text-decoration-none text-light social-link" rel="noreferrer"><FaGithub/></a>
                    <a style={{fontSize: '14px'}} href="https://www.webtalk.co/mmhk" rel="noreferrer" className="text-decoration-none text-light social-link"><FaWeebly/></a>
                    <a style={{fontSize: '14px'}} href="https://www.linkedin.com/in/mehedihasan30313" className="text-decoration-none text-light social-link" rel="noreferrer"><FaLinkedin/></a>
                </div>
                <p style={{fontSize: '14px'}} className="text-center text-light"><small>@ {new Date().getFullYear()} MEHEDI HASAN</small></p>
            </div>
            <div id="sideBar-desktop" className="sidebar-desktop border-right border-dark">
                <img style={{height: '140px'}} className="img-fluid mx-auto d-flex justify-content-center my-2 rounded-circle" src={mahadi} alt="MMHK"/>
                <h4 className='text-light text-center'>MEHEDI HASAN</h4>
                <div className="d-flex justify-content-center text-center">
                    <div id="my-link" className="d-flex flex-column nav-link">
                        <a className="py-2 bd-highlight text-decoration-none text-light" href="#home-1">Home</a>
                        <a className="py-2 bd-highlight text-decoration-none text-light" href="#about-1">About</a>
                        <a className="py-2 bd-highlight text-decoration-none text-light" href="#projects-1">Projects</a>
                        <a className="py-2 bd-highlight text-decoration-none text-light" href="#blogs-1">Blogs</a>
                        <a className="py-2 bd-highlight text-decoration-none text-light" href="#testimonials-1">Testimonials</a>
                        <a className="pt-2 bd-highlight text-decoration-none text-light" href="#contact-1">Contact</a>
                    </div>

                </div>
                <div className="d-flex flex-row justify-content-between px-4 pt-5 mt-5 mb-3">
                    <a href="https://www.facebook.com/MMHK30313" className="text-decoration-none social-link social-link" rel="noreferrer"><FaFacebookF/></a>
                    <a href="https://github.com/mmhk30313" className="text-decoration-none social-link social-link" rel="noreferrer"><FaGithub/></a>
                    <a href="https://www.webtalk.co/mmhk" rel="noreferrer" className="text-decoration-none social-link"><FaWeebly/></a>
                    <a href="https://www.linkedin.com/in/mehedihasan30313" className="text-decoration-none social-link" rel="noreferrer"><FaLinkedin/></a>
                </div>
                <p className="text-center text-light"><small>@ {new Date().getFullYear()} MEHEDI HASAN</small></p>
            </div>
            <div id="main-mobile" onClick={() => closeNav()} className="text-light border-none">
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
            <div id="main-desktop" className="text-light border-none" >

                <section id="home-1" className="border-bottom border-dark">
                    <Home/>
                </section>
                
                <div id="about-1"className="border-bottom border-dark" >
                    <About/>
                </div>
                <div id="projects-1" className="border-bottom border-dark">
                    <Projects/>
                </div>
                <div id="blogs-1" className="border-bottom border-dark">
                    <Blogs/>
                </div>
                <div id="testimonials-1" className="border-bottom border-dark">
                    <Testimonials/>
                </div>
                <div id="contact-1">
                    <Contact/>
                </div>
            </div>
        </div>
    );
};

export default Navigation;