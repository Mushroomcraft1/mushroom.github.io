console.log("%cA%cc%ck%cn%co%cw%cl%ce%cd%cg%cm%ce%cn%ct%cs%c\n3D Engine: https://threejs.org\nParticles: https://github.com/VincentGarreau/particles.js/\nCar Model: https://skfb.ly/orBBv\nEverything Else: Mushroomcraft#999 https://discord.gg/xvdMaz67qp","color:#f00","color:#f90","color:#ff0","color:#0f0","color:#09f","color:#99f","color:#f00","color:#f90","color:#ff0","color:#0f0","color:#09f","color:#99f","color:#f00","color:#f90","color:#ff0","color:#fff");import{GLTFLoader}from"https://mushroomcraft1.github.io/GLTFLoader.js";if(!document.getElementById("carScene")){const div=document.createElement("div");div.setAttribute("id","carScene");document.body.appendChild(div)}document.getElementById("carScene").innerHTML=`<div id="particlesElement"style="position:fixed;top:0;left:0;width:100%;height:100%;display:block;background-color:#000;"></div><canvas id="carSceneCanvas"style="position:fixed;top:0;left:0;width:100%;height:100%;display:block;"></canvas>`;function addScript(src,callback){const s=document.createElement("script");s.setAttribute("src", src);s.onload=callback;document.body.appendChild(s)}const threeLoad=()=>{particlesJS.load("particlesElement","https://mushroomcraft1.github.io/particles.json");var mouseX=0;{var scene=new THREE.Scene;var camera=new THREE.PerspectiveCamera(75,1,.1,1E3);var canvas=document.getElementById("carSceneCanvas");var renderer=new THREE.WebGLRenderer({alpha:true,canvas:canvas,antialias:true});var pointLight=new THREE.PointLight(16777215,1,100);var clock=new THREE.Clock;pointLight.intensity=0;pointLight.position.set(-9,4,3);scene.add(pointLight);var light=new THREE.AmbientLight(16777215,.3);scene.add(light);var texture=(new THREE.TextureLoader).load("data:image/jpeg;base64,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");texture.wrapS=THREE.RepeatWrapping;texture.wrapT=THREE.RepeatWrapping;texture.repeat.set(1,18);var road=new THREE.Mesh(new THREE.BoxGeometry(8,0,400),new THREE.MeshBasicMaterial({map:texture}));scene.add(road);road.position.set(0,-2.5,-3.5);road.rotation.y=-1.6;var gltfLoader=new GLTFLoader;var car,wheels;var mixers=[];gltfLoader.load("https://mushroomcraft1.github.io/car.glb",function(gltf){car=gltf.scene;scene.add(car);var mixer=new THREE.AnimationMixer(car.children[5]);mixer.update(clock.getDelta());mixer.clipAction(gltf.animations[0]).setDuration(.75).play();mixers.push(mixer);mixer=new THREE.AnimationMixer(car.children[6]);mixer.update(clock.getDelta());mixer.clipAction(gltf.animations[1]).setDuration(.75).play();mixers.push(mixer);car.rotation.y=-1.6;car.position.y=-1;car.position.z=-1});renderer.setClearColor(0,0);camera.position.z=5;var animate=function(){camera.aspect=canvas.clientWidth/canvas.clientHeight;renderer.setPixelRatio(window.devicePixelRatio*4);camera.updateProjectionMatrix();requestAnimationFrame(animate);if(car)car.rotation.y=(mouseX/window.innerWidth)*-2-0.8road.rotation.y=car.rotation.y;pointLight.position.x+=.1;if(pointLight.position.x>9)pointLight.position.x=-9,pointLight.intensity=0;if(pointLight.position.x>0)pointLight.intensity-=.02;else pointLight.intensity+=.02;texture.offset.y-=.02;if(texture.offset.y<-1)texture.offset.y=.02;var delta=clock.getDelta();for(var i in mixers)mixers[i].update(delta);renderer.render(scene,camera)};animate()}addEventListener("mousemove",function(e){mouseX=e.clientX},false)};const particlesLoad=()=>{addScript("https://mushroomcraft1.github.io/threeJSMini.js",threeLoad)};addScript("https://mushroomcraft1.github.io/particles.js",particlesLoad)
