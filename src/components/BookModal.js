import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text
  // useDisclosure
} from '@chakra-ui/react'

export default function BookModal({ book, isOpen, onClose, modalId   }) {
  const { id, title, authors, categories, description, imageLinks, previewLink } = book.volumeInfo;
  // const [isOpen, onClose] = useDisclosure();

  return (
    <div key={id}>
      <Modal  isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {description}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>

            <Button 
              variant='ghost'
              onClick={(e) => {
                e.preventDefault();
                window.location.href={previewLink};
                }} 
                target="_blank"
            >
              Learn More
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal> 
    </div>
  )
}
