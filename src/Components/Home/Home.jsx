import React from 'react';
import Typewriter from 'typewriter-effect';
import './Home.css';
const Home = () => {
    return (
        <div className="home d-flex justify-content-center">
            <div className="mx-auto">
                <h2 className=" hello p-2">Hello,</h2>
                <h6 className="mt-3 px-2 mb-0 font-weight-bold name ">I'm <span className="">Md. Mehedi Hasan Khan</span>,</h6>
                <div className="px-2 my-auto my-3 typeWriting"><small className="my-0 py-0 font-weight-bold">
                    <Typewriter
                        options={{
                            strings: ["A Web Designer,","A Web Programer,",'& A MERN Stack Developer'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </small></div>
                <p className="text-justify info px-2 "><small>
                    I've designed some real life web applications in html, css & bootstrap and developed some frontend web applications adding JavaScript using <span className="text-warning"> Rest API</span> and  some full stack web applications of homepages, landing pages, social media, blogs, portfolio & e-commerce website. I've good experience of developing any <span className="text-warning"> responsive website</span> on desktop, tab & mobile views.  
                </small></p>
                <div style={{height: '120px'}} className="row mx-auto">
                    <div className="col-md-4">
                        <a href="https://drive.google.com/file/d/1vMESrVLiHr__k5HcIJDcRWEHBXEerXMR/view?usp=sharing" target="_blank" className="my-1  btn resume px-4" rel="noreferrer" >
                            <span className='content font-weight-bold text-light'>
                                RESUME
                            </span>
                            <span className="resume-design pt-1"></span> 
                        </a>

                    </div>
                    <div id="contact-desktop" className="col-md-5 contact-desktop ml-2 d-flex ">
                        <a href="#contact-1" className="my-1 btn hire-me" rel="noreferrer" >
                            <span className="content font-weight-bold py-0 px-2">HIRE ME</span>
                            <span className="hire-me-design"></span>
                        </a>
                    </div>
                    <div id="contact-mobile" className="col-md-4 d-flex ">
                        <a href="#contact-2" className="my-1 btn hire-me" rel="noreferrer" >
                            <span className="content font-weight-bold py-0 px-2">HIRE ME</span>
                            <span className="hire-me-design"></span>
                        </a>
                    </div>
                    <div id="contact-desktop" className="col-md-8 d-flex justify-content-center ">
                        <a id="down" href="#about-1" style={{height: '50px'}} className="my-3 mx-auto  rounded border border-primary text-decoration-none" rel="noreferrer" ><p className="down">.</p></a>
                    </div>
                    {/* <div id="contact-mobile" className="col-md-8 d-flex justify-content-center">
                        <a href="#about-2" style={{width: 'fit-content'}} className="my-1 mx-auto btn btn-outline-warning" rel="noreferrer" ><span className="down">.</span></a>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Home;