import {extendTheme} from "@chakra-ui/react";

const colors = {
}

const mainTitleSize = {base: '50px', sm: '60px', lg: '65px', xl: '70px'}

const textStyles = {
    mainTitle: {
        fontWeight: 700,
        fontSize: mainTitleSize,
        lineHeight: mainTitleSize,
    },
    subTitle: {
        fontWeight: 700,
        fontSize: {base: '25px', sm: '30px', lg: '40px', xl: '45px'},
        lineHeight: {base: '30px', sm: '35px', lg: '45px', xl: '50px'},
    },
    body: {
        fontWeight: 300,
        fontSize: {base: '15px', sm: '20px', lg: '21px', xl: '25px'},
    },
    fine: {
        fontWeight: 300,
        fontSize: {base: '13px', md: '16px'},
    },
}

export const theme = extendTheme(
    { 
        colors, 
        textStyles,
    }
)
