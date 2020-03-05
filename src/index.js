import './styles.scss';
import * as THREE from 'three';

// Create a scene
const scene = new THREE.Scene();

// Create a box object and add it to the scene
const geometry = new THREE.BoxGeometry(10, 10, 30);
const material = new THREE.MeshLambertMaterial({ color: 0x0000ab });
const box = new THREE.Mesh(geometry, material);
scene.add(box);

// Add some light
const light = new THREE.PointLight(0xffabba);
light.position.set(10, 10, 35);
light.intensity = 2;
scene.add(light);

// Create a camera and set the position
const camera = new THREE.PerspectiveCamera(75, (window.innerWidth / window.innerHeight), 0.1, 1000);
camera.position.z = 100;

// Create a renderer & add it to the DOM
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Setup animation loop & start rendering the scene
const render = () => {
  requestAnimationFrame(render);
  box.rotation.x += 0.02;
  box.rotation.y += 0.03;
  box.rotation.z += 0.03;
  renderer.render(scene, camera);
};
render();

console.log('Here is your scene', scene);

// Update camera ratio & renderer size if the browser window gets resized
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}, false);
