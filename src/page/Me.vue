<template>
    <div>
        <div :class="{'opacity':show_meset_win}">
            <Nav/>
            <div class="container me">
                <!-- <input @change="upload_avatar()" type="file" id="uploader"> -->
                <Row class="me-header" :gutter="20">
                    <Col span="5" class="avatar upload-col" offset="2">
                        <input class="up up-avatar" @change="upload_avatar()" type="file" id="uploader">
                        <img class="down" :src="me.avatar_url ? me.avatar_url : 'http://pcim2j6mo.bkt.clouddn.com//18-8-16/7258985.jpg'">
                        <span class="note">上传头像</span>
                    </Col>
                    <Col class="me-info" span="15" offset="1">
                        <Row class="me-top">
                            <Col class="me-name" span="4">{{me.nickname}}</Col>
                            <Col class="me-edit" span="3">
                                <Button type="default">编辑个人主页</Button>
                            </Col>
                            <Col @click.native="show_setwin()" class="me-set" span="13" offset="3">
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
                    <Row v-if="my_posts" :gutter="20" class="me-main-content">
                        <Col span="8" v-for="it in my_posts" class="me-post">
                            <img :src="it.img_url">
                            <div class="me-post-layer">
                                <Row class="me-layer-params">
                                    <Row>
                                        <Col span="8">
                                            <Col span="3">
                                                <Icon type="md-heart" size="25" offset="4" color="#fff"/>
                                            </Col>
                                            <Col class="me-post-data" span="3" offset="4">{{it.like_list ? it.like_list.length : 0}}</Col>
                                        </Col>
                                        <Col span="8">
                                            <Col span="3">
                                                <Icon type="ios-chatbubbles"size="25" offset="4" color="#fff" />
                                            </Col>
                                            <Col class="me-post-data" span="3" offset="4">{{it.comment_list ? it.comment_list.length : 0}}</Col>
                                        </Col>
                                    </Row>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    <Row class="me-post" v-else>
                        <img src="http://pcim2j6mo.bkt.clouddn.com//18-8-26/25274372.jpg">
                    </Row>
                </Row>
            </div>
            <Footer/>
        </div>
        <div>
            <Row class="meset-win" v-if="show_meset_win">
                <Row class="set-item">更改密码</Row>
                <Row class="set-item">隐私与安全</Row>
                <Row class="set-item" @click.native="logout()">登出</Row>
                <Row class="set-item" @click.native="show_meset_win=false">取消</Row>
            </Row>
        </div>
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
            show_meset_win: false,
            uinfo: session.uinfo(),
            with: [
                    {relation: 'has_many', model: 'post'},
                ],
        }
    },
    methods: {
        logout() {
            localStorage.removeItem('uinfo');
            this.$router.push('/');
        },
        show_setwin() {
            this.show_meset_win = !this.show_meset_win;
            
        },
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
        delete_my_post() {
            api('post/delete',{id:31})
        },
        read_my_followers() {
            api('_bind__user_user/read',{where: {target_id: this.uinfo.id}})
                .then(r => {
                    this.my_follower_list = r.data;
                })
        },
        upload_avatar() {
            const uploader = document.getElementById('uploader');
            let file = uploader.files[ 0 ];
            let fd   = new FormData();
            fd.append("file", file);
            fd.append('name', 'my-file.jpg');
            fd.append('age', 18);
            api('_file/create', fd)
            .then(r => {
                let data  = r.data;
                let image = document.createElement('img');
                image.src = 'http://' + data._base_url + '/' + data._key;
                document.body.appendChild(image);
            });
        }
    }
}
</script>

<style>
    .up-avatar {
        width: 100%;
        height: 100%;
        z-index: 2;
    }
    .avatar:hover{
        opacity: .8;
    }
    .avatar:hover .note {
        display: block;
        left: 30%;
    }
    .opacity {
        opacity: .2;
        background: rgba(0,0,0,.1);
    }
    .note {
        position: relative;
        display: none;
    }
    .container.me {
        color: #262626;
        position: relative;
    }
    .meset-win {
        border-radius: 10px;
        text-align: center;
        position: absolute;
        z-index: 2;
        top: 35%;
        left: 40%;
        background: #fff;
        width: 350px;
    }
    .meset-win .set-item {
        cursor: pointer;
        color: #000;
        padding-top: 12px;
        padding-bottom: 12px;
        border-bottom: 1px solid #efefef;
        font-size: 14px;
    }
    .meset-win .set-item:last-child {
        border-bottom: 0;
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
       display: inline-block;
       position: relative;
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
       cursor: default;
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

