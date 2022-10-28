import { Box, Text } from "@chakra-ui/react";

const LearnBannerItem = ({
	src = "https://imageio.forbes.com/specials-images/imageserve/630ba821d69afea53868ecce/a-sprawling-white-sand-beach-lined-with-palm-trees-against-a-bright-crimson-sunset/0x0.jpg?format=jpg&crop=1728,972,x0,y0,safe&width=960",
	name,
}) => {
	return (
		<>
			<Box
				minHeight="90px"
				borderRadius="10px"
				pos="relative"
				background={`url("${src}"), rgba(0,0,0,1)`}
				bgSize="cover"
				bgRepeat="no-repeat, repeat"
				overflow="hidden"
			>
				<Box
					pos="absolute"
					w="100%"
					h="100%"
					bg="rgba(0,0,0,0.2)"
				></Box>
				<Text
					pos="absolute"
					bottom="10px"
					left="10px"
					fontSize="12px"
					fontFamily="tertiary"
					color="white"
					fontWeight="500"
				>
					{name}
				</Text>
			</Box>
		</>
	);
};

export default LearnBannerItem;
