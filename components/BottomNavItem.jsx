import { Box, Button } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

const BottomNavItem = ({ icon, href }) => {
	const router = useRouter();
	return (
		<>
			<Box textAlign="center">
				<Button
					borderRadius="50%"
					width="45px"
					height="45px"
					_active={{ bg: "secondary" }}
					bg={router.asPath === href ? "secondary" : "white"}
					boxShadow={
						router.asPath === href
							? "0px 0px 10px rgba(0,0,0,0.3)"
							: "none"
					}
					transform={
						router.asPath === href
							? "translateY(-5px)"
							: "translateY(0)"
					}
					color={router.asPath === href ? "white" : ""}
					transition="0.3s"
				>
					<Link href={href}>{icon}</Link>
				</Button>
			</Box>
		</>
	);
};

export default BottomNavItem;
