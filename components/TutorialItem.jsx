import { Box, Text } from "@chakra-ui/react";

const TutorialItem = () => {
	return (
		<Box
			boxShadow="0 0 10px rgba(0, 0, 0, 0.1)"
			borderRadius="10px"
			mt="10px"
			padding="10px"
		>
			<Box minHeight="150px" width="100%">
				<iframe
					width="100%"
					height="100%"
					src="https://www.youtube.com/embed/gfDE2a7MKjA"
					title="Python Tutorial For Beginners In Hindi (With Notes) 🔥"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
				></iframe>
			</Box>

			<Text
				fontFamily="secondary"
				fontSize="15px"
				fontWeight="400"
				color="blackAlpha.900"
				mt="10px"
			>
				Some Tutorial Name
			</Text>
			<Box display="flex" alignItems="center" mt="2px" mb="5px">
				<Text
					fontFamily="secondary"
					fontSize="12px"
					fontWeight="400"
					color="blackAlpha.500"
				>
					By David - 19/02/2022
				</Text>
			</Box>
		</Box>
	);
};

export default TutorialItem;
