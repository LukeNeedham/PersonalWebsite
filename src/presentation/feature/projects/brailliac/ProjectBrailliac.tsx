import { Box, Flex, Text, VStack } from '@chakra-ui/react'
import { ExternalLink } from '@/presentation/common/ExternalLink'
import { ProjectBrailleKeyboard } from '@/presentation/feature/projects/brailliac/ProjectBrailleKeyboard'
import { ProjectBrailleTutor } from '@/presentation/feature/projects/brailliac/ProjectBrailleTutor'
import { ProjectHeader } from '@/presentation/feature/projects/ProjectHeader'

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
          <Text textStyle="body">
            Brailliac is a collection of apps I design and develop to help people learn Braille. You
            can learn all about it at{' '}
            <ExternalLink
              href={brailliacUrl}
              display="inline"
              textStyle="body"
              textDecoration="underline"
            >
              Brailliac.com
            </ExternalLink>
          </Text>
        }
      />
      <Box h="100px" />
      <VStack gap="100px">
        <ProjectBrailleTutor />
        <ProjectBrailleKeyboard />
      </VStack>
    </Flex>
  )
}
