import { Box } from "@chakra-ui/react";

const BannerCard = ({ children, bg = "primaryGradient" }) => {
	return (
		<Box
			pos="relative"
			width="100%"
			margin="10px auto"
			flex="1"
			height="150px"
			bg={bg}
			borderRadius="15px"
			display="flex"
			padding="10px 5px"
			alignItems="center"
		>
			{children}
		</Box>
	);
};

export default BannerCard;
