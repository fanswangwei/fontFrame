<template>
    <div class="user">
        <h1>users</h1>
        <!-- 添加用户信息 -->
        <form v-on:submit="adduser">
            <input type="text" v-model="newUser.name">
            <input type="text" v-model="newUser.email">
            <button type="submit">Submit</button>
        </form>
        <ul>
            <li v-for="user in users">
                <input type="checkbox" class="toggle" v-model="user.contacted">
                <span :class="{contected: user.contacted}">
                    {{user.name}}: {{user.email}}
                    <button v-on:click="deleteUser(user)">X</button>
                </span>
            </li>
        </ul>
    </div>
</template>
<script>
    import {jsonplaceholder} from './../http.js'
    export default {
        // name: "user",
        data(){
            return{
                users:[
                    {name: 'hanhan', email: 'hanhan@gmail.com', contacted: false},
                    {name: 'benben', email: 'benben@gmail.com', contacted: false},
                    {name: 'heihei', email: 'heihei@gmail.com', contacted: false}
                ],
                newUser: {}
            }
        },
        mounted() {//初始化数据
            // console.log(this.$router);
        },
        methods:{
            adduser: function(e){
                e.preventDefault();
                this.users.push(this.newUser)
            },
            deleteUser: function(user){
                this.users.splice(this.users.indexOf(user),1)
            }
        },
        created: function(){
            jsonplaceholder().then(result =>{
                console.log(result.data)
                this.users = result.data;
            })
        }
    }
</script>
<style scoped>
    .contected{
        text-decoration: line-through;
    }
</style>