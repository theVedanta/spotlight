import { Box, Heading, Image, Text } from "@chakra-ui/react";
import BannerCard from "../components/BannerCard";
import Container from "../components/Container";
import Logo from "../components/Logo";
import ProductItem from "../components/ProductItem";
import SearchBar from "../components/SearchBar";
import Section from "../components/Section";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";
import LearnBlogsItem from "../components/LearnBlogsItem";

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
					fontSize="18px"
					lineHeight="1.8rem"
					color="blackAlpha.800"
					fontWeight="500"
				>
					Hi, Welcome <br /> to{" "}
					<span style={{ color: "#F47C49", fontWeight: "600" }}>
						Spot
					</span>
					<span style={{ color: "#5c2ede", fontWeight: "600" }}>
						Light
					</span>
				</Heading>
				<SearchBar mb="0" />

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
								fontFamily="tertiary"
								fontSize="14px"
								color="white"
								fontWeight="500"
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
								fontFamily="tertiary"
								fontSize="14px"
								color="white"
								fontWeight="500"
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
								fontFamily="tertiary"
								fontSize="14px"
								color="white"
								fontWeight="500"
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

				<Section title="Your Arts" href="/sell">
					<ProductItem
						name="Women's Hoodie"
						price="$50.00"
						img="/product3.jpg"
						minWidth="150px"
						boxStyle={{ minWidth: "150px", mr: "5px" }}
						hideCartBtn={true}
					/>
					<ProductItem
						name="Women's Hoodie"
						price="$50.00"
						img="/product3.jpg"
						minWidth="150px"
						boxStyle={{ minWidth: "150px", mr: "5px" }}
						hideCartBtn={true}
					/>
					<ProductItem
						name="Women's Hoodie"
						price="$50.00"
						img="/product3.jpg"
						minWidth="150px"
						boxStyle={{ minWidth: "150px", mr: "5px" }}
						hideCartBtn={true}
					/>
					<ProductItem
						name="Women's Hoodie"
						price="$50.00"
						img="/product3.jpg"
						minWidth="150px"
						boxStyle={{ minWidth: "150px", mr: "5px" }}
						hideCartBtn={true}
					/>
				</Section>

				<Section title="New Arts" href="/buy">
					<ProductItem
						name="Women's Hoodie"
						price="$50.00"
						img="/product3.jpg"
						minWidth="150px"
						boxStyle={{ minWidth: "150px", mr: "5px" }}
					/>
					<ProductItem
						name="Women's Hoodie"
						price="$50.00"
						img="/product3.jpg"
						minWidth="150px"
						boxStyle={{ minWidth: "150px", mr: "5px" }}
					/>
					<ProductItem
						name="Women's Hoodie"
						price="$50.00"
						img="/product3.jpg"
						minWidth="150px"
						boxStyle={{ minWidth: "150px", mr: "5px" }}
					/>
					<ProductItem
						name="Women's Hoodie"
						price="$50.00"
						img="/product3.jpg"
						minWidth="150px"
						boxStyle={{ minWidth: "150px", mr: "5px" }}
					/>
				</Section>

				<Section title="New Tutorials" isGrid={true} href="/learn">
					<LearnBlogsItem title="How to get hoes" user="David" />
					<LearnBlogsItem title="How to get hoes" user="David" />
					<LearnBlogsItem title="How to get hoes" user="David" />
					<LearnBlogsItem title="How to get hoes" user="David" />
					<LearnBlogsItem title="How to get hoes" user="David" />
				</Section>
			</Container>
		</>
	);
};

export default Home;
