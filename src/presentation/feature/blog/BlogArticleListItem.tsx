import {BlogArticle} from "../../../domain/model/BlogArticle";
import {Box, Text, Flex, Image, Center} from "@chakra-ui/react";
import React from "react";
import {Clickable} from "../../common/Clickable";

interface Props {
    article: BlogArticle
    onClick: () => void
}

export function BlogArticleListItem(props: Props) {
    return (
        <Clickable onClick={props.onClick} w={'full'}>
            <Flex direction={'row'} background={'#ddd'} padding={'15px'} borderRadius={'10px'} w={'full'}>
                <Center flex={1} borderRadius={'10px'} background={'#000'} overflow={'hidden'}>
                    <Image
                        src={props.article.image}
                        alt={''}
                        objectFit={'contain'}
                        h={'180px'}
                    />
                </Center>
                <Flex direction={'column'} paddingStart={{base: '15px', sm: '30px'}} paddingEnd={'10px'} flex={2} minW={'0px'}>
                    <Text textStyle={'subTitle'}>{props.article.title}</Text>
                    <Text textStyle={'body'} paddingTop={'20px'}>{props.article.publishDate}</Text>
                </Flex>
            </Flex>
        </Clickable>
    )
}