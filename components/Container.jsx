import { Box, Grid } from "@chakra-ui/react";
import { BiHomeAlt } from "react-icons/bi";
import {
	HiOutlinePresentationChartBar,
	HiOutlineShoppingBag,
} from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { BsCreditCard2Front } from "react-icons/bs";
import BottomNavItem from "./BottomNavItem";

const Container = ({ children }) => {
	return (
		<>
			<Box height="100vh" display="flex" flexDir="column">
				<Box overflow="auto" flex="1" padding="0 15px" pb="10px">
					{children}
				</Box>
				<Grid
					templateColumns="repeat(5, 1fr)"
					pt="10px"
					pb="5px"
					bg="white"
					boxShadow="1px 1px 10px rgba(0,0,0,0.2)"
					borderRadius="15px 15px 0 0"
				>
					<BottomNavItem
						href="/"
						icon={<BiHomeAlt fontSize="20px" />}
					/>
					<BottomNavItem
						href="/buy"
						icon={<HiOutlineShoppingBag fontSize="19px" />}
					/>
					<BottomNavItem
						href="/sell"
						icon={<BsCreditCard2Front fontSize="19px" />}
					/>
					<BottomNavItem
						href="/learn"
						icon={<HiOutlinePresentationChartBar fontSize="20px" />}
					/>
					<BottomNavItem
						href="/profile"
						icon={<AiOutlineUser fontSize="20px" />}
					/>
				</Grid>
			</Box>
		</>
	);
};

export default Container;
