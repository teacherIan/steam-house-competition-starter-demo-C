/**
 * DON'T TOUCH!!
 */

import './style.css';
import * as THREE from 'three';
const canvas = document.querySelector('.webgl');
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export const scene = new THREE.Scene();

export const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

export const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height
);
scene.add(camera);

export const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

const controls = new OrbitControls(camera, canvas);

window.addEventListener('resize', () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  renderer.setSize(sizes.width, sizes.height);
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
});
