<template>
    <div>
        <div :class="{'opacity':show_win}">
            <Nav/>
            <div class="container me">
                <Row class="me-header" :gutter="20">
                    <Col span="5" class="avatar" offset="2">
                        <img :src="publisher_info.avatar_url ? publisher_info.avatar_url : 'http://pcim2j6mo.bkt.clouddn.com//18-8-16/7258985.jpg'">
                    </Col>
                    <Col class="me-info" span="15">
                        <Row class="me-top">
                            <Col class="me-name" span="5">{{publisher_info.nickname}}</Col>
                            <Col class="me-dropdown" span="3" offset="1">
                                <Button v-if="!focused" type="default" @click="bind_user()">关注</Button>
                                <Button v-if="focused" type="default" @click="unbind_user()">已关注</Button>
                            </Col>
                            <Col class="me-dropdown" span="2">
                                <Button @click="show_win=!show_win" type="default" icon="md-arrow-dropdown"></Button>
                            </Col>
                            <!-- <Col class="me-other" span="2" offset="3">
                                <Button color="#262626">...</Button>
                            </Col> -->
                        </Row>
                        <Row class="me-act">
                            <Col span="4">
                                <h3>{{post_list ? post_list.length : 0}} 帖子</h3>
                            </Col>
                            <Col span="4">
                                <h3>{{follower_list ? follower_list.length : 0}} 粉丝</h3>
                            </Col>
                            <Col span="4">
                                <h3>正在关注 {{target_list ? target_list.length : 0}}</h3>
                            </Col>
                        </Row>
                        <Row class="me-bio">
                            <p>{{publisher_info.bio}}</p>
                        </Row>
                    </Col>
                </Row>
                <Row class="me-main">
                    <Row class="me-main-title">
                        <Col class="title-item" span="2" offset="10">
                            <Icon type="ios-aperture-outline" size="16"/>
                            <span>帖子</span>
                        </Col>
                        <Col class="title-item" span="3">
                            <Icon type="ios-flag-outline" size="24"/>
                            <span>已标记</span>
                        </Col>
                    </Row>
                    <Row v-if="post_list" class="me-main-content">
                        <Col span="8" class="me-post" v-for="it in post_list">
                            <img :src="it.img_url ? it.img_url : 'http://pcim2j6mo.bkt.clouddn.com//18-8-17/27840293.jpg'">
                            <div class="me-post-layer">
                                <Row class="me-layer-params">
                                    <Col span="8">
                                        <Col span="3">
                                            <Icon type="md-heart" size="25" offset="4" color="#fff"/>
                                        </Col>
                                        <Col class="me-post-data" span="3" offset="4">{{it.like_list ? it.like_list.length : '0'}}</Col>
                                    </Col>
                                    <Col span="8">
                                        <Col span="3">
                                            <Icon type="ios-chatbubbles"size="25" offset="4" color="#fff" />
                                        </Col>
                                        <Col class="me-post-data" span="3" offset="4">{{it.comment_list ? it.comment_list.length : '0'}}</Col>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    <Row v-else class="no-post">
                            <img src="http://pcim2j6mo.bkt.clouddn.com//18-8-27/2904431.jpg">
                    </Row>
                </Row>
            </div>
            <Footer/>
        </div>   
        <div>
            <Row class="meset-win" v-if="show_win">
                <Row class="set-item">私信</Row>
                <Row class="set-item" @click.native="report_user()">举报用户</Row>
                <Row class="set-item" @click.native="block_user()">拉黑</Row>
                <Row class="set-item" @click.native="show_win=false">取消</Row>
            </Row>
        </div> 
    </div>
</template>
<script>
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import api from '../lib/api';
import session from '../lib/session';
export default {
    components: { Nav, Footer },
    mounted() {
        this.get_publisher_id();
        this.find_publisher();
        this.read_publisher_posts();
        this.read_target();
        this.read_follower();
        this.read_relation();
    },
    data() {
        return {
            publisher_id: '',
            btn_text: '',
            focused: '',
            publisher_info: {},
            post_list: [],
            follower_list: [],
            target_list: [],
            show_win: false,
            uinfo: session.uinfo(),
        }
    },
    methods: {
        report_user() {
            if(!confirm('是否要举报此用户?'))
                return;
            alert('已举报!');
        },
        block_user() {
            if(!confirm('是否要拉黑此用户?'))
                return;
            alert('已拉黑!');
        },
        bind_user() {
            api('user/bind', {
                model: 'user',
                glue: {
                    [this.uinfo.id]: parseInt(this.publisher_id),
                }
            }).then(r => {
                this.focused = true;
            })
        },
        unbind_user() {
            if(!confirm('是否取消关注?'))
                return;
            api('user/unbind', {
                model: 'user',
                glue: {
                    [this.uinfo.id]: parseInt(this.publisher_id),
                }
            }).then(r => {
                this.focused = false;
            })
        },
        get_publisher_id() {
            this.publisher_id = this.$route.params.id;
        },
        find_publisher() {
            api('user/find', {id: this.publisher_id})
                .then(r => {
                    this.publisher_info = r.data;
                })
        },
        read_publisher_posts() {
            api('post/read',{where: {user_id: this.publisher_id}})
                .then(r => {
                    this.post_list = r.data;        
                })
        },
        read_follower() {
            api('_bind__user_user/read',{where:{target_id:this.publisher_id}})
                .then(r => {
                    this.follower_list = r.data;
                })
        },
        read_target() {
            api('_bind__user_user/read',{where: {follower_id: this.publisher_id}})
                .then(r => {
                    this.target_list = r.data;
                })
        },
        read_relation() {
            api('_bind__user_user/read',{where: {follower_id:this.uinfo.id,target_id:this.publisher_id}})
                .then(r => {
                    if(!r.data)
                        this.focused = false;
                    else this.focused = true;
                })
        }
    }
}
</script>

<style>
    .ivu-btn-icon-only, .ivu-btn {
        border-radius: 0;
    }
    .container.me {
        color: #262626;
    }
    .me-header {
      padding-bottom: 20px;
      border-bottom: 1px solid rgba(0,0,0,.1);
      margin-top: 50px; 
   }
   .me-header > * {
      color: #262626;
   }
   .avatar img {
       max-width: 90%;
       border-radius: 50%;
   } 
   .me-name {
       font-size: 30px;
       font-weight: 300;
   }
   .me-dropdown, .me-other, .me-act {
       margin-top: 7px;
   }
   .me-dropdown button span {
       color:#262626;
       font-size: 13px;
       font-weight: 500;
   }
   .me-bio {
       margin-top: 15px;
   }
   .me-bio h3{
       font-weight: 500;
   }
   .title-item {
       font-weight: bold;
       padding-top: 14px;
       font-size: 12px;
   }
   .me-post {
       position:relative;
   }
   .me-post:hover .me-post-layer {
       display: inline-block;
   }
   .me-post-layer {
       width: 320px;
       height: 320px;
       display: none;
       position: absolute;
       top: 10px;
       left: 10px;
       background: rgba(0,0,0,.35);
   }
   .me-post img {
       margin-top: 10px;
       max-width: 100%;
   }
   .me-post-data {
       color: #fff;
       font-size: 18px;
       font-weight: bold;
   }
   .me-layer-params {
       position: relative;
       top: 45%;
       left: 25%;
   }
   .publisher-post {
       padding-top: 5px;
   }
   .no-post img {
       max-width: 100%;
   }
</style>

