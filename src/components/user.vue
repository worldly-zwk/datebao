<template>
    <div id="box" style="height:100%">
        <x-header style="background:#ff6f06;" :right-options="{'showMore':false}" :left-options="{showBack:false}">
            个人中心<span slot="right" style="color:#fff;font-size:2rem;">&#xe6ba;</span>
        </x-header>
        <div class="mycenter">
            <img src="static/img/mycenter-tx.png" alt="">
            <p class="mycenter-login">
                <a href="javascript:;">登录</a>
                <span>/</span>
                <a href="javascript:;">注册</a>
            </p>
        </div>
        <grid :rows="3" style="margin-bottom:1.5rem;background:#fff;">
            <grid-item style="text-align:center;">
                <span slot="icon" style="color:#ff6f06;font-size:1.4rem;">0</span>
                <span slot="label" style="font-size:1rem;">余额</span>
            </grid-item>
            <grid-item style="text-align:center;">
                <span slot="icon" style="color:#ff6f06;font-size:1.4rem;">0</span>
                <span slot="label" style="font-size:1rem;">优惠劵</span>
            </grid-item>
            <grid-item style="text-align:center;">
                <span slot="icon" style="color:#ff6f06;font-size:1.4rem;">0</span>
                <span slot="label" style="font-size:1rem;">积分</span>
            </grid-item>
        </grid>
        <div class="shopping">
            <h2><span>全部保单</span>我的保单</h2>
            <grid :rows="3" style="margin-bottom:1.5rem;background:#fff;">
                <grid-item style="text-align:center;">
                    <span slot="icon" class="shopping-icon">&#xe6b3;</span>
                    <span slot="label" style="font-size:1rem;line-height:2.5rem;">保障中</span>
                </grid-item>
                <grid-item style="text-align:center;">
                    <span slot="icon" class="shopping-icon" style="background:#ff8506;">&#xe6b4;</span>
                    <span slot="label" style="font-size:1rem;line-height:2.5rem;">待支付</span>
                </grid-item>
                <grid-item style="text-align:center;">
                    <span slot="icon" class="shopping-icon" style="background:#fe6953;">&#xe6b5;</span>
                    <span slot="label" style="font-size:1rem;line-height:2.5rem;">待续保</span>
                </grid-item>
            </grid>
        </div>
        <group>
            <cell title="申请理赔" is-link>
                 <span slot="icon" class="iconfont iconSize">&#xe6aa;</span> 
            </cell>
        </group>
        <group>
            <cell title="我的拼单" is-link>
                 <span slot="icon" class="iconfont iconSize">&#xe6ab;</span> 
            </cell>
            <cell title="保单验真" is-link>
                 <span slot="icon" class="iconfont iconSize">&#xe6bf;</span> 
            </cell>
            <cell title="我的客服" is-link>
                 <span slot="icon" class="iconfont iconSize">&#xe6b2;</span> 
            </cell>
            <cell title="信息披露" is-link>
                 <span slot="icon" class="iconfont iconSize">&#xe6bb;</span> 
            </cell>
        </group>
        <group>
            <cell title="设置" is-link>
                 <span slot="icon" class="iconfont iconSize">&#xe6ad;</span> 
            </cell>
        </group>
        <div style="height:70px;"></div>
    </div>
</template>

<script>
    import {XHeader,Grid,GridItem,Group,Cell} from 'vux'
    export default{
        components:{
            XHeader,
            Grid,
            GridItem,
            Group,
            Cell
        },
        mounted (){
            this.$store.commit("tabbar",2)
        }
    }
</script>

<style>
    #vux_view_box_body{
        background: #f3f2f6;
    }
    .mycenter{
        background: #ff6f06;
    }
    .mycenter img{
        width: 4rem;
        height: 4rem;
        display: block;
        margin: 0 auto;
    }
    .mycenter-login{
        font-size: 1.2rem;
        text-align: center;
        line-height: 3rem;
    }
    .mycenter-login a{
        color: #fff;
    }
    .mycenter-login span{
        color: #fff;
    }
    .shopping h2{
        font-size: 1.2rem;
        font-weight: normal;
        line-height: 4rem;
        height: 4rem;
        background: #fff;
        padding: 0 1rem;
    }
    .shopping h2 span{
        float: right;
        color: #9a9a9a;
    }
    .shopping h2 span::after{
        content:"\e624";
        font-family: iconfont;
        margin-left: .3rem;
    }
    .shopping-icon{
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        background: #6cbe11;
        display: block;
        text-align: center;
        line-height: 3.3rem;
        color: #fff;
        font-size: 1.6rem;
        margin-left: -.3rem;
    }
    .iconSize{
        margin-right: 1.5rem;
        color: #ff6f06;
    }
</style>
