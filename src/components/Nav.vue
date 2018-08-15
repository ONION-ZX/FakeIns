<template>
    <div class="nav">
        <Col class="search" span="3"></Col>
        <Col class="logo" span="16">
            <Col span="8">
                <router-link to="/">
                    <img src="http://pcim2j6mo.bkt.clouddn.com//18-8-15/65748165.jpg">
                </router-link>
            </Col>
            <Col span="8">
                <Input class="search" placeholder="Enter something..."/>
            </Col>
        </Col>
        <Col class="operate" span="5">
            <Col span="5">
                <img class="recommand" src="http://pcim2j6mo.bkt.clouddn.com//18-8-15/17506210.jpg">
            </Col>
            <Col span="5">
                <img class="love" src="http://pcim2j6mo.bkt.clouddn.com//18-8-15/96675976.jpg">
            </Col>
            <Col span="5">
                <router-link to="/me">
                    <img class="user" src="http://pcim2j6mo.bkt.clouddn.com//18-8-15/19249728.jpg">
                </router-link>
            </Col>
        </Col>
    </div>
</template>
<script>
    /* eslint-disable */ 
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
        background: #fff;
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

