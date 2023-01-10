import React from 'react'
import { Button, Flex, Image, Text } from '@chakra-ui/react'

export default function BooksReturned({currentBooksResult}) {
  return (
    <div>
      <Flex flexWrap="wrap">
      {currentBooksResult.map(book => (
            <Flex key={book.id} m="20px 20px 40px 20px" flexDir="column">
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

                <Button
                  // onClick={}
                >
                  Add to bucket
                </Button>
              
                {/* <BookModal
                  book={book}
                  isOpen={IsOpen}
                  onClose={onClose}
                /> */}
            </Flex>
          ))}
          </Flex>
    </div>
  )
}
