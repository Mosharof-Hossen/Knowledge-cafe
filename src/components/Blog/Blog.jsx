import PropTypes from 'prop-types';
import { IoBookmarksOutline } from "react-icons/io5";

const Blog = ({ blog , handleAddBookmarks ,handleMarkRead }) => {
    const {id, title, cover, reading_time, author, author_img, posted_date, hashtags
    } = blog; 
    return (
        <div className='py-8 space-y-4  border-b-2'>
            <img className='w-full' src={cover} alt='' />
            <div className='flex justify-between items-center'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl font-bold'>{author}</h3>
                        <p className='text-sm text-gray-500 font-semibold'>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center space-x-4'>
                    <span className='text-xl text-gray-500'>{reading_time} min read </span>
                    <button onClick={()=>handleAddBookmarks(blog)} className='text-'><IoBookmarksOutline /></button>
                </div>
            </div>
            <h2 className="text-4xl font-bold">{title}</h2>
            <p className='text-base text-gray-500'>
                {
                    hashtags.map((tag,i)=><span key={i}> {(i!=0) && <span>&nbsp; &nbsp;</span>} <a href=""> #{tag} </a> </span>)
                }
            </p>
            <button onClick={()=>handleMarkRead(id,reading_time)} className='underline text-blue-700 font-semibold'>Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddBookmarks: PropTypes.func.isRequired,
    handleMarkRead: PropTypes.func.isRequired
}

export default Blog;