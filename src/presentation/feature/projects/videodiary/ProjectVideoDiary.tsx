import React from "react";
import {Box, Flex, Spacer, Center, Text, Image, SimpleGrid, AspectRatio, VStack} from '@chakra-ui/react'
import {ProjectHeader} from "../ProjectHeader"
import {Clickable} from 'presentation/common/Clickable'
import {BlogArticleProvider} from "domain/provider/BlogArticleProvider";

interface Props {
    openBlogArticle: () => void
}

export function ProjectVideoDiary(props: Props) {
    const blogArticle = BlogArticleProvider.articlesMap.videoDiary
    return (
        <ProjectHeader
            imageUrl={blogArticle.image}
            imageAlt='The logo of Video Diary'
            onImageClick={props.openBlogArticle}
            title={'Video Diary'}
            description={
            <Text textStyle='body'>
                An Android app for anyone who&apos;s ever felt the urge to record snippets of their daily life.
                Read all about it, including why I built it, in my{' '}
                <Clickable onClick={props.openBlogArticle} as='span' textStyle='body' textDecoration='underline'>
                    blog post
                </Clickable>
            </Text>
            }
        />
    )
}