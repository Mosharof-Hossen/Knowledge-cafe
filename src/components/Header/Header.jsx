import { useEffect } from "react";
import { useState } from "react";
import profile from '../../assets/images/profile.png'
const Header = () => {

    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    console.log(blogs);
    return (
        <div className="flex justify-between items-center p-4 mx-4 border-b-2">
            <h2 className="text-4xl font-bold">Knowledge Cafe</h2>
            <img src={profile} alt=""  />
        </div>
    );
};

export default Header;