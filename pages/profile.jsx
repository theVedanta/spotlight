import Container from "../components/Container";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import {
	HiOutlineShoppingBag,
	HiOutlinePresentationChartBar,
} from "react-icons/hi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoHelpCircleOutline } from "react-icons/io5";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

const ProfileLinkItem = ({ icon, name, link }) => {
	return (
		<>
			<Box
				borderBottom="1px solid #eee"
				display="flex"
				alignItems="center"
				padding="10px "
				mb="8px"
			>
				{icon}
				<Link href={link}>
					<Text
						fontFamily="secondary"
						fontSize="14px"
						fontWeight="400"
						ml="12px"
					>
						{name}
					</Text>
				</Link>
			</Box>
		</>
	);
};

const profile = () => {
	return (
		<>
			<Container>
				<Box height="100%" display="flex" flexDir="column">
					<Box overflow="auto" flex="1" padding="0 " pb="10px">
						<Box display="flex" alignItems="center" mt="1.5rem">
							<Image
								src="/user_profile.jpg"
								width="60px"
								height="60px"
								borderRadius="50%"
							/>
							<Box pl="12px">
								<Text
									fontFamily="poppins"
									fontWeight="500"
									color="blackAlpha"
									fontSize="16px"
								>
									UserName
								</Text>
								<Text
									fontFamily="poppins"
									fontWeight="500"
									color="blackAlpha.600"
									fontSize="12px"
								>
									user@mail.com
								</Text>
							</Box>
						</Box>

						<Box padding="10px 0" mt="1rem">
							<ProfileLinkItem
								icon={
									<AiOutlineUser
										fontSize="19px"
										color="#333"
									/>
								}
								name="Edit Profile"
								link="#"
							/>
							<ProfileLinkItem
								icon={
									<HiOutlineShoppingBag
										fontSize="19px"
										color="#333"
									/>
								}
								name="Cart"
								link="/cart"
							/>
							<ProfileLinkItem
								icon={
									<AiOutlineHeart
										fontSize="19px"
										color="#333"
									/>
								}
								name="Favourites"
								link="#"
							/>
							<ProfileLinkItem
								icon={
									<HiOutlinePresentationChartBar
										fontSize="19px"
										color="#333"
									/>
								}
								name="Add Tutorial"
								link="#"
							/>

							<ProfileLinkItem
								icon={
									<IoIosNotificationsOutline
										fontSize="21px"
										color="#333"
									/>
								}
								name="Notifications"
								link="#"
							/>
							<ProfileLinkItem
								icon={
									<IoHelpCircleOutline
										fontSize="19px"
										color="#333"
									/>
								}
								name="Help"
								link="#"
							/>
						</Box>
					</Box>
					<Button
						height="auto"
						display="flex"
						justifyContent="space-between"
						alignItems="center"
						fontFamily="secondary"
						fontWeight="400"
						fontSize="14px"
						borderRadius="10px"
						padding="13px 20px"
						m="0 5px"
					>
						<Text>Log Out</Text>
						<FiLogOut fontSize="18px" />
					</Button>
				</Box>
			</Container>
		</>
	);
};

export default profile;
