import React from 'react'
import { Carousel } from 'react-responsive-carousel'    
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Box, Image, Heading, Container, Stack, Text, } from '@chakra-ui/react'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.png'

const headingOptions = {
    pos: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    fontSize: '3xl',
    fontWeight: 'bold',
    p: 4,
    borderRadius: 'md',
    size: '4xl'
}
const Home = () => {
  return (  
    // Box is a chakra ui component that is used to wrap other components 
    <Box>
        <MyCarousel/>

      {/* container is a chakra ui component that is used to wrap other components */}
        <Container maxW={'container.xl'} minH={'100vh'} p={16}>
            <Heading textTransform={'uppercase'} py='2' w="fit-content" borderBottom='2px solid' margin={'auto'}>
               Services
            </Heading>

            <Stack 
            h = {'100%'}
            p = {'4'}
            alignItems={'center'}
            justifyContent={'center'}
            direction={['column','column','column','row']} 
            // response to screen size using chakra ui responsive array syntax 
            >
            <Image src={img5} h={['40', '400']} filter={'hue-rotate(130deg)'} />
              <Text letterSpacing={'widest'} lineHeight={"190%"} p={['4','16']} textAlign={'center'}>
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita earum at odio molestias, provident ad assumenda, et ut suscipit nulla repudiandae. Consequuntur distinctio nemo quos incidunt iusto nesciunt recusandae aperiam!
               Voluptatem explicabo laudantium iste sit minima veniam similique assumenda excepturi quibusdam non dolor dicta, hic in velit quia possimus debitis totam culpa! Nisi, rerum nemo unde illo iusto fugiat in!Asperiores placeat facere voluptatum nisi necessitatibus sed non voluptas vel voluptates iure, consectetur eos debitis ab maiores aperiam, distinctio voluptate. Ipsam ducimus perspiciatis fugiat dolores corporis, voluptatem eaque quis. Fugit!Nihil repellendus architecto consequatur velit deserunt quidem sequi, impedit illo, aspernatur sapiente sit nulla. Corrupti nemo ullam voluptatibus recusandae praesentium. Sit velit vero quisquam odit omnis numquam enim culpa quia?
              </Text>
            </Stack>
        </Container>
    </Box>
    
  )
}

 const MyCarousel = () => {
    return (
        <Carousel autoPlay infiniteLoop showThumbs={false} showArrow = {false} showStatus={false}  interval={1000}>
        <Box w="full" h={"100vh"}>
        <Image src={img1} alt="img1" height={"full"}  w={"full"} objectFit={"cover"}/>
        <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
          Future is Gaming
        </Heading>
        </Box>
        
        <Box w="full" h={"100vh"}>
        <Image src={img2} alt="img2" height={"full"}  w={"full"} objectFit={"cover"}/>
        <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
          Watch the Future
        </Heading>
        </Box>

        
        <Box w="full" h={"100vh"}>
        <Image src={img3} alt="img3" height={"full"}  w={"full"} objectFit={"cover"}/>
        <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
         Gaming is console
        </Heading>
        </Box>

        <Box w="full" h={"100vh"}>
        <Image src={img4} alt="img4" height={"full"}  w={"full"} objectFit={"cover"}/>
        <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
          Night life is cool
        </Heading>
        </Box>
        </Carousel>
    )}

export default Home
