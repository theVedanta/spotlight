import { Button } from "@chakra-ui/react";
import Link from "next/link";

const Home = ({ authed }) => {
    return (
        <>
            <h1>Hello World</h1>
            <Link href="/auth">
                <Button colorScheme="purple">Auth</Button>
            </Link>
            <br />
            {authed ? "Hi User" : "Hi non-user"}
        </>
    );
};

export default Home;
