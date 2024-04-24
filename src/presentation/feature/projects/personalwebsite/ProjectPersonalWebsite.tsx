import React from "react";
import { Box, Flex, Spacer, Center, Text, Image, SimpleGrid, AspectRatio, VStack } from '@chakra-ui/react'
import { ProjectHeader } from "../ProjectHeader"
import { Clickable } from 'presentation/common/Clickable'

interface Props {
    openProject: () => void
}

export function ProjectPersonalWebsite(props: Props) {
    return (
        <ProjectHeader
            imageUrl='/asset/image/photo/posing.png'
            imageAlt='A mugshot of Luke Needham'
            onImageClick={ () => {} }
            title={'Personal Website'}
            description={
            <Text textStyle='body'>
                The website you're looking at right now! Check out the source code and icon credits{' '}
                <Clickable onClick={props.openProject} as='span' textStyle='body' textDecoration='underline'>
                    here
                </Clickable>
            </Text>
            }
        />
    )
}