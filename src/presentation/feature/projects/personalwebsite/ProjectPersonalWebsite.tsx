import React from "react";
import {Box, Flex, Spacer, Center, Text, Image, SimpleGrid, AspectRatio, VStack} from '@chakra-ui/react'
import {ProjectHeader} from "../ProjectHeader"

const projectUrl = 'https://github.com/LukeNeedham/PersonalWebsite'

export function ProjectPersonalWebsite() {
    return (
        <ProjectHeader
            imageUrl='/asset/image/photo/posing.png'
            imageAlt='A mugshot of Luke Needham'
            href={projectUrl}
            title={'Personal Website'}
            description={
                <Text textStyle='body'>
                    The website you&apos;re looking at right now! Check out the source code and icon credits{' '}
                    <Box as='a' href={projectUrl} target='_blank' rel='noopener noreferrer' display='inline' textStyle='body' textDecoration='underline'>
                        here
                    </Box>
                </Text>
            }
        />
    )
}