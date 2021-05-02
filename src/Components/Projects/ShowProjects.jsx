import React from 'react';

const ShowProjects = ({project, idx, animation}) => {
    // console.log(animation)
    // console.log(project);
    return (
        <>
            <div id="desktop-items" className={`${animation === "fading-up" ? "zoom-in" : animation} col-md-4 my-2 text-dark text-center`}>
                <div style={{height: '280px'}} data-aos={`${animation === "fading-up" && ("zoom-out-up") || (idx % 2 === 0 ? "zoom-in" : "zoom-out")}`} data-aos-duration="1500" className="card">
                    <img src={project.imgUrl} className="h-100 w-100" alt=""/>
                    {/* <p>{project.projectType}</p> */}
                </div>
            </div>
            <div id="mobile-items" data-aos={`${animation === "fading-up" && ("zoom-out-up") || (idx % 2 === 0 ? "zoom-in" : "zoom-out")}`} data-aos-duration="2000" className={`${animation === "fading-up" ? "" : animation} col-md-4 my-2 text-dark text-center card`}>
                <div style={{height: '250px'}} className="">
                    <img src={project.imgUrl} className="h-100 w-100" alt=""/>
                    {/* <p>{project.projectType}</p> */}
                </div>
            </div>
        </>
    );
};

export default ShowProjects;