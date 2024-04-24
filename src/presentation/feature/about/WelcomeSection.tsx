import { Image, Box, Flex, Spacer, Center, Text } from '@chakra-ui/react'

export function WelcomeSection() {
	return (
    	<Flex direction={'column'} w='100%'>
    		<Center>
	    		<Image
				  borderRadius='full'
				  w='80%'
				  maxW='350px'
				  src='/asset/image/photo/posing.png'
				  alt='A mugshot of Luke Needham'
				/>
    		</Center>
    		<Box h='25px' />
    		<Center>
    			<Text textStyle={'body'} textAlign='center'>
    				Hi, I’m
    			</Text>
    		</Center>
    		<Center>
	    		<Text textStyle={'mainTitle'} textAlign='center'>
	    			Luke Needham
	    		</Text>
    		</Center>
    	</Flex>
	)
}