'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';

const ThreeScene = () => {
    const canvasRef = useRef();

    useEffect(() => {
        // Canvas
        const canvas = canvasRef.current;

        // Renderer
        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Scene
        const scene = new THREE.Scene();

        // Camera
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(5, 5, -5);
        scene.add(camera);

        // Orbit Controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;

        // Lights
        const ambientLight = new THREE.AmbientLight(0x161e33, 3);
        scene.add(ambientLight);

        // Environment Map
        new RGBELoader().setPath('environment/').load('wide_street_01_1k.hdr', function(texture) {
            texture.mapping = THREE.EquirectangularReflectionMapping;
            scene.environment = texture;
        });

        // Texture Loader
        const textureLoader = new THREE.TextureLoader();

        // Load the Model
        const gltfLoader = new GLTFLoader();
        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('/draco/');
        gltfLoader.setDRACOLoader(dracoLoader);

        gltfLoader.load('/models/truck.glb', function(gltf) {
            let model = gltf.scene;
            model.traverse(function(child) {
                if (child.isMesh && child.name.startsWith("Plane")) {
                    child.visible = false;
                    if (child.name.endsWith("L") || child.name.endsWith("R")) {
                        child.visible = true;
                        textureLoader.load('images/truck2.PNG', function(texture) {
                            applyTexture(child, texture);
                        });
                    } else if (child.name.endsWith("B")) {
                        child.visible = true;
                        textureLoader.load('images/truck1.PNG', function(texture) {
                            applyTexture(child, texture);
                        });
                    }
                }
            });
            scene.add(model);
        });

        // Update and Render Loop
        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };
        animate();

        // Handle Resize
        function onWindowResize() {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        }
        window.addEventListener('resize', onWindowResize, false);

        // Clean up
        return () => {
            window.removeEventListener('resize', onWindowResize);
        };
    }, []);

    // Helper Function for Applying Texture
    function applyTexture(mesh, texture) {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(1, 1);
        texture.flipY = false;
        texture.encoding = THREE.sRGBEncoding;

        mesh.material.map = texture;
        mesh.material.needsUpdate = true;
    }

    return <canvas ref={canvasRef} className="webgl"></canvas>;
};

export default ThreeScene;
