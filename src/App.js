import './App.css';
import { useState } from 'react'
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import Navbar from './components/Navbar';
import Footer from './components/Footer'
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
  // const { isOpen, onOpen, onClose } = useDisclosure()
  // const handleSpecificBookModal = (id) => {
  //   onOpen()
  // }

  return (
    <div className="App">
      <Navbar/>

      <Box 
        m="0 auto"
        maxW={{ '2xl':"1240px", xl: '1100px' }} 
        px={{ sm:"30px", md:'60px', lg: '50px', xl: '0px' }} 
        minH="100vh"
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
        
        <Flex flexWrap="wrap">
          {booksResult.map(book => (
            <Box key={book.id} m="20px 20px 40px 20px" >
              <Image w="175px" h="auto" src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}/>
              <Text 
                maxW="175px" 
                textAlign="center" 
                _hover={{ color:"blue" }} 
                cursor="pointer"
                // onClick={() => handleSpecificBookModal()}
                key={book.id}
                >
                  {book.volumeInfo.title}
                </Text>
              
                {/* <BookModal
                  book={book}
                  isOpen={IsOpen}
                  onClose={onClose}
                /> */}
            </Box>

          ))}
        </Flex>
      </Box>

      <Footer/>
    </div>
  );
}

export default App;
