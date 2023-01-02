import React from "react";
import Form from "./Form/Form";
import { Filter } from './Filter/Filter';
import { Loader } from "./Loader/Loader";
import { ContactList } from './ContactList/ContactList';
import { useEffect } from "react";
import { fetchContacts } from "redux/contacts/contacts-operations";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredContacts, selectIsLoading, selectError } from "redux/contacts/contacts-selector";
import { Heading } from '@chakra-ui/react';
import { VStack, Badge } from '@chakra-ui/react';

const Contacts = () => {

  const contacts = useSelector(getFilteredContacts);
  
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])
 
  return (
    <>
      <VStack>
        <Heading
          mb='8'
          fontWeight='extrabold'
          size='2xl'
          bgGradient='linear(to-r, blue.500, purple.300, purple.500)'
          bgClip='text'
        >Phonebook</Heading>
      </VStack>
      <VStack>
        <Form />
      </VStack>  

      <VStack>
        <Heading
          mt='20'
          mb='8'
          fontWeight='extrabold'
          size='2xl'
          bgGradient='linear(to-r, blue.500, purple.300, purple.500)'
          bgClip='text'> Contacts</Heading> 
 
        {contacts?.length === 0 && (<Badge p='3' borderRadius='lg' variant='outline'>
          The list is empty. Try to add contact</Badge>)}
        <Filter/>
        {contacts?.length > 0 && (<ContactList />)}
        {isLoading && !error && <Loader />}
      
        {error && <p>Oooops... Something went wrong</p>}
        </VStack>
      </>
    )
}

export default Contacts;