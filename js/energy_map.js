// 使用SheetJS库加载Excel数据
function loadExcelData() {
    // 加载水电站数据
    fetch('D:/计算机设计大赛/水电站.xlsx')
        .then(response => response.arrayBuffer())
        .then(buffer => {
            const workbook = XLSX.read(buffer, {type: 'array'});
            const worksheet = workbook.Sheets[workbook.SheetNames[0]];
            const data = XLSX.utils.sheet_to_json(worksheet);
            updateMapData(data, 'map_1');
        });

    // 加载光伏发电站数据
    fetch('D:/计算机设计大赛/光伏发电站.xlsx')
        .then(response => response.arrayBuffer())
        .then(buffer => {
            const workbook = XLSX.read(buffer, {type: 'array'});
            const worksheet = workbook.Sheets[workbook.SheetNames[0]];
            const data = XLSX.utils.sheet_to_json(worksheet);
            updateMapData(data, 'map_2');
        });
}

// 更新地图数据
function updateMapData(data, mapId) {
    const myChart = echarts.init(document.getElementById(mapId));
    const option = {
        series: [{
            data: data.map(item => ({
                name: item.name,
                value: item.value,
                // 添加其他需要的属性
            }))
        }]
    };
    myChart.setOption(option);
}

// 添加西气东输管道路线
function addGasPipeline() {
    const myChart = echarts.init(document.getElementById('map_1'));
    const option = {
        series: [{
            type: 'lines',
            coordinateSystem: 'geo',
            data: [
                {
                    coords: [
                        [新疆起点坐标],
                        [甘肃坐标],
                        [陕西坐标],
                        [河南坐标],
                        [江苏终点坐标]
                    ],
                    lineStyle: {
                        color: '#ff0000',
                        width: 2
                    }
                }
            ]
        }]
    };
    myChart.setOption(option);
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    loadExcelData();
    addGasPipeline();
}); 