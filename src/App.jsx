
import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'


import { useState } from 'react'

function App() {

  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const handleReadingTime = (id,time) =>{
    const newReadingTime = readingTime + time
    setReadingTime(newReadingTime)
    //remove the read blog from book mark
    //console.log('remove book mark id: ', id)

    const remainingBookmarks = bookmarks.filter(bookmark=> bookmark.id !== id)
    setBookmarks(remainingBookmarks)
  }

  const handleAddToBookmark = blog =>{
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)

  }

  

  return (
    <>
      <Header></Header>
      <div className='md:w-10/12 w-11/12 md:flex block mx-auto gap-[20px]'>

        <Blogs handleAddToBookmark={handleAddToBookmark}handleReadingTime={handleReadingTime}></Blogs>

        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
