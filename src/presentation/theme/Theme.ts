import {extendTheme} from "@chakra-ui/react";

const colors = {
}

const textStyles = {
    mainTitle: {
        fontWeight: 700,
        fontSize: {base: '70px'},
        margin: '0px',
    },
    subTitle: {
        fontWeight: 700,
        fontSize: {base: '50px'},
        margin: '0px',
    },
    body: {
        fontWeight: 300,
        fontSize: {base: '30px'},
        margin: '0px',
    },
    fine: {
        fontWeight: 300,
        fontSize: {base: '18px'},
        margin: '0px',
    },
}

export const theme = extendTheme(
    { 
        colors, 
        textStyles,
    }
)
