
import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="w-1/3  mt-4">
            <div className='text-center text-[#6047EC] text-2xl font-semibold  bg-gray-300 rounded-xl py-5 border border-[#6047EC] mb-5'>
                <h3>Spent time on read : {readingTime} min</h3>
            </div>
            <div className='bg-gray-300 rounded-xl py-4'>
                <h2 className='pl-4 font-bold'>Book marks: {bookmarks.length}</h2>
                <div >
                {
                    bookmarks.map((bookmark,idx) => <Bookmark key={idx}  bookmark={bookmark} ></Bookmark>)
                }
                </div>
            </div>
            
        </div>
    );
};

Bookmarks.propTypes={
    bookmarks : PropTypes.array,
    readingTime: PropTypes.number,

}

export default Bookmarks;