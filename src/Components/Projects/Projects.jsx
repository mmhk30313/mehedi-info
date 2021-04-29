import React, { useEffect } from 'react';
import { useState } from 'react';
import fakeData from './fakeData';
import './Projects.css';
import ShowProjects from './ShowProjects';
const Projects = () => {
    const [active, setActive] = useState('everything');
    const [projects, setProjects] = useState([]);
    useEffect(()=>{
        let newProjects = [];
        const curProjects = [...fakeData];
        if(active === 'everything'){
            newProjects = [...curProjects];
        }
        else if(active === 'javascript'){
            newProjects = curProjects.filter(curProject => curProject.usedTech === "JavaScript");
        }
        else if(active === 'react-node'){
            newProjects = curProjects.filter(curProject => curProject.usedTech === "ReactJS/NodeJS");
        }
        else if(active === "html-css"){
            newProjects = curProjects.filter(curProject => curProject.usedTech === "HTML/CSS");
        }
        setProjects(newProjects)
    },[active])
    const handleActive = (flag) =>{
        if(flag !== active){
            setProjects([]);
        }
        setActive(flag);
    }
    // console.log(active);
    
    return (
        <div className="container py-4 projects">
            <h3 className="my-4 py-2 header">PROJECTS</h3>
            <div id="project-type" className="row mx-auto d-flex justify-content-center project-type">
                <div onClick={() => handleActive("everything")} style={{height: 'fit-content'}} className={`col-md-3 card border-dark rounded btn align-items-center py-1 ${active === 'everything' ? "active-"+active : ""}`}>
                    <b>Everything</b>
                    {/* <b className="mirror-1 text-bold align-items-center">Everything</b> */}
                </div>
                <div onClick={() => handleActive("react-node")} style={{height: 'fit-content'}} className={`col-md-3 card border-dark rounded btn align-items-center py-1 ${active === 'react-node' ? "active-"+active : ""}`}>
                    <b>ReactJS/NodeJS</b>
                    {/* <b className="mirror-2 text-bold align-items-center">ReactJS/NodeJS</b> */}
                </div>
                <div onClick={() => handleActive("javascript")} style={{height: 'fit-content'}} className={`col-md-3 card border-dark rounded btn align-items-center py-1 ${active === 'javascript' ? "active-"+active : ""}`}>
                    <b>JavaScript</b>
                </div>
                <div onClick={() => handleActive("html-css")} style={{height: 'fit-content'}} className={`col-md-3 card  border-dark rounded btn align-items-center py-1 ${active === 'html-css' ? "active-"+active : ""}`}>
                    <b>Html/Css</b>
                </div>
            </div>
            <div id="project-type" className="row justify-content-center project-type">
                {
                    projects.length > 0 && projects.map((project, idx) => <ShowProjects key={project.id} animation={`${active === "everything" ? "zoom-in" : active === "react-node" ? "flip-right" : active === "javascript" ? "fading-up" : "flip-down"}`} idx={idx} project={project}/>)
                }
            </div>
        </div>
    );
};

export default Projects;