
import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
    console.log(bookmarks);
    return (
        <div className="md:w-1/3 mt-8 ml-5 space-y-4">
            <div className="bg-slate-200  p-8 text-2xl font-bold rounded-lg">
                <h2 className="text-blue-600">Spent time on read: {readingTime} min</h2>
            </div>
            <div className=" bg-slate-200  rounded-lg p-5 space-y-4">
                <h2 className="text-2xl font-bold">Bookmarked Blogs: {bookmarks.length}</h2>
                <div className="space-y-3 ">
                    {
                        bookmarks.map((bookmark, i) => <Bookmark key={i} bookmark={bookmark}></Bookmark>)
                    }
                </div>
            </div>
        </div>

    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}

export default Bookmarks;