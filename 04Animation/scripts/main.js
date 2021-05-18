

// changing individual properties with code and using setInterval
// var rotationSpeed = -0.01;
var rotationSpeedFast = 0.01;
var rotationSpeedSlow = -0.01;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
	myOtherBox.object3D.rotation.x += rotationSpeedFast;
	myOtherBox.object3D.rotation.y += rotationSpeedFast;
	myOtherBox.object3D.rotation.z += rotationSpeedFast;
	console.log(myOtherBox.object3D.rotation.x);
	console.log(myOtherBox.object3D.rotation.y);
	console.log(myOtherBox.object3D.rotation.z);
	myOtherBox.object3D.rotation.x += rotationSpeedSlow;
	myOtherBox.object3D.rotation.y += rotationSpeedSlow;
	myOtherBox.object3D.rotation.z += rotationSpeedSlow;
	console.log(myOtherBox.object3D.rotation.x);
	console.log(myOtherBox.object3D.rotation.y);
	console.log(myOtherBox.object3D.rotation.z);
}

setInterval(spin, 16); //equivalent to 60 fps