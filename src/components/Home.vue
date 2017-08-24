<template>
        <div style="height:100%">
             <span class="iconfont kefu" style="color:#fff;">&#xe6b6;</span> 
            <transition name="header-transition" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                <x-header :right-options="{'showMore':false}" :left-options="{showBack:false}" style="background:#ff8300;position:absolute;top:o;left:0;z-index:888;width:100%;" v-show="headerShow" class="header">大特保</x-header>
            </transition>
            <swiper :list="barders" dots-position="center" auto loop :show-desc-mask="false" :aspect-ratio="220/414"></swiper>
            <div style="height:44px">
                <sticky scroll-box="vux_view_box_body" :offset="46">
                    <tab :line-width="2" active-color="#ff6f06" bar-active-color="#ff6f06" custom-bar-width="45px">
                        <tab-item v-for="item in tabList">{{item}}</tab-item>
                    </tab>
                </sticky>
            </div>
            <product-list :loadingShow="loadingShow" :list="list"></product-list>
            <div style="height:50px;"></div>
        </div>
</template>
<script>
    import { XHeader,Swiper,Tab,TabItem ,Sticky} from 'vux'
    import productList from './productList.vue'
    export default {
        data (){
            return {
                barders:[
                    {
                        url: 'javascript:',
                        img: 'static/img/bander1.jpg',
                        title: '送你一朵fua'
                    },
                    {
                        url: 'javascript:',
                        img: 'static/img/bander2.png',
                        title: '送你一辆车'
                    },
                    {
                        url: 'javascript:',
                        img: 'static/img/bander3.jpg',
                        title: '送你一次旅行'
                    }
                ],
                headerShow:false,
                tabList:["全部","健康","意外","航旅","成人","少儿","老人"],
                list:[],
                loadingShow:true
            }
        },
        methods:{
           scroll (position){
               if(position.top>46){
                   this.headerShow=true;
               }else{
                   this.headerShow=false;
               }
           }
        },
        components:{
            XHeader,
            Swiper,
            Sticky,
            Tab,
            TabItem,
            productList
        },
        mounted (){
            var viewBox=document.getElementById("vux_view_box_body");
            viewBox.onscroll=()=>{
                if(viewBox.scrollTop>46){
                   this.headerShow=true;
                }else{
                   this.headerShow=false;
                }
            };
            setTimeout(()=>{
                this.$http.get("static/service/home.json").then(function(data){
                    this.list=data.data;
                    this.loadingShow=false;
                })
            },1000)
            this.$store.commit("tabbar",0);
        }
    }
</script>
<style>
    .kefu{
        position: absolute;
        right: 10px;
        top: 10px;
        z-index: 999;
    }
</style>
