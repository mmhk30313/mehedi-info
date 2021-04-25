import React, { useState } from 'react';
import './Navigation.css';
import { MdSort } from "react-icons/md";
import { FaFacebookF, FaGithub, FaLinkedin, FaWeebly } from "react-icons/fa";
import mahadi from '../../images/icon/MMHK.jpg';
import Home from '../Home/Home';
const Navigation = () => {
    const [open, setOpen] = useState(true);
    const openNav = () => {
        console.log("open")
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
        console.log("close")
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
            <div id="topBar" className="mobile App fixed-top border-bottom-light">
                <div className="d-flex">
                    {/* <button id="cross" className={`bg-transparent btn btn-dark mr-1 rounded-circle text-light mr-1`} onClick={() => setOpenNav(!open)}>☰</button>  */}
                    <h2 className={`App border-none outline-none my-auto text-light mr-1`} onClick={() => setOpenNav(!open)}><MdSort/></h2> 
                    {/* <h5 className={`App border-none outline-none my-auto text-light mr-1`} onClick={() => setOpenNav(!open)}>☰</h5>  */}
                    <img style={{height: '60px'}} className="img-fluid ml-3 rounded-circle" src={mahadi} alt="MMHK"/>
                    <h6 id="name1" className='text-light font-weight-bold my-auto ml-2'>MEHEDI HASAN</h6>
                </div>
                {/* <h6 id="name2" className='text-light font-weight-bold mt-3'>MEHEDI HASAN</h6> */}
            </div>

            <div id="sideBar-mobile" className="sidebar-mobile">
                <img style={{height: '120px'}} className="img-fluid mb-2 ml-2 rounded-circle" src={mahadi} alt="MMHK"/>
                <h5 className='text-light ml-4'>MEHEDI HASAN</h5>
                <div id="my-link" className="my-link mb-4">
                    <a onClick={() => closeNav()} href="#home-2">Home</a>
                    <a onClick={() => closeNav()} href="#service-2">Services</a>
                    <a onClick={() => closeNav()} href="#client-2">Clients</a>
                    <a onClick={() => closeNav()} href="#contact-1">Contact</a>
                </div>
                <div className="d-flex flex-row justify-content-between px-2">
                    <a href="https://www.facebook.com/MMHK30313" className="text-decoration-none text-light social-link" rel="noreferrer"><FaFacebookF/></a>
                    <a href="https://github.com/mmhk30313" className="text-decoration-none text-light social-link" rel="noreferrer"><FaGithub/></a>
                    <a href="https://www.webtalk.co/mmhk" rel="noreferrer" className="text-decoration-none text-light social-link"><FaWeebly/></a>
                    <a href="https://www.linkedin.com/in/mehedihasan30313" className="text-decoration-none text-light social-link" rel="noreferrer"><FaLinkedin/></a>
                </div>
                <p className="text-center text-light"><small>@ {new Date().getFullYear()} MEHEDI HASAN</small></p>
            </div>
            <div id="sideBar-desktop" className="sidebar-desktop">
                <img style={{height: '140px'}} className="img-fluid mx-auto d-flex justify-content-center my-2 rounded-circle" src={mahadi} alt="MMHK"/>
                <h4 className='text-light text-center'>MEHEDI HASAN</h4>
                <div className="d-flex justify-content-center">
                    <div id="my-link" className="d-flex flex-column nav-link">
                        <a className="py-2 bd-highlight text-decoration-none text-light" href="#home-1">Home</a>
                        <a className="py-2 bd-highlight text-decoration-none text-light" href="#service-1">Services</a>
                        <a className="py-2 bd-highlight text-decoration-none text-light" href="#client-1">Clients</a>
                        <a className="py-2 bd-highlight text-decoration-none text-light" href="#contact-1">Contact</a>
                    </div>

                </div>
                <div className="d-flex flex-row justify-content-between px-4 mt-5 mb-3">
                    <a href="https://www.facebook.com/MMHK30313" className="text-decoration-none social-link social-link" rel="noreferrer"><FaFacebookF/></a>
                    <a href="https://github.com/mmhk30313" className="text-decoration-none social-link social-link" rel="noreferrer"><FaGithub/></a>
                    <a href="https://www.webtalk.co/mmhk" rel="noreferrer" className="text-decoration-none social-link"><FaWeebly/></a>
                    <a href="https://www.linkedin.com/in/mehedihasan30313" className="text-decoration-none social-link" rel="noreferrer"><FaLinkedin/></a>
                </div>
                <p className="text-center text-light"><small>@ {new Date().getFullYear()} MEHEDI HASAN</small></p>
            </div>
            <div id="main-mobile" onClick={() => closeNav()} className="text-light border-none">
                <section id="home-2" className="">
                    <Home/>
                </section>
                <div id="service-2" className="p-2">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, culpa cupiditate. Ipsa dolorem nisi inventore dolorum, harum ab consequatur facilis repudiandae! Aliquam quaerat nihil perferendis, consequuntur perspiciatis consequatur dicta autem ullam laudantium dignissimos qui repudiandae laborum mollitia, repellat fuga! A impedit alias recusandae quod inventore veritatis at ut. Qui voluptatem, beatae facere est tempore deleniti commodi? Ad, saepe at voluptates debitis porro itaque voluptate dignissimos esse quia illo nulla quos repellat natus. Minus error fuga a libero omnis doloribus perferendis eos architecto eligendi culpa. Eum voluptates corporis dicta veniam? Impedit nam voluptate asperiores quasi iure itaque, ad ratione reprehenderit possimus?</p>
                </div>
                <div id="client-2">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, culpa cupiditate. Ipsa dolorem nisi inventore dolorum, harum ab consequatur facilis repudiandae! Aliquam quaerat nihil perferendis, consequuntur perspiciatis consequatur dicta autem ullam laudantium dignissimos qui repudiandae laborum mollitia, repellat fuga! A impedit alias recusandae quod inventore veritatis at ut. Qui voluptatem, beatae facere est tempore deleniti commodi? Ad, saepe at voluptates debitis porro itaque voluptate dignissimos esse quia illo nulla quos repellat natus. Minus error fuga a libero omnis doloribus perferendis eos architecto eligendi culpa. Eum voluptates corporis dicta veniam? Impedit nam voluptate asperiores quasi iure itaque, ad ratione reprehenderit possimus?</p>
                </div>
                <div id="contact-2">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, culpa cupiditate. Ipsa dolorem nisi inventore dolorum, harum ab consequatur facilis repudiandae! Aliquam quaerat nihil perferendis, consequuntur perspiciatis consequatur dicta autem ullam laudantium dignissimos qui repudiandae laborum mollitia, repellat fuga! A impedit alias recusandae quod inventore veritatis at ut. Qui voluptatem, beatae facere est tempore deleniti commodi? Ad, saepe at voluptates debitis porro itaque voluptate dignissimos esse quia illo nulla quos repellat natus. Minus error fuga a libero omnis doloribus perferendis eos architecto eligendi culpa. Eum voluptates corporis dicta veniam? Impedit nam voluptate asperiores quasi iure itaque, ad ratione reprehenderit possimus?</p>
                </div>
            </div>
            <div id="main-desktop" className="text-light border-none" >

                <section id="home-1" className="">
                        <Home/>
                </section>
                
                <div id="service-1">
                    <h1>Services</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro earum necessitatibus adipisci quisquam voluptas, aspernatur exercitationem, laudantium ipsum harum labore provident nobis, vel quibusdam corrupti natus dicta veniam sint expedita eveniet? Necessitatibus id quam recusandae quia minima enim animi ipsam, illum possimus vel fugit amet cumque quibusdam nobis hic quisquam omnis aliquid ipsa! Expedita ullam eum quod dolore, iste inventore quisquam delectus ducimus modi at sequi quos ad consequuntur necessitatibus rem deserunt vero ipsam reiciendis, numquam iure error aliquam eaque quidem quia. Blanditiis accusamus quasi, quos facere quae harum ipsa, nisi pariatur asperiores reprehenderit ad dignissimos ut magni sapiente veritatis.</p>
                </div>
                <div id="client-1">
                    <h1>Client</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro earum necessitatibus adipisci quisquam voluptas, aspernatur exercitationem, laudantium ipsum harum labore provident nobis, vel quibusdam corrupti natus dicta veniam sint expedita eveniet? Necessitatibus id quam recusandae quia minima enim animi ipsam, illum possimus vel fugit amet cumque quibusdam nobis hic quisquam omnis aliquid ipsa! Expedita ullam eum quod dolore, iste inventore quisquam delectus ducimus modi at sequi quos ad consequuntur necessitatibus rem deserunt vero ipsam reiciendis, numquam iure error aliquam eaque quidem quia. Blanditiis accusamus quasi, quos facere quae harum ipsa, nisi pariatur asperiores reprehenderit ad dignissimos ut magni sapiente veritatis.</p>
                </div>
                <div id="contact-1">
                    <h1>Contact</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro earum necessitatibus adipisci quisquam voluptas, aspernatur exercitationem, laudantium ipsum harum labore provident nobis, vel quibusdam corrupti natus dicta veniam sint expedita eveniet? Necessitatibus id quam recusandae quia minima enim animi ipsam, illum possimus vel fugit amet cumque quibusdam nobis hic quisquam omnis aliquid ipsa! Expedita ullam eum quod dolore, iste inventore quisquam delectus ducimus modi at sequi quos ad consequuntur necessitatibus rem deserunt vero ipsam reiciendis, numquam iure error aliquam eaque quidem quia. Blanditiis accusamus quasi, quos facere quae harum ipsa, nisi pariatur asperiores reprehenderit ad dignissimos ut magni sapiente veritatis.</p>
                </div>
            </div>
        </div>
    );
};

export default Navigation;