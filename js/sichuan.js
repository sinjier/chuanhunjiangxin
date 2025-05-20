(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        factory(exports, require('echarts'));
    } else {
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    };
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    if (!echarts.registerMap) {
        log('ECharts Map is not loaded');
        return;
    }

    var map = {
        "type": "FeatureCollection",
        "features": [
            {
                "id": "510100",
                "properties": {
                    "name": "成都市",
                    "cp": [104.065735, 30.659462]
                },
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [[[104.04,30.65],[104.07,30.58],[104.20,30.65],[104.29,30.73],[104.07,30.66]]]
                }
            },
            {
                "id": "510300",
                "properties": {
                    "name": "自贡市",
                    "cp": [104.773447, 29.352765]
                },
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [[[104.67,29.35],[104.77,29.35],[104.87,29.35],[104.77,29.35]]]
                }
            },
            {
                "id": "510400",
                "properties": {
                    "name": "攀枝花市",
                    "cp": [101.716007, 26.580446]
                },
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [[[101.62,26.58],[101.72,26.58],[101.82,26.58],[101.72,26.58]]]
                }
            },
            {
                "id": "510500",
                "properties": {
                    "name": "泸州市",
                    "cp": [105.443348, 28.889138]
                },
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [[[105.34,28.89],[105.44,28.89],[105.54,28.89],[105.44,28.89]]]
                }
            },
            {
                "id": "510600",
                "properties": {
                    "name": "德阳市",
                    "cp": [104.398651, 31.127991]
                },
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [[[104.30,31.13],[104.40,31.13],[104.50,31.13],[104.40,31.13]]]
                }
            },
            {
                "id": "510700",
                "properties": {
                    "name": "绵阳市",
                    "cp": [104.741722, 31.46402]
                },
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [[[104.56,31.57],[104.74,31.46],[104.93,31.36],[104.74,31.46]]]
                }
            },
            {
                "id": "510800",
                "properties": {
                    "name": "广元市",
                    "cp": [105.843357, 32.435435]
                },
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [[[105.74,32.44],[105.84,32.44],[105.94,32.44],[105.84,32.44]]]
                }
            },
            {
                "id": "510900",
                "properties": {
                    "name": "遂宁市",
                    "cp": [105.571331, 30.513311]
                },
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [[[105.47,30.51],[105.57,30.51],[105.67,30.51],[105.57,30.51]]]
                }
            },
            {
                "id": "511000",
                "properties": {
                    "name": "内江市",
                    "cp": [105.066138, 29.58708]
                },
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [[[104.97,29.59],[105.07,29.59],[105.17,29.59],[105.07,29.59]]]
                }
            },
            {
                "id": "511100",
                "properties": {
                    "name": "乐山市",
                    "cp": [103.761263, 29.582024]
                },
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [[[103.66,29.58],[103.76,29.58],[103.86,29.58],[103.76,29.58]]]
                }
            },
            {
                "id": "511300",
                "properties": {
                    "name": "南充市",
                    "cp": [106.082974, 30.795281]
                },
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [[[105.98,30.75],[106.08,30.80],[106.18,30.85],[106.08,30.80]]]
                }
            },
            {
                "id": "511400",
                "properties": {
                    "name": "眉山市",
                    "cp": [103.8417, 30.0585]
                },
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [[[103.79,30.01],[103.89,30.06],[103.94,30.05],[103.84,30.01]]]
                }
            },
            {
                "id": "511500",
                "properties": {
                    "name": "宜宾市",
                    "cp": [104.630825, 28.760189]
                },
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [[[104.53,28.71],[104.63,28.76],[104.73,28.81],[104.63,28.76]]]
                }
            },
            {
                "id": "511600",
                "properties": {
                    "name": "广安市",
                    "cp": [106.633369, 30.456398]
                },
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [[[106.53,30.41],[106.63,30.46],[106.73,30.51],[106.63,30.46]]]
                }
            },
            {
                "id": "511700",
                "properties": {
                    "name": "达州市",
                    "cp": [107.468023, 31.209572]
                },
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [[[107.37,31.16],[107.47,31.21],[107.57,31.26],[107.47,31.21]]]
                }
            },
            {
                "id": "511800",
                "properties": {
                    "name": "雅安市",
                    "cp": [103.001, 30.039]
                },
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [[[102.95,29.99],[103.05,30.04],[103.10,30.03],[103.00,29.99]]]
                }
            },
            {
                "id": "511900",
                "properties": {
                    "name": "巴中市",
                    "cp": [106.7511, 31.8704]
                },
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [[[106.70,31.82],[106.80,31.87],[106.85,31.86],[106.75,31.82]]]
                }
            },
            {
                "id": "512000",
                "properties": {
                    "name": "资阳市",
                    "cp": [104.6346, 30.1227]
                },
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [[[104.58,30.07],[104.68,30.13],[104.73,30.12],[104.63,30.12]]]
                }
            },
            {
                "id": "513200",
                "properties": {
                    "name": "阿坝藏族羌族自治州",
                    "cp": [102.221374, 31.899792]
                },
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [[[102.12,31.90],[102.22,31.90],[102.32,31.90],[102.22,31.90]]]
                }
            },
            {
                "id": "513300",
                "properties": {
                    "name": "甘孜藏族自治州",
                    "cp": [101.963815, 30.050663]
                },
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [[[101.86,30.05],[101.96,30.05],[102.06,30.05],[101.96,30.05]]]
                }
            },
            {
                "id": "513400",
                "properties": {
                    "name": "凉山彝族自治州",
                    "cp": [102.258746, 27.886762]
                },
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [[[102.16,27.89],[102.26,27.89],[102.36,27.89],[102.26,27.89]]]
                }
            }
        ]
    };

    echarts.registerMap('sichuan', map);
}));