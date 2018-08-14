<template>
    <div class="nav">
        <Col class="search" span="3"></Col>
        <Col class="logo" span="16">
            <Col span="8">
                <router-link to="/">
                    <img src="../assets/logo.png">
                </router-link>
            </Col>
            <Col span="8">
                <Input class="search" placeholder="Enter something..."/>
            </Col>
        </Col>
        <Col class="operate" span="5">
            <Col span="5">
                <img class="recommand" src="../assets/recommand.png">
            </Col>
            <Col span="5">
                <img class="love" src="../assets/love.png">
            </Col>
            <Col span="5">
                <img class="user" src="../assets/user.png">
            </Col>
        </Col>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                theme1: 'light'
            }
        }
    }
</script>
<style scoped>
    .nav {
        height: 80px;
        padding-top: 15px;
        border-bottom:1px solid rgba(0,0,0,.0975);
    }
    img {
        width: 70%;
    }
    .search {
        padding-top: 10px;
    }
    .operate {
        padding-top: 8px;
    }
    .operate .love {
        padding-top: 1px;
    }
    .operate .user {
        padding-top: 4px;
    }
</style>

