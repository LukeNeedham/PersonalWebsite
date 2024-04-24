import {extendTheme} from "@chakra-ui/react";

const colors = {
}

const mainTitleSize = {base: '50px', sm: '60px', lg: '65px', xl: '70px'}
const subTitleSize = {base: '25px', sm: '30px', lg: '40px', xl: '45px'}

const textStyles = {
    mainTitle: {
        fontWeight: 700,
        fontSize: mainTitleSize,
        lineHeight: mainTitleSize,
        margin: '0px',
    },
    subTitle: {
        fontWeight: 700,
        fontSize: subTitleSize,
        lineHeight: subTitleSize,
        margin: '0px',
    },
    body: {
        fontWeight: 300,
        fontSize: {base: '15px', sm: '20px', lg: '21px', xl: '25px'},
        margin: '0px',
    },
    fine: {
        fontWeight: 300,
        fontSize: {base: '13px', md: '16px'},
        margin: '0px',
    },
}

export const theme = extendTheme(
    { 
        colors, 
        textStyles,
    }
)
