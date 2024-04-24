import {Text, BoxProps, Flex, Image, Center, Box} from '@chakra-ui/react'
import { Clickable } from 'presentation/common/Clickable'

interface Props extends BoxProps {
	name: string
	icon: string
	onClick: () => void
}

export function NavBarButton(props: Props) {
	const {name, icon, onClick, ...boxProps} = props
	return (
		<Clickable 
			onClick={onClick} 
			{...boxProps}
		>
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
		</Clickable>
	)
}