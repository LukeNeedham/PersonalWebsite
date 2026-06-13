import React from "react";
import {Box, Flex, Spacer, Center, Text, Image, SimpleGrid, AspectRatio, VStack} from '@chakra-ui/react'
import {ProjectHeader} from "../ProjectHeader"
import {BlogArticleProvider} from "domain/provider/BlogArticleProvider";
import {UrlProvider} from "domain/provider/UrlProvider";
import NextLink from 'next/link'

export function ProjectVideoDiary() {
    const blogArticle = BlogArticleProvider.articlesMap.videoDiary
    const blogArticleHref = UrlProvider.blogArticle(blogArticle.id)
    return (
        <ProjectHeader
            imageUrl={blogArticle.image}
            imageAlt='The logo of Video Diary'
            href={blogArticleHref}
            title={'Video Diary'}
            description={
            <Text textStyle='body'>
                An Android app for anyone who&apos;s ever felt the urge to record snippets of their daily life.
                Read all about it, including why I built it, in my{' '}
                <NextLink href={blogArticleHref} style={{textDecoration: 'underline'}}>
                    blog post
                </NextLink>
            </Text>
            }
        />
    )
}
