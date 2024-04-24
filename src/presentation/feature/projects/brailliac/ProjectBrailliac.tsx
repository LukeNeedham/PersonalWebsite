import { Box, Flex, Spacer, Center, Text, Image, SimpleGrid, AspectRatio, VStack } from '@chakra-ui/react'
import { Clickable } from 'presentation/common/Clickable'
import { ProjectBrailleKeyboard } from './ProjectBrailleKeyboard'
import { ProjectBrailleTutor } from './ProjectBrailleTutor'
import React from "react";
import {ProjectHeader} from "../ProjectHeader";

interface Props {
	openProject: (url: string) => void
}

export function ProjectBrailliac(props: Props) {
	function openBrailliac() {
		const url = 'https://Brailliac.com'
		props.openProject(url)
	}
	return (
		<Flex direction={'column'}>
			<ProjectHeader
				imageUrl={'https://brailliac.com/image/logo_braille_tutor.webp'}
				imageAlt={'Brailliac logo'}
				onImageClick={openBrailliac}
				title={'Brailliac'}
				description={
					<Text textStyle='body'>
						Brailliac is a collection of apps I design and develop to help people learn Braille.
						You can learn all about it at{' '}
						<Clickable onClick={openBrailliac} as='span' textStyle='body' textDecoration='underline'>
							Brailliac.com
						</Clickable>
					</Text>
				}
			/>
	    	<Box h='100px'/>
	    	<VStack direction={'column'} spacing='100px'>
	    		<ProjectBrailleTutor openProject={props.openProject} />
	    		<ProjectBrailleKeyboard openProject={props.openProject} />
	    	</VStack>
	    </Flex>
    )
}