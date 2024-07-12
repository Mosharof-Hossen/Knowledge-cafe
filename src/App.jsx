
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  return (
    <div className='container mx-auto'>
      <Header></Header>
      <div className='md:flex p-4 mx-4'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </div>
  )
}

export default App
