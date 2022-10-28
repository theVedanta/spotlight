import { Box, Grid, Image, Text } from "@chakra-ui/react";
import Container from "../../components/Container";
import CategoryHeader from "../../components/CategoryHeader";
import ProductItem from "../../components/ProductItem";
import Logo from "../../components/Logo";
import SearchBar from "../../components/SearchBar";
import BannerCard from "../../components/BannerCard";

const Product = () => {
	return (
		<>
			<Container>
				<Logo />

				<SearchBar />

				<BannerCard>
					<Box>
						<Text
							fontFamily="tertiary"
							fontSize="15px"
							color="white"
							ml="10px"
						>
							Buy new fashion from all regions.
						</Text>
					</Box>
					<Image
						src="/home_banner1.png"
						width="55%"
						objectFit="contain"
					/>
				</BannerCard>
				<CategoryHeader />

				<Grid
					templateColumns="repeat(2,1fr)"
					gridGap="5px"
					margin="15px 0"
				>
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
			</Container>
		</>
	);
};

export default Product;
