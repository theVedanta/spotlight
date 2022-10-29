import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import { AiOutlineHeart, AiOutlineShopping } from "react-icons/ai";
import BackBtn from "../../components/BackBtn";
import Link from "next/link";

const ProductDetail = () => {
    return (
        <>
            <Box h="100vh" display="flex" flexDir="column">
                <Box flex="1" overflow="auto">
                    <Box
                        padding="5px 10px"
                        display="flex"
                        justifyContent="space-between"
                    >
                        <BackBtn />
                        <Button
                            variant="unstyled"
                            minWidth="30px"
                            padding="0"
                            bg="transparent"
                        >
                            <AiOutlineShopping fontSize="19px" />
                        </Button>
                    </Box>

                    <Box
                        width="90%"
                        margin="5px auto"
                        borderRadius="10px"
                        bg="#DFDCB4"
                        padding="10px"
                    >
                        <Image
                            src="/product3.jpg"
                            borderRadius="10px"
                            height="350px"
                            width="100%"
                            objectFit="cover"
                        />
                    </Box>

                    <Box padding="5px 15px">
                        <Box display="flex" alignItems="center">
                            <Box flex="1">
                                <Heading
                                    fontFamily="secondary"
                                    fontSize="16.5px"
                                    fontWeight="500"
                                    color="blackAlpha.900"
                                >
                                    Women's Hoodie
                                </Heading>
                                <Text
                                    fontFamily="secondary"
                                    fontSize="13px"
                                    color="blackAlpha.400"
                                    fontWeight="500"
                                >
                                    - By Adam
                                </Text>
                            </Box>
                            <Button
                                variant="unstyled"
                                height="35px"
                                minWidth="36px"
                                width="36px"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                borderRadius="50%"
                                bg="primary"
                                color="white"
                            >
                                <AiOutlineHeart fontSize="19px" />
                            </Button>
                        </Box>
                        <Text
                            fontFamily="secondary"
                            mt="1rem "
                            fontSize="13px"
                            color="blackAlpha.800"
                            fontWeight="500"
                        >
                            Description
                        </Text>

                        <Text
                            fontFamily="secondary"
                            fontSize="13px"
                            color="blackAlpha.500"
                            mt="10px"
                        >
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Omnis impedit molestiae aperiam vero pariatur
                            assumenda nihil accusamus neque, optio tempora ipsam
                            alias suscipit deleniti hic eaque! Amet aut
                            cupiditate sit.
                        </Text>
                    </Box>

                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Link href="/view">
                            <Button mt="4" colorScheme="purple">
                                View in 3D
                            </Button>
                        </Link>
                    </Box>
                </Box>
                <Box
                    display="flex"
                    alignItems="center"
                    padding=" 10px"
                    justifyContent="space-between"
                    bg="white"
                    boxShadow="0 0 10px rgba(0,0,0,0.2)"
                    borderRadius="15px 15px 0 0"
                    mt="5px"
                >
                    <Text
                        fontFamily="secondary"
                        fontSize="14px"
                        fontWeight="500"
                        mr="10px"
                    >
                        Total: $250.00
                    </Text>
                    <Button
                        flex="1"
                        bg="primaryGradient"
                        color="white"
                        fontFamily="secondary"
                        fontWeight="400"
                        fontSize="14px"
                    >
                        Add to Cart
                    </Button>
                </Box>
            </Box>
        </>
    );
};

export default ProductDetail;
