function addLabel(){
    var labelArray =
        [
            // {text:"红星太平洋影城",position:[-34,3.1,-37],type:1},
            // {text:"拿渡麻辣香锅",position:[13.4,3.1,-10],type:4},
            // {text:"长安十三坊",position:[36.5,3.1,-21.1],type:3},
            // {text:"将太无二",position:[13,3.1,-50],type:2},
            // {text:"树番茄",position:[2.6,3.1,-42],type:1},
            // {text:"新白鹿",position:[-11.8,3.1,-57],type:4},
            // {text:"外婆家",position:[-11,3.1,-21],type:1},
            // {text:"外婆家123",position:[7,3.6,-18],type:1}
            {text:"美术书法教室",position:[-71.811,5.1,-30.619],type:1},
            {text:"中型阶梯教室",position:[-96.858,5.6,-60.967],type:1},
            {text:"小会议室",position:[-104.835,5.6,-96.639],type:1},
            {text:"中会议室",position:[-76.256,5.6,-73.954],type:4},
            {text:"大会议室",position:[-50.256,10.6,-63.954],type:1},
            {text:"展厅",position:[-15.276,10.6,-66.932],type:1},
            {text:"声乐排练厅（中型）",position:[49.744,10.6,-90.641],type:1},
            {text:"声乐排练厅（小型）",position:[71.132,10.6,-76.405],type:1},
            {text:"img:./images/louti.png",position:[-102.889,10.6,-108.088],type:1},
            {text:"img:./images/louti.png",position:[-46.908,10.6,-10.691],type:1},
            {text:"img:./images/louti.png",position:[2.622,10.6,-10.536],type:1},
            {text:"img:./images/louti.png",position:[-66.180,10.6,-22.536],type:1},
            {text:"img:./images/louti.png",position:[21.804,10.6,-21.962],type:1},
            {text:"img:./images/dianti.png",position:[38.010,10.6,-22.210],type:1},
            {text:"img:./images/louti.png",position:[44.446,10.6,-21.962],type:1},
            {text:"img:./images/louti.png",position:[-82.771,10.6,-39.145],type:1},
            {text:"img:./images/louti.png",position:[-108.769,10.6,-38.893],type:1},
            {text:"img:./images/cisuo.png",position:[-90.769,10.6,-39.093],type:1},
            {text:"img:./images/cisuo.png",position:[-108.769,10.6,-68.093],type:1},
            {text:"img:./images/dianti.png",position:[-100.769,10.6,-90.093],type:1},
            {text:"茶座",position:[30.726,10.6,-21.167],type:1},
            {text:"书记室",position:[-88.750,10.6,-86],type:1},
            {text:"馆长室",position:[-65.750,10.6,-90],type:1},
            {text:"行政办公室",position:[-88.274,10.6,-108.786],type:1},
            {text:"img:./images/cisuo.png",position:[-76.032,10.6,-107.984],type:1},
            {text:"img:./images/louti.png",position:[-64.032,10.6,-107.984],type:1},
            {text:"img:./images/cisuo.png",position:[-14.270,10.6,-86.599],type:1},
            {text:"img:./images/louti.png",position:[-22.270,10.6,-78.599],type:1},
            {text:"img:./images/dianti.png",position:[-14.270,10.6,-78.599],type:1},
            {text:"img:./images/louti.png",position:[-6.270,10.6,-78.599],type:1},
            {text:"img:./images/louti.png",position:[-14.000,10.6,-62.599],type:1},
            {text:"休息平台",position:[16.184,10.6,-96.170],type:1},
            {text:"数字化服务部",position:[20.184,10.6,-70.170],type:1},
            {text:"img:./images/louti.png",position:[32.184,10.6,-89.170],type:1},
            {text:"img:./images/cisuo.png",position:[76.184,10.6,-89.170],type:1},
            {text:"img:./images/louti.png",position:[84.184,10.6,-89.170],type:1},
            {text:"观众厅上空",position:[79.004,10.6,-51.567],type:1},
            {text:"舞台上空",position:[104.004,10.6,-51.567],type:1},
            {text:"img:./images/louti.png",position:[114.184,10.6,-70.170],type:1},
            {text:"img:./images/louti.png",position:[114.184,10.6,-28.170],type:1},
            {text:"img:./images/louti.png",position:[80.184,10.6,-32.170],type:1},
            {text:"img:./images/louti.png",position:[80.184,10.6,-65.170],type:1},
            {text:"休息平台",position:[-46.210,10.6,-92.317],type:1},
            {text:"走廊",position:[-47.210,6,-84.317],type:1},
            {text:"走廊",position:[-32.547,6,-94.088],type:1},
            {text:"走廊",position:[3.547,6,-90.088],type:1},
            {text:"走廊",position:[15.547,6,-80.088],type:1},
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
}

//颜色常量 包括填充颜色和边框颜色
var colorConst = [
    {fill:"#D5C2B3",stroke:"#B9967D"},          //土灰色
    {fill:"#E0C494",stroke:"#E7AE78"},          //淡黄色，
    {fill:"#F4F4F4",stroke:"#9B9B9B"},          //银白色
    {fill:"#ece4d8",stroke:"#D2B48C"},           //土色
    {fill:"#FFFFFF",stroke:"#000000"},
]

var floorInfo =
    {
        buildingId:"01",buildingName:"测试楼层",center:[0,0,0],buildingItem:[
            {type:"floor",name:"地板",points:[[130,0,0],[-148,0,0],[-148,0,-124],[130,0,-124]]},
            {type:"cell",name:"A区",routePoint:0,color:2,points:[[7.65,2,-5.4],[-1.5,2,-5.4],[-1.55,2,-14.6],[7.6,2,-14.6]]},
            {type:"cell",name:"B区",routePoint:1,color:2,points:[[-43.3,2,-5.4],[-52.5,2,-5.4],[-52.55,2,-14.6],[-43.5,2,-14.6]]},
            {type:"cell",name:"茶座",routePoint:2,color:2,points:[[50.088,2,-15.587],[15.431,2,-15.587],[15.692,2,-27.885],[50.088,2,-27.646]]},
            {type:"cell",name:"美术书法教室",routePoint:3,color:0,points:[[-63.181,2,-15.685],[-95.231,2,-15.725],[-95.200,2,-26.6],[-89.752,2,-26.819],[-89.75,2,-33.259],
                    [-116.755,2,-33.339],
                    [-116.889,2,-44.822],[-80.363,2,-44.522],[-80.384,2,-33.619],[-84.222,2,-33.598],[-84.122,2,-26.468],
                    [-63.181,2,-26.629]
                ]},
            {type:"cell",name:"小会议室",routePoint:2,color:2,points:[[-58.920,2,-86.457],[-99.740,2,-86.457],[-99.813,2,-102.356],[-58.837,2,-102.600]]},
            {type:"cell",name:"中型阶梯教室",routePoint:5,color:0,points:[[-105.985,2,-47.259],[-118.328,2,-47.527],[-118.328,2,-73.804],[-105.985,2,-74.072]]},
            {type:"cell",name:"大会议室",routePoint:6,color:2,points:[[-42.661,2,-69.514],[-60.638,2,-69.550],[-60.802,2,-83.457],[-42.392,2,-83.188]]},
            {type:"cell",name:"中会议室",routePoint:7,color:2,points:[[-60.914,2,-69.687],[-69.770,2,-69.787],[-69.770,2,-83.496],[-60.914,2,-83.496]]},
            {type:"cell",name:"展厅",routePoint:8,color:2,points:[[1.078,2,-63.051],[-33.004,2,-63.351],[-32.736,2,-100.118],[0.810,2,-99.582]]},
            {type:"cell",name:"声乐排练厅（中型）",routePoint:9,color:0,points:[[82.474,0,-85.751],[38.784,0,-85.483],[38.441,0,-99.026],[82.403,0,-98.894]]},
            {type:"cell",name:"声乐排练厅（小型）",routePoint:10,color:0,points:[[88.803,0,-70.346],[77.661,0,-70.309],[77.661,0,-82.399],[88.803,0,-82.337]]},
            {type:"cell",name:"书记室",routePoint:4,color:1,points:[[-82.770,3,-88.549],[-86.997,3,-88.489],[-87.193,3,-94.823],[-82.820,3,-94.662]]},
            {type:"cell",name:"馆长室",routePoint:4,color:1,points:[[-74.770,3,-88.549],[-78.997,3,-88.489],[-79.193,3,-94.823],[-74.820,3,-94.662]]},
            {type:"cell",name:"行政办公室",routePoint:11,color:1,points:[[-60.940,2,-106.037],[-101.061,2,-106.154],[-101.070,2,-112.899],[-60.903,2,-113.038]]},
            {type:"cell",name:"休息平台",routePoint:-1,color:2,points:[[-42.182,2,-90.645],[-51.779,2,-90.645],[-51.682,2,-99.426],[-42.270,2,-99.599]]},
            {type:"cell",name:"休息平台",routePoint:-1,color:2,points:[[20.162,2,-87.777],[11.579,2,-87.777],[11.370,2,-96.144],[20.057,2,-96.040]]},
            {type:"cell",name:"数字化服务部",routePoint:12,color:2,points:[[38.255,2,-63.591],[11.298,2,-63.486],[11.319,2,-77.144],[38.057,2,-77.040]]},
            {type:"cell",name:"舞台",routePoint:13,color:2,points:[[118.417,2,-32.115],[58.339,2,-32.115],[58.339,2,-45.167],[60.427,2,-45.167],[60.427,2,-53.997],[60.339,2,-66.811],[118.417,2,-66.702]]},
            {type:"cell",name:"观众厅上空",routePoint:13,color:2,points:[[85.276,3,-35.813],[65.530,3,-35.999],[65.031,3,-62.787],[85.230,3,-63.151],[94.595,3,-58.436],[94.378,3,-40.816]]},
            {type:"cell",name:"舞台上空",routePoint:13,color:2,points:[[115.175,3,-36.192],[96.509,3,-36.192],[96.830,3,-62.800],[115.175,3,-62.345]]},
            {type:"cell",name:"走廊",routePoint:-1,color:2,points:[[-44.182,0.5,-82.645],[-50.779,0.5,-82.645],[-50.682,0.5,-91.426],[-44.270,0.5,-91.599]]},
            {type:"cell",name:"走廊",routePoint:-1,color:2,points:[[-33.195,0.5,-92.925],[-42.276,0.5,-92.744],[-42.327,0.5,-98.003],[-33.114,0.5,-97.870]]},
            {type:"cell",name:"走廊",routePoint:-1,color:2,points:[[10.895,0.5,-88.925],[0.276,0.5,-88.744],[0.327,0.5,-94.003],[10.895,0.5,-93.870]]},
            {type:"cell",name:"走廊",routePoint:-1,color:2,points:[[18.895,0.5,-76.925],[12.276,0.5,-76.744],[12.327,0.5,-90.003],[18.895,0.5,-90.870]]},
            // {type:"cell",name:"红星太平洋影城",routePoint:18,color:0,points:[[-46.1096,0,-62.9446],[-25.2435,0,-62.6596],[-18.2435,0,-56.4096],
            //         [-19.1535,0,-53.4096],[-19.1535,0,-31.5496],[-19.1535,0,-26.5196],[-21.4335,0,-26.5196],
            //         [-21.4335,0,-23.7396],[-21.4335,0,-22.3496],[-21.4335,0,-20.9596],[-26.6235,0,-20.9596],[-26.6235,0,-11.8496],[-19.1535,0,-11.8496],[-19.1535,0,-10.1596],
            //         [-23.0296,0,-5.76461],[-46.1096,0,-5.76461]]},
            // {type:"cell",name:"影城上楼梯",color:2,points:[[-20.2978,0,-55.944],[-18.9978,0,-55.944],[-18.9978,0,-54.664],[-20.2978,0,-54.664],[-20.2978,0,-55.944]]},
            // {type:"cell",name:"影城上电梯",color:3,points:[[-20.9243,0,-61.5735],[-19.6243,0,-61.5735],[-19.6243,0,-60.2935],[-20.9243,0,-60.2935],[-20.9243,0,-61.5735]]},
            // {type:"cell",name:"右上楼梯",color:1,points:[[-3.4099,0,-61.8127],[-2.1099,0,-61.8127],[-2.1099,0,-60.5327],[-3.4099,0,-60.5327],[-3.4099,0,-61.8127]]},
            // {type:"cell",name:"右上电梯",color:1,points:[[-2.03878,0,-56.5083],[-0.738783,0,-56.5083],[-0.738783,0,-55.2283],[-2.03878,0,-55.2283],[-2.03878,0,-56.5083]]},
            // {type:"cell",name:"将太无二",routePoint:13,color:0,points:[[13.1041,0,-36.8927],[8.59783,0,-36.9247],[8.59783,0,-46.1447],[-1.89217,0,-46.1447],[-1.89217,0,-52.3847],[2.65783,0,-52.3847],
            //         [2.65783,0,-63.8047],[10.9378,0,-63.8047],[29.5688,0,-45.2561],[25.5417,0,-37.1515],[25.1017,0,-37.1515],[24.0375,0,-37.5872],
            //         [21.5451,0,-38.1649],[20.7207,0,-38.2616],[19.4407,0,-38.2616],[18.6507,0,-38.2616],[17.4188,0,-37.9972],[16.0234,0,-37.5678],
            //         [15.3796,0,-37.2928],[14.9021,0,-37.0198],[14.5441,0,-36.8927],[13.1041,0,-36.8927]]},
            // {type:"cell",name:"OUMUNI炸鸡",color:2,points:[[-6.84217,0,-41.0603],[-6.84217,0,-46.1447],[-1.89217,0,-46.1447],[-1.89217,0,-41.0603],[-6.84217,0,-41.0603]]},
            // {type:"cell",name:"beanHouse",color:3,points:[[-6.84217,0,-36.9247],[-6.84217,0,-41.0603],[-1.89217,0,-41.0603],[-1.89217,0,-36.9247],[-6.84217,0,-36.9247]]},
            // {type:"cell",name:"树番茄",color:1,routePoint:16,points:[[-1.89217,0,-36.9247],[-1.89217,0,-46.1447],[8.59783,0,-46.1447],[8.59783,0,-36.9247],[-1.89217,0,-36.9247]]},
            // {type:"cell",name:"右下卫生间",color:0,points:[[24.553,0,-6.372],[25.853,0,-6.372],[25.853,0,-5.092],[24.553,0,-5.092],[24.553,0,-6.372]]},
            // {type:"cell",name:"鲜果时间",color:3,points:[[5.46799,0,-23.0964],[9.23799,0,-23.0964],[9.23799,0,-15.8764],[5.46799,0,-15.8764],[5.46799,0,-23.0964]]},
            // {type:"cell",name:"拿渡麻辣香锅",routePoint:7,color:2,points:[[11.7215,0,-4.54425],[11.6523,0,-4.58309],[11.579,0,-4.6905],[11.579,0,-6.2505],[10.5046,0,-6.8284],[4.45764,0,-9.89482],[4.31969,0,-10.1269],
            //         [4.31969,0,-14.0969],[4.41498,0,-14.127],[14.615,0,-14.127],[15.6064,0,-13.0013],[16.9461,0,-12.3492],[17.8624,0,-12.0628],[18.5124,0,-12.0628],
            //         [19.7724,0,-12.0628],[20.24,0,-11.6407],[22.4214,0,-8.61504],[20.24,0,-8.61504],[19.7724,0,-8.61504],[19.5659,0,-8.51369],[19.497,0,-8.36928],
            //         [19.497,0,-4.62928],[19.3615,0,-4.54425],[18.8615,0,-4.54425],[11.7215,0,-4.54425]]},
            // {type:"cell",name:"长安三十六坊",routePoint:12,color:0,points:[[38.5904,0,-4.55977],[38.5703,0,-9.66049],[26.0401,0,-10.0424],[25.397,0,-10.1908],[22.7126,0,-12.4053],[22.7126,0,-12.9753],[23.1169,0,-15.8062],
            //         [24.8753,0,-16.4714],[26.5457,0,-17.4181],[28.0284,0,-18.6536],[29.1813,0,-19.8339],[30.5124,0,-22.0674],[31.2625,0,-24.1249],[31.5402,0,-26.5792],
            //         [31.1559,0,-29.6453],[30.3476,0,-31.7985],[29.2564,0,-33.5222],[27.9781,0,-34.8456],[29.5934,0,-36.9841],[29.7737,0,-37.0918],[29.9337,0,-37.0918],
            //         [30.3144,0,-36.8335],[34.4252,0,-33.2706],[34.5452,0,-33.2706],[34.709,0,-33.402],[36.7336,0,-37.5436],[36.8918,0,-37.6489],[37.0618,0,-37.6489],
            //         [37.9187,0,-37.008],[42.6299,0,-32.3716],[43.217,0,-31.5132],[43.5582,0,-30.3314],[44.1816,0,-26.4512],[44.4705,0,-23.2944],[44.129,0,-16.1525],
            //         [43.3104,0,-11.921],[42.1577,0,-8.12198],[41.1827,0,-5.61492],[40.5904,0,-4.55977],[39.7904,0,-4.55977],[38.5904,0,-4.55977]]},
            // {type:"cell",name:"禾绿回转寿司",color:3,points:[[8.50476,0,-25.9258],[-1.14347,0,-25.9258],[-1.14347,0,-31.5496],[9.46653,0,-31.5496],[9.02361,0,-30.338],[8.64993,0,-28.5976],[8.50476,0,-27.3058],[8.50476,0,-25.9258]]},
            // {type:"cell",name:"外婆家",routePoint:0,color:1,points:[[-1.14347,0,-10.1596],[-19.1535,0,-10.1596],[-19.1535,0,-31.5496],[-1.14347,0,-31.5496],[-1.14347,0,-10.1596]]},
            // {type:"cell",name:"新白鹿",routePoint:19,color:2,points:[[-17,0,-50],[-17,0,-63.8047],[-5,0,-63.8047],[-5,0,-50],[-17,0,-50]]},
            // {type:"cell",name:"外婆家123",routePoint:0,color:1,points:[[-1.14347,0,-10.1596],[-19.1535,0,-10.1596],[-19.1535,0,-31.5496],[-1.14347,0,-31.5496],[-1.14347,0,-10.1596]]},
        ]
    }

//初始化楼层数据
var loadFloor = function(floor){
    if(!floorGroup){
        floorGroup = new THREE.Object3D();
        scene.add(floorGroup);
    }
    this.container = floorGroup;            //存放楼层元素的容器
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
                this.addCell(points,3,colorIndex,name,pntNum);
                break;
            case ObjType.FLOOR:
                this.addFloor(points,2);
                break;
            case ObjType.CUBE:
                this.customCell()
                break;
        }
    }
}

loadFloor.prototype.customCell = function (){

}
/*
*   创建地板
* */
loadFloor.prototype.addFloor = function(points,height){
    var geometry = this.getGeometry(points,height);
    geometry.computeFaceNormals();          //计算法向量
    var material = new THREE.MeshLambertMaterial({color: "#ece4d8",
        side:THREE.DoubleSide,
        // transparent: true,
        // opacity: 0,
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

    var lineMaterial = new THREE.LineBasicMaterial({color:colorConst[colorIndex].stroke});
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
        context.font='60px Microsoft YaHei';
        canvas.width = context.measureText(text).width;      //根据文字内容获取宽度
        canvas.height = 58; // fontsize * 1.5
        context.beginPath();
        context.font='60px Microsoft YaHei';
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