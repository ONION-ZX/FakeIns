<template>
    <div class="nav">
        <Col class="search" span="3"></Col>
        <Col class="logo" span="16">
            <Col span="8">
                <router-link to="/">
                    <img src="http://pcim2j6mo.bkt.clouddn.com//18-8-15/65748165.jpg">
                </router-link>
            </Col>
            <Col span="5" offset="3">
                <Input search class="search" placeholder="Enter something..."/>
            </Col>
        </Col>
        <Col class="operate" span="5">
            <Col span="3" class="nav-po">
                <Icon type="ios-chatbubbles-outline" color="#262626" size="23"/>
            </Col>
            <Col span="3" class="nav-recommand">
                <router-link to="/discover">
                    <Icon type="ios-compass-outline" color="#262626" size="23"/>
                    <!-- <img class="recommand" src="http://pcim2j6mo.bkt.clouddn.com//18-8-15/17506210.jpg"> -->
                </router-link>
            </Col>
            <Col span="3" class="love">
                <!-- <Icon type="md-heart-outline" color="#262626" size="23"/> -->
                <img src="http://pcim2j6mo.bkt.clouddn.com//18-8-15/96675976.jpg">
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
    .logo img {
        width: 70%;
    }
    .search {
        padding-top: 10px;
    }
    .operate {
        padding-top: 8px;
    }
    .love {
        margin-left: -5px;
        padding-top: 2px;
    }
    .love img {
        max-width: 110%;
    }
    .operate .user {
        padding-top: 4px;
    }
    .nav-po, .nav-recommand {
        padding-top: 5px;
    }
    .nav-po, .nav-recommand, .love {
        cursor: pointer;
    }
</style>

