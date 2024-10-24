import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


// eslint-disable-next-line react/prop-types
const Blogs = ({handleAddToBookmark, handleReadingTime}) => {
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="w-2/3 mt-4">
            {/* <h2>Blogs: {blogs.length}</h2> */}
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} handleAddToBookmark={handleAddToBookmark} handleReadingTime={handleReadingTime}></Blog>)
            }
            
        </div>
    );
};

Blogs.prototype ={
    handleAddToBookmark: PropTypes.func,
    handleReadingTime: PropTypes.func,
}

export default Blogs;