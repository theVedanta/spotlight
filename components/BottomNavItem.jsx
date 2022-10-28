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
					_active={{ bg: "primary" }}
					bg={router.asPath === href ? "primary" : "white"}
					boxShadow={
						router.asPath === href
							? "inset 0px 0px 10px rgba(255,255,255,0.2),0px 0px 10px rgba(0,0,0,0.2)"
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
