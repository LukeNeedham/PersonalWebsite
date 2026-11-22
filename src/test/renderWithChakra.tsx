import { ChakraProvider } from '@chakra-ui/react'
import { render } from '@testing-library/react'
import type { ReactElement } from 'react'
import { system } from '@/presentation/theme/system'

/** Renders [element] in the theme of the site, as the app does. */
export function renderWithChakra(element: ReactElement) {
  return render(<ChakraProvider value={system}>{element}</ChakraProvider>)
}
