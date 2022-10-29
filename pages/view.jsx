import { Canvas } from "@react-three/fiber";
import Model from "../components/Model";
import CameraController from "../components/CameraController.jsx";
import { Box, Button, Heading, Highlight, Text } from "@chakra-ui/react";

const View = () => {
    return (
        <>
            <div className="canvas-hold">
                <Canvas
                    camera={{
                        fov: 60,
                        near: 0.1,
                        far: 1000,
                        position: [0, 0, 7],
                    }}
                    className="z-20"
                >
                    <ambientLight intensity={1} />

                    <CameraController />

                    <Model />
                </Canvas>
            </div>

            <Box p="4">
                <Box
                    display="flex"
                    flexDir="column"
                    px="6"
                    py="6"
                    boxShadow="outline"
                    rounded="lg"
                >
                    <Heading>Nirvana T-Shirt</Heading>
                    <Text fontSize="xl">$ 420</Text>

                    <Text pt="2" color="darkgrey">
                        lorem ipsum dolor sit lorem ipsum dolor sit amet,
                        consectetur adipis lorem ipsum dolor sit amet lorem
                        lorem ipsum dolor
                    </Text>

                    <Button mt="8" colorScheme="purple">
                        Buy Now
                    </Button>
                </Box>
            </Box>
        </>
    );
};

export default View;
