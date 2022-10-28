import { Box, Button, Grid, Text } from "@chakra-ui/react";
import Container from "../components/Container";
import Logo from "../components/Logo";
import SearchBar from "../components/SearchBar";
import { BsListUl } from "react-icons/bs";
import LearnBlogsItem from "../components/LearnBlogsItem";
import LearnBannerItem from "../components/LearnBannerItem";
import WelcomeHeading from "../components/WelcomeHeading";

const learn = () => {
	return (
		<>
			<Container>
				<Logo />
				<WelcomeHeading name="Vedanta Somanthe" />

				<Box
					display="flex"
					alignItems="center"
					justifyContent="space-between"
				>
					<SearchBar />
					<Button bg="secondary" color="white" padding="5px" ml="8px">
						<BsListUl fontSize="19px" />
					</Button>
				</Box>

				<Grid templateColumns="repeat(2,1fr)" gridGap="5px" m="10px 0">
					<LearnBannerItem name="Fashion Principles" />
					<LearnBannerItem name="Fashion Principles" />
					<LearnBannerItem name="Fashion Principles" />
					<LearnBannerItem name="Fashion Principles" />
					<LearnBannerItem name="Fashion Principles" />
					<LearnBannerItem name="Fashion Principles" />
				</Grid>

				<Text fontFamily="tertiary" fontWeight="bold" fontSize="15px">
					Blogs in the SpotLight
				</Text>
				<Grid templateColumns="repeat(2,1fr)" gridGap="5px" mt="10px">
					<LearnBlogsItem title="How to get rich" user="David" />
					<LearnBlogsItem title="How to get rich" user="David" />
					<LearnBlogsItem title="How to get rich" user="David" />
					<LearnBlogsItem title="How to get rich" user="David" />
					<LearnBlogsItem title="How to get rich" user="David" />
				</Grid>
			</Container>
		</>
	);
};

export default learn;
