import { Heading } from "@chakra-ui/react";

const WelcomeHeading = ({ name }) => {
	return (
		<>
			<Heading
				fontFamily="primary"
				fontSize="16px"
				color="blackAlpha.800"
				fontWeight="400"
				mt="1.2rem"
			>
				Hello, <br />
				<span style={{ color: "#222", fontWeight: "bold" }}>
					{name}
				</span>
			</Heading>
		</>
	);
};

export default WelcomeHeading;
