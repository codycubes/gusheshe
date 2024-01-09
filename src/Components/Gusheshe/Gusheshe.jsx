import React, { useRef, useLayoutEffect } from "react";
import { CubeCamera, useGLTF } from "@react-three/drei";
import { useSnapshot } from 'valtio'
import { state } from "../../store";
import { easing } from 'maath'
import { useFrame } from "@react-three/fiber";

export function Gusheshe({props, showFirstMesh, showSecondMesh}) {
  const { nodes, materials } = useGLTF("/m3.glb");

   

  const snap = useSnapshot(state)

  useFrame((state, delta) => easing.dampC(materials.BMW_E30_M3_PAINT.color, snap.color, 0.25, delta))

  useLayoutEffect(() => {
    materials.BMW_E30_M3_PAINT.color.set('white')
    materials.BMW_E30_M3_PAINT.metalness = 0.4
    materials.BMW_E30_M3_PAINT.roughness = 0.1
    materials.BMW_E30_M3_PAINT.clearcoat = 1
    materials.BMW_E30_M3_PAINT.envMapIntensity = 1
    materials.BMW_E30_M3_PAINT.aoMapIntensity = 1.5
    materials.BMW_E30_M3_PAINT.roughnessMapIntensity = 1
    // materials['930_chromes'].metalness = 1
    // materials['930_chromes'].roughness = 0.3
    // materials['930_chromes'].color = new THREE.Color('white')
    // materials['glass'].color = new THREE.Color('white')
    // materials['glass'].opacity = 0.6
    // materials.BMW_E30_M3_PLASTIC.roughness = 0.8
    // materials['930_lights'].emissiveMap = materials['930_lights'].map
    // materials['930_lights'].emissiveIntensity = 50
    // materials['930_tire'].color.set('black')
    // materials['930_tire'].roughness = 0.7
  }, [materials])

  return (
    // <CubeCamera frames={1}  near={0.1} resolution={512}>
    // {(texture) => (
    <group {...props} dispose={null}>
      <group  position={[-0.697, 0.311, 1.35]} rotation={[0, -0.501, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_29.geometry}
          material={materials.Brake_Disc}
          rotation={[0, 0.49, 0]}
        />
      </group>
      <group position={[0.709, 0.311, -1.241]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_41.geometry}
          material={materials.Brembo_Calipers}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_43.geometry}
          material={materials.Logo_Plane}
        />
      </group>
      <group position={[-0.697, 0.311, 1.35]} rotation={[0, -0.501, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_31.geometry}
          material={materials.Brembo_Calipers}
          rotation={[0, 0.49, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_33.geometry}
          material={materials.Logo_Plane}
          rotation={[-Math.PI, -0.354, 0]}
        />
      </group>
      <group position={[-0.709, 0.311, -1.241]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_51.geometry}
          material={materials.Brembo_Calipers}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_53.geometry}
          material={materials.Logo_Plane}
        />
      </group>
      <group position={[0.697, 0.311, 1.35]} rotation={[0, -0.501, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_21.geometry}
          material={materials.Brembo_Calipers}
          rotation={[0, 0.499, 0]}
          material-color={snap.inner}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_23.geometry}
          material={materials.Logo_Plane}
          rotation={[0, -0.501, 0]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials.BMW_E30_M3_TAILLIGHT_REFLECTOR}
        position={[0, 0.029, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_11.geometry}
        material={materials.BMW_E30_M3_HEADLIGHT_REFLECTOR}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_12.geometry}
        material={materials.BMW_E30_M3_EMBLEMS}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_13.geometry}
        material={materials.BMW_E30_M3_LENS}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.BMW_E30_M3_PAINT}
        material-color={snap.color}
        // material-envMap={texture}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4001.geometry}
        material={materials.BMW_E30_M3_PAINT}
        material-color={snap.color}
        // material-envMap={texture}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5.geometry}
        material={materials.BMW_E30_M3_PLASTIC}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5001.geometry}
        material={materials.BMW_E30_M3_PLASTIC}
        position={[0, 0.926, -2.095]}
        rotation={[0.4, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials.BMW_E30_M3_CHROME}
        // material-envMap={texture}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_7.geometry}
        material={materials.BMW_E30_M3_WINDOWS}
        // material-envMap={texture}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials.BMW_E30_M3_BLACKOUT}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_9.geometry}
        material={materials.BMW_E30_M3_SIDE_MIRROR}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_39.geometry}
        material={materials.Brake_Disc}
        position={[0.709, 0.311, -1.241]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_49.geometry}
        material={materials.Brake_Disc}
        position={[-0.709, 0.311, -1.241]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_19.geometry}
        material={materials.Brake_Disc}
        position={[0.697, 0.311, 1.35]}
        rotation={[0, -0.501, 0]}
      />

    {showFirstMesh && (
       <group position={[0.709, 0.311, -1.241]}>
        <group
          position={[-1.447, -0.044, 0.014]}
          rotation={[3.132, 0, Math.PI]}
          scale={1.068}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_20001.geometry}
            material={materials["BMW_E30_M3_RIM.002"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_20001_1.geometry}
            material={materials["BMW_E30_M3_TIRE.002"]}
          />
        </group>
      </group> 

      )}


      {showSecondMesh && (
      <group position={[0.109, 0.056, -1.679]} rotation={[-1.558, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group
            position={[68.937, 29.393, 115.108]}
            rotation={[2.79, 0.003, 1.565]}
            scale={[12.631, 9.529, 12.632]}
          >
            <group
              position={[1.981, 8.341, -4.22]}
              rotation={[0, 0.015, 0]}
              scale={1.099}
            >
              <mesh
                castShadow
                receiveShadow
                geometry={
                  nodes.Inner_RIm_Metal_Silver_0001_Metal_Orange_0001.geometry
                }
                material={materials.Metal_Silver}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={
                  nodes.Inner_RIm_Metal_Silver_0001_Metal_Orange_0001_1.geometry
                }
                material={materials["RT_Battistrada.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={
                  nodes.Inner_RIm_Metal_Silver_0001_Metal_Orange_0001_2.geometry
                }
                material={materials["Plastic.001"]}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={
                  nodes.Inner_RIm_Metal_Silver_0001_Metal_Orange_0001_3.geometry
                }
                material={materials["Metal_Silver.001"]}
              />
            </group>
          </group>
        </group>
      </group> 

      )}

      
    </group>
          // )}
          // </CubeCamera>
          
  );
}

useGLTF.preload("/m3.glb");