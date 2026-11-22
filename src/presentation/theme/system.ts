import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

// Text is never sized in a component: a component picks one of these styles with `textStyle`
const config = defineConfig({
  // The body text colour of Chakra 2 (gray.800), which the site was designed with: Chakra 3's is a little darker
  globalCss: { body: { color: '#1A202C' } },
  theme: {
    // The breakpoints of Chakra 2, which the layout was made with (Chakra 3 has 1024px for lg)
    breakpoints: { sm: '30em', md: '48em', lg: '62em', xl: '80em', '2xl': '96em' },
    textStyles: {
      mainTitle: {
        value: {
          fontWeight: '700',
          fontSize: { base: '40px', sm: '50px', lg: '55px', xl: '60px' },
          lineHeight: { base: '40px', sm: '50px', lg: '55px', xl: '60px' },
        },
      },
      subTitle: {
        value: {
          fontWeight: '700',
          fontSize: { base: '20px', sm: '25px', lg: '35px', xl: '40px' },
          lineHeight: { base: '25px', sm: '30px', lg: '40px', xl: '45px' },
        },
      },
      body: {
        value: {
          fontWeight: '300',
          fontSize: { base: '14px', sm: '16px', lg: '18px', xl: '20px' },
        },
      },
      fine: {
        value: {
          fontWeight: '300',
          fontSize: { base: '12px', md: '16px' },
        },
      },
    },
  },
})

export const system = createSystem(defaultConfig, config)
