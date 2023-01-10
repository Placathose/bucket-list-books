import './App.css';
import { useState } from 'react'
import { Box, Button } from '@chakra-ui/react'
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import BooksReturned from './components/BooksReturned';
import Pagination from './components/Pagination'
// import BookModal from './components/BookModal';

function App() {

  async function getData(event) {
    event.preventDefault();
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchBook}&filter=paid-ebooks&key=${apiKey}&maxResults=40`)
    const books = await response.json()
    setBooksResult(books.items)
    console.log(booksResult)
    // setBooksResult(books)
  }

  const apiKey = "AIzaSyCWDcqGulg03qdpK6ccKnIS1kO7WJJ61B0";
  const [searchBook, setSearchBook] = useState("");
  const [booksResult, setBooksResult] = useState([]);  
  //Pagination set up
  console.log(booksResult) 

  const[booksPerPage] = useState(10);
  const[currentPage, setCurrentPage] = useState(1);

  const indexOfLastPost = currentPage * booksPerPage;
  const indexOfFirstPost = indexOfLastPost - booksPerPage;
  const currentBooksResult = booksResult.slice(indexOfFirstPost, indexOfLastPost);
  console.log(currentBooksResult)
// 1. The paginate method that allows to change page onClick 
// 2. changing currentPage will change indexOfFirstPost and indexOfLastPost
  const paginate = (pageNumbers) => setCurrentPage(pageNumbers);
  
  return (
    <div className="App">
      <Navbar/>

      <Box 
        m="0 auto"
        maxW={{ '2xl':"1240px", xl: '1100px' }} 
        px={{ sm:"30px", md:'60px', lg: '50px', xl: '0px' }} 
        minH="100vh"
        pt="50px"
      >
        <input 
          placeholder='Search your books...'
          onChange={(event) => setSearchBook(event.target.value)} 
        />
        <Button
          onClick={getData}
        >
          Submit
        </Button>

        <BooksReturned currentBooksResult={currentBooksResult}/>
        <Pagination 
          booksPerPage={booksPerPage} 
          totalBooks={booksResult.length} 
          paginate={paginate}
        />

      </Box>

      <Footer/>
    </div>
  );
}

export default App;
