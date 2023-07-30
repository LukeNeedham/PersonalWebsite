import { Image } from '@chakra-ui/react'
import { Box, Flex, Spacer, Center, Text } from '@chakra-ui/react'

export function WelcomeSection() {
	return (
    	<Flex direction={'column'} w='100%'>
    		<Center>
	    		<Image
				  borderRadius='full'
				  boxSize='350px'
				  src='/asset/photo/posing.png'
				  alt='A mugshot of Luke Needham'
				/>
    		</Center>
    		<Box h='25px' />
    		<Center>
    			<Text textStyle={'body'}>
    				Hi, I'm
    			</Text>
    		</Center>
    		<Center>
	    		<Text textStyle={'mainTitle'}>
	    			Luke Needham
	    		</Text>
    		</Center>
    		<Box h='50px' />
    		<Center>
	    		<Text textStyle={'fine'}>
	    			Keep scrolling to learn more about me...
	    		</Text>
    		</Center>
    	</Flex>
	)
}