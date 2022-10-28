import { Box, Button, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

const ProductItem = ({ hideCartBtn, boxStyle, img, name, price }) => {
	return (
		<>
			<Box
				bg="white"
				boxShadow="1px 0 10px rgba(0,0,0,0.06)"
				borderRadius="10px"
				padding="10px 0"
				{...boxStyle}
			>
				<Image
					src="/product3.jpg"
					width="90%"
					height="150px"
					margin="auto"
					borderRadius="10px"
				/>
				<Link passHref href="/buy/name">
					<Text
						fontFamily="primary"
						fontSize="12px"
						fontWeight="500"
						margin="0px 10px"
						mt="10px"
						color="blackAlpha.700"
					>
						Women's Hoodie
					</Text>
				</Link>
				<Text
					fontFamily="primary"
					fontSize="15px"
					fontWeight="500"
					margin="2px 10px"
				>
					$50.00
				</Text>
				{!hideCartBtn && (
					<Button
						fontFamily="primary"
						bg="secondary"
						fontSize="12px"
						height="auto"
						color="white"
						fontWeight="500"
						width="90%"
						padding="11px 0"
						display="block"
						margin="0px auto"
						mt="8px"
						borderRadius="10px"
					>
						Add To Cart
					</Button>
				)}
			</Box>
		</>
	);
};

export default ProductItem;
