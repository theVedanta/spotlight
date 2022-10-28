import { Box, Heading, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import BannerCard from "../components/BannerCard";
import Container from "../components/Container";
import Logo from "../components/Logo";
import ProductItem from "../components/ProductItem";
import SearchBar from "../components/SearchBar";
import Section from "../components/Section";
import TutorialItem from "../components/TutorialItem";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";

const Home = ({ authed }) => {
	return (
		<>
			{/* <h1>Hello World</h1>
            <Link href="/auth">
                <Button colorScheme="purple">Auth</Button>
            </Link>
            <br />
            {authed ? "Hi User" : "Hi non-user"} */}

			<Container>
				<Logo />
				<Heading
					fontFamily="primary"
					fontSize="20px"
					lineHeight="1.8rem"
					color="blackAlpha.800"
				>
					Hi, Welcome <br /> to{" "}
					<span style={{ color: "#F47C49" }}>Spot</span>
					<span style={{ color: "#5c2ede" }}>Light</span>
				</Heading>
				<SearchBar />

				<Carousel
					autoPlay
					infiniteLoop
					showIndicators={false}
					showStatus={false}
					showThumbs={false}
					showArrows={false}
					transitionTime={400}
				>
					<BannerCard>
						<Box>
							<Text
								fontFamily="secondary"
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
				</Carousel>

				<Section title="Your Arts">
					<ProductItem
						minWidth="150px"
						boxStyle={{ minWidth: "150px", mr: "5px" }}
						hideCartBtn={true}
					/>
					<ProductItem
						minWidth="150px"
						boxStyle={{ minWidth: "150px", mr: "5px" }}
						hideCartBtn={true}
					/>
					<ProductItem
						minWidth="150px"
						boxStyle={{ minWidth: "150px", mr: "5px" }}
						hideCartBtn={true}
					/>
				</Section>

				<Section title="New Arts">
					<ProductItem
						minWidth="150px"
						boxStyle={{ minWidth: "150px", mr: "5px" }}
					/>
					<ProductItem
						minWidth="150px"
						boxStyle={{ minWidth: "150px", mr: "5px" }}
					/>
					<ProductItem
						minWidth="150px"
						boxStyle={{ minWidth: "150px", mr: "5px" }}
					/>
				</Section>

				<Section title="New Tutorials" vertical={true}>
					<TutorialItem />
					<TutorialItem />
					<TutorialItem />
					<TutorialItem />
					<TutorialItem />
				</Section>
			</Container>
		</>
	);
};

export default Home;
