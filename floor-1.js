function addLabel(){
    var labelArray =
        [
            {text:"办公室",position:[18.860,10.1,-33.918],type:1},
            {text:"img:./images/dianti.png",position:[5.378,12.6,-24.877],type:1},
            {text:"img:./images/louti.png",position:[19.075,12.6,-42.134],type:1},
            {text:"小卖部",position:[31.726,12.1,-35.783]},
            {text:"办公室",position:[31.726,10.1,-30.590],type:1},
            {text:"img:./images/cisuo.png",position:[42.778,12.6,-35.443],type:1},
            {text:"img:./images/dianti.png",position:[35.357,12.6,-43.612],type:1},
            {text:"办公室",position:[42.478,10.1,-47.262],type:1},
            {text:"img:./images/dianti.png",position:[81.637,12.6,-50.491],type:1},
            {text:"img:./images/cisuo.png",position:[94.271,12.6,-49.355],type:1},
            {text:"img:./images/louti.png",position:[-113.211,12.6,-121.504],type:1},
            {text:"img:./images/dianti.png",position:[-111.078,12.6,-115.611],type:1},
            {text:"img:./images/cisuo.png",position:[-106.515,12.6,-122.834],type:1},
            {text:"img:./images/cisuo.png",position:[-104.303,12.6,-114.489],type:1},
            {text:"舞蹈戏曲排练厅(大型)",position:[23.599,10.1,-108.111]},
            {text:"舞蹈戏曲排练厅(中型)",position:[50.010,10.1,-115.088]},
            {text:"庭院",position:[49.258,10.1,-96.322]},
            {text:"img:./images/dianti.png",position:[66.481,12.6,-110.532],type:1},
            {text:"img:./images/cisuo.png",position:[89.489,12.6,-95.779],type:1},
            {text:"存储间",position:[98.245,10.1,-96.360]},
            {text:"侧舞台",position:[100.245,10.1,-90.360]},
            {text:"侧舞台",position:[101.078,10.1,-57.229]},
            {text:"主舞台",position:[100.769,10.1,-73.377]},
            {text:"img:./images/cisuo.png",position:[110.032,12.6,-93.609],type:1},
            {text:"候场区",position:[110.740,10.1,-86.338]},
            {text:"化妆间",position:[119.830,10.1,-74.940]},
            {text:"门廊值班室",position:[113.988,12.1,-46.236]},
            {text:"过道",position:[-82.997,16.1,-75.285]},
            {text:"img:./images/park.svg",position:[-110.053,10.6,-55.870],type:1},
            {text:"img:./images/park.svg",position:[-90.053,10.6,-55.870],type:1},
            {text:"img:./images/park.svg",position:[-74.053,10.6,-55.870],type:1},
            {text:"img:./images/park.svg",position:[-60.053,10.6,-55.870],type:1},
            {text:"img:./images/park.svg",position:[-45.053,10.6,-55.870],type:1},
            {text:"img:./images/park.svg",position:[-30.053,10.6,-55.870],type:1},
            {text:"通道",position:[-45.863,10.1,-101.285]},
            {text:"通道",position:[-60.863,10.1,-101.285]},
            {text:"通道",position:[-74.863,10.1,-101.285]},
            {text:"img:./images/park.svg",position:[-80.863,10.1,-90.285],type:1},
            {text:"img:./images/park.svg",position:[-52.863,10.1,-90.285],type:1},
            {text:"img:./images/park.svg",position:[-66.863,10.1,-90.285],type:1},
            {text:"服务大厅",position:[22.618,10.1,-49.701]},
            {text:"备用机房",position:[15.306,10.1,-12.007]},
            {text:"消防水池",position:[41.472,10.1,-21.903]},
            {text:"空调机房",position:[74.961,10.1,-21.450]},
            {text:"img:./images/louti.png",position:[110.593,12.6,-21.347],type:1},
            {text:"空调机房",position:[50.168,10.1,-74.389]},
            {text:"实验室剧场",position:[20.648,12.1,-82.107]},
            {text:"实验室剧场",position:[21.196,12.1,-60.376]},
            {text:"小型化妆室",position:[21.857,10.1,-70.590]},
            {text:"实验室剧场",position:[37.147,10.1,-68.491]},
            {text:"汽车坡道",position:[5.847,10.1,-114.122]},
            {text:"走廊",position:[4.172,7.1,-48.341]},
            {text:"走廊",position:[4.629,7.1,-20.000]},
            {text:"走廊",position:[21.630,7.1,-26.223]},
            {text:"img:./images/louti.png",position:[40.313,12,-56.326],type:1},
            {text:"走廊",position:[33.340,12.1,-100.293]},
            {text:"走廊",position:[33.340,7.1,-86.293]},
            {text:"走廊",position:[33.340,7.1,-56.293]},
            {text:"走廊",position:[48.340,12.1,-38.293]},
            {text:"练琴房",position:[18.340,12.1,-124.293]},
            {text:"非机动车库",position:[-118.340,12.1,-90.293]},
            {text:"img:./images/louti.png",position:[30.340,12.1,-120.293],type:1},
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
    {fill:"#DD903E",stroke:"#DD903E"},          //行政区颜色
    {fill:"#EABE84",stroke:"#EABE84"},          //教学区颜色
    {fill:"#D2D2D2",stroke:"#D2D2D2"},          //其它区域颜色
    {fill:"#E9E7E7",stroke:"#E9E7E7"},           //楼层底色
]

var floorInfo =
    {
        buildingId:"01",buildingName:"测试楼层",center:[0,0,0],buildingItem:[
            {type:"floor",name:"地板",points:[[119.713,0,0.562],[104.288,0,0.562],[104.012,0,-3.566],[94.923,0,-4.117],[91.893,0,-34.395],
                    [102.360,0,-34.120],[102.360,0,-36.322],[89.689,0,-36.597],[89.414,0,0.562],[72.336,0,0.287],[71.785,0,5.517],[25.510,0,5.517],
                    [25.234,0,1.113],[11.186,0,1.388],[10.635,0,-21.458],[-2.862,0,-21.458],[-2.837,0,-28.517],[11.186,0,-28.266],
                    [11.737,0,-44.854],[0.444,0,-45.130],[0.444,0,-31.642],[-39.221,0,-31.642],[-39.496,0,-20.632],[-53.819,0,-20.907],[-53.813,0,-30.817],
                    [-123.508,0,-31.092],[-129.017,0,-37.698],[-132.598,0,-37.698],[-132.047,0,-50.084],[-130.170,0,-50.078],
                    [-129.764,0,-71.993],[-137.253,0,-72.434],[-146.944,0,-79.917],[-146.944,0,-130.541],[1.069,0,-131.421],
                    [0.188,0,-58.347],[14.285,0,-58.347],[14.725,0,-86.960],[11.641,0,-87.401],[11.641,0,-131.861],
                    [78.159,0,-131.421],[79.040,0,-103.688],[120.008,0,-103.248],[128.378,0,-93.123],[129.259,0,-35.896],
                    [118.246,0,-36.337],[118.246,0,-31.935],[124.854,0,-28.413],[123.973,0,-11.245],[119.713,0,0.562],
                    [120.008,0,-6.843]]},
            {type:"cell",name:"A区",routePoint:0,color:2,points:[[113.855,6,-1.764],[106.578,6,-1.867],[106.578,6,-5.994],[99.146,6,-6.324],
                    [95.512,6,-32.733],[106.578,6,-32.898],[106.578,6,-37.024],[106.578,6,-37.024],[113.681,6,-36.859],[113.516,6,-30.917],
                    [117.150,6,-28.441],[117.480,6,-10.780],[113.846,6,-8.965]]},
            {type:"cell",name:"办公室",routePoint:1,color:0,points:[
                [18.452,6,-26.594],[13.341,6,-26.567],[13.861,6,-42.986],[18.452,6,-43.165]]
            },
            {type:"cell",name:"办公室",routePoint:2,color:0,points:[
                    [65.583,6,-28.840],[25.882,6,-28.840],[25.882,6,-38.216],[65.763,6,-38.216]]
            },
            {type:"cell",name:"办公室",routePoint:3,color:0,points:[
                    [74.920,6,-40.981],[34.198,6,-41.170],[34.387,6,-48.726],
                    [36.845,6,-48.849],[36.845,6,-56.306],
                    [50.080,6,-56.439],[50.269,6,-54.961],[74.920,6,-54.583]]
            },
            {type:"cell",name:"办公室1",routePoint:4,color:0,points:[
                    [117.461,6,-41.847],[90.141,6,-41.925],[90.017,6,-44.718],[85.380,6,-44.718],[85.380,6,-43.591],[87.385,6,-43.591],[87.510,6,-40.962],
                    [78.113,6,-41.087],[78.113,6,-48.724],[79.616,6,-48.599],[79.836,6,-52.355],[88.137,6,-52.480],[88.262,6,-47.347],
                    [89.766,6,-47.222],[90.017,6,-52.355],[113.573,6,-52.355],[113.573,6,-50.727],[117.207,6,-50.602]]
            },
            {type:"cell",name:"化妆室",routePoint:5,color:2,points:[
                    [120.924,6,-54.003],[114.803,6,-54.136],[114.404,6,-94.872],[119.859,6,-94.739],[119.992,6,-91.282],[124.650,6,-91.282],[124.916,6,-52.184],[121.057,6,-51.795]
                ]
            },
            {type:"cell",name:"化妆间",routePoint:6,color:2,points:[
                    [110.198,6,-54.100],[91.368,6,-54.100],[91.368,6,-91.026],[88.698,6,-91.166],[88.839,6,-96.642],[90.525,6,-96.642],[90.104,6,-100.573],[112.586,6,-100.713],
                    [112.727,6,-93.834],[110.057,6,-93.834],[109.917,6,-86.252],[112.868,6,-85.409],[112.868,6,-57.329],[110.057,6,-57.329]
                ]
            },
            {type:"cell",name:"舞台",routePoint:6,color:2,points:[
                    [89.884,6,-63.683],[79.487,6,-59.610],[59.992,6,-59.728],[59.874,6,-84.578],[80.019,6,-84.342],[89.943,6,-80.387]
                ]
            },
            {type:"cell",name:"庭院",routePoint:6,color:1,points:[
                    [76.214,6,-92.501],[36.985,6,-92.501],[37.292,6,-102.368],[76.754,6,-102.215]
                ]
            },
            {type:"cell",name:"舞蹈戏曲排练厅(大型)",routePoint:6,color:1,points:[
                    [28.310,6,-92.318],[14.450,6,-92.655],[14.910,6,-119.307],[28.773,6,-119.154]
                ]
            },
            {type:"cell",name:"舞蹈戏曲排练厅(大型)",routePoint:6,color:1,points:[
                    [28.310,6,-121.318],[14.950,6,-121.655],[14.910,6,-129.307],[27.973,6,-129.154]
                ]
            },
            {type:"cell",name:"舞蹈戏曲排练厅(中型)",routePoint:6,color:1,points:[
                    [63.815,6,-107.128],[37.291,6,-107.822],[37.291,6,-121.803],[63.968,6,-120.996]
                ]
            },
            {type:"cell",name:"车库洗手间",routePoint:7,color:2,points:[
                    [-99.698,6,-107.138],[-112.441,6,-107.237],[-112.441,6,-107.237],[-112.441,6,-107.237],[-112.441,6,-113.504],
                    [-117.817,6,-113.504],[-117.718,6,-120.467],[-115.826,6,-120.467],[-115.726,6,-125.938],[-106.070,6,-125.839],
                    [-106.219,6,-118.708],[-101.268,6,-118.708],[-101.427,6,-115.676],[-96.795,6,-115.357],[-96.795,6,-109.452],[-99.670,6,-109.612]
                ]
            },
            {type:"cell",name:"值班室",routePoint:6,color:2,points:[
                    [116.103,8,-42.309],[112.675,8,-42.523],[112.814,8,-49.947],[115.996,8,-49.482]
                ]
            },
            {type:"cell",name:"过道",routePoint:-1,color:2,points:[
                    [-5.863,2,-75.580],[-136.738,2,-75.024],[-136.923,2,-82.178],[-5.863,2,-82.066]
                ]
            },
            {type:"cell",name:"过道",routePoint:-1,color:2,points:[
                    [-99.991,2,-33.530],[-104.192,2,-33.649],[-104.152,2,-75.970],[-100.232,2,-75.970]
                ]
            },
            {type:"cell",name:"过道",routePoint:-1,color:2,points:[
                    [-80.991,2,-33.530],[-85.192,2,-33.649],[-85.152,2,-75.970],[-81.232,2,-75.970]
                ]
            },
            {type:"cell",name:"过道",routePoint:-1,color:2,points:[
                    [-65.991,2,-33.530],[-70.192,2,-33.649],[-70.152,2,-75.970],[-66.232,2,-75.970]
                ]
            },
            {type:"cell",name:"过道",routePoint:-1,color:2,points:[
                    [-50.991,2,-33.530],[-55.192,2,-33.649],[-55.152,2,-75.970],[-51.232,2,-75.970]
                ]
            },
            {type:"cell",name:"过道",routePoint:-1,color:2,points:[
                    [-35.991,2,-33.530],[-40.192,2,-33.649],[-40.152,2,-75.970],[-36.232,2,-75.970]
                ]
            },
            {type:"cell",name:"过道",routePoint:-1,color:2,points:[
                    [-20.991,2,-33.530],[-25.192,2,-33.649],[-25.152,2,-75.970],[-21.232,2,-75.970]
                ]
            },
            {type:"cell",name:"非机动车库",routePoint:-1,color:2,points:[
                    [-104.763,4,-83.219],[-121.843,4,-82.587],[-122.792,4,-86.380],[-133.537,4,-86.968],
                    [-133.546,4,-114.513],[-116.150,4,-114.513],[-115.834,4,-107.875],[-105.079,4,-107.559]
                ]
            },
            {type:"cell",name:"过道",routePoint:-1,color:2,points:[
                    [-45.344,2,-81.804],[-50.949,2,-81.804],[-50.278,2,-104.666],[-44.855,2,-104.478]
                ]
            },
            {type:"cell",name:"过道",routePoint:-1,color:2,points:[
                    [-60.344,2,-81.804],[-65.949,2,-81.804],[-65.278,2,-104.666],[-59.855,2,-104.478]
                ]
            },
            {type:"cell",name:"过道",routePoint:-1,color:2,points:[
                    [-75.344,2,-81.804],[-80.949,2,-81.804],[-80.278,2,-104.666],[-74.855,2,-104.478]
                ]
            },
            {type:"cell",name:"过道",routePoint:-1,color:2,points:[
                    [-1.928,2,-86.941],[-34.474,2,-86.941],[-34.689,2,-82.862],[-40.059,2,-82.647],
                    [-40.274,2,-105.831],[-43.066,2,-109.480],[-50.370,2,-110.124],[-50.585,2,-106.046],
                    [-61.821,2,-105.958],[-61.832,2,-116.697],[-57.667,2,-116.844],[-57.319,2,-125.532],
                    [-6.639,2,-125.532],[-6.986,2,-113.616],[-2.000,2,-113.575],
                ]
            },
            {type:"cell",name:"服务大厅",routePoint:-1,color:0,points:[
                    [29.239,6,-44.902],[19.980,6,-44.902],[19.851,6,-49.098],[13.897,6,-49.369],[13.868,6,-55.089],[29.097,6,-55.318]
                ]
            },
            {type:"cell",name:"备用机房",routePoint:-1,color:2,points:[
                    [18.670,6,0.000],[12.587,6,0.062],[12.438,6,-20.190],[18.075,6,-20.190]
                ]
            },
            {type:"cell",name:"消防",routePoint:-1,color:2,points:[
                    [61.513,6,-2.555],[49.572,6,-2.555],[49.572,6,-16.578],[37.481,6,-16.578],
                    [37.481,6,-5.091],[24.957,6,-5.390],[24.659,6,-26.064],[61.066,6,-26.214]

                ]
            },
            {type:"cell",name:"空调设备",routePoint:-1,color:2,points:[
                    [84.115,6,-2.257],[68.351,6,-1.959],[68.351,6,-38.063],[84.113,6,-37.419]
                ]
            },
            {type:"cell",name:"空调机房",routePoint:-1,color:2,points:[
                    [59.932,6,-59.514],[46.635,6,-59.359],
                    [46.600,6,-85.302],[59.778,6,-85.147]
                ]
            },
            {type:"cell",name:"实验室剧场",routePoint:-1,color:2,points:[
                    [46.149,6,-59.962],[34.268,6,-59.714],[34.011,6,-82.985],[46.654,6,-82.880],
                ]
            },
            {type:"cell",name:"小型化妆室与实验室剧场",routePoint:-1,color:2,points:[
                    [28.209,6,-57.039],[15.740,6,-57.039],[16.062,6,-88.927],[28.048,6,-88.766],
                ]
            },
            {type:"cell",name:"走廊",routePoint:-1,color:2,points:[
                    [13.859,2,-47.267],[-2.275,2,-47.609],
                    [-2.275,2,-53.255],[13.973,2,-53.026],
                ]
            },
            {type:"cell",name:"走廊",routePoint:-1,color:2,points:[
                    [24.859,2,-20.267],[-1.275,2,-20.609],
                    [-1.275,2,-25.255],[24.973,2,-25.026],
                ]
            },
            {type:"cell",name:"走廊",routePoint:-1,color:2,points:[
                    [24.519,2,-24.267],[20.201,2,-24.267],
                    [19.950,2,-47.534],[24.768,2,-47.398],
                ]
            },
            {type:"cell",name:"走廊",routePoint:-1,color:2,points:[//舞蹈大型旁
                    [32.919,2,-36.267],[29.201,2,-36.267],
                    [29.950,2,-120.534],[32.968,2,-120.398],
                ]
            },
            {type:"cell",name:"走廊",routePoint:-1,color:2,points:[//庭院旁
                    [76.519,2,-103.267],[30.201,2,-103.267],
                    [30.201,2,-106.534],[76.768,2,-106.398],
                ]
            },
            {type:"cell",name:"走廊",routePoint:-1,color:2,points:[//庭院旁
                    [46.519,2,-85.267],[30.201,2,-85.267],
                    [30.201,2,-90.534],[46.768,2,-90.398],
                ]
            },
            {type:"cell",name:"走廊",routePoint:-1,color:2,points:[//空调机房旁
                    [92.519,2,-87.267],[44.201,2,-87.267],
                    [44.201,2,-90.534],[92.768,2,-90.398],
                ]
            },
            {type:"cell",name:"走廊",routePoint:-1,color:2,points:[//空调机房旁
                    [92.519,2,-56.267],[30.201,2,-56.267],
                    [30.201,2,-59.534],[92.768,2,-59.398],
                ]
            },
            {type:"cell",name:"走廊",routePoint:-1,color:2,points:[//空调机房旁
                    [120.519,2,-38.267],[30.201,2,-38.267],
                    [30.201,2,-40.534],[120.768,2,-40.398],
                ]
            },
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
                this.addFloor(points,4);
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
    var material = new THREE.MeshLambertMaterial({color: "#E9E7E7",
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
        context.font='62px Microsoft YaHei';
        canvas.width = context.measureText(text).width;      //根据文字内容获取宽度
        canvas.height = 58; // fontsize * 1.5
        context.beginPath();
        context.font='62px Microsoft YaHei';
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