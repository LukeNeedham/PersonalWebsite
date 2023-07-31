import { ProjectBrailliacSubsection } from 'presentation/feature/home/section/projects/brailliac/ProjectBrailliacSubsection'

export function ProjectBrailleTutor() {
	const image = {
		src: 'https://brailliac.com/image/detail_page_braille_tutor_2.png',
		alt: 'An example screenshot from Braille Tutor'
	}
	return (
		<ProjectBrailliacSubsection
			title='Braille Tutor'
			description='A gamified educational app with 180,000 downloads'
			image={image}
		/>
    )
}