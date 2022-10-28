import { Image } from "@chakra-ui/react";
import Link from "next/link";

const Logo = () => {
	return (
		<Link href="/" passHref>
			<Image src="/logo.png" width="100px" margin="15px 0 " />
		</Link>
	);
};

export default Logo;
