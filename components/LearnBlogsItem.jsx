import { Box, Image, Text } from "@chakra-ui/react";

const LearnBlogsItem = ({ title, user }) => {
	return (
		<>
			<Box bg="secondary" borderRadius="10px" padding="10px">
				<Box mb="0.7rem" display="flex" justifyContent="flex-end">
					<Image
						src="/pie-chart.png"
						width="23px"
						filter="invert(1)"
					/>
				</Box>
				<Text
					fontFamily="tertiary"
					fontSize="12px"
					color="white"
					fontWeight="600"
				>
					{title}
				</Text>
				<Text
					fontFamily="tertiary"
					fontSize="11px"
					color="whiteAlpha.800"
					fontWeight="400"
					mt="5px"
				>
					{user}
				</Text>
			</Box>
		</>
	);
};

export default LearnBlogsItem;
