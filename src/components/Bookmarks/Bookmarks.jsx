
import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks}) => {
    console.log(bookmarks);
    return (
        <div className="md:w-1/3 bg-slate-200 mt-8 ml-5 rounded-lg p-5 space-y-4">
            <h2 className="text-2xl font-bold">Bookmarked Blogs: {bookmarks.length}</h2>
            <div className="space-y-3 ">
                {
                    bookmarks.map((bookmark,i)=> <Bookmark key = {i} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks : PropTypes.array.isRequired
}

export default Bookmarks;