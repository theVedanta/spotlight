import { Box, Button, Grid, Image, Text } from "@chakra-ui/react";
import BannerCard from "../components/BannerCard";
import Container from "../components/Container";
import Logo from "../components/Logo";
import ProductItem from "../components/ProductItem";

const sell = () => {
	return (
		<>
			<Container>
				<Logo />
				<BannerCard bg="linear-gradient(to right, #4568dc, #b06ab3)">
					<Box>
						<Text
							fontFamily="secondary"
							fontSize="15px"
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
						fontWeight="400"
					>
						Your Artworks
					</Text>
					<Button
						fontFamily="secondary"
						fontSize="12px"
						fontWeight="400"
						bg="primary"
						color="white"
						borderRadius="10pc"
						height="auto"
						padding="12px"
					>
						Upload new art
					</Button>
				</Box>

				<Grid templateColumns="repeat(2,1fr)" gridGap="5px" mt="1rem">
					<ProductItem hideCartBtn={true} />
					<ProductItem hideCartBtn={true} />
					<ProductItem hideCartBtn={true} />
					<ProductItem hideCartBtn={true} />
				</Grid>
			</Container>
		</>
	);
};

export default sell;
