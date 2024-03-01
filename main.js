import * as THREE from 'three';

// define scene
const scene = new THREE.Scene();
// define camera
const camera = new THREE.PerspectiveCamera( 750, window.innerWidth / window.innerHeight, 0.8, 100000 );
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );
// define renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 2, 2, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0xf1ffaa } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

function animate() {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.02;
	cube.rotation.y += 0.02;

	renderer.render( scene, camera );
}

animate();


// const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );

// const points = [];
// points.push( new THREE.Vector3( - 10, 0, 0 ) );
// points.push( new THREE.Vector3( 0, 10, 0 ) );
// points.push( new THREE.Vector3( 10, 0, 0 ) );

// const geometry = new THREE.BufferGeometry().setFromPoints( points );

// const line = new THREE.Line( geometry, material );

// scene.add( line );

// renderer.render( scene, camera );










