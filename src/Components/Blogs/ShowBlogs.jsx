import React from 'react';


const ShowBlogs = ({blog}) => {
    // console.log(blog);
    return (
        <>
            <div data-aos="zoom-out-up" data-aos-duration="1500" id="desktop-items" className="col-md-4 my-2 text-center text-dark">
                <div style={{height: '280px'}} className="card">
                    <img src={blog.imgUrl} className="h-100 w-100" alt=""/>
                    {/* <h5>{blog.name}</h5> */}
                </div>
            </div>
            <div data-aos="zoom-out-up" data-aos-duration="1500" id="mobile-items" className="col-md-4 my-2 text-dark text-center">
                <div style={{height: '280px'}} className="card">
                    <img src={blog.imgUrl} className="h-100 w-100" alt=""/>
                    {/* <h5>{blog.name}</h5> */}
                </div>
            </div>

        </>
    );
};

export default ShowBlogs;