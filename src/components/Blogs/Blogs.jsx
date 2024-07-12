import { useState } from "react";
import { useEffect } from "react";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    console.log(blogs);
    return (
        <div className="md:w-2/3">
            <h2>Blogs {blogs.length}</h2>
        </div>
    );
};

export default Blogs;