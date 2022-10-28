import { Box, Button, Grid, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import BannerCard from "../../components/BannerCard";
import Container from "../../components/Container";
import Logo from "../../components/Logo";
import ProductItem from "../../components/ProductItem";
import WelcomeHeading from "../../components/WelcomeHeading";

const sell = () => {
	return (
		<>
			<Container>
				<Logo />
				<WelcomeHeading name="Vedanta Somanthe" />
				<BannerCard bg="linear-gradient(to right, #4568dc, #b06ab3)">
					<Box>
						<Text
							fontFamily="tertiary"
							fontSize="15px"
							fontWeight="500"
							color="white"
							ml="10px"
						>
							Sell your artwork across the globe.
						</Text>
					</Box>
					<Image
						src="/sell_banner.png"
						width="55%"
						objectFit="contain"
					/>
				</BannerCard>

				<Box
					display="flex"
					justifyContent="space-between"
					alignItems="center"
				>
					<Text
						fontFamily="secondary"
						fontSize="15px"
						fontWeight="500"
						color="blackAlpha.800"
					>
						Your Artworks
					</Text>
					<Link href="/sell/upload" passHref>
						<Button
							fontFamily="tertiary"
							fontSize="12px"
							fontWeight="400"
							bg="secondary"
							color="white"
							borderRadius="10pc"
							height="auto"
							padding="12px 15px"
						>
							Upload new art
						</Button>
					</Link>
				</Box>

				<Grid templateColumns="repeat(2,1fr)" gridGap="5px" mt="1rem">
					<ProductItem
						name="Women's Hoodie"
						price="$50.00"
						img="/product3.jpg"
						hideCartBtn={true}
					/>
					<ProductItem
						name="Women's Hoodie"
						price="$50.00"
						img="/product3.jpg"
						hideCartBtn={true}
					/>
					<ProductItem
						name="Women's Hoodie"
						price="$50.00"
						img="/product3.jpg"
						hideCartBtn={true}
					/>
					<ProductItem
						name="Women's Hoodie"
						price="$50.00"
						img="/product3.jpg"
						hideCartBtn={true}
					/>
				</Grid>
			</Container>
		</>
	);
};

export default sell;
