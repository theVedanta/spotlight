import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";

const Section = ({ children, title, vertical, href }) => {
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

				<Box
					overflow="auto"
					whiteSpace="nowrap"
					display={!vertical && "flex"}
					padding="10px 5px"
				>
					{children}
				</Box>
			</Box>
		</>
	);
};

export default Section;
