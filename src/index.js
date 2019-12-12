import * as T from "three";

// configure renderer
var renderer = new T.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// configure camera
var camera = new T.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z = 5;

// configure light
var light = new T.AmbientLight( 0x404040 );

// configure cube
var geometry = new T.BoxGeometry( 1, 1, 1 );
var material = new T.MeshNormalMaterial();
var cube = new T.Mesh( geometry, material );

// configure scene
var scene = new T.Scene();
scene.add( cube, light );
scene.add( light );

var animate = function () {
    requestAnimationFrame( animate );
    
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    
    renderer.render( scene, camera );
};

animate();
