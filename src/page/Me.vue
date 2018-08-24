<template>
    <div>
        <Nav/>
        <div class="container me">
            <Row class="me-header" :gutter="20">
                <Col span="5" class="avatar" offset="2">
                    <img :src="me.avatar_url ? me.avatar_url : 'http://pcim2j6mo.bkt.clouddn.com//18-8-16/7258985.jpg'">
                </Col>
                <Col class="me-info" span="15" offset="1">
                    <Row class="me-top">
                        <Col class="me-name" span="4">{{me.nickname}}</Col>
                        <Col class="me-edit" span="3">
                            <Button type="default">编辑个人主页</Button>
                        </Col>
                        <Col class="me-set" span="15" offset="2">
                            <Icon type="ios-settings-outline" size="30" color="#262626" />
                        </Col>
                    </Row>
                    <Row class="me-act">
                        <Col span="4">
                            <h3>{{my_posts ? my_posts.length : 0}} 帖子</h3>
                        </Col>
                        <Col span="4">
                            <h3>{{my_follower_list ? my_follower_list.length : 0}} 粉丝</h3>
                        </Col>
                        <Col span="4">
                            <h3>正在关注 {{my_followed_list ? my_followed_list.length : 0}}</h3>
                        </Col>
                    </Row>
                    <Row class="me-bio">
                        <p>{{me.bio}}</p>
                        <!-- <p>(づ￣3￣）づ╭❤～</p> -->
                    </Row>
                </Col>
            </Row>
            <Row class="me-main">
                <Row class="me-main-title">
                    <Col class="title-item" span="5" offset="6">
                        <Icon type="ios-aperture-outline" size="16"/>
                        <span>帖子</span>
                    </Col>
                    <Col class="title-item" span="5">
                        <Icon type="ios-bookmark-outline" size="18" />
                        <span>收藏夹</span>
                    </Col>
                    <Col class="title-item" span="5">
                        <Icon type="ios-flag-outline" size="24"/>
                        <span>已标记</span>
                    </Col>
                </Row>
                <Row :gutter="20" class="me-main-content">
                    <Col span="8" class="me-post">
                        <img src="http://pcim2j6mo.bkt.clouddn.com//18-8-16/91769821.jpg">
                        <div class="me-post-layer">
                            <Row class="me-layer-params">
                                <Col span="8">
                                    <Col span="3">
                                        <Icon type="md-heart" size="25" offset="4" color="#fff"/>
                                    </Col>
                                    <Col class="me-post-data" span="3" offset="4">6,245</Col>
                                </Col>
                                <Col span="8">
                                    <Col span="3">
                                        <Icon type="ios-chatbubbles"size="25" offset="4" color="#fff" />
                                    </Col>
                                    <Col class="me-post-data" span="3" offset="4">50</Col>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col span="8" class="me-post">
                        <img src="http://pcim2j6mo.bkt.clouddn.com//18-8-16/79698180.jpg">
                        <div class="me-post-layer">
                            <Row class="me-layer-params">
                                <Col span="8">
                                    <Col span="3">
                                        <Icon type="md-heart" size="25" offset="4" color="#fff"/>
                                    </Col>
                                    <Col class="me-post-data" span="3" offset="4">6,245</Col>
                                </Col>
                                <Col span="8">
                                    <Col span="3">
                                        <Icon type="ios-chatbubbles"size="25" offset="4" color="#fff" />
                                    </Col>
                                    <Col class="me-post-data" span="3" offset="4">50</Col>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col span="8" class="me-post">
                        <img src="http://pcim2j6mo.bkt.clouddn.com//18-8-16/28948870.jpg">
                        <div class="me-post-layer">
                            <Row class="me-layer-params">
                                <Col span="8">
                                    <Col span="3">
                                        <Icon type="md-heart" size="25" offset="4" color="#fff"/>
                                    </Col>
                                    <Col class="me-post-data" span="3" offset="4">6,245</Col>
                                </Col>
                                <Col span="8">
                                    <Col span="3">
                                        <Icon type="ios-chatbubbles"size="25" offset="4" color="#fff" />
                                    </Col>
                                    <Col class="me-post-data" span="3" offset="4">50</Col>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col span="8" class="me-post">
                        <img src="http://pcim2j6mo.bkt.clouddn.com//18-8-16/73802475.jpg">
                        <div class="me-post-layer">
                            <Row class="me-layer-params">
                                <Col span="8">
                                    <Col span="3">
                                        <Icon type="md-heart" size="25" offset="4" color="#fff"/>
                                    </Col>
                                    <Col class="me-post-data" span="3" offset="4">6,245</Col>
                                </Col>
                                <Col span="8">
                                    <Col span="3">
                                        <Icon type="ios-chatbubbles"size="25" offset="4" color="#fff" />
                                    </Col>
                                    <Col class="me-post-data" span="3" offset="4">50</Col>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col span="8" class="me-post">
                        <img src="http://pcim2j6mo.bkt.clouddn.com//18-8-16/1563166.jpg">
                        <div class="me-post-layer">
                            <Row class="me-layer-params">
                                <Col span="8">
                                    <Col span="3">
                                        <Icon type="md-heart" size="25" offset="4" color="#fff"/>
                                    </Col>
                                    <Col class="me-post-data" span="3" offset="4">6,245</Col>
                                </Col>
                                <Col span="8">
                                    <Col span="3">
                                        <Icon type="ios-chatbubbles"size="25" offset="4" color="#fff" />
                                    </Col>
                                    <Col class="me-post-data" span="3" offset="4">50</Col>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col span="8" class="me-post">
                        <img src="http://pcim2j6mo.bkt.clouddn.com//18-8-16/7258985.jpg">
                        <div class="me-post-layer">
                            <Row class="me-layer-params">
                                <Col span="8">
                                    <Col span="3">
                                        <Icon type="md-heart" size="25" offset="4" color="#fff"/>
                                    </Col>
                                    <Col class="me-post-data" span="3" offset="4">6,245</Col>
                                </Col>
                                <Col span="8">
                                    <Col span="3">
                                        <Icon type="ios-chatbubbles"size="25" offset="4" color="#fff" />
                                    </Col>
                                    <Col class="me-post-data" span="3" offset="4">50</Col>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Row>
        </div>
        <Footer/>
    </div>
</template>
<script>
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import session from '../lib/session';
import api from '../lib/api';

export default {
    components: { Nav, Footer },
    mounted() {
        this.read_me();
        this.read_my_followed();
        this.read_my_post();
        this.read_my_followers();
    },
    data() {
        return {
            me: {},
            my_followed_list: [],
            my_follower_list: [],
            my_posts: [],
            my_followers: [],
            uinfo: session.uinfo(),
            with: [
                    {relation: 'has_many', model: 'post'},
                ],
        }
    },
    methods: {
        read_me() {
            api('user/read', {where: {id: this.uinfo.id}, with: this.with})
                .then(r => {
                    this.me = r.data[0];
                })
        },
        read_my_followed() {
            api('_bind__user_user/read',{where: {follower_id: this.uinfo.id}})
                .then(r => {
                    this.my_followed_list = r.data;
                })
        },
        read_my_post() {
            api('post/read',{where:{user_id: this.uinfo.id}})
                .then(r => {
                    this.my_posts = r.data;
                })
        },
        read_my_followers() {
            api('_bind__user_user/read',{where: {target_id: this.uinfo.id}})
                .then(r => {
                    this.my_follower_list = r.data;
                })
        },
    }
}
</script>

<style>
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
   .me-edit, .me-set, .me-act {
       margin-top: 7px;
   }
   .me-edit button span {
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
       padding-top: 7px;
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
       left: 20%;
   }
</style>

