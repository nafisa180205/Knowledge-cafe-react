import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({blog,handleAddToBookmark, handleReadingTime}) => {
    const {id,title, cover, author_img, reading_time,posted_date,author,hashtags} =blog
    return (
        <div className='space-y-3'>
    
            <img className='rounded-lg w-full' src={cover} alt={`cover picture of : ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex gap-3 justify-center items-center'>
                    <img className='w-10 h-10' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl font-bold'>{author}</h3>
                        <p className='text-gray-400'>{posted_date}</p>
                    </div>

                </div>

                <div className='flex justify-center items-center gap-2'>
                    <span className='text-gray-400'>{reading_time} min read</span>
                    <button className='text-gray-600 text-2xl' onClick={()=>{handleAddToBookmark(blog)}}><CiBookmark /></button>

                </div>
            </div>
            <h2 className='text-3xl font-bold  w-3/4'>{title}</h2>

            <p className='text-gray-400 flex gap-3'>
                {
                    hashtags.map((hashtag, idx)=> <span key={idx}><a href="">#{hashtag}</a></span>)
                }
            </p>

            <button onClick={()=>{handleReadingTime(id,reading_time)}} className='mb-10 text-[#6047EC] text-[20px] font-semibold underline'>
                Mark as read  
            </button>

            
            
        </div>
    );
};

export default Blog;

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleReadingTime: PropTypes.func,
}