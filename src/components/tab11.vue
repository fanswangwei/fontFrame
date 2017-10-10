<template>
    <div class="test">
        <h1>Test</h1>
        <!-- 获取数据 -->
        <h1>{{title}}</h1>
        <h1>{{user.firstName}}</h1>
        <h1 v-text="user.lastName"></h1>
        <!-- v-if -->
        <h1 v-if="showName">{{user.firstName}}</h1>
        <h1 v-else="showName">Nobody</h1>
        <!-- v-for -->
        <h2 v-for="item in items">{{item.title}}</h2>
        <!-- v-on -->
        <button v-on:click="sayHello('leilei')">Say Hello</button>
        <!-- 键盘事件 -->
        <input type="text" name="" v-on:keyup="keyupSay()" v-model="inputVal" >
        <!-- computed -->
        <input type="text" v-model="user.firstName">
        <input type="text" v-model="user.lastName">
        <i>{{fullName}}</i>

        <!-- props 属性 -->
        <h1>{{msg}}</h1>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        name: "test",
        props: {
            msg: {
                type: String,
                default: "111111111111111111"
            }
        },
        data(){
            return{
                title: 'Hello World',
                user: {
                    firstName:'HanMeimei',
                    lastName:'LiLei'
                },
                showName: false,
                items: [
                    {title: 1111111},
                    {title: 2222222},
                    {title: 3333333},
                    {title: 4444444}
                ],
                inputVal: ''
            }
        },
        methods:{
            sayHello: function(name){
                console.log('Hello' + name)
            },
            keyupSay: function(){
                console.log(this.inputVal)
            }
        },
        computed:{
            fullName: function(){
                return this.user.firstName +' '+ this.user.lastName
            }
        }
    }
</script>
<style scoped>
    
</style>