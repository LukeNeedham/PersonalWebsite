'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import {Box, Flex, Center, ChakraProvider} from '@chakra-ui/react'
import { theme } from "presentation/theme/Theme"
import {NavBar} from "./navbar/NavBar";
import { NavButtonData } from 'domain/model/NavButtonData';

interface Props {
  selectedNavButton: NavButtonData,
  children: React.ReactNode,
}

/** Defines shared UI across all pages */
export function RootScaffold(
  props: Props
) {
  return (
      <Flex direction={'column'} w={'full'} h={'100vh'}>
        <Center
          flex={1}
          >
          <Box
            paddingTop={'50px'}
            paddingBottom={'80px'}
            h={'100%'}
            w={{ base: '90%', md: '80%', lg: '70%' }}
          >
            {props.children}
          </Box>
        </Center>
        <Flex
          pos="relative"
          position="sticky"
          bottom={0}
          >
          <NavBar selectedNavButton={props.selectedNavButton}/>
        </Flex>
      </Flex>
  )
}