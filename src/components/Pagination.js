import React from 'react'
import { Flex, Button } from '@chakra-ui/react'

export default function Pagination({ booksPerPage, totalBooks, paginate }) {
  console.log(totalBooks)
  const pageNumbers = [];

  for( let i = 1; i <= Math.ceil( totalBooks / booksPerPage ); i++) {
    pageNumbers.push(i)
  };

  return (
    <div>
       <Flex>

            {pageNumbers.map(page => (
              <Button key={page} mr="20px">
                <a onClick={() => paginate(page)} href='!#'>
                  {page}
                </a>
              </Button>
            ))}

      </Flex>
    </div>
  )
}
