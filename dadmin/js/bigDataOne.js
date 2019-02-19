var chart1 = echarts.init(document.getElementById("chart1"));
option1 = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {             // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '5%',
        bottom: '10%',
        top:'5%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'value',
            splitLine:{show:false},
            axisLabel: {
                textStyle: {
                    color: '#4a7096'
                }
            },
            axisLine:{
                lineStyle:{color:'#328dbc'}
            }
        }
    ],
    yAxis : [
        {
            type : 'category',
            data : ['支部委员会','支部委员会','支部委员会','支部委员会','支部委员会'],
            axisTick: {show:false},
            axisLabel: {
                textStyle: {
                    color: '#2a7a9f'
                }
            },
            axisLine:{
                lineStyle:{color:'#328dbc'}
            }
        }
    ],
    series : [
        {
            type:'bar',
            itemStyle:{
                color:function(pa){
                    var colorList = ['#3c9dfe','#8dd5fd','#3c9dfe','#8dd5fd','#3c9dfe'];
                    return colorList[pa.dataIndex];
                },
                barBorderRadius:[5]
            },
            data:[200, 170, 240, 244, 200],
            barCategoryGap:'60%'
        }
    ]
};
chart1.setOption(option1);

var chart2 = echarts.init(document.getElementById("chart2"));
option2 = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {             // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '5%',
        bottom: '10%',
        top:'5%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'value',
            splitLine:{show:false},
            axisLabel: {
                textStyle: {
                    color: '#4a7096'
                }
            },
            axisLine:{
                lineStyle:{color:'#328dbc'}
            }
        }
    ],
    yAxis : [
        {
            type : 'category',
            data : ['大成街','上溪街','镇魂街','龙城街','艾斯街'],
            axisTick: {show:false},
            axisLabel: {
                textStyle: {
                    color: '#2a7a9f'
                }
            },
            axisLine:{
                lineStyle:{color:'#328dbc'}
            }
        }
    ],
    series : [
        {
            type:'bar',
            itemStyle:{
                color:function(pa){
                    var colorList = ['#3c9dfe','#8dd5fd','#3c9dfe','#8dd5fd','#3c9dfe'];
                    return colorList[pa.dataIndex];
                },
                barBorderRadius:[5]
            },
            data:[200, 170, 240, 244, 200],
            barCategoryGap:'60%'
        }
    ]
};
chart2.setOption(option2);

var chart3 = echarts.init(document.getElementById("chart3"));
var colors = ['#9B30FF', '#4876FF', '#4169E1', '#1874CD', '#9B30FF'];
var bgColor = 'rgba(0,0,0,0.3)';

var itemStyle = {
    star5: {
        color: colors[0]
    },
    star4: {
        color: colors[1]
    },
    star3: {
        color: colors[2]
    },
    star2: {
        color: colors[3]
    }
};

var data = [{
    name: '虚构',
    itemStyle: {
        normal: {
            color: colors[1]
        }
    },
    children: [{
        name: '小说',
        children: [{
            name: '5☆',
            children: [{
                name: '疼'
            }, {
                name: '慈悲'
            }, {
                name: '楼下的房客'
            }]
        }, {
            name: '4☆',
            children: [{
                name: '虚无的十字架'
            }, {
                name: '无声告白'
            }, {
                name: '童年的终结'
            }]
        }, {
            name: '3☆',
            children: [{
                name: '疯癫老人日记'
            }]
        }]
    }, {
        name: '其他',
        children: [{
            name: '5☆',
            children: [{
                name: '纳博科夫短篇小说全集'
            }]
        }, {
            name: '4☆',
            children: [{
                name: '安魂曲'
            }, {
                name: '人生拼图版'
            }]
        }, {
            name: '3☆',
            children: [{
                name: '比起爱你，我更需要你'
            }]
        }]
    }]
}, {
    name: '非虚构',
    itemStyle: {
        color: colors[2]
    },
    children: [{
        name: '设计',
        children: [{
            name: '5☆',
            children: [{
                name: '无界面交互'
            }]
        }, {
            name: '4☆',
            children: [{
                name: '数字绘图的光照与渲染技术'
            }, {
                name: '日本建筑解剖书'
            }]
        }, {
            name: '3☆',
            children: [{
                name: '奇幻世界艺术\n&RPG地图绘制讲座'
            }]
        }]
    }, {
        name: '社科',
        children: [{
            name: '5☆',
            children: [{
                name: '痛点'
            }]
        }, {
            name: '4☆',
            children: [{
                name: '卓有成效的管理者'
            }, {
                name: '进化'
            }, {
                name: '后物欲时代的来临',
            }]
        }, {
            name: '3☆',
            children: [{
                name: '疯癫与文明'
            }]
        }]
    }, {
        name: '心理',
        children: [{
            name: '5☆',
            children: [{
                name: '我们时代的神经症人格'
            }]
        }, {
            name: '4☆',
            children: [{
                name: '皮格马利翁效应'
            }, {
                name: '受伤的人'
            }]
        }, {
            name: '3☆',
        }, {
            name: '2☆',
            children: [{
                name: '迷恋'
            }]
        }]
    }, {
        name: '居家',
        children: [{
            name: '4☆',
            children: [{
                name: '把房子住成家'
            }, {
                name: '只过必要生活'
            }, {
                name: '北欧简约风格'
            }]
        }]
    }, {
        name: '绘本',
        children: [{
            name: '5☆',
            children: [{
                name: '设计诗'
            }]
        }, {
            name: '4☆',
            children: [{
                name: '假如生活糊弄了你'
            }, {
                name: '博物学家的神秘动物图鉴'
            }]
        }, {
            name: '3☆',
            children: [{
                name: '方向'
            }]
        }]
    }, {
        name: '哲学',
        children: [{
            name: '4☆',
            children: [{
                name: '人生的智慧'
            }]
        }]
    }, {
        name: '技术',
        children: [{
            name: '5☆',
            children: [{
                name: '代码整洁之道'
            }]
        }, {
            name: '4☆',
            children: [{
                name: 'Three.js 开发指南'
            }]
        }]
    }]
}];

for (var j = 0; j < data.length; ++j) {
    var level1 = data[j].children;
    for (var i = 0; i < level1.length; ++i) {
        var block = level1[i].children;
        var bookScore = [];
        var bookScoreId;
        for (var star = 0; star < block.length; ++star) {
            var style = (function (name) {
                switch (name) {
                    case '5☆':
                        bookScoreId = 0;
                        return itemStyle.star5;
                    case '4☆':
                        bookScoreId = 1;
                        return itemStyle.star4;
                    case '3☆':
                        bookScoreId = 2;
                        return itemStyle.star3;
                    case '2☆':
                        bookScoreId = 3;
                        return itemStyle.star2;
                }
            })(block[star].name);

            block[star].label = {
                color: style.color,
                downplay: {
                    opacity: 0.5
                }
            };

            if (block[star].children) {
                style = {
                    opacity: 1,
                    color: style.color
                };
                block[star].children.forEach(function (book) {
                    book.value = 1;
                    book.itemStyle = style;

                    book.label = {
                        color: style.color
                    };

                    var value = 1;
                    if (bookScoreId === 0 || bookScoreId === 3) {
                        value = 5;
                    }

                    if (bookScore[bookScoreId]) {
                        bookScore[bookScoreId].value += value;
                    }
                    else {
                        bookScore[bookScoreId] = {
                            color: colors[bookScoreId],
                            value: value
                        };
                    }
                });
            }
        }

        level1[i].itemStyle = {
            color: data[j].itemStyle.color
        };
    }
}
option3 = {
    backgroundColor: bgColor,
    color: colors,
    series: [{
        type: 'sunburst',
        center: ['50%', '48%'],
        left: '5%',
        top: '5%',
        data: data,
        sort: function (a, b) {
            if (a.depth === 1) {
                return b.getValue() - a.getValue();
            }
            else {
                return a.dataIndex - b.dataIndex;
            }
        },
        label: {
            rotate: 'radial',
            color: '#000'
        },
        itemStyle: {
            borderColor: bgColor,
            borderWidth: 2
        },
        levels: [{}, {
            r0: 0,
            r: 40,
            label: {
                rotate: 0
            }
        }, {
            r0: 40,
            r: 105
        }, {
            r0: 115,
            r: 140,
            itemStyle: {
                shadowBlur: 2,
                shadowColor: colors[2],
                color: 'transparent'
            },
            label: {
                rotate: 'tangential',
                fontSize: 10,
                color: colors[0]
            }
        }, {
            r0: 140,
            r: 145,
            itemStyle: {
                shadowBlur: 80,
                shadowColor: colors[0]
            },
            label: {
                position: 'outside',
                textShadowBlur: 5,
                textShadowColor: '#333',
            },
            downplay: {
                label: {
                    opacity: 0.5
                }
            }
        }]
    }]
};
chart3.setOption(option3);


var chart4 = echarts.init(document.getElementById("chart4"));
option4 = {
    legend: {
        orient: 'vertical',
        top: 'center',
        right: '10%',
        textStyle:{
            color: '#fff'
        },
        data: ['12-40分','40-60分','60-80分','80分以上']
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series : [
        {
            name:'积分占比',
            type:'pie',
            radius : '55%',
            center: ['40%', '50%'],
            label:{            //饼图图形上的文本标签
                show:true,
                position:'inner', //标签的位置
                formatter:'{d}%'
            },
            data:[
                {value:15,name:'12-40分',itemStyle:{normal:{color:'#8fd4fe'}}},
                {value:20,name:'40-60分',itemStyle:{normal:{color:'#6ebcfc'}}},
                {value:25,name:'60-80分',itemStyle:{normal:{color:'#3f9dff'}}},
                {value:35,name:'80分以上',itemStyle:{normal:{color:'#2383fe'}}},

            ],
            roseType: 'radius',


            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
};
chart4.setOption(option4);

var chart5 = echarts.init(document.getElementById("chart5"));
option5 = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        top: 'center',
        right: '10%',
        textStyle:{
            color: '#fff'
        },
        data: ['商贸服务','生产制造','工程施工','服务行业','其他职业']
    },
    series: [
        {
            name:'从事职业',
            type:'pie',
            radius: ['25%', '40%'],
            center: ['35%', '50%'],
            avoidLabelOverlap: false,
            lable: {
                show: true
            },
            labelLine: {
                show: true,
                length: 10,
                length2: 5,
            },
            itemStyle: {
                normal: {
                    borderColor: "#FFFFFF",
                    borderWidth: 1,
                    label:{
                        show:true,
                        formatter:'{d}%'
                    },
                }
            },
            data: [{value:335, name:'商贸服务'},
                {value:310, name:'生产制造'},
                {value:234, name:'工程施工'},
                {value:135, name:'服务行业'},
                {value:548, name:'其他职业'}]
        }
    ]
};
chart5.setOption(option5);

var chart6 = echarts.init(document.getElementById("chart6"));
option6 = {
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        top: 'center',
        right: '10%',
        itemWidth:70,
        itemHeight:30,
        formatter: '{name}',
        textStyle:{
            color: '#fff',
            fontSize: '16'
        },
        data:[
            {name:'男',icon:'rect'},{name:'女',icon:'rect'}
        ],
        calculable : true,
    },
    series : [
        {
            name: '性别比例',
            type: 'pie',
            radius : '50%',
            center: ['35%', '50%'],
            label:{            //饼图图形上的文本标签
                normal:{
                    show:true,
                    position:'inner', //标签的位置
                    textStyle : {
                        fontWeight : 300 ,
                        fontSize : 16    //文字的字体大小
                    },
                    formatter:'{d}%'
                }
            },
            data:[
                {value:55,name:'男',itemStyle:{normal:{color:'#409cff'}}},
                {value:45,name:'女',itemStyle:{normal:{color:'#8fd4fe'}}}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
chart6.setOption(option6);

var chart7 = echarts.init(document.getElementById("chart7"));
option7 = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}%"
    },
    legend: {
        orient: 'vertical',
        right: '10%',
        top: 'center',
        textStyle:{
            color: '#fff'
        },
        data: ['18-28岁','28-40岁','40-55岁','55-70岁']
    },
    calculable: true,
    series: [
        {
            name:'年龄比例',
            type:'funnel',
            left: '8%',
            top: '23%',
            width: '55%',
            min: 0,
            max: 100,
            minSize: '30%',
            maxSize: '100%',
            sort: 'ascending',
            gap: 2,
            label: {
                normal: {
                    show: true,
                    position: 'inside'
                },
                emphasis: {
                    textStyle: {
                        fontSize: 20
                    }
                }
            },
            labelLine: {
                normal: {
                    length: 10,
                    lineStyle: {
                        width: 1,
                        type: 'solid'
                    }
                }
            },
            itemStyle: {
                normal: {
                    borderColor: '#fff',
                    borderWidth: 1
                }
            },
            data: [
                {value: 60, name: '18-28岁'},
                {value: 40, name: '40-55岁'},
                {value: 20, name: '55-70岁'},
                {value: 80, name: '28-40岁'}
            ]
        }
    ]
};
chart7.setOption(option7);

var chart8 = echarts.init(document.getElementById("chart8"));
option8 = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {
            type : 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '5%',
        bottom: '10%',
        top:'5%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'value',
            splitLine:{show:false},
            axisLabel: {
                textStyle: {
                    color: '#4a7096'
                }
            },
            axisLine:{
                lineStyle:{color:'#328dbc'}
            }
        }
    ],
    yAxis : [
        {
            type : 'category',
            data : ['1年以下','1-3年','3-10年','10-20年','20年以上'],
            axisTick: {show:false},
            axisLabel: {
                textStyle: {
                    color: '#2a7a9f'
                }
            },
            axisLine:{
                lineStyle:{color:'#328dbc'}
            }
        }
    ],
    series : [
        {
            type:'bar',
            itemStyle:{
                color:function(pa){
                    var colorList = ['#3c9dfe','#8dd5fd','#3c9dfe','#8dd5fd','#3c9dfe'];
                    return colorList[pa.dataIndex];
                },
                barBorderRadius:[5]
            },
            data:[200, 170, 240, 244, 200],
            barCategoryGap:'60%'
        }
    ]
};
chart8.setOption(option8);

var chart9 = echarts.init(document.getElementById("chart9"));
option9 = {
    xAxis: {
        type: 'category',
        axisLine:{
            lineStyle:{color:'#fff'}
        },
        axisLabel: {
            interval: 0,
            formatter:function(value)
            {
                return value.split("").join("\n");
            }
        },
        boundaryGap: false,
        data: ['','1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    },
    yAxis: {
        type: 'value',
        axisLine:{
            lineStyle:{color:'#fff'}
        },
        max: '50'
    },
    series: [{
        left:'5%',
        data: [10,15,23,25,35,32,40,34,38,36,31,35,30],
        type: 'line',
        areaStyle: {
            color:'rgba(23,94,185,0.8)'
        },
        itemStyle:{color:'#4991ea'},
        lineStyle:{color:'#4991ea'}
    }]
};
chart9.setOption(option9);