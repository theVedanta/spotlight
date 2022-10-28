import { Box, Button } from "@chakra-ui/react";

const CategoryItem = ({ active, name }) => {
	return (
		<>
			<Button
				fontSize="12px"
				fontFamily="secondary"
				fontWeight={active ? "400" : "500"}
				borderRadius="10pc"
				height="auto"
				padding="10px 15px"
				m="0 3px"
				background={active && "secondary"}
				color={active && "white"}
			>
				{name}
			</Button>
		</>
	);
};

const CategoryHeader = () => {
	return (
		<Box
			margin="1.2rem auto"
			width="100%"
			overflow="auto"
			whiteSpace="nowrap"
		>
			<CategoryItem name="New Arrival" active={true} />
			<CategoryItem name="Popular" />
			<CategoryItem name="Recommended" />
			<CategoryItem name="Category 1" />
			<CategoryItem name="Category 2" />
			<CategoryItem name="Category 3" />
		</Box>
	);
};

export default CategoryHeader;
