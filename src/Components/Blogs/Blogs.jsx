import React from 'react';
import './Blogs.css';
import ShowBlogs from './ShowBlogs';
const blogs = [
    {
        id: 1,
        name: "Blog-1",
        img: "",
        url: ""
    },
    {
        id: 2,
        name: "Blog-2",
        img: "",
        url: ""
    },
    {
        id: 3,
        name: "Blog-3",
        img: "",
        url: ""
    },
]
const Blogs = () => {
    return (
        <div className="container py-4">
            <h3 className="header my-4 py-2">BLOGS</h3>
            <div className="row justify-content-center project-type">
                {
                    blogs.map(blog => <ShowBlogs key={blog.id} blog={blog} />)
                }
            </div>
        </div>
    );
};

export default Blogs;