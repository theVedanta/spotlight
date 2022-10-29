import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Model = ({ animate = true }) => {
    const { nodes, materials } = useGLTF("/model.glb");
    const model = useRef();

    useFrame(({ clock }) => {
        if (animate) model.current.rotation.y = clock.getElapsedTime();
    });

    return (
        <group ref={model} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.defaultMaterial_2.geometry}
                        material={materials["1005"]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.defaultMaterial_1.geometry}
                        material={materials["1001"]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.defaultMaterial.geometry}
                        material={materials["1004"]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.defaultMaterial_4.geometry}
                        material={materials["1006"]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.defaultMaterial_3.geometry}
                        material={materials["1003"]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.defaultMaterial_5.geometry}
                        material={materials["1002"]}
                    />
                </group>
            </group>
        </group>
    );
};
useGLTF.preload("/model.glb");

export default Model;
