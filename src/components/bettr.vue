<template>
    <div id="box" ref="box">
        <ul style="text-align:center;">
            <li v-for="i in 100" @click="sex(i,$event)">{{i}}</li>
        </ul>
    </div>
</template>
 <script>
    import BScroll from 'better-scroll';
    import IScroll from 'iscroll/build/iscroll.js';
    export default{
        data (){
            return {
                bscroll:null,
                iscroll:null
            }
        },
        mounted (){
            this.$nextTick(()=>{
                this.IScroll=new IScroll(this.$refs.box,{
                    mouseWheel: true,
                    scrollbars: true,
                    HWCompositing:false
                });
                // this.bscroll=new BScroll(this.$refs.box,{
                //     click:true
                // })
            })
        },
        methods:{
            sex (index,event){
                if(!event._constructed){
                    return ;
                }
                console.log(index)
            }
        }
    }
 </script>

 <style>
    #box{
        height: 100%;
        overflow: hidden;
    }
 </style>
 