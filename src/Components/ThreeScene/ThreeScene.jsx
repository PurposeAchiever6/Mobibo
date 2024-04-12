'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader';

const ThreeScene = (props) => {
    const canvasRef = useRef();

    useEffect(() => {
        // Canvas
        const canvas = canvasRef.current;

        // const height = canvasRef.current.parentNode.clientHeight
        const width = canvasRef.current.parentNode.clientWidth
        const height = width * 1080 / 1920

        // const width = window.innerWidth
        // const height = window.innerHeight

        // Renderer
        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Scene
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xe4e4e4)

        // Camera
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        props.truckSide === "side" ? camera.position.set(5, 1, 0) : camera.position.set(0, 1.5, -5);
        scene.add(camera);

        // Orbit Controls
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        props.truckSide === "side" ? controls.target.set(0, 1, 0) : controls.target.set(0, 1.5, 0);
        controls.enablePan = false

        // Axes
        // const axes = new THREE.AxesHelper(5)
        // scene.add(axes)

        // Lights
        const ambientLight = new THREE.AmbientLight(0xe4e4e4, 3);
        scene.add(ambientLight);

        // Environment Map
        new RGBELoader().setPath('environment/').load('wide_street_01_1k.hdr', function (texture) {
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

        gltfLoader.load('/models/truck.glb', function (gltf) {
            let model = gltf.scene;
            model.traverse(function (child) {
                if (child.isMesh && child.name.startsWith("Plane")) {
                    child.visible = false;
                    if (child.name.endsWith("L") || child.name.endsWith("R")) {
                        child.visible = true;
                        if (props.selectedImageSide) {
                            if (props.fileTypeSide.startsWith("image")) {
                                // Handling for image files
                                const selectedImageURL = URL.createObjectURL(props.selectedImageSide);
                                textureLoader.load(selectedImageURL, function (texture) {
                                    applyTexture(child, texture);
                                    URL.revokeObjectURL(selectedImageURL); // Clean up
                                });
                            } else if (props.fileTypeSide.startsWith("video")) {
                                // Handling for video files
                                const selectedVideoURL = URL.createObjectURL(props.selectedImageSide);

                                // Create a video element
                                const video = document.createElement('video');
                                video.src = selectedVideoURL;
                                video.autoplay = true;
                                video.loop = true;
                                video.muted = true;
                                video.play();

                                // Once the video has enough data, create a video texture
                                video.addEventListener('loadeddata', function () {
                                    const videoTexture = new THREE.VideoTexture(video);
                                    videoTexture.minFilter = THREE.LinearFilter;
                                    videoTexture.magFilter = THREE.LinearFilter;
                                    videoTexture.format = THREE.RGBFormat;

                                    applyTexture(child, videoTexture);

                                    // Since video might be reused or kept in memory, you might not revoke the URL immediately
                                    // Consider app logic for cleanup
                                }, { once: true });
                            }
                        }
                    } else if (child.name.endsWith("B")) {
                        child.visible = true;
                        if (props.selectedImageBack) {
                            if (props.fileTypeBack.startsWith("image")) {
                                // Handling for image files
                                const selectedImageURL = URL.createObjectURL(props.selectedImageBack);
                                textureLoader.load(selectedImageURL, function (texture) {
                                    applyTexture(child, texture);
                                    URL.revokeObjectURL(selectedImageURL); // Clean up
                                });
                            } else if (props.fileTypeBack.startsWith("video")) {
                                // Handling for video files
                                const selectedVideoURL = URL.createObjectURL(props.selectedImageBack);

                                // Create a video element
                                const video = document.createElement('video');
                                video.src = selectedVideoURL;
                                video.autoplay = true;
                                video.loop = true;
                                video.muted = true;
                                video.play();

                                // Once the video has enough data, create a video texture
                                video.addEventListener('loadeddata', function () {
                                    const videoTexture = new THREE.VideoTexture(video);
                                    videoTexture.minFilter = THREE.LinearFilter;
                                    videoTexture.magFilter = THREE.LinearFilter;
                                    videoTexture.format = THREE.RGBFormat;

                                    applyTexture(child, videoTexture);

                                    // Since video might be reused or kept in memory, you might not revoke the URL immediately
                                    // Consider app logic for cleanup
                                }, { once: true });
                            }
                        }
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
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        }
        window.addEventListener('resize', onWindowResize, false);

        // Clean up
        return () => {
            window.removeEventListener('resize', onWindowResize);
        };
    }, [props.selectedImageSide, props.selectedImageBack, props.truckSide]);

    // Helper Function for Applying Texture
    function applyTexture(mesh, texture) {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(1, 1);
        texture.flipY = false;
        texture.encoding = THREE.sRGBEncoding;

        mesh.material.map = texture;
        mesh.material.needsUpdate = true;
    }

    return <canvas ref={canvasRef}></canvas>;
};

export default ThreeScene;
