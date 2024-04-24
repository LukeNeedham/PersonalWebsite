import {Center, Flex, Text, VStack, Box} from "@chakra-ui/react"
import {useEffect, useState} from "react"
import Markdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { androidstudio } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface Props {
    contentFile: string
}

export function BlogArticlePageContent(props: Props) {
    const contentFile = props.contentFile
    
    const [content, setContent] = useState('');
    
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(contentFile)
            const text = await result.text()
            setContent(text)
        }
    
        fetchData()
    }, [contentFile])
    
    return (
        <Markdown
            children={content}
            components={{
                h1(props) {
                    return <Text textStyle={'mainTitle'} {...props} />
                },
                h2(props) {
                    return <Text textStyle={'subTitle'} {...props} />
                },
                p(props) {
                    return <Text textStyle={'body'} {...props} />
                },
                code(props) {
                    const {children, className, node, ...rest} = props
                    const match = /language-(\w+)/.exec(className || '')
                    if(match === null) {
                        return (
                            <code {...rest} className={className}>
                                {children}
                            </code>
                        )
                    }
                    return (
                        <SyntaxHighlighter
                            {...rest}
                            PreTag="div"
                            children={String(children).replace(/\n$/, '')}
                            language={match[1]}
                            style={androidstudio}
                        />
                        )
                }
            }}
        />
    )
}