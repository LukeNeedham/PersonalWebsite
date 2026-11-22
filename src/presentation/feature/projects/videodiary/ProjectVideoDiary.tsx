import { Text } from '@chakra-ui/react'
import NextLink from 'next/link'
import { ProjectHeader } from '@/presentation/feature/projects/ProjectHeader'

interface Props {
  imageUrl: string
  href: string
}

export function ProjectVideoDiary({ imageUrl, href }: Props) {
  return (
    <ProjectHeader
      imageUrl={imageUrl}
      imageAlt="The logo of Video Diary"
      href={href}
      title={'Video Diary'}
      description={
        <Text textStyle="body">
          An Android app for anyone who&apos;s ever felt the urge to record snippets of their daily
          life. Read all about it, including why I built it, in my{' '}
          <NextLink href={href} style={{ textDecoration: 'underline' }}>
            blog post
          </NextLink>
        </Text>
      }
    />
  )
}
