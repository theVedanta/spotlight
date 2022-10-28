import { Box, Image, Text } from "@chakra-ui/react";
import BannerCard from "../components/BannerCard";
import CategoryHeader from "../components/CategoryHeader";
import Container from "../components/Container";
import Logo from "../components/Logo";
import TutorialItem from "../components/TutorialItem";

const learn = () => {
	return (
		<>
			<Container>
				<Logo />
				<BannerCard bg="linear-gradient(to right, #ef32d9, #89fffd)">
					<Box>
						<Text
							fontFamily="secondary"
							fontSize="15px"
							color="white"
							ml="10px"
						>
							Learn new skills with large community.
						</Text>
					</Box>
					<Image
						src="/learn_banner1.png"
						width="55%"
						objectFit="contain"
					/>
				</BannerCard>

				<CategoryHeader />
				<TutorialItem />
				<TutorialItem />
				<TutorialItem />
			</Container>
		</>
	);
};

export default learn;
