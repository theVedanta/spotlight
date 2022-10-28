import { Box, Grid, Text } from "@chakra-ui/react";
import Link from "next/link";

const Section = ({ children, title, vertical, href, isGrid }) => {
	return (
		<>
			<Box margin="1rem 0">
				<Box
					display="flex"
					alignItems="center"
					justifyContent="space-between"
				>
					<Text
						fontFamily="secondary"
						fontSize="15px"
						fontWeight="500"
						color="blackAlpha.800"
					>
						{title}
					</Text>

					<Link href={href} passHref>
						<Text
							fontFamily="secondary"
							fontSize="12px"
							fontWeight="500"
							color="primary"
						>
							See more
						</Text>
					</Link>
				</Box>

				{isGrid ? (
					<Grid
						templateColumns="repeat(2,1fr)"
						padding="10px 5px"
						gridGap="5px"
					>
						{children}
					</Grid>
				) : (
					<Box
						overflow="auto"
						whiteSpace="nowrap"
						display={!vertical && "flex"}
						padding="10px 5px"
					>
						{children}
					</Box>
				)}
			</Box>
		</>
	);
};

export default Section;
