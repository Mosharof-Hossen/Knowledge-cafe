
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddBookmarks = (blog) => {
    setBookmarks([...bookmarks, blog]);
  }

  const handleMarkRead = (id, time) => {
    setReadingTime(readingTime + time);
    const remainingBookmarks = bookmarks.filter((bm) => bm.id != id);
    setBookmarks(remainingBookmarks);
  }
  console.log(readingTime);
  return (
    <div className='container mx-auto md:p-12 p-5'>
      <Header></Header>
      <div className='md:flex max-w-6xl mx-auto'>
        <Blogs handleAddBookmarks={handleAddBookmarks} handleMarkRead={handleMarkRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </div>
  )
}

export default App
