import React from 'react';
import Typewriter from 'typewriter-effect';
import './Home.css';
const Home = () => {
    return (
        <div className="home d-flex justify-content-center">
            <div className="mx-auto">
                <h2 className="text-info hello p-2">Hello,</h2>
                <h6 style={{fontSize: '18px'}} className="mt-3 px-2 mb-0 font-weight-bold name ">I'm <span className="text-success">Md. Mehedi Hasan Khan</span>,</h6>
                <div style={{fontSize: '28px'}} className="px-2 my-auto my-2 typeWriting"><small className="my-0 py-0 font-weight-bold text-warning ">
                    <Typewriter
                        options={{
                            strings: ["A Web Designer,","A Web Programer,",'& A Mern Stack Developer'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </small></div>
                <p className="text-justify info px-2 "><small>
                    I've designed some real life web applications in html, css & bootstrap and developed some frontend web applications adding JavaScript using <span className="text-warning"> Rest API</span> and  some full stack web applications of homepages, landing pages, social media, blogs, portfolio & e-commerce website. I've good experience of developing any <span className="text-warning"> responsive website</span> on desktop, tab & mobile views.  
                </small></p>
                <div style={{height: '120px'}} className="row mx-auto">
                    <div className="col-md-4 d-flex">
                        <a style={{width: 'fit-content', height: 'fit-content'}} href="#cv" className="my-1  btn btn-primary" rel="noreferrer" >RESUME</a>

                    </div>
                    <div id="contact-desktop" className="col-md-5 contact-desktop ml-2 d-flex ">
                        <a style={{width: '108px', height: 'fit-content'}} href="#contact-1" className="my-1 btn btn-outline-warning" rel="noreferrer" >HIRE ME</a>
                    </div>
                    <div id="contact-mobile" className="col-md-4 d-flex ">
                        <a style={{width: '108px', height: 'fit-content'}} href="#contact-2" className="my-1 btn btn-outline-warning" rel="noreferrer" >HIRE ME</a>
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