import {extendTheme} from "@chakra-ui/react";

const colors = {
}

const mainTitleSize = {base: '40px', sm: '50px', lg: '55px', xl: '60px'}

const textStyles = {
    mainTitle: {
        fontWeight: 700,
        fontSize: mainTitleSize,
        lineHeight: mainTitleSize,
    },
    subTitle: {
        fontWeight: 700,
        fontSize: {base: '20px', sm: '25px', lg: '35px', xl: '40px'},
        lineHeight: {base: '25px', sm: '30px', lg: '40px', xl: '45px'},
    },
    body: {
        fontWeight: 300,
        fontSize: {base: '14px', sm: '16px', lg: '18px', xl: '20px'},
    },
    fine: {
        fontWeight: 300,
        fontSize: {base: '12px', md: '16px'},
    },
}

export const theme = extendTheme(
    { 
        colors, 
        textStyles,
    }
)
