import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';

const Hero = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 7);
    scene.add(directionalLight);

    // Camera position
    camera.position.set(0, 5, 10);

    // Orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;

    // Post-processing
    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      1.5,
      0.4,
      0.85
    );
    composer.addPass(bloomPass);

    // Create crop field
    const createCrop = (x, z) => {
      const geometry = new THREE.CylinderGeometry(0.05, 0.05, 1, 8);
      const material = new THREE.MeshStandardMaterial({ color: 0x228B22 });
      const crop = new THREE.Mesh(geometry, material);
      crop.position.set(x, 0.5, z);
      scene.add(crop);

      const leafGeometry = new THREE.SphereGeometry(0.2, 8, 8);
      const leafMaterial = new THREE.MeshStandardMaterial({ color: 0x32CD32 });
      const leaf1 = new THREE.Mesh(leafGeometry, leafMaterial);
      leaf1.scale.set(1, 0.2, 1);
      leaf1.position.set(0, 0.3, 0);
      crop.add(leaf1);

      const leaf2 = leaf1.clone();
      leaf2.rotation.x = Math.PI / 2;
      crop.add(leaf2);

      return crop;
    };

    // Create crop field
    const crops = [];
    for (let i = -5; i <= 5; i++) {
      for (let j = -5; j <= 5; j++) {
        crops.push(createCrop(i, j));
      }
    }

    // Load drone model
    const loader = new GLTFLoader();
    loader.load(
      '/drone.glb',
      (gltf) => {
        const drone = gltf.scene;
        drone.scale.set(0.5, 0.5, 0.5);
        drone.position.set(0, 5, 0);
        scene.add(drone);

        // Animate drone
        const animateDrone = () => {
          drone.rotation.y += 0.01;
          drone.position.y = 5 + Math.sin(Date.now() * 0.001) * 0.5;
        };

        // Animation loop
        const animate = () => {
          requestAnimationFrame(animate);
          controls.update();
          animateDrone();
          crops.forEach((crop, index) => {
            crop.scale.y = 1 + Math.sin(Date.now() * 0.001 + index) * 0.1;
          });
          composer.render();
        };
        animate();
      },
      undefined,
      (error) => console.error('An error occurred loading the model:', error)
    );

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      composer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div ref={mountRef} style={{ width: '100%', height: '100vh' }}>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        color: 'white',
        textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Crop Disease Detection</h1>
        <p style={{ fontSize: '1.5rem' }}>Protecting your harvest with cutting-edge technology</p>
        <button style={{
          padding: '10px 20px',
          fontSize: '1rem',
          marginTop: '1rem',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;