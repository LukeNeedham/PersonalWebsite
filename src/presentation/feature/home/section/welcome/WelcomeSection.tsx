import { Image, Box, Flex, Spacer, Center, Text } from '@chakra-ui/react'
import { SectionJumpButton } from 'presentation/feature/home/section/welcome/SectionJumpButton'
import { UrlProvider } from 'domain/provider/UrlProvider'

interface Props {
	anchor: string
	openSection: (url: string) => void
}

export function WelcomeSection(props: Props) {
	return (
    	<Flex direction={'column'} w='100%' id={props.anchor}>
    		<Center>
	    		<Image
				  borderRadius='full'
				  w='80%'
				  maxW='350px'
				  src='/asset/photo/posing.png'
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
    		<Box h='80px' />
    		<Flex direction={'row'} w='100%'>
    			<SectionJumpButton name={'About'} anchor={UrlProvider.anchor.about} flex={4} openSection={props.openSection} />
    			<Box flex={1} />
    			<SectionJumpButton name={'Projects'} anchor={UrlProvider.anchor.projects} flex={4} openSection={props.openSection} />
   			 <Box flex={1} />
    			<SectionJumpButton name={'Socials'} anchor={UrlProvider.anchor.socials} flex={4} openSection={props.openSection} />
    		</Flex>
    		<Box h='50px' />
    		<Center>
	    		<Text textStyle={'fine'}>
	    			Keep scrolling to learn more about me...
	    		</Text>
    		</Center>
    	</Flex>
	)
}