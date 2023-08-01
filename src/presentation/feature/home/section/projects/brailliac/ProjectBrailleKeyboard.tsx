import { ProjectBrailliacSubsection } from 'presentation/feature/home/section/projects/brailliac/ProjectBrailliacSubsection'

interface Props {
	openProject: (url: string) => void
}

export function ProjectBrailleKeyboard(props: Props) {
	const image = {
		src: 'https://brailliac.com/image/detail_page_braille_keyboard_1.png',
		alt: 'An example screenshot from Braille Keyboard'
	}
	const url = 'https://brailliac.com#braille-keyboard'
	return (
		<ProjectBrailliacSubsection
			title='Braille Keyboard'
			description='A customisable Android system keyboard controlled with a Braille cell. Useful for typing Braille characters directly, or for practising Braille translation while typing in any other app!'
			image={image}
			openProject={ () => props.openProject(url) }
		/>
    )
}