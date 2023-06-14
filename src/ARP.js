import React, { useState, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';
import { VRButton } from 'three/examples/jsm/webxr/VRButton.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export const ARPage = () => {
  const [arVisible, setArVisible] = useState(false);

  const startAR = () => {
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    const exportButton = document.getElementById('arButton');

    if (exportButton) {
      exportButton.addEventListener('click', exportModel);
    }

    function exportModel() {
      const scene = new THREE.Scene();
      const loader = new GLTFLoader();

      loader.load('/model.gltf', function (gltf) {
        const model = gltf.scene;
        scene.add(model);

        const exporter = new GLTFExporter();
        exporter.parse(scene, function (gltf) {
          const gltfModel = JSON.stringify(gltf);
          const viewer = document.getElementById('myModelViewer');
          viewer.src = `data:model/gltf+json;base64,${window.btoa(gltfModel)}`;
        });
      });

      document.body.appendChild(renderer.domElement);
      renderer.setSize(window.innerWidth, window.innerHeight);

      document.body.appendChild(VRButton.createButton(renderer));
      renderer.xr.enabled = true;

      renderer.setAnimationLoop(function () {
        renderer.render(scene, camera);
      });
    }
    exportModel();
  };

  useEffect(() => {
    if (arVisible) {
      startAR();
    }
  }, [arVisible]);

  const handleARButtonClick = () => {
    setArVisible(true);
  };

  return (
    <div>
      <button id="arButton" onClick={handleARButtonClick}>
        Start AR
      </button>
      {arVisible && (
  <model-viewer
    id="myModelViewer"
    src="/model.gltf"
    autoplay
    camera-controls
    shadow-intensity="0.5"
    background-color="#f0f0f0"
  ></model-viewer>)
  }
    </div>
  );
};