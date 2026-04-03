import {Text, BoxProps, Flex, Image, Center, Box} from '@chakra-ui/react'
import NextLink from 'next/link'

interface Props extends BoxProps {
	name: string
	icon: string
	href: string
}

export function NavBarButton(props: Props) {
	const {name, icon, href, ...boxProps} = props
	return (
		<Box display='inline-flex' {...boxProps}>
			<NextLink href={href} style={{display: 'inherit', width: '100%', cursor: 'pointer', textDecoration: 'none'}}>
				<Center w={'100%'} paddingTop={'10px'} paddingBottom={'5px'} paddingX={'5px'} >
					<Flex direction={'column'}>
						<Center w={'100%'}>
							<Image
								src={icon}
								alt={""}
								h={{base: '35px', sm: '50px', md: '50px'}}
							/>
						</Center>

						<Box h={'2px'} />

						<Center w={'100%'}>
							<Text
								color='#fff'
								textAlign='center'
								textStyle='body'
								w='100%'
							>
								{name}
							</Text>
						</Center>
					</Flex>
				</Center>
			</NextLink>
		</Box>
	)
}
