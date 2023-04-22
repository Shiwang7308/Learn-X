import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Button,
    useDisclosure,
    VStack,
    HStack,
} from '@chakra-ui/react'

import {Link} from 'react-router-dom'
import {BiMenuAltLeft} from 'react-icons/bi'

const Header = () => {

    const {isOpen,onOpen,onClose} = useDisclosure()
  return (
    <div>
        <Button
        zIndex={'overlay'}
        colorScheme= "teal"
        pos = "fixed"
        top = {'4'}
        left= {4}
        p = {0}
        h = {'10'}
        w = {'10'}
        borderRadius = {'50%'}
        onClick = {onOpen}  
        >
       <BiMenuAltLeft size={'20'}/>
        </Button>
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}> 
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerCloseButton marginTop={2}/>
                    <DrawerHeader fontWeight={'bold'}>LearnX</DrawerHeader>
                    <DrawerBody>
                      <VStack alignItems={"center"}>
                        <Button onClick={onClose} colorScheme='teal' variant='ghost'>
                            <Link to = "/">Home</Link>
                        </Button>

                        <Button onClick={onClose} colorScheme='teal' variant='ghost'>
                            <Link to = "/videos">Videos</Link>
                        </Button>

                        <Button onClick={onClose} colorScheme='teal' variant='ghost'>
                            <Link to = "/videos?category=free">Free Videos</Link>
                        </Button>

                        <Button onClick={onClose} colorScheme='teal' variant='ghost'>
                            <Link to = "/upload">Upload Video</Link>
                        </Button>

                      </VStack>

                      <HStack pos={'absolute'} bottom={10} left={20}>
                           
                           <Button onClick={onClose} colorScheme='teal'>
                                 <Link to = "/login">Login</Link>
                           </Button>
                           <Button onClick={onClose} colorScheme='teal' variant={'outline'} >
                                    <Link to = "/signup">Signup</Link>
                           </Button>
                      </HStack>
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>


    </div>
  )
}

export default Header
