<template>
    <div style="height:100%;background:#ebecf1;">
        <x-header style="background:#fff;color:#333;" class="vux-1px-b">
            <span slot="overwrite-left"><span class="iconfont" style="color:#333;font-size:1.4rem;">&#xe628;</span><span style="color:#333;margin-left:.5rem;">返回</span></span>
            <span style="color:#333;">发现</span>
            <span slot="right" style="font-size:1.8rem;color:#333;margin-top:-.5rem;">&#xe66e;</span>
        </x-header>
        <section class="section">
            <div class="sub-item vux-1px-r">
                <div>
                    <img src="static/img/find-act-logo01.png" alt="" class="act">
                </div>
                <img src="static/img/find2.jpg" alt="" class="pic">
            </div>
            <div class="sub-item">
                <div>
                    <img src="static/img/find-act-logo02.png" alt="" class="act">
                </div>
                <img src="static/img/find3.png" alt="" class="pic">
            </div>
        </section>
        <div class="grid">
            <div class="grid-item vux-1px-r">
                <img src="static/img/find_grid1.jpg" alt="">
            </div>
            <div class="grid-item vux-1px-r">
                <img src="static/img/find_grid2.jpg" alt="">
            </div>
            <div class="grid-item">
                <img src="static/img/find_grid3.jpg" alt="">
            </div>
        </div>
        <div class="healthy-list vux-1px-t">
            <h2 class="vux-1px-b">保险知识</h2>
            <ul>
                <li class="healthy-item" v-for="item in list">
                    <div class="item-left">
                        <h3>{{item.title}}</h3>
                        <p class="flag-box"><span class="vux-1px" v-for="i in item.keywords">{{i}}</span></p>
                        <p class="icon-box"><span style="margin-right:1.5rem;">{{item.commentCount}}</span><span>{{item.praise}}</span></p>
                    </div>
                    <img :src="item.img" alt="">
                </li>
            </ul>
            <div style="height:5rem;"></div>
        </div>
    </div>
</template>

<script>
    import {XHeader} from 'vux';
    export default {
        data (){
            return {
                list:[]
            }
        },
        components:{
            XHeader
        },
        mounted (){
            setTimeout(()=>{
                this.$http.get("static/service/find.json").then(function(data){
                    this.list=data.body.data.list;
                    console.log(this.list)
                })
            });
            this.$store.commit("tabbar",1);
        }
    }
</script>

<style scoped>
    .section{
        display: flex;
        background: #fff;
        margin-bottom: 1.5rem;
    }
    .sub-item{
        padding-top: 1rem;
        flex: 1;
    }
    .act{
        width: 6.5rem;
        height: 2.3rem;
        margin-left: 1rem;
    }
    .pic{
        width: 100%;
        height: auto;
        display: block;
    }
    .grid{
        display: flex;
        background: #fff;
        padding: 1rem 0;
        margin-bottom: 1.5rem;
    }
    .grid-item{
        flex: 1;
        padding: 0 2.5rem;
    }
    .grid-item img{
        width: 100%;
    }
    .healthy-list h2{
        font-size: 1.6rem;
        line-height: 4.4rem;
        padding-left:1.6rem;
        background: #fff;
        font-weight: normal;
    }
    .healthy-item{
        display: flex;
        padding: 1rem;
        background: #fff;        
    }
    .healthy-item img{
        width: 10rem;
        height: 8rem;
    }
    .healthy-item h3{
        font-size: 1.4rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: normal;
        line-height: 2.2rem;
    }
    .item-left{
        flex: 1;
        overflow: hidden;
        margin-right: 1rem;
    }
    .flag-box{
        display: flex;
        flex-wrap: wrap;
    }
    .flag-box span{
        font-size: 1.2rem;
        color: #999;
        line-height: 1rem;
        padding: 2px .5rem;
        margin-left: 5px;
        margin-top: .5rem;
    }
    .vux-1px:before{
        border-color: #a3a3a3;
        border-radius: 5px;
    }
     .icon-box{
         font-size: 1rem;
         color: #b7b7b7;
         margin-top: 1rem;
     }
    .icon-box span::before{
        content: "";
        color: #b7b7b7;
        font-family: iconfont;
        margin-right: .3rem;
    }
    .icon-box span:first-child::before{
        content:"\e675";
    }
     .icon-box span:last-child::before{
        content:"\e66f";
    }
</style>
