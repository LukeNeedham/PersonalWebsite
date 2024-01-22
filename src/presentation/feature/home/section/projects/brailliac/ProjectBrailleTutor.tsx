import { ProjectBrailliacSubsection } from 'presentation/feature/home/section/projects/brailliac/ProjectBrailliacSubsection'

interface Props {
	openProject: (url: string) => void
}

export function ProjectBrailleTutor(props: Props) {
	const image = {
		src: 'https://brailliac.com/image/detail_page_braille_tutor_2.png',
		alt: 'An example screenshot from Braille Tutor'
	}
	const url = 'https://brailliac.com#braille-tutor'
	return (
		<ProjectBrailliacSubsection
			title='Braille Tutor'
			description='A gamified educational app with over 200,000 downloads. With Braille Tutor, learning Braille is fast, free, and fun. Featuring 3 unique practise games and various unlockable themes.'
			image={image}
			openProject={ () => props.openProject(url) }
		/>
    )
}
