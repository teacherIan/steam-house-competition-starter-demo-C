//imports
import * as THREE from 'three';
//scene initialization
import { camera, scene, renderer } from './init';

//You can change the camera position on the X, Y, or Z axis
camera.position.set(0, 0, 100);

const clock = new THREE.Clock();

//Any code to initialize your objects should go here

/**
 * objectHorizontalarray will be used for boxes going across the screen
 */

let objectHorizontalArray = [];

for (let i = 0; i < 50; i++) {
  const box = new THREE.Mesh(
    new THREE.BoxBufferGeometry(1, 1, 1),
    new THREE.MeshNormalMaterial()
  );

  box.position.x = -75 + i * 3;
  scene.add(box);

  objectHorizontalArray[i] = box;
}

/**
 * ObjectVerticalArray will be used for boxes going down the screen
 */

let objectVerticalArray = [];

for (let i = 0; i < 50; i++) {
  const box = new THREE.Mesh(
    new THREE.BoxBufferGeometry(1, 1, 1),
    new THREE.MeshNormalMaterial()
  );

  box.position.y = -75 + i * 3;
  scene.add(box);

  objectVerticalArray[i] = box;
}

const loop = () => {
  //Any code that will need to be updated on each frame should go here

  //update horizontal objects
  for (let i = 0; i < objectHorizontalArray.length; i++) {
    objectHorizontalArray[i].position.y =
      Math.cos(i + clock.getElapsedTime()) * 5;
  }
  //update vertical objects
  for (let i = 0; i < objectVerticalArray.length; i++) {
    objectVerticalArray[i].position.x =
      Math.sin(i + clock.getElapsedTime()) * 5;
  }

  //update scene on next frame
  renderer.render(scene, camera);
  requestAnimationFrame(loop);
};

loop();
