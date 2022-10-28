import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import Logo from "../../components/Logo";
import { BsArrowRightShort } from "react-icons/bs";
import FormGroup from "../../components/FormGroup";
import { useState } from "react";

const upload = () => {
	const [name, setName] = useState("");
	const [price, setPrice] = useState("");
	const [desc, setDesc] = useState("");

	return (
		<>
			<Box p="0px 15px" display="flex" flexDir="column" height="100vh">
				<Box flex="1" overflow="auto">
					<Logo />
					<Box
						border="1px solid #eee"
						borderRadius="10px"
						minHeight="250px"
						display="flex"
						alignItems="center"
						justifyContent="center"
						flexDir="column"
						mt="2rem"
						mb="1rem"
					>
						<Image
							src="/upload.png"
							width="75px"
							height="75px"
							opacity="0.6"
						/>
						<Heading
							fontFamily="primary"
							color="blackAlpha.600"
							fontSize="17px"
							mt="10px"
						>
							Upload your designs
						</Heading>
						<Text
							fontFamily="primary"
							color="blackAlpha.600"
							fontSize="12px"
							mt="10px"
						>
							Image dimensions 600x600
						</Text>
						<Button
							height="auto"
							bg="#A06BCC"
							fontFamily="primary"
							mt="10px"
							color="white"
							fontWeight="500"
							fontSize="14px"
							padding="10px 25px"
							borderRadius="10px"
						>
							Browse
						</Button>
					</Box>

					<FormGroup
						label="Name"
						placeholder="Enter product name..."
						value={name}
						setInputValue={setName}
					/>
					<FormGroup
						label="Price"
						placeholder="Enter product price..."
						value={price}
						setInputValue={setPrice}
					/>
					<FormGroup
						label="Description"
						placeholder="Enter product description..."
						isTextArea={true}
						value={desc}
						setInputValue={setDesc}
					/>
				</Box>
				<Button
					height="auto"
					bg="#A06BCC"
					fontFamily="primary"
					mt="10px"
					color="white"
					fontWeight="500"
					fontSize="13px"
					padding="15px 25px"
					borderRadius="10px"
					mb="1rem"
					display="flex"
					alignItems="center"
					justifyContent="space-between"
				>
					<Text>Make 3D design from blueprint</Text>
					<BsArrowRightShort fontSize="22px" />
				</Button>
			</Box>
		</>
	);
};

export default upload;
