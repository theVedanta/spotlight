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
        <group ref={model} dispose={null} position={[0, -2.6, 0]}>
            <group
                position={[0, 4.59, 0]}
                rotation={[0, Math.PI / 2, 0]}
                scale={0.58}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle002.geometry}
                    material={materials.top}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle002_1.geometry}
                    material={materials["dark pants"]}
                />
            </group>
            <group
                position={[0, 0.05, 0]}
                rotation={[0, Math.PI / 2, 0]}
                scale={0.58}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle004.geometry}
                    material={materials.pants}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle004_1.geometry}
                    material={materials["dark pants"]}
                />
            </group>
            <group
                position={[0, 0.09, 0]}
                rotation={[0, Math.PI / 2, 0]}
                scale={0.58}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle008.geometry}
                    material={materials.leathershoes}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Circle008_1.geometry}
                    material={materials.soles}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.button.geometry}
                material={nodes.button.material}
                position={[0.47, 3.58, 0]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={0.03}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.top001.geometry}
                material={nodes.top001.material}
                position={[0, 4.59, 0]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[0.58, 0.59, 0.59]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Vert.geometry}
                material={materials.bow}
                position={[0.52, 4.43, 0]}
                rotation={[0, 0, 0.52]}
                scale={0.49}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.pants001.geometry}
                material={materials["dark pants"]}
                position={[0.02, 0.08, 0]}
                rotation={[0, Math.PI / 2, 0]}
                scale={0.58}
            />
        </group>
    );
};
useGLTF.preload("/model.glb");

export default Model;
