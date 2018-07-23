<template>
    <div id="container"></div>
</template>

<script>
    export default {
        data (){
            return {

            }
        },
        methods: {
            render (){
                var map= new BMap.Map("container");
                var point= new BMap.Point(116.404, 39.915);
                var geolocation=new BMap.GeolocationControl();
                // 初始化地图
                map.centerAndZoom(point, 15);
                map.setMapStyle({style:"midnight"});
                // 添加平移缩放控件
                map.addControl(new BMap.NavigationControl());
                // 添加缩略图控件
                map.addControl(new BMap.OverviewMapControl());
                // 添加比例尺控件
                map.addControl(new BMap.ScaleControl({
                    anchor: BMAP_ANCHOR_TOP_LEFT,
                    offset: new BMap.Size(5, 5)
                }));
                // 添加地图类型控件
                map.addControl(new BMap.MapTypeControl());
                // 添加定位控件（适用于移动端）
                map.addControl(geolocation);
            }
        },
        mounted (){
            this.render();
        }
    }
</script>

<style>
    #container{
        width: 100%;
        height: 100%;
    }
</style>
