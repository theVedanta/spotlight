import { Box, Grid, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import BackBtn from "../../components/BackBtn";
import ProductItem from "../../components/ProductItem";

const search = () => {
	const router = useRouter();

	return (
		<>
			<Box p="0 10px" display="flex" alignItems="center">
				<BackBtn />
				<Text flex="1" textAlign="center" fontFamily="secondary">
					Search Results
				</Text>
			</Box>
			<Box padding=" 15px">
				<Text
					fontFamily="secondary"
					fontSize="14px"
					fontWeight="400"
					color="blackAlpha.700"
				>
					You Searched for:
				</Text>
				<Text
					fontFamily="secondary"
					fontSize="18px"
					color="blackAlpha.900"
				>
					{router.query.q}
				</Text>

				<Grid templateColumns="repeat(2,1fr)" gridGap="5px" mt="1rem">
					<ProductItem
						name="Women's Hoodie"
						price="$50.00"
						img="/product3.jpg"
					/>
					<ProductItem
						name="Women's Hoodie"
						price="$50.00"
						img="/product3.jpg"
					/>
					<ProductItem
						name="Women's Hoodie"
						price="$50.00"
						img="/product3.jpg"
					/>
					<ProductItem
						name="Women's Hoodie"
						price="$50.00"
						img="/product3.jpg"
					/>
				</Grid>
			</Box>
		</>
	);
};

export default search;
