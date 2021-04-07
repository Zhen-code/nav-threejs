function addLabel(){
    var labelArray =
        [
            {text:"美术书法教室",position:[-71.811,8,-26.619],type:1},
            {text:"中型阶梯教室",position:[-114.858,8,-60.967],type:1},
            {text:"小会议室",position:[-104.835,8,-90.639],type:1},
            {text:"中会议室",position:[-69.256,8,-76.954],type:4},
            {text:"大会议室",position:[-52.256,8,-76.954],type:1},
            {text:"展厅",position:[-18.276,8,-76.932],type:1},
            {text:"声乐排练厅（中型）",position:[48.744,8,-94.641],type:1},
            {text:"声乐排练厅（小型）",position:[64.132,8,-74.405],type:1},
            {text:"茶座",position:[30.726,8,-26.167],type:1},
            {text:"书记室",position:[-92.750,10,-86],type:1},
            {text:"馆长室",position:[-82.750,10,-90],type:1},
            {text:"行政办公室",position:[-88.274,8,-100.786],type:1},
            {text:"休息平台",position:[12.184,10,-96.170],type:1},
            {text:"数字化服务部",position:[22.884,13,-75.170],type:1},
            {text:"观众厅上空",position:[79.004,10,-51.567],type:1},
            {text:"舞台上空",position:[104.004,10,-51.567],type:1},
            {text:"休息平台",position:[-50.210,10,-96.317],type:1},
            {text:"走廊",position:[-51.210,10,-90.317],type:1},
            {text:"走廊",position:[-32.547,10,-94.088],type:1},
            {text:"走廊",position:[-110.729,10,-74.531],type:1},
            {text:"走廊",position:[-70.821,10,-90.779],type:1},
            {text:"走廊",position:[10.698,10,-84.486],type:1},
            {text:"二层平台",position:[-37.812,10,-80.231],type:1},
            {text:"img:./images/louti.png",position:[-43.908,9,-10.691],type:1},
            {text:"img:./images/louti.png",position:[2.622,9,-10.536],type:1},
            {text:"img:./images/louti.png",position:[-102.889,9,-104.088],type:1},
            {text:"img:./images/louti.png",position:[-54.180,9,-26.536],type:1},
            {text:"img:./images/louti.png",position:[21.804,9,-26.962],type:1},
            {text:"img:./images/dianti.png",position:[40.010,9,-26.910],type:1},
            {text:"img:./images/louti.png",position:[46.446,9,-26.962],type:1},
            {text:"img:./images/louti.png",position:[-70.771,9,-44.145],type:1},
            {text:"img:./images/louti.png",position:[-106.769,9,-44.893],type:1},
            {text:"img:./images/cisuo.png",position:[-80.769,9,-44.093],type:1},
            {text:"img:./images/cisuo.png",position:[-118.769,9,-78.093],type:1},
            {text:"img:./images/dianti.png",position:[-106.769,9,-96.093],type:1},
            {text:"img:./images/cisuo.png",position:[-78.032,9,-103.984],type:1},
            {text:"img:./images/louti.png",position:[-70.032,9,-103.984],type:1},
            {text:"img:./images/cisuo.png",position:[-18.270,9,-87.599],type:1},
            {text:"img:./images/louti.png",position:[-18.270,9,-68.599],type:1},
            {text:"img:./images/dianti.png",position:[-18.270,9,-82.599],type:1},
            {text:"img:./images/louti.png",position:[28.184,9,-96.170],type:1},
            {text:"img:./images/cisuo.png",position:[62.184,9,-96.170],type:1},
            {text:"img:./images/louti.png",position:[68.184,9,-102.170],type:1},
            {text:"img:./images/dianti.png",position:[68.184,9,-94.170],type:1},
            {text:"img:./images/louti.png",position:[118.184,9,-66.170],type:1},
            {text:"img:./images/louti.png",position:[114.184,9,-30.170],type:1},
            {text:"img:./images/louti.png",position:[80.184,9,-65.170],type:1},
        ]

    for(var i=0;i<labelArray.length;i++) {
        addLabelSprite(labelArray[i].text,13,labelArray[i].position);
    }
}

function addFloor(){
    var floor = new loadFloor(floorInfo);
    floor.load();
    addLabel();
}

//楼层子项的分类类型
var ObjType = {
    CUBE:"cube",
    FLOOR:"floor",        //地板
    CELL:"cell",          //常用的小隔间
    WALL:"wall",          //墙体
    GLASS:"glass",         //玻璃
    GALLERY: "gallery"
}

//颜色常量 包括填充颜色和边框颜色
var colorConst = [
    {fill:"#DD903E",stroke:"#DD903E"},          //行政区颜色
    {fill:"#EABE84",stroke:"#EABE84"},          //教学区颜色
    {fill:"#D2D2D2",stroke:"#D2D2D2"},          //其它区域颜色
    {fill:"#E9E7E7",stroke:"#E9E7E7"},           //楼层底色
]

var floorInfo =
    {
        buildingId:"01",buildingName:"测试楼层",center:[120,0,6],buildingItem:[
            {type:"floor",name:"地板",points:[
                    [15.684,0,0.023],[-4.292,0,-0.106],[-4.292,0,-19.033],
                    [4.966,0,-19.085], [4.634,0,-35.003],[51.423,0,-35.003],
                    [51.225,0,-74.928],[55.927,0,-75.599],[55.927,0,-82.983],
                    [36.887,0,-83.089],[37.562,0,-72.973], [3.145,0,-72.973],
                    [3.923,0,-106.954],[19.470,0,-106.954],[19.044,0,-93.332],
                    [25.859,0,-93.758],[25.859,0,-106.954], [72.830,0,-106.954],
                    [72.878,0,-99.470],[78.778,0,-99.470],[78.644,0,-77.490],
                    [88.300,0,-77.490], [88.032,0,-84.995],[116.463,0,-84.861],
                    [116.143,0,-79.334],[124.294,0,-79.120],[123.651,0,-71.402],
                    [127.726,0,-71.188],[127.873,0,-35.367],[122.899,0,-35.367],
                    [122.630,0,-16.962],[15.658,0,-16.451]
                ]},
            {type:"floor",name:"地板左",points:[
                    [-37.450,0,-2.165],[-53.694,0,-1.893],[-53.694,0,-19.217],
                    [-94.336,0,-19.088],[-93.899,0,-32.832],[-88.005,0,-33.268],
                    [-88.223,0,-35.886],[-113.110,0,-35.668],[-113.110,0,-48.539],
                    [-126.341,0,-48.400],[-126.341,0,-83.548],[-115.350,0,-82.889],
                    [-115.722,0,-106.527],[-67.728,0,-106.246],[-67.868,0,-92.223],
                    [-58.562,0,-92.395],[-58.787,0,-106.525],[-44.872,0,-106.525],
                    [-45.021,0,-103.058],[-37.839,0,-102.917],[-37.698,0,-106.857],
                    [-3.338,0,-106.716],[-3.197,0,-99.947],[3.759,0,-99.796],
                    [4.181,0,-91.904],
                    [-1.799,0,-91.800],[-1.234,0,-64.123],[-2.930,0,-64.123],
                    [-2.364,0,-58.898],[-36.278,0,-58.757],[-36.137,0,-64.123],
                    [-41.365,0,-63.840],[-41.224,0,-91.659],[-44.192,0,-91.517],
                    [-43.909,0,-71.607],[-78.106,0,-71.607],[-78.247,0,-83.610],
                    [-100.574,0,-83.468],[-100.291,0,-53.956],[-66.660,0,-53.673],
                    [-66.660,0,-35.316],[-47.583,0,-35.034],[-47.577,0,-18.188],
                    [-37.226,0,-18.188],
                ]},
            {type:"cell",name:"A区",routePoint:0,color:2,points:[[7.65,0,-5.4],[-1.5,0,-5.4],[-1.55,0,-14.6],[7.6,0,-14.6]]},
            {type:"cell",name:"B区",routePoint:1,color:2,points:[[-40.3,0,-5.4],[-49.5,0,-5.4],[-49.55,0,-14.6],[-40.5,0,-14.6]]},
            {type:"cell",name:"茶座",routePoint:2,color:2,points:[[50.088,0,-20.587],[15.431,0,-20.587],[15.692,0,-32.885],[50.088,0,-32.646]]},
            {type:"cell",name:"美术书法教室",routePoint:3,color:0,points:[
                    [-51.634,0,-20.781],[-83.243,0,-21.228],[-83.243,0,-32.253],
                    [-77.981,0,-32.206],[-77.977,0,-38.958],[-110.230,0,-38.809],
                    [-110.230,0,-50.580],[-69.675,0,-50.133],[-69.526,0,-38.809],
                    [-75.042,0,-38.809],[-75.191,0,-32.700],[-51.634,0,-32.104],
                ]},
            {type:"cell",name:"小会议室",routePoint:4,color:2,points:[[-76.920,0,-86.457],[-108.740,0,-86.457],[-108.813,0,-96.356],
                    [-76.837,0,-96.600]]},
            {type:"cell",name:"中型阶梯教室",routePoint:5,color:0,points:[[-114.985,0,-53.259],[-124.328,0,-53.527],[-124.328,0,-78.804],[-114.985,0,-79.072]]},
            {type:"cell",name:"大会议室",routePoint:4,color:2,points:[
                [-47.407,0,-75.006],[-74.083,0,-75.156],[-73.783,0,-86.389],
                    [-47.257,0,-86.389]
                ]},
            {type:"cell",name:"展厅",routePoint:6,color:2,points:[[-6.878,0,-66.051],[-33.004,0,-66.078],[-32.736,0,-90.118],
                    [-6.810,0,-90.582]]},
            {type:"cell",name:"声乐排练厅（中型）",routePoint:7,color:0,points:[[60.474,0,-90.751],[30.784,0,-90.483],
                    [30.441,0,-104.026],[60.403,0,-103.894]]},
            {type:"cell",name:"声乐排练厅（小型）",routePoint:8,color:0,points:[[68.803,0,-70.346],[58.661,0,-70.309],[58.661,0,-82.399],[68.803,0,-82.337]]},
            {type:"cell",name:"书记室",routePoint:4,color:1,points:[[-90.770,2,-88.549],[-94.997,2,-88.489],[-95.193,2,-94.823],[-90.820,2,-94.662]]},
            {type:"cell",name:"馆长室",routePoint:4,color:1,points:[[-80.770,2,-88.549],[-84.997,2,-88.489],[-85.193,2,-94.823],[-80.820,2,-94.662]]},
            {type:"cell",name:"行政办公室",routePoint:9,color:1,points:[[-76.920,0,-99.457],[-108.740,0,-98.957],[-108.813,0,-104.356],
                    [-76.837,0,-104.600]]},
            {type:"cell",name:"休息平台",routePoint:10,color:2,points:[[-46.182,0,-92.645],[-55.779,0,-92.645],[-55.682,0,-101.426],[-46.270,0,-101.599]]},
            {type:"cell",name:"休息平台",routePoint:11,color:2,points:[[16.162,0,-92.777],[6.279,0,-92.777],
                    [6.370,0,-100.144],[16.057,0,-100.040]]},
            {type:"cell",name:"数字化服务部",routePoint:12,color:2,points:[[34.255,0,-73.591],[7.298,0,-73.486],[7.319,0,-80.144],[34.057,0,-80.040]]},
            {type:"cell",name:"舞台",routePoint:13,color:2,points:[[116.417,0,-26.115],[54.339,0,-26.115],
                    [54.339,0,-66.811],[116.417,0,-66.702]]},
            {type:"cell",name:"观众厅上空",routePoint:13,color:1,points:[[85.276,2,-35.813],[65.530,2,-35.999],[65.031,2,-62.787],
                    [85.230,2,-63.151],[94.595,2,-58.436],[94.378,2,-40.816]]},
            {type:"cell",name:"舞台上空",routePoint:13,color:1,points:[[112.175,2,-36.192],[95.509,2,-35.192],[95.030,2,-62.800],[112.175,2,-62.345]]},
            {type:"gallery",name:"走廊",routePoint:-1,color:2,points:[[-48.182,0,-84.645],[-54.779,0,-84.645],[-54.682,0,-93.426],[-48.270,0,-93.599]]},
            {type:"gallery",name:"走廊",routePoint:-1,color:2,points:[[6.895,0,-93.925],[-47.272,0,-93.744],[-47.327,0,-99.003],[8.895,0,-98.870]]},
            {type:"gallery",name:"走廊",routePoint:-1,color:2,points:[[-108.698,0,-50.659],[-113.287,0,-50.553],[-114.000,0,-94.617],[-108.627,0,-94.786]]},
            {type:"gallery",name:"走廊",routePoint:-1,color:2,points:[[-68.140,0,-95.769],[-111.898,0,-95.769],
                    [-111.727,0,-99.482],[-68.140,0,-99.482]]},
            {type:"gallery",name:"走廊",routePoint:-1,color:2,points:[[-68.140,0,-84.769],[-70.898,0,-84.769],
                    [-70.727,0,-95.482],[-68.140,0,-95.482]]},
            {type:"gallery",name:"走廊",routePoint:-1,color:2,points:[[12.430,0,-79.298],[7.697,0,-79.436],
                    [7.420,0,-93.947],[12.638,0,-93.909]]},
            {type:"gallery",name:"走廊",routePoint:-1,color:2,points:[[28.125,0,-82.753],[10.565,0,-82.306],
                    [10.677,0,-84.539],[28.125,0,-84.539]]},
            {type:"gallery",name:"走廊",routePoint:-1,color:2,points:[[28.125,0,-82.753],[26.565,0,-82.753],
                    [26.677,0,-94.539],[28.125,0,-94.539]]},
            {type:"gallery",name:"走廊",routePoint:-1,color:2,points:[[74.125,0,-84.753],[26.565,0,-84.753],
                    [26.677,0,-88.539],[74.125,0,-88.539]]},
            {type:"gallery",name:"走廊",routePoint:-1,color:2,points:[[58.125,0,-80.753],[56.565,0,-80.753],
                    [56.677,0,-84.539],[58.125,0,-84.539]]},
        ]
    }

//初始化楼层数据
var loadFloor = function(floor){
    if(!floorGroup){
        floorGroup = new THREE.Object3D();
        scene.add(floorGroup);
    }
    this.container = floorGroup;            //存放楼层元素的容器
    // console.log()
    this.data = floor;
}

//加载楼层
loadFloor.prototype.load = function(){
    var floor = this.data;
    var buildingId = floor.buildingId,buildingName = floor.buildingName;
    var buidlingItem = floor.buildingItem;
    for(var i=0;i<buidlingItem.length;i++){
        var item = buidlingItem[i];
        var type = item.type;
        var points = item.points;
        var name = item.name;
        var pntNum = item.routePoint;
        var colorIndex = item.color;
        switch(type){
            case ObjType.CELL:
                this.addCell(points,6,colorIndex,name,pntNum);
                break;
            case ObjType.FLOOR:
                this.addFloor(points,3);
                break;
            case ObjType.GALLERY:
                this.addGallery(points,3.1)
                break;
        }
    }
}

loadFloor.prototype.addGallery = function (points,height){
    var geometry = this.getGeometry(points,height);
    geometry.computeFaceNormals();          //计算法向量
    var material = new THREE.MeshLambertMaterial({color: "#D2D2D2",
        side:THREE.DoubleSide
    });         //MeshLambertMaterial
    var mesh = new THREE.Mesh(geometry,material);
    mesh.castShadow = true;
    this.container.add(mesh);
}
/*
*   创建地板
* */
loadFloor.prototype.addFloor = function(points,height){
    var geometry = this.getGeometry(points,height);
    geometry.computeFaceNormals();          //计算法向量
    var material = new THREE.MeshLambertMaterial({color: "#E9E7E7",
        side:THREE.DoubleSide
    });         //MeshLambertMaterial
    var mesh = new THREE.Mesh(geometry,material);
    mesh.castShadow = true;
    this.container.add(mesh);				//添加填充

}

/*
*   创建不规则的小室
* */
loadFloor.prototype.addCell = function(points,height,colorIndex,name,pntNum){
    var geometry = this.getGeometry(points,height);
    geometry.computeFaceNormals();          //计算法向量
    var material = new THREE.MeshLambertMaterial({color:colorConst[colorIndex].fill,side:THREE.DoubleSide});         //受光照影响
    var mesh = new THREE.Mesh(geometry,material);
    mesh.cellName = name;
    if(pntNum != undefined){
        mesh.pointNum = pntNum;
    }
    this.container.add(mesh);				//添加填充

    var lineMaterial = new THREE.LineBasicMaterial({
        color:colorConst[colorIndex].stroke,
        linecap: 'square'//'butt', 'round' 和 'square'
    });
    var lineGeometry =this.getBorderGeometry(points,height);
    var line = new THREE.Line(lineGeometry, lineMaterial);
    this.container.add(line);
}

//生成顶部的线
loadFloor.prototype.getBorderGeometry = function(points,height,color){
    var geometry = new THREE.Geometry();
    var topPoints = [];
    for(var i=0;i<points.length;i++){
        var vertice = points[i];
        topPoints.push([vertice[0],vertice[1]+height,vertice[2]]);
    }
    for(var i=0;i<topPoints.length;i++){
        var topPoint = topPoints[i];
        geometry.vertices.push(new THREE.Vector3(topPoint[0],topPoint[1],topPoint[2]));
        if(i==topPoints.length-1){
            geometry.vertices.push(new THREE.Vector3(topPoints[0][0],topPoints[0][1],topPoints[0][2]));
        }
    }
    return geometry;
}

//根据传入的坐标点获取几何
loadFloor.prototype.getGeometry = function(points,height){
    if(points.length < 3){
        console.log("至少需要三个点来创建盒子");
        return;
    }
    var topPoints = [];
    for(var i=0;i<points.length;i++){
        var vertice = points[i];
        topPoints.push([vertice[0],vertice[1]+height,vertice[2]]);
    }
    var totalPoints = points.concat(topPoints);
    var vertices =[];
    for(var i=0;i<totalPoints.length;i++){
        vertices.push(new THREE.Vector3(totalPoints[i][0],totalPoints[i][1],totalPoints[i][2]))//设置xyz三个向量
    }
    var length = points.length;
    var faces = [];
    for(var j=0;j<length;j++){                      //侧面生成三角形
        if(j!=length-1){
            faces.push(new THREE.Face3(j,j+1,length+j+1));
            faces.push(new THREE.Face3(length+j+1,length+j,j));
        }else{
            faces.push(new THREE.Face3(j,0,length));
            faces.push(new THREE.Face3(length,length+j,j));
        }
    }
    var data=[];
    for(var i=0;i<length;i++){
        data.push(points[i][0],points[i][2]);
    }
    var triangles = Earcut.triangulate(data);
    if(triangles && triangles.length != 0){
        for(var i=0;i<triangles.length;i++){
            var tlength = triangles.length;
            if(i%3==0 && i < tlength-2){
                faces.push(new THREE.Face3(triangles[i],triangles[i+1],triangles[i+2]));                            //底部的三角面
                faces.push(new THREE.Face3(triangles[i]+length,triangles[i+1]+length,triangles[i+2]+length));        //顶部的三角面
            }
        }
    }
    var geometry = new THREE.Geometry();
    geometry.vertices = vertices;
    geometry.faces = faces;
    return geometry;
}

//清除楼层
loadFloor.prototype.clear = function(){
    scene.remove(this.container);
    this.container = null;
    floorGroup = null;
}

//使用sprite制作标注
function addLabelSprite(message,fontsize,position){
    var canvas = generateCanvas(message,position);
    if(canvas){
        makeCanvasSprite(canvas,position);
    }
}

//根据文字生产canvas
function generateCanvas(text,position) {
    var canvas = document.createElement( 'canvas' );
    var context = canvas.getContext( '2d' );
    if(text.startsWith('img',0)){
            var text = text.substring(4)
            var texture = new THREE.TextureLoader().load(text);
            var spriteMaterial = new THREE.SpriteMaterial({map : texture});
            var sprite = new THREE.Sprite(spriteMaterial);
            sprite.position.x = position[0];
            sprite.position.y = position[1];
            sprite.position.z = position[2];
            texture.needsUpdate = true;
            scene.add(sprite)
            sprite.scale.set(6, 6, 6);
    }else{
        context.font='50px Microsoft YaHei';
        canvas.width = context.measureText(text).width;      //根据文字内容获取宽度
        canvas.height = 58; // fontsize * 1.5
        context.beginPath();
        context.font='50px Microsoft YaHei';
        context.fillStyle = "#222";
        context.fillText(text,0,50);
        context.fill();
        context.stroke();
        return canvas;
    }
}

//根据canvas图形制作sprite
function makeCanvasSprite(canvas,position){
    var texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;
    var spriteMaterial = new THREE.SpriteMaterial({map : texture,depthWrite:false});
    var sprite = new THREE.Sprite(spriteMaterial);
    sprite.renderOrder = 0;
    sprite.center = new THREE.Vector2(0.5,0);
    sprite.position.x = position[0];
    sprite.position.y = position[1];
    sprite.position.z = position[2];
    //sprite.visible = false;
    texture.needsUpdate = true
    labelGroup.add(sprite);
}

function updateLabel(){
    var labelSprites = labelGroup ? labelGroup.children : [];
    for(var i=0;i<labelSprites.length;i++){
        var sprite = labelSprites[i];
        var v = new THREE.Vector3();
        var scale_factor = 3;
        sprite.scale.x = sprite.scale.y = v.subVectors( sprite.position, camera.position ).length() / scale_factor;
    }
}

//更新文字sprite标注
function updateLabelSprite(){
    var sprites = labelGroup ? labelGroup.children : [];
    if(sprites.length == 0) return;
    for(var i=0;i<sprites.length;i++){
        var sprite = sprites[i];
        sprite.visible = true;
    }

    for(var i=0;i<sprites.length;i++){
        var compareSprite = sprites[i];
        var canvas = compareSprite.material.map.image;
        if(canvas){
            var position =  compareSprite.position;
            var scale = getPoiScale(position,{w:canvas.width,h:canvas.height});
            compareSprite.scale.set(scale[0]/4,scale[1]/4,1.0);
            // if(compareSprite.visible){		//true
            //     for(var j=i+1;j<sprites.length;j++){
            //         var sprite = sprites[j];
            //         if(isPOILabelRect(compareSprite,sprite)){
            //             sprite.visible = false;
            //         }
            //     }
            // }
        }
    }
}

function getPoiScale(position,poiRect){
    if(!position) return;
    var distance = camera.position.distanceTo(position);        //相机和标注点的距离
    var top = Math.tan(camera.fov / 2 * Math.PI / 180)*distance;    //camera.fov 相机的拍摄距离
    var meterPerPixel = 2*top/window.innerHeight;
    var scaleX = poiRect.w * meterPerPixel;
    var scaleY = poiRect.h * meterPerPixel;
    return [scaleX,scaleY,1.0];
}

//检测两个标注sprite是否碰撞
function isPOILabelRect(compareSprite,sprite){
    var comparePosition = toScreenPos([compareSprite.position.x,compareSprite.position.y,compareSprite.position.z],camera);
    var spritePosition = toScreenPos([sprite.position.x,sprite.position.y,sprite.position.z],camera);

    var image1 = compareSprite.material.map.image;
    var image2 = sprite.material.map.image;
    var w1 = image1.width/2;
    var h1 = image1.height/2;
    var x1 = comparePosition.x - w1/2;
    var y1 = comparePosition.y - h1/2;

    var w2 = image2?image2.width/2:0;
    var h2 = image2?image2.height/2:0;

    var x2 = spritePosition.x - w2/2;         //点2左下角的xy点
    var y2 = spritePosition.y - h2/2;
    if (x1 >= x2 && x1 >= x2 + w2) {
        return false;
    } else if (x1 <= x2 && x1 + w1 <= x2) {
        return false;
    } else if (y1 >= y2 && y1 >= y2 + h2) {
        return false;
    } else if (y1 <= y2 && y1 + h1 <= y2) {
        return false;
    }else{
        return true;
    }
}

//three世界坐标转为屏幕坐标
function toScreenPos(position,camera){
    var worldVector = new THREE.Vector3(
        position[0],
        position[1],
        position[2]
    );
    var standardVector = worldVector.project(camera);//世界坐标转标准设备坐标
    var a =  window.innerWidth / 2;
    var b =  window.innerHeight / 2;
    var x = Math.round(standardVector.x * a + a);//标准设备坐标转屏幕坐标
    var y = Math.round(-standardVector.y * b + b);//标准设备坐标转屏幕坐标
    return {
        x: x,
        y: y
    };
}