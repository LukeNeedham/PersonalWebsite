import { ProjectBrailliacSubsection } from 'presentation/feature/home/section/projects/brailliac/ProjectBrailliacSubsection'

export function ProjectBrailleKeyboard() {
	const image = {
		src: 'https://brailliac.com/image/detail_page_braille_keyboard_1.png',
		alt: 'An example screenshot from Braille Keyboard'
	}
	return (
		<ProjectBrailliacSubsection
			title='Braille Keyboard'
			description='A customisable Android keyboard for typing Braille'
			image={image}
		/>
    )
}