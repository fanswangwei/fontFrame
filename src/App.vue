<template>
    <div id="app">
        <el-row class="container">  
            <div class="header">
                <h3>基于VUE搭建的前端框架</h3>
            </div>
            <el-col class="main">
                <aside>
                    <!-- 本地路由菜单 -->
                    <el-menu :default-active="$route.path" class="el-menu-vertical-demo" unique-opened router>
                        <template v-for="(item,index) in menuList"  v-if="!item.hidden">
                            <el-menu-item v-if="!item.children" :index="item.path"><i :class="item.iconCls"></i>{{item.name}}</el-menu-item>
                            <el-submenu :index="index+''" v-if="item.children">
                                <template slot="title"><div :class="item.iconCls"></div>{{item.name}}</template>
                                <el-menu-item v-for="child in item.children" :index="child.path"  >
                                     {{child.name}}
                                </el-menu-item>
                            </el-submenu>
                        </template>
                    </el-menu>
                </aside>
                <section class="content-container">
                    <div class="grid-content bg-purple-light">
                        <transition>
                            <keep-alive>
                                <router-view></router-view>
                            </keep-alive>
                        </transition>
                    </div>
                </section>
            </el-col>   
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data(){
            return{
                menuList: [],
            }
        },
        mounted(){
            this.menuList = this.$router.options.routes;
            // console.log(this.menuList);
        },
        methods: {

        }
    }
</script>

<style scoped>
    .container {
        position: absolute;
        top: 0px;
        bottom: 0px;
        width: 100%;
    }
    .container .header {
        height: 60px;
        background: #ffffff;
        color: #687079;
        position: fixed;
        width: 100%;
        z-index: 2000;
        border-bottom: 1px solid #285E8E;
            
    }
    .container .main {
        background: #fff;
        position: relative;
        top: 0px;
        bottom: 0px;
        padding-top: 60px;
        height: 100%;
    }
    .container .main aside {
        width: 15%;
        float: left;
        height: 100%;
        margin-top: 1px;
        background:#eef1f6;
        overflow-y: overlay;
        
    }
    .container .main .content-container {
        width: 85%;
        background: #ffffff;
        float: left;
        padding-left: 20px;
        overflow: hidden;
        box-sizing: border-box;
    }
    .container .main .content-container .content-wrapper {
        background-color: #fff;
        box-sizing: border-box;
        margin-top: 5px;
    }
</style>
