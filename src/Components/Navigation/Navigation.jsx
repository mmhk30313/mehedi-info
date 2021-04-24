import React, { useState } from 'react';
import './Navigation.css';
import mahadi from '../../images/icon/MMHK.jpg';
const Navigation = () => {
    const [open, setOpen] = useState(false);
    const openNav = () => {
        console.log("open")
        document.getElementById('name1').style.display = "none";
        document.getElementById('name2').style.display = "block";
        document.getElementById("sideBar").style.width = "230px";
        document.getElementById('topBar').style.marginLeft = "230px";
        document.getElementById("main").style.marginLeft = "230px";
    }
    
    const closeNav = () =>{
        console.log("close")
        document.getElementById('name1').style.display = "block";
        document.getElementById('name2').style.display = "none";
        document.getElementById("sideBar").style.width = "0";
        document.getElementById('topBar').style.marginLeft = "0";
        document.getElementById("main").style.marginLeft= "0";
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
            <div id="sideBar" className="desktop sidebar">
                <button href="#" className="closebtn btn bg-transparent text-light" onClick={() => closeNav()}>×</button>
                <img style={{height: '140px'}} className="img-fluid my-2 ml-2 rounded-circle" src={mahadi} alt="MMHK"/>
                <h4 className='text-light ml-4'>MEHEDI HASAN</h4>
                <div id="nav-link" className="my-link">
                    <a href="#about">About</a>
                    <a href="#service">Services</a>
                    <a href="#client">Clients</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
             
            <div id="topBar" className="mobile">
                <div className="d-flex">
                    <button className="bg-transparent btn rounded text-light" onClick={() => setOpenNav(!open)}>☰</button> 
                    <img style={{height: '100px'}} className="ml-3 img-fluid rounded-circle" src={mahadi} alt="MMHK"/>
                    <h5 id="name1" className='text-light my-auto ml-2'>MEHEDI HASAN</h5>
                </div>
                <h4 id="name2" className='text-light mt-3 ml-2'>MEHEDI HASAN</h4>
            </div>
            <div id="main" data-bs-spy="scroll" data-bs-target="#nav-link" data-bs-offset="0" className="text-light scrollspy-example" tabindex="0" onClick={() => closeNav()}>
                <div id="about">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro earum necessitatibus adipisci quisquam voluptas, aspernatur exercitationem, laudantium ipsum harum labore provident nobis, vel quibusdam corrupti natus dicta veniam sint expedita eveniet? Necessitatibus id quam recusandae quia minima enim animi ipsam, illum possimus vel fugit amet cumque quibusdam nobis hic quisquam omnis aliquid ipsa! Expedita ullam eum quod dolore, iste inventore quisquam delectus ducimus modi at sequi quos ad consequuntur necessitatibus rem deserunt vero ipsam reiciendis, numquam iure error aliquam eaque quidem quia. Blanditiis accusamus quasi, quos facere quae harum ipsa, nisi pariatur asperiores reprehenderit ad dignissimos ut magni sapiente veritatis.</p>
                    <div id="service">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, porro itaque minima, amet est doloremque expedita laboriosam perspiciatis veniam a unde repudiandae reprehenderit molestias accusantium quisquam, eos voluptatibus ipsum. Illo voluptates, nulla nisi veniam repellat nostrum quasi fuga. Dolor error repellendus earum quia architecto commodi ut sint, aliquam blanditiis ratione eligendi dolore atque hic enim dicta minima numquam perferendis! Inventore quia id neque exercitationem ex totam asperiores in, fugiat, nobis dolorum ipsam dolor similique quidem reprehenderit nam, ad voluptatum nostrum facilis soluta! Nam, nulla iusto earum beatae aspernatur suscipit laudantium tempore est, nihil iste ad nostrum minus, ex quod? Rerum.</p>
                        <div id="client">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sunt facilis tempore quaerat, assumenda voluptas! Quidem recusandae labore maiores facere sed aliquam veniam nemo modi deleniti, minima sit laboriosam natus temporibus saepe suscipit doloribus enim placeat aliquid. Quaerat voluptatum unde quibusdam deleniti nihil, placeat beatae eligendi saepe a, iure ab aliquam laborum cum deserunt pariatur aperiam repudiandae tenetur. Corporis sequi ea rerum sapiente, atque officiis amet perspiciatis exercitationem laudantium deleniti aliquam impedit error eveniet pariatur corrupti aut aspernatur accusantium reprehenderit, perferendis doloremque vitae eius! Quod eaque eos quo, ex officiis obcaecati harum voluptas aspernatur quia fuga. Earum ea odio velit?</p>
                            <div id="contact">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione unde suscipit facilis possimus voluptatem vero repellendus repudiandae voluptatibus illo, dicta ducimus aperiam nesciunt quibusdam vitae et ea amet doloribus nobis. Reiciendis corporis omnis earum, repellendus, optio, nemo fugiat ratione mollitia ex totam incidunt quia perferendis unde id saepe necessitatibus dolor aliquam tenetur ipsum accusantium sit hic quibusdam tempore est. Reprehenderit a exercitationem, dolorem cum aperiam, expedita perspiciatis nihil sint blanditiis assumenda maiores illum, vitae nesciunt ut sunt sapiente? Odio sequi impedit dolorem non consequuntur ut similique eveniet deserunt autem. Aliquid mollitia nesciunt voluptatem autem tempora ea, odio ullam recusandae. Eos!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;