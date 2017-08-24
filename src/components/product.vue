<template>
    <div class="vux-1px">
        <scroller v-model="status" lock-x scrollbarY use-pulldown use-pullup @on-scroll="onScroll" @on-scroll-bottom="onScrollBottom" @on-pulldown-loading="onPulldownLoading" @on-pullup-loading="onPullupLoading" :pullup-config="scrollData.pullup" :pulldown-config="scrollData.pulldown" :scroll-bottom-offset="-50" ref="scroller">
            <div id="box">
                <p v-for="i in num" style="text-align:center;">{{i}}</p>
            </div>
        </scroller>
    </div>
</template>

<script>
    import {Group,Scroller} from 'vux';
    export default {
        data (){
            return {
                scrollData:{
                    pulldown:{
                        content: '下拉刷新',
                        height: 60,
                        autoRefresh: false,
                        downContent: '下拉刷新',
                        upContent: '释放立即刷新',
                        loadingContent: '正在刷新。。。',
                        clsPrefix: 'xs-plugin-pulldown-'
                    },
                    pullup:{
                        content: '上拉加载',
                        height: 60,
                        autoRefresh: true,
                        downContent: '释放立即加载',
                        upContent: '上拉加载',
                        loadingContent: '正在请求数据。。。',
                        clsPrefix: 'xs-plugin-pullup-'
                    }
                },
                status:{
                    pulldownStatus:"default",
                    pullupStatus:"default"
                },
                num:50
            }
        },
        components:{
            Scroller
        },
        methods: {
            onScroll (position){
                // console.log(position)
            },
            onScrollBottom (){
                console.log("到底部了")
            },
            onPulldownLoading (){
                setTimeout(()=>{
                    console.log(this.status.pulldownStatus)
                    this.status.pulldownStatus="default";
                },2000)
                console.log("触发了上啦组件")
            },
            onPullupLoading (){
                setTimeout(()=>{
                    this.num=this.num+10;
                    this.status.pullupStatus="default";
                    this.$nextTick(()=>{
                        this.$refs.scroller.reset();
                    })
                },1000)
                console.log("触发了下啦组件")
            }
        }
    }
</script>

<style>

</style>

