import { Heading } from '@chakra-ui/react';
const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

export default function HomePage() {
  return (
    <div style={styles.container}>
       <Heading
          mt='15'
          mb='8'
          fontWeight='extrabold'
          size='3xl'
          bgGradient='linear(to-r, blue.500, purple.300, purple.500)'
          bgClip='text'>  Welcome to your Contacts</Heading>
   
    </div>
  );
}