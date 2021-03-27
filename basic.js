/**
 * 初始化场景
 * */
function initScene(){
    scene = new THREE.Scene();
    scene.background = new THREE.Color( '#F5F4F4' );
    // scene.background = new THREE.Color( '#000000' );
}

/**
 * 初始化相机
 * */
function initCamera(){
    // camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    // camera.up.x = 0
    // camera.up.y = 1
    // camera.up.z = 0
    // camera.position.set(0.000, 200.000, 10.000);
    // camera.lookAt(new THREE.Vector3(0.000, 0, -200.000));
    // scene.add(new THREE.AxesHelper(50))
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.lookAt(new THREE.Vector3(-2.81, 0, -33.26));
    camera.position.set(-2.81, 240.44, -33.26);
}
//
/**
 * 初始化控制器
 * */
function initControl(){
    controls = new THREE.OrbitControls( camera,renderer.domElement );//用户交互
    //设置相机的角度范围
    controls.maxPolarAngle = Math.PI * 0.5;
    //设置相机距离原点的最远距离
    controls.minDistance = 0;
    //设置相机距离原点的最远距离
    controls.maxDistance = 400;
    controls.target.set(-3.0,0,-60.268);
}
/**
 * 初始化渲染
 * */
function initRender(){
    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio(2)//window.devicePixelRatio
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    document.body.appendChild( renderer.domElement );
}


/**
 * 初始化光照
 * */
function initLight(){
    // 光线的照射
    // var ambiColor = "#ffffff";
    // var spotLight = new THREE.SpotLight(ambiColor);
    // spotLight.position.set( 0, 120, 0);
    // scene.add(spotLight);
    // var spotLight2 = new THREE.SpotLight(ambiColor);
    // spotLight2.position.set( 0, 6, 20);
    // scene.add(spotLight2);


    scene.add(new THREE.AmbientLight('#F5F4F4'));

    let spotLight = new THREE.SpotLight();
    spotLight.color = new THREE.Color('#E9E7E7');

    spotLight.castShadow = true;

    spotLight.position.set(-100, 200, -100);

    // 光的强度 默认值为1
    spotLight.intensity = 0.5;
    // 从发光点发出的距离，光的亮度，会随着距离的远近线性衰减
    spotLight.distance = 300;
    // 光色散角度，默认是 Math.PI * 2
    spotLight.angle = 1;
    // 光影的减弱程度，默认值为0， 取值范围 0 -- 1之间
    spotLight.penumbra = 0.5;
    // 光在距离上的量值, 和光的强度类似（衰减指数）
    spotLight.decay = 0.8;

    // 设置阴影分辨率
    spotLight.shadow.mapSize.width = 1024;
    spotLight.shadow.mapSize.height = 1024;

    // 投影近点 --> 从距离光源的哪一才产生阴影
    spotLight.shadow.camera.near = 0.5;
    // 投影原点 --> 到光源的哪一点位置不产生阴影
    spotLight.shadow.camera.far = 0;
    // 投影视场
    spotLight.shadow.camera.fov = 45;

    scene.add(spotLight);

    // 阴影相机助手
    let shadowCameraHelper = new THREE.CameraHelper(spotLight.shadow.camera);
    scene.add(shadowCameraHelper);

    // 聚光光源助手
    let spotLightHelper = new THREE.SpotLightHelper(spotLight);
    scene.add(spotLightHelper);


}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}