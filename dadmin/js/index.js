$(".menu").click(function(){
    if($(".head_logo").css("margin-left")=="0px"){
        $(".main_container").animate({paddingLeft:"0"},500);
        $(".head_logo").animate({marginLeft:"-270px"},500);
        $("aside").animate({left:"-270px"},500);
    }else{
        $(".main_container").animate({paddingLeft:"270px"},500);
        $(".head_logo").animate({marginLeft:"0px"},500);
        $("aside").animate({left:"0px"},500);

    }
});

$(".navDiv>a").on("click",function(){
    $(this).next().toggle(500);
});

//first menu
$(".firstLi>h4").click(function(e){
    $(this).next().slideToggle(500);
    if($(this).children().children(".icon-minus").css("display") == "block") {
        $(this).children().children(".icon-minus").css("display", "none");
        $(this).children().children(".icon-add").css("display","block");
    }else{
        $(this).children().children(".icon-minus").css("display", "block")
        $(this).children().children(".icon-add").css("display","none");
    }
});

//second and third menu
$(".theOtherLi>a").click(function(){
    $(this).next().slideToggle(500);
    //icon-up,icon-down
    if($(this).children(".icon-up").css("display") == "block") {
        $(this).children(".icon-up").css("display", "none");
        $(this).children(".icon-down").css("display","block");
    }else{
        $(this).children(".icon-up").css("display", "block")
        $(this).children(".icon-down").css("display","none");
    }
});



//col_chart's button
$(".button_menu>img").on("click",function(){
    if($(this).next().is(":hidden")){
        $(this).next().show();
    }else{
        $(this).next().hide();
    }
});

//orderView tabs
var $toggleTabs = $('[data-toggle="tab"]');

$toggleTabs.on('click', function (e) {
    e.preventDefault();

    $(".nav-item>a").toggleClass("active");
    $(".tab-content>.tab-pane").toggleClass("show active");
});


var myChart1 = echarts.init(document.getElementById('p_chart'));
var option1 = {
    xAxis: {
        show:false,
        axisLine:false
    },
    yAxis: {
        show:false,
        axisLine:false
    },
    series: [{
        data: [5,8,6,7,4,5,6,8,7,7,5],
        type: 'bar',
        barMinHeight: 1,
        itemStyle:{
            normal:{
                color:"#009378"
            }
        }
    }]
};
myChart1.setOption(option1);

var myChart2 = echarts.init(document.getElementById('p_chart2'));
var option2 = {
    xAxis: {
        show:false,
        axisLine:false
    },
    yAxis: {
        show:false,
        axisLine:false
    },
    series: [{
        data: [6,5,7,4,3,3,3,8,9,4,3],
        type: 'bar',
        barMinHeight: 1,
        lable:{show:"show"},
        legendHoverLink:true,
        itemStyle:{
            normal:{
                color:"#e16123"
            }
        }
    }]
};
myChart2.setOption(option2);

var myChart3 = echarts.init(document.getElementById('p_chart3'));
var option3 = {
    xAxis: {
        show:false,
        axisLine:false
    },
    yAxis: {
        show:false,
        axisLine:false
    },
    series: [{
        data: [6,5,7,4,3,3,3,8,9,4,3],
        type: 'bar',
        barMinHeight: 1,
        lable:{show:"show"},
        legendHoverLink:true,
        itemStyle:{
            normal:{
                color:"#2bb3c0"
            }
        }
    }]
};
myChart3.setOption(option3);

var myChart4 = echarts.init(document.getElementById('p_chart4'));
var option4 = {
    xAxis: {
        show:false,
        axisLine:false
    },
    yAxis: {
        show:false,
        axisLine:false
    },
    series: [{
        data: [6,5,7,4,3,3,3,8,9,4,3],
        type: 'bar',
        barMinHeight: 1,
        lable:{show:"show"},
        legendHoverLink:true,
        itemStyle:{
            normal:{
                color:"#e16123"
            }
        }
    }]
};
myChart4.setOption(option4);

var myChart5 = echarts.init(document.getElementById('p_chart5'));
var option5 = {
    xAxis: {
        show:false,
        axisLine:false
    },
    yAxis: {
        show:false,
        axisLine:false
    },
    series: [{
        data: [6,5,7,4,3,3,3,8,9,4,3],
        type: 'bar',
        barMinHeight: 1,
        lable:{show:"show"},
        legendHoverLink:true,
        itemStyle:{
            normal:{
                color:"#cccccc"
            }
        }
    }]
};
myChart5.setOption(option5);

var myChart6 = echarts.init(document.getElementById('p_chart6'));
var option6 = {
    xAxis: {
        show:false,
        axisLine:false
    },
    yAxis: {
        show:false,
        axisLine:false
    },
    series: [{
        data: [6,5,7,4,3,3,3,8,9,4,3],
        type: 'bar',
        barMinHeight: 1,
        lable:{show:"show"},
        legendHoverLink:true,
        itemStyle:{
            normal:{
                color:"#009378"
            }
        }
    }]
};
myChart6.setOption(option6);


var colChart1 = echarts.init(document.getElementById('col_chart1'));
var colOption1 = {
    xAxis: {
        show:false,
        axisLine:false
    },
    yAxis: {
        show:false,
        axisLine:false
    },
    series: [{
        data: [6,5,7,4,3,3,3,8,9,4,3,4,5,3,6],
        type: 'bar',
        barMinHeight: 1,
        lable:{show:"show"},
        legendHoverLink:true,
        itemStyle:{
            normal:{
                color:"#2bb3c0"
            }
        }
    }]
};
colChart1.setOption(colOption1);

var colChart2 = echarts.init(document.getElementById('col_chart2'));
var colOption2 = {
    xAxis: {
        show:false,
        axisLine:false
    },
    yAxis: {
        show:false,
        axisLine:false
    },
    series: [{
        data: [6,5,7,4,3,3,3,8,9,4,3,4,5,3,6],
        type: 'bar',
        barMinHeight: 1,
        lable:{show:"show"},
        legendHoverLink:true,
        itemStyle:{
            normal:{
                color:"#e16123"
            }
        }
    }]
};
colChart2.setOption(colOption2);

var colChart3 = echarts.init(document.getElementById('col_chart3'));
var colOption3 = {
    xAxis: {
        show:false,
        axisLine:false
    },
    yAxis: {
        show:false,
        axisLine:false,
    },
    series: [{
        data: [6,5,7,4,3,3,3,8,9,4,3,4,5,3,6],
        type: 'bar',
        barMinHeight: 1,
        lable:{show:"show"},
        legendHoverLink:true,
        itemStyle:{
            normal:{
                color:"#2bb3c0"
            }
        }
    }]
};
colChart3.setOption(colOption3);

var morrisAreaChart01 = echarts.init(document.getElementById("morrisAreaChart01"));
var morrisOption01 ={
    tooltip : {
        trigger: 'axis',
        axisPointer:{
            show:false
        }
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            axisLine:{show:false},
            axisTick:{show:false},
            data : ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
        }
    ],
    yAxis : [
        {
            type : 'value',
            min: '0',
            max: '5000',
            axisLine:{show:false},
            axisTick:{show:false},
            axisLabel: {
                show: true,
                interval: 'auto',
                formatter: '${value}'
            },
            show: true
        }
    ],
    series : [
        {
            name:'Order',
            type:'line',
            areaStyle: {color:'#fa9e9e'},
            itemStyle:{color:'#fa9e9e',borderWidth:0},
            lineStyle:{width:0},
            smooth:'0.2',
            data:[0, 2000, 2000, 2000, 2000, 1500,1000,2500,1000,3000,3500,3000]
        },
        {
            name:'Shipment',
            type:'line',
            areaStyle: {color:'#70cfd8'},
            itemStyle:{color:'#70cfd8',borderWidth:0},
            lineStyle:{width:0},
            smooth:'0.2',
            data:[0, 1500, 1800, 2000, 2500, 2500,3000,1000,1700,2000,2800,3000]
        },
        {
            name:'Tax',
            type:'line',
            areaStyle: {color:'#f58a83'},
            itemStyle:{color:'#f58a83',borderWidth:0},
            lineStyle:{width:0},
            smooth:'0.2',
            data:[500, 2000, 2000, 2000, 2000, 1500,2000, 2500,2500,1000,1500,1000]
        },
        {
            name:'Revenue',
            type:'line',
            areaStyle: {color:'#1dab94'},
            itemStyle:{color:'#1dab94',borderWidth:0},
            lineStyle:{width:0},
            smooth:'0.2',
            data:[0, 2000,2500,3000,1000, 1500,1700,2500, 2000, 2000,500,1800]
        }
    ]
    };
morrisAreaChart01.setOption(morrisOption01);

var morrisAreaChart02 = echarts.init(document.getElementById("morrisAreaChart02"));
var morrisOption02 ={
    tooltip : {
        trigger: 'axis',
        axisPointer:{
            show:false
        }
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            axisLine:{show:false},
            axisTick:{show:false},
            data : ['20','21','22','23','24','25','26']
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel: {
                show: true,
                interval: 'auto',
                formatter: '${value}'
            },
            axisLine:{show:false},
            axisTick:{show:false},
            show: true
        }
    ],
    series : [
        {
            name:'Order',
            type:'line',
            areaStyle: {color:'#fa9e9e'},
            lineStyle:{width:0},
            smooth:'0.2',
            data:[500,700,800,1000,1000,1100,900]
        },
        {
            name:'Shipment',
            type:'line',
            areaStyle: {color:'#70cfd8'},
            lineStyle:{width:0},
            smooth:'0.2',
            data:[300,100,600,700,900,1100,400]
        }
    ],
    itemStyle:{
        normal:{
            color:"#2bb87c"
        }
    }
};
morrisAreaChart02.setOption(morrisOption02);

var morrisAreaChart03 = echarts.init(document.getElementById("morrisAreaChart03"));
var morrisOption03 = {
    tooltip: {
        trigger: 'item',
        formatter: "{b} <br/>Process : {c}%"
    },
    xAxis: {
        type: 'category',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        data: ['30.05', '31.05', '01.06', '02.06', '03.06', '04.06', '05.06']
    },
    yAxis: {
        type: 'value',
        max: '60',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            interval: 'auto',
            formatter: '{value}%'
        },
        show: true
    },
    series: {
        data: [46, 46, 42, 50, 22, 46, 50],
        type: 'line',
        smooth: true,
        itemStyle:{color:"#009378"}
    }
    };
morrisAreaChart03.setOption(morrisOption03);

var morrisAreaChart04 = echarts.init(document.getElementById("morrisAreaChart04"));
var morrisOption04 = {
    tooltip : {
        trigger: 'axis',
        axisPointer:{
            show:false
        }
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            axisLine:{show:false},
            axisTick:{show:false},
            axisLabel:{interval:1},
            data : ['Feb','Mar','Apr','May','Jun']
        }
    ],
    yAxis : [
        {
            type : 'value',
            show:false,
            min:'100',
            max:'400',
            axisLine:{show:false},
            axisTick:{show:false},
            axisLabel:{show:false}
        }
    ],
    series : [
        {
            name:'Visitors',
            type:'line',
            itemStyle:{color:'#fa9e9e',borderWidth:0},
            lineStyle:{color:'#fa9e9e'},
            smooth:'0.8',
            data:[270, 275, 225, 230, 335]
        },
        {
            name:'Sales',
            type:'line',
            itemStyle:{color:'#70cfd8',borderWidth:0},
            lineStyle:{color:'#70cfd8'},
            smooth:'0.8',
            data:[250,260,240,230,220]
        }
    ]
};
morrisAreaChart04.setOption(morrisOption04);

window.onresize=function(){
    // morrisAreaChart01.resize();
    // morrisAreaChart02.resize();
    // morrisAreaChart03.resize();
}