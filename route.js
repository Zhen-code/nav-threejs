/**
 * 保存所有节点以及名称，也可包含其他信息
 * */
var points = {
    0:{name:"节点0",position:[-0.267,0.6,-7.465]},
    1:{name:"节点1",position:[-48.624,0.6,-7.308]},
    2:{name:"节点14",position:[16.652,0.6,-24.946]},
    3:{name:"节点3",position:[-66.953,0,-20.580]},
    4:{name:"节点4",position:[-68.823,0.6,-87.402]},
    5:{name:"节点5",position:[-116.448,0.6,-52.537]},
    6:{name:"节点6",position:[-20.233,0.6,-93.804]},
    7:{name:"节点7",position:[26.555,0.6,-94.877]},
    8:{name:"节点8",position:[57.013,0.6,-82.167]},
    9:{name:"节点9",position:[-112.648,0.6,-102.712]},
    10:{name:"节点10",position:[-52.047,0.6,-94.175]},
    11:{name:"节点11",position:[10.540,0.6,-96.032]},
    12:{name:"节点12",position:[10.540,0.6,-83.165]},
    13:{name:"节点13",position:[70.397,0.6,-51.874]},
    14:{name:"节点14",position:[-104.448,0.6,-52.537]},
    15:{name:"节点15",position:[-48.923,0.6,-32.726]},
    16:{name:"节点16",position:[-66.467,0.6,-33.432]},
    17:{name:"节点17",position:[-66.467,0.6,-52.432]},
    18:{name:"节点18",position:[-112.448,0.6,-52.537]},
    19:{name:"节点19",position:[-112.648,0.6,-98.712]},
    20:{name:"节点20",position:[-68.895,0.6,-98.735]},
    21:{name:"节点21",position:[-52.895,0.6,-88.735]},
    22:{name:"节点22",position:[26.540,0.6,-86.165]},
    23:{name:"节点23",position:[56.540,0.6,-87.165]},
}

function getLength(src,des){
    var srcPosition = points[src].position;
    var desPosition = points[des].position;
    return Math.sqrt((srcPosition[0]-desPosition[0])*(srcPosition[0]-desPosition[0]) + (srcPosition[1]-desPosition[1])*(srcPosition[1]-desPosition[1]) + (srcPosition[2]-desPosition[2])*(srcPosition[2]-desPosition[2]))
}
/**
 * 节点的数量
 * */
var pointnum = (Object.keys(points)).length

/**
 *  此项为所有节点的连通性，这里测试数据中区分了道路的双向
 *  如果线路不区分双向，则同一条道路的两个方向数据可以合并为一条，比如{src:0,des:1}与{src:1,des:0}可合并为{src:0,des:1}
 * */
var routes = [
    {src:0,des:1,cost:1,extra:"0-1"},
    {src:0,des:2,cost:2,extra:"0-2"},
    {src:1,des:0,cost:1,extra:"1-0"},
    {src:1,des:2,cost:1,extra:"1-0"},
    {src:1,des:3,cost:3,extra:"1-3"},
    {src:3,des:4,cost:4,extra:"3-4"},
    {src:3,des:5,cost:5,extra:"3-5"},
    // {src:0,des:2,cost:15.345,extra:"0-2"},
    // {src:0,des:100,cost:1.00,extra:"0-100"},
    // {src:0,des:3,cost:10.345,extra:"0-3"},
    // {src:0,des:4,cost:10.345,extra:"0-4"},
    // {src:0,des:20,cost:13.880,extra:"0-20"},
    // {src:1,des:0,cost:12.345,extra:"1-0"},
    // {src:1,des:2,cost:6.090,extra:"1-2"},
    // {src:0,des:100,cost:1.00,extra:"0-100"},
]

/**
 * 邻接矩阵 使用遍历方法生成
 * 值为顶点与顶点之间边的权值，0表示无自环，一个大数表示无边(比如10000)
 * */
var matrix = [];
const MAX_INTEGER = Infinity;//没有边或者有向图中无法到达
const MIN_INTEGER = 0;//没有自环

initSingleDirectionRouteMatrix();
//initDoubleDirectionRouteMatrix();
/**
 * 初始化单向路线的邻接矩阵matrix（不区分正反）
 */
function initSingleDirectionRouteMatrix(){

    for(var i=0;i<pointnum;i++){

        let row = new Array(pointnum).fill(MAX_INTEGER);
        row[i] = MIN_INTEGER;
        matrix.push(row);
    }
    for(var i=0;i<routes.length;i++){
        var route = routes[i];
        var src = route.src,//起点
            des = route.des;//终点
        matrix[src][des] = route.cost;
    }
}

/**
 * 初始化双向路线的邻接矩阵（区分正反）
 */
function initDoubleDirectionRouteMatrix(){
    for(var i=0;i<pointnum;i++){
        let row = new Array(pointnum).fill(MAX_INTEGER);
        row[i] = MIN_INTEGER;
        matrix.push(row);
    }
    for(var i=0;i<routes.length;i++){
        var route = routes[i];
        var src = route.src,des = route.des;
        matrix[src][des] = route.cost;
        matrix[des][src] = route.cost;
    }
}

/**
 * @param {number} v 起点索引
 * @param {number} d 终点索引
 * @param {Array} adjMatrix 邻接矩阵
 */
function searchPath(v, d, adjMatrix) {
    var graph = Dijkstra(adjMatrix, v),
        path = graph.path,
        dist = graph.dist;

    var prev = path[d],
        queue = [],
        str = '';

    queue.push(d);
    while(prev && prev != v) {
        queue.push(prev);
        prev = path[prev];
    }
    queue.push(v);

    for (var j = queue.length - 1; j >= 0; j--) {
        str +=queue.pop() + '->';
    }
    console.log('path',str);
    var arr=str.split('->');
    if(str.endsWith('->')){
        arr.pop();
    }
    var rarr=[];//字符串数组转int数组
    for(var i=0;i<arr.length;i++){
        rarr.push(parseInt(arr[i]));
    }
    return {distance:dist[d],path:rarr}
}

/**
 * @param {Array} adjMatrix 邻接矩阵
 * @param {number} sourceV 源点的索引
 */

function Dijkstra(adjMatrix,sourceV) {
    var set = [], path = [], dist = [] ,distCopy = [], vertexNum = adjMatrix.length;

    var temp, u, count = 0;

    for (var i = 0; i < vertexNum; i++) {
        distCopy[i] = dist[i] = Infinity;
        set[i] = false;
    }
    distCopy[sourceV] = dist[sourceV] = 0;

    while (count < vertexNum) {

        u = distCopy.indexOf(Math.min.apply(Math, distCopy));// distCopy最小
        set[u] = true;
        distCopy[u] = Infinity;
        for (var i = 0; i < vertexNum; i++) {

            if (!set[i] && ((temp = dist[u] + adjMatrix[u][i]) < dist[i])) {
                distCopy[i] = dist[i] = temp;
                path[i] = u;
            }
        }
        count++;
    }
    return {
        path: path,
        dist: dist
    };
}

/**
 * 添加路径线
 * */
function addRouteLine(){
    var lineMaterial = new THREE.LineBasicMaterial({color:0xffff00});
    for(var key in routes){
        var route = routes[key];
        var src = points[route.src],des = points[route.des];
        var srcPosition = new THREE.Vector3(src.position[0],src.position[1],src.position[2]);
        var desPosition = new THREE.Vector3(des.position[0],des.position[1],des.position[2]);
        let lineGeom = new THREE.Geometry();
        lineGeom.vertices = [srcPosition,desPosition];
        let line = new THREE.Line(lineGeom,lineMaterial)
        scene.add(line);
    }
}