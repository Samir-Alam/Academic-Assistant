import Navbar from '../components/Navbar'
import LibraryCanvas from '../components/LibraryCanvas'
// import Footer from '../components/Footer'

const Library = () => {
  return (
    <div className='bg-darkPrimary overflow-y-hidden pb-5'>
        <Navbar />
        <LibraryCanvas />
    </div>
  )
}

export default Library