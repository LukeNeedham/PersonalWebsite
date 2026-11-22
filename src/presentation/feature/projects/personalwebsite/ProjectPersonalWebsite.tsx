import { Text } from '@chakra-ui/react'
import { ExternalLink } from '@/presentation/common/ExternalLink'
import { ProjectHeader } from '@/presentation/feature/projects/ProjectHeader'

const projectUrl = 'https://github.com/LukeNeedham/PersonalWebsite'

export function ProjectPersonalWebsite() {
  return (
    <ProjectHeader
      imageUrl="/asset/image/photo/posing.png"
      imageAlt="A mugshot of Luke Needham"
      href={projectUrl}
      title={'Personal Website'}
      description={
        <Text textStyle="body">
          The website you&apos;re looking at right now! Check out the source code and icon credits{' '}
          <ExternalLink
            href={projectUrl}
            display="inline"
            textStyle="body"
            textDecoration="underline"
          >
            here
          </ExternalLink>
        </Text>
      }
    />
  )
}
