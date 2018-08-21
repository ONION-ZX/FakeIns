<template>
    <div class="nav">
        <Row>
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
                <Col @click.native="show_modal=!show_modal" span="3" class="love">
                        <img src="http://pcim2j6mo.bkt.clouddn.com//18-8-15/96675976.jpg">
                    </Col>
                <Col span="3" class="nav-po">
                    <Icon type="ios-chatbubbles-outline" color="#262626" size="23"/>
                </Col>
                <Col span="3" class="nav-recommand">
                    <router-link to="/explore">
                        <Icon type="ios-compass-outline" color="#262626" size="23"/>
                        <!-- <img class="recommand" src="http://pcim2j6mo.bkt.clouddn.com//18-8-15/17506210.jpg"> -->
                    </router-link>
                </Col>
            </Col>
        </Row>
        <Row class="modal" v-if="show_modal">
            <Row class="modal-title">
                <h2>Compose new Instagram</h2>
            </Row>
            <Row class="modal-content">
                <Row>
                    <Input :rows="6" wrap="soft" type="textarea" placeholder="What's happening?" />
                </Row>
                <Form @submit.native.prevent="post()">
                    <Row class="modal-addition">
                        <Col span="2">
                            <Icon type="ios-image-outline" size="24" color="#262626"/>
                        </Col>
                        <Col span="2">
                            <Icon type="ios-navigate-outline" size="24" color="#262626" />
                        </Col>
                        <Col span="18">
                            <Icon type="ios-link-outline" size="24" color="#262626" />
                        </Col>
                        <Col span="2">
                            <button html-type="submit" type="button">分享</button>
                        </Col>
                    </Row>
                </Form>
            </Row>
        </Row>
    </div>
</template>
<script>
    /* eslint-disable */ 
    export default {
        data () {
            return {
                show_modal: false,
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
        margin-right: 9px;
    }
    .love img {
        width: 127%;
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
    .modal {
        left: 23%;
        top: -30px;
        position: relative;
        background: #fff;
        border-radius: 10px;
        border: 1px solid rgba(0,0,0,.0975);
        width: 610px;
        /* height: 208px; */
        z-index: 3;
    }
    .modal-title {
        padding: 10px;
        text-align: center;
        color: #14171a;
    }
    .modal-content {
        padding: 15px;
        border-top: 1px solid rgba(29,161,242,0.09);
    }
    .modal-addition {
        margin-top: 10px;
        padding-left: 10px;
    }
    .modal-addition button {
        font-weight: bold;
        cursor: pointer;
        color: rgba(0,0,0,.9);
        outline: 0;
        padding:8px;
        background: #fff;
        border: 1px solid rgba(0,0,0,.2);
        border-radius: 10px;
    }
    .modal-addition button:hover {
        background: rgba(0,0,0,.9);
        color: #fff;
    }

</style>

