import { Box, Input, Text, Textarea } from "@chakra-ui/react";

const FormGroup = ({
	isTextArea,
	label,
	placeholder,
	value,
	setInputValue,
}) => {
	return (
		<>
			<Box
				border="1px solid #eee"
				m="10px 0"
				borderRadius="10px"
				pos="relative"
				mb="15px"
			>
				<Text
					fontFamily="secondary"
					fontSize="12px"
					pos="absolute"
					top="-10px"
					left="10px"
					padding="2px"
					bg="white"
					color="blackAlpha.600"
					fontWeight="500"
				>
					{label}
				</Text>
				{isTextArea ? (
					<Textarea
						variant="unstyled"
						placeholder={placeholder}
						padding="12px 10px"
						pt="15px"
						fontFamily="secondary"
						fontSize="14px"
						value={value}
						onChange={(e) => setInputValue(e.target.value)}
					/>
				) : (
					<Input
						variant="unstyled"
						placeholder={placeholder}
						padding="12px 10px"
						pt="15px"
						fontFamily="secondary"
						fontSize="14px"
						value={value}
						onChange={(e) => setInputValue(e.target.value)}
					/>
				)}
			</Box>
		</>
	);
};

export default FormGroup;
