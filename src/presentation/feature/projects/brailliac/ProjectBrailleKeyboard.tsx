import { ProjectBrailliacSubsection } from "./ProjectBrailliacSubsection"

export function ProjectBrailleKeyboard() {
	const image = {
		src: 'https://brailliac.com/image/detail_page_braille_keyboard_1.png',
		alt: 'An example screenshot from Braille Keyboard'
	}
	return (
		<ProjectBrailliacSubsection
			title='Braille Keyboard'
			description='A customisable Android system keyboard controlled with a Braille cell. Useful for typing Braille characters directly, or for practising Braille translation while typing in any other app!'
			image={image}
			href='https://brailliac.com#braille-keyboard'
		/>
    )
}