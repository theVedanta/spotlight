import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { IoIosArrowBack } from "react-icons/io";

const BackBtn = () => {
	const router = useRouter();

	return (
		<Button
			onClick={() => router.back()}
			variant="unstyled"
			padding="0"
			minWidth="30px"
			bg="transparent"
		>
			<IoIosArrowBack fontSize="19px" />
		</Button>
	);
};

export default BackBtn;
