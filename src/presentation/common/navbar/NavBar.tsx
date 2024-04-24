import {Image, Box, Flex, Spacer, Center, Text, HStack} from '@chakra-ui/react'
import { NavBarButton } from './NavBarButton'
import {openInCurrentTab} from "../../util/Window";
import {NavBarProvider} from "../../../domain/provider/NavBarProvider";
import { NavButtonData } from 'domain/model/NavButtonData';

interface Props {
    selectedNavButton: NavButtonData,
}

export function NavBar(props: Props) {
    const datas = NavBarProvider.datas
    return (
        <Flex direction={'column'} w={'100%'}>
            <Box h={'1px'} w={'100%'} background={'#fff'} />
            <HStack w='100%' spacing={'10px'} background={'#000'}>
                {
                    datas.map(it => {
                        const isSelected = it == props.selectedNavButton
                        const alpha = isSelected ? 1 : 0.4
                        return (
                            <NavBarButton
                                key={it.name}
                                opacity={alpha}
                                name={it.name}
                                icon={it.icon}
                                onClick={() => openInCurrentTab(it.url)}
                                flex={1}
                            />
                        )
                    })
                }
            </HStack>
        </Flex>
    )
}