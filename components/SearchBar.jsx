import { Box, Input } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import { useRouter } from "next/router";
import { useState } from "react";

const SearchBar = () => {
	const router = useRouter();
	const [input, setInput] = useState("");

	return (
		<>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					router.push({
						pathname: "/buy/search",
						query: { q: input },
					});
				}}
			>
				<Box
					display="flex"
					margin="15px 0"
					alignItems="center"
					border="1px solid #eee"
					borderRadius="10px"
					padding="0 10px"
				>
					<FiSearch fontSize="17px" />
					<Input
						variant="unstyled"
						placeholder="Search..."
						value={input}
						onChange={(e) => setInput(e.target.value)}
						border="none"
						padding="10px"
						fontSize="14px"
						fontFamily="primary"
						fontWeight="500"
					/>
				</Box>
			</form>
		</>
	);
};

export default SearchBar;
