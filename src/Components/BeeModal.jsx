
import { useEffect, useLayoutEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import * as THREE  from "three";
import { TextureLoader } from 'three';
export default function BeeModal(props) {

  

// Load your textures
const colorTexture = new TextureLoader().load('/textures/gltf_embedded_0.png');
const roughnessTexture = new TextureLoader().load('/textures/gltf_embedded_1.png');
const metalnessTexture = new TextureLoader().load('/textures/gltf_embedded_2.png');

  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/honey_bee.glb')

  

  
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    if (actions) {
      actions[Object.keys(actions)[0]].play();
    }
  }, [actions]);


  useLayoutEffect(() => {

    const tl = gsap.timeline();



    // Reset object's initial state before starting animation
    gsap.set(group.current.scale, { x: 0, y: 0, z: 0 });
    gsap.set(group.current.rotation, { x: 0, y: 0, z: 0 });
    gsap.set(group.current.position, { x: 0, y: -2, z: 0 });

    // Scale-in animation on load
    tl.fromTo(
      group.current.scale,
      { x: 0, y: 0, z: 0 },
      { x: 2, y: 2, z: 2, duration: 0.5 },

    );



    gsap.to(group.current.rotation, {
      x: 0, y: 0.3, z: 0,
      duration: 0.1,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: '.about',
        start: 'top 80%',
        end: 'top 20%',
        // markers: true,
        scrub: true,

        immediateRender: false
      },
    })

    gsap.to(group.current.position, {
      x: 3, y: -2, z: 0,
      duration: 0.1,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: '.about',
        start: 'top 80%',
        end: 'top 40%',
        // markers: true,
        scrub: true,

        immediateRender: false
      }
    })

    gsap.to(group.current.rotation, {
      x: 0, y: -2, z: 0,
      duration: 0.1,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: '.conservation',
        start: 'top 80%',
        end: 'top 40%',
        immediateRender: false
      }
    })


    gsap.to(group.current.scale, {
      x: 3, y: 3, z: 3,
      duration: 0.1,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: '.conservation',
        start: 'top 80%',
        end: 'top 40%',
        // markers: true,
        scrub: true,

        immediateRender: false
      }
    })

    gsap.to(group.current.position, {
      x: 0, y: -3, z: 0,
      duration: 0.1,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: '.conservation',
        start: 'top 80%',
        end: 'top 40%',
        // markers: true,
        scrub: true,

        immediateRender: false
      }
    })

    gsap.to(group.current.rotation, {
      x: 0, y: -1, z: 0,
      duration: 0.1,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: '.products',
        start: 'top 80%',
        end: 'top 40%',
        // markers: true,
        scrub: true,

        immediateRender: false
      }
    })


  }, []);



  return (
    <group ref={group} position={[0, -2, 0]}  {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={1.008}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Sketchfab_model_0" rotation={[-Math.PI / 2, 0, 0]} scale={0.089}>
                <group name="root_1">
                  <group name="GLTF_SceneRootNode_2" rotation={[Math.PI / 2, 0, 0]}>
                    <group name="RootNode0_0_3" scale={0.01}>
                      <group name="skeletal1_1_4">
                        <group name="GLTF_created_0_5">
                          <group name="GLTF_created_0">
                            <primitive object={nodes.GLTF_created_0_rootJoint} />
                            <skinnedMesh
                              name="Object_121"
                              geometry={nodes.Object_121.geometry}
                              material={
                                new THREE.MeshStandardMaterial({
                                  map: colorTexture,
                                  roughnessMap: roughnessTexture,
                                  metalnessMap: metalnessTexture,
                                })
                              }
                              skeleton={nodes.Object_121.skeleton}
                            />
                            <group name="Object_116_116_correction">
                              <group name="Object_116_116" />
                            </group>
                          </group>
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/honey_bee.glb')