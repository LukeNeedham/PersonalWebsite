import { Box, Flex, Spacer, Center, Text, Image, SimpleGrid, AspectRatio, VStack } from '@chakra-ui/react'
import { ProjectBrailleKeyboard } from './ProjectBrailleKeyboard'
import { ProjectBrailleTutor } from './ProjectBrailleTutor'
import React from "react";
import {ProjectHeader} from "../ProjectHeader";

const brailliacUrl = 'https://Brailliac.com'

export function ProjectBrailliac() {
	return (
		<Flex direction={'column'}>
			<ProjectHeader
				imageUrl={'https://brailliac.com/image/logo_braille_tutor.webp'}
				imageAlt={'Brailliac logo'}
				href={brailliacUrl}
				title={'Brailliac'}
				description={
					<Text textStyle='body'>
						Brailliac is a collection of apps I design and develop to help people learn Braille.
						You can learn all about it at{' '}
						<Box as='a' href={brailliacUrl} target='_blank' rel='noopener noreferrer' display='inline' textStyle='body' textDecoration='underline'>
							Brailliac.com
						</Box>
					</Text>
				}
			/>
	    	<Box h='100px'/>
	    	<VStack direction={'column'} spacing='100px'>
	    		<ProjectBrailleTutor />
	    		<ProjectBrailleKeyboard />
	    	</VStack>
	    </Flex>
    )
}