/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 mazda_rx-7_car.gltf --transform
Author: Anokino (https://sketchfab.com/Anokino)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/mazda-rx-7-car-404b2aefdf084f01bc3d75559c9c4088
Title: Mazda RX-7 (Car)
*/

import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    '/mazda_rx-7_car-transformed.glb'
  );
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1.77}
        >
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group
                name="Empty004_1"
                position={[2.05, -0.68, 1.91]}
                scale={0.03}
              >
                <group
                  name="Plane001_0"
                  position={[-16.03, -0.88, -40.34]}
                  rotation={[0.61, 0, 0]}
                  scale={1.5}
                >
                  <mesh
                    name="Object_5"
                    geometry={nodes.Object_5.geometry}
                    material={materials['Material.009']}
                  />
                  <mesh
                    name="Object_6"
                    geometry={nodes.Object_6.geometry}
                    material={materials['Material.002']}
                  />
                  <mesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials['Material.006']}
                  />
                  <mesh
                    name="Object_8"
                    geometry={nodes.Object_8.geometry}
                    material={materials['Material.007']}
                  />
                </group>
              </group>
              <group
                name="Plane_2"
                position={[1.62, -0.71, 0.83]}
                rotation={[0.61, 0, 0]}
                scale={0.04}
              >
                <mesh
                  name="Object_10"
                  geometry={nodes.Object_10.geometry}
                  material={materials['Material.007']}
                />
                <mesh
                  name="Object_11"
                  geometry={nodes.Object_11.geometry}
                  material={materials['Material.003']}
                />
                <mesh
                  name="Object_12"
                  geometry={nodes.Object_12.geometry}
                  material={materials['Material.006']}
                />
                <mesh
                  name="Object_13"
                  geometry={nodes.Object_13.geometry}
                  material={materials['Material.008']}
                />
                <mesh
                  name="Object_14"
                  geometry={nodes.Object_14.geometry}
                  material={materials['Material.009']}
                />
                <mesh
                  name="Object_15"
                  geometry={nodes.Object_15.geometry}
                  material={materials['Material.016']}
                />
                <mesh
                  name="Object_16"
                  geometry={nodes.Object_16.geometry}
                  material={materials['Material.017']}
                />
                <mesh
                  name="Object_17"
                  geometry={nodes.Object_17.geometry}
                  material={materials['Material.018']}
                />
                <mesh
                  name="Object_18"
                  geometry={nodes.Object_18.geometry}
                  material={materials['Material.019']}
                />
                <mesh
                  name="Object_19"
                  geometry={nodes.Object_19.geometry}
                  material={materials.Material}
                />
              </group>
              <group
                name="Plane004_3"
                position={[1.62, -0.71, 0.83]}
                rotation={[0.61, 0, 0]}
                scale={0.04}
              >
                <mesh
                  name="Object_21"
                  geometry={nodes.Object_21.geometry}
                  material={materials['Material.001']}
                />
                <mesh
                  name="Object_22"
                  geometry={nodes.Object_22.geometry}
                  material={materials['Material.005']}
                />
              </group>
              <group
                name="Cylinder003_4"
                position={[1.25, -0.96, -0.45]}
                rotation={[1.53, 0, 0]}
                scale={0.03}
              >
                <mesh
                  name="Object_24"
                  geometry={nodes.Object_24.geometry}
                  material={materials['Material.001']}
                />
              </group>
              <group
                name="Circle008_5"
                position={[1.08, -0.94, 1.71]}
                rotation={[-2.51, 0, -Math.PI / 2]}
                scale={0.17}
              >
                <mesh
                  name="Object_26"
                  geometry={nodes.Object_26.geometry}
                  material={materials['Material.011']}
                />
                <mesh
                  name="Object_27"
                  geometry={nodes.Object_27.geometry}
                  material={materials['Material.014']}
                />
                <mesh
                  name="Object_28"
                  geometry={nodes.Object_28.geometry}
                  material={materials['Material.015']}
                />
              </group>
              <group
                name="Circle009_6"
                position={[2.17, -0.94, 1.71]}
                rotation={[-0.63, 0, Math.PI / 2]}
                scale={0.17}
              >
                <mesh
                  name="Object_30"
                  geometry={nodes.Object_30.geometry}
                  material={materials['Material.011']}
                />
                <mesh
                  name="Object_31"
                  geometry={nodes.Object_31.geometry}
                  material={materials['Material.014']}
                />
                <mesh
                  name="Object_32"
                  geometry={nodes.Object_32.geometry}
                  material={materials['Material.015']}
                />
              </group>
              <group
                name="Circle010_7"
                position={[1.08, -0.94, 0.07]}
                rotation={[-2.51, 0, -Math.PI / 2]}
                scale={0.17}
              >
                <mesh
                  name="Object_34"
                  geometry={nodes.Object_34.geometry}
                  material={materials['Material.011']}
                />
                <mesh
                  name="Object_35"
                  geometry={nodes.Object_35.geometry}
                  material={materials['Material.014']}
                />
                <mesh
                  name="Object_36"
                  geometry={nodes.Object_36.geometry}
                  material={materials['Material.015']}
                />
              </group>
              <group
                name="Circle011_8"
                position={[2.17, -0.94, 0.07]}
                rotation={[-0.63, 0, Math.PI / 2]}
                scale={0.17}
              >
                <mesh
                  name="Object_38"
                  geometry={nodes.Object_38.geometry}
                  material={materials['Material.011']}
                />
                <mesh
                  name="Object_39"
                  geometry={nodes.Object_39.geometry}
                  material={materials['Material.014']}
                />
                <mesh
                  name="Object_40"
                  geometry={nodes.Object_40.geometry}
                  material={materials['Material.015']}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/mazda_rx-7_car-transformed.glb');
