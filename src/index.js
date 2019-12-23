import * as T from "three";

// configure renderer
var renderer = new T.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
document.addEventListener("keydown", onDocumentKeyDown, false); 

// configure cube
var geometry = new T.BoxGeometry( 1, 1, 1 );
var boxMaterials = [
    new T.MeshBasicMaterial({color:0xFF0000}),
    new T.MeshBasicMaterial({color:0x00FF00}),
    new T.MeshBasicMaterial({color:0x0000FF}),
    new T.MeshBasicMaterial({color:0xFFFF00}),
    new T.MeshBasicMaterial({color:0x00FFFF}),
    new T.MeshBasicMaterial({color:0xFFFFFF})
];
var material = new T.MeshFaceMaterial( boxMaterials );
var cube = new T.Mesh( geometry, material );

// configure camera
var camera = new T.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.z = 5;
camera.lookAt( cube.position )

// configure scene
var scene = new T.Scene();
scene.add( cube );

var x_axis = new T.Vector3(1, 0, 0);
var y_axis = new T.Vector3(0, 1, 0);

function onDocumentKeyDown( event ) {
    switch (event.keyCode) {
      case 37:
        cube.rotateOnWorldAxis( y_axis,  0.1 );
        break;
      case 39:
        cube.rotateOnWorldAxis( y_axis,  -0.1 );
        break;
      case 38:
        cube.rotateOnWorldAxis( x_axis,  0.1 );
        break;
      case 40:
        cube.rotateOnWorldAxis( x_axis,  -0.1 );
        break;
    }

    renderer.render( scene, camera );
}

renderer.render( scene, camera );
