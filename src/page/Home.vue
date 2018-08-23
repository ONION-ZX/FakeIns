<template>
    <div>
        <Nav/>
        <div class="container">
            <Row :gutter="30">
                <Col class="left" span="15">
                    <Card v-for="it in timeline" class="home-card">
                        <p slot="title" class="publisher">{{it.$user.nickname}}</p>
                        <img v-if="it.img_url" class="home" :src="it.img_url">
                        <Row :gutter="12">
                            <Col class="home icon" span="22">
                                <Icon @click.native="like(it)" style="padding-left:10px" class="home" type="ios-heart-outline" size="28"/>
                                <Icon class="home" type="ios-chatbubbles-outline" size="28"/>
                            </Col>
                            <Col span="2">
                                <Icon class="home" type="ios-bookmark-outline" size="28"/>
                            </Col>
                        </Row>
                        <div class="row">
                            <span class="praise">{{it.like_count}} 次赞</span>
                        </div>
                        <Row class="detail home">
                            <Row>
                                <Col span="5" class="publisher home">{{it.$user.nickname}}</Col>
                                <Col span="19" class="desc home">{{it.content}}</Col>
                            </Row>
                            <Row>
                                <span class="comment">全部 57 条评论</span>
                            </Row>
                            <Row class="comments">
                                <Row class="content">
                                    <Col span="3" class="other home">27cattite</Col>
                                    <Col span="19" class="desc home">@super_emily77_is_super_awesome 哈哈哈哈</Col>
                                </Row>
                                <Row class="content">
                                    <Col span="3" class="other home">eddie_jan</Col>
                                    <Col span="19" class="desc home">歡迎</Col>
                                </Row>
                                <Row class="content">
                                    <Col span="3" class="other home">baozhuxi</Col>
                                    <Col span="19" class="desc home">Yo Taipei is the best</Col>
                                </Row>
                                <Row class="content">
                                    <Col span="3" class="other home">jokejoki_</Col>
                                    <Col span="19" class="desc home">誒！後面的滴哥和滴妹！</Col>
                                </Row>
                                <Row class="line">
                                    <span class="ago">19小时前</span>
                                </Row>
                            </Row>
                            <Row class="add_comment">
                                <Form @submit.native.prevent="comment(it)">
                                    <Col span="21">
                                        <input v-model="form.content" type="text" placeholder="添加评论...">
                                    </Col>
                                    <Col span="3">
                                        <Button type="default" html-type="submit">提交</Button>
                                    </Col>
                                </Form>
                            </Row>
                        </Row>
                    </Card>
                </Col>
                <Col class="home-right" span="9">
                    <Row :gutter="16" class="user">
                        <Col span="7">
                            <router-link to="/me">
                                <img :src="current.avatar_url ? current.avatar_url : 'http://pcim2j6mo.bkt.clouddn.com//18-8-18/93039025.jpg'">
                            </router-link>
                        </Col>
                        <Col class="username" span="17">
                            <Row :gutter="16">{{uinfo.nickname}}</Row>
                            <Row :gutter="16" class="bio">{{current.bio || '; )'}}</Row>
                            <!-- <Row :gutter="16" class="bio">: )</Row> -->
                        </Col>
                    </Row>
                    <Row class="shortcut">
                        <h3>所有对象</h3>
                        <div :key="i" v-for="(it, i) in user_list">
                            <div>{{it.nickname}}</div>
                            <button class="followed" @click="follow(it)">关注</button>
                        </div>
                    </Row>
                    <Row class="shortcut">
                        <h3>已关注对象</h3>
                        <div :key="i" v-for="(it, i) in followed_list">
                            <div>{{it.nickname}}</div>
                            <button class="followed" @click="unfollow(it)">取消关注</button>
                        </div>
                    </Row>
                    <!-- <Row class="shortcut">
                        <h3>快拍</h3>
                        <p>你的关注对象动态会显示在这里哦</p>
                    </Row> -->
                    <Row class="footer home">
                        <a>关于我们· </a>
                        <a>支持· </a>
                        <a>新闻中心· </a>
                        <a>API· </a>
                        <a>工作· </a>
                        <a>隐私· </a>
                        <a>条款· </a>
                        <a>目录· </a>
                        <router-link to="/me">个人主页·</router-link>
                        <a>话题标签· </a>
                        <a>语言</a>
                        <p>© 2018 FAKEINS</p>
                    </Row>
                </Col>
            </Row>
        </div>
    </div>
</template>
<script>
 /* eslint-disable */ 
import api from '../lib/api';
import session from '../lib/session';
import Nav from '../components/Nav';
export default {
    components: { Nav},
    mounted() {
        this.init_form();
        this.read();
        this.read_all();
        this.read_followed();
        // this.read_timeline();
    },
    data() {
        return {
            show: true,
            current: {}, //当前用户信息
            form: {}, //评论表单
            timeline: [],
            post_list: [],
            user_list: [],
            followed_list: [],
            uinfo: session.uinfo(),
            with: [
                {relation: 'has_one', model: 'user'},
            ],
        }        
    },
    methods: {
        init_form() {
            this.form = {
                user_id: this.uinfo.id,
                reply_to: null,
            };
        },
        comment(it) {
            this.form.post_id = it.id;
            api('comment/create',this.form)
                .then(r => {
                    this.init_form();
                    this.comment_list.unshift(r.data);
                })
        },
        like(it) {
            api('like/create',{post_id: it.id, user_id: it.user_id})
               .then(r => {
                   this.read_timeline_like();
               })
        },
        read_timeline_like() {
            this.timeline.forEach(row => {
                api('like/read', {where:{post_id: row.id }})
                   .then(r => {
                       if(r.data) {
                           row.like_count = r.data.length || 0;
                       }
                   })
            })
        },
        read() {
            api('user/read', {where: {id: this.uinfo.id}})
                .then(r => {
                    this.current = r.data[0];
                });
        },
        read_all() {
            api('user/read')
                .then(r => {
                    this.user_list = r.data;
                })
        },
        read_followed() {
            return api('user/find', {
                id: this.uinfo.id,
                with: [{
                    relation: 'belongs_to_many',
                    model: 'user',
                }]
            }).then(r => {
                this.followed_list = r.data.$user;
            }).then(() => {
                this.read_timeline();
            })
        },
        read_timeline () {
            //自己发的微博也算到时间线内
            if(this.followed_list)
                this.followed_list.push(this.current);
            if(!this.followed_list)
                return;
            api('post/read', {
                where : [
                    [ 'user_id', 'in', this.pluck_arr(this.followed_list, 'id') ],
                ],
                limit: 5,
                with: this.with,
            }).then(r => {
                this.timeline = r.data;
            }).then(() => this.read_timeline_like());
        },
        follow(user) {
            api('user/bind', {
                model: 'user',
                glue: {
                    [this.uinfo.id]: user.id,
                }
            }).then(r => {
                this.read_followed();
            })
        },
        unfollow(user) {
            api('user/unbind', {
                model: 'user',
                glue: {
                    [this.uinfo.id]: user.id,
                }
            }).then(r => {
                this.read_followed();
            })
        },
        pluck_arr(arr, key) {
            const result = [];
            if(arr) {
                    arr.forEach(obj => {
                    result.push(obj[key]);
                });
            }
            return result;
        },
    }
}
</script>

<style>
    .followed {
        display: inline-block;
        padding: 5px;
    }
    .home-card {
        color:#17233d;
        margin-top: 20px;
        padding-bottom: 20px;
        border-radius: 0;
    }
    .home-card:first-child {
        margin-top: 0;
    }
    .left, .home-right {
        margin-top: 40px;
    }
    .ivu-card-body {
        padding: 0;
    }
    .ivu-card img {
        width: 100%;
        /* height: 550px; */
    }
    .ivu-icon.home {
        font-weight: bold;
        padding-right: 10px;
    }
    .row .praise,
    .ivu-row.detail .publisher,
    .ivu-row.detail .other,
    .ivu-row .comment {
        font-weight: bold;
    }   
    .row .praise,
    .detail {
        padding-left: 10px;
    }

    .row .praise {
        display: inline-block;
        margin-top: 5px;
        font-weight: bold;
        font-size: 15px;
    }
    .ivu-row .comment,
    .ivu-row .ago{
        font-size: 13px;
        color:#999;
    }
    .ivu-row .line {
        padding-bottom: 10px;
        border-bottom: 1px solid rgba(0,0,0,.125);
    }
    .ivu-row .add_comment > * {
        cursor: pointer;
    }
    .ivu-row .add_comment {
        margin-top: 15px;
    }
    .ivu-row .add_comment input {
        border: 0;
        outline: 0;        
    }
    .home-right .user {
        padding-bottom: 15px;
    }
    .home-right .user img {
        max-width: 80%;
        border-radius: 50%;
    }
    .username {
        padding-top: 5px;
        font-size: 14px;
        font-weight: bold;
    }
    .shortcut, .footer.home > * {
        color: #999;
    }
    .shortcut {
        padding-bottom: 20px;
        border-top: 1px solid #efefef;
        border-bottom: 1px solid #efefef;
    }
    .shortcut h3 {
        padding-top: 10px;
        padding-bottom: 10px;
    }
    .footer.home {
        padding-top: 20px;
    }
    .footer.home p {
        padding-top: 10px;
    }
    .explore {
        margin-top: 35px;
        border-radius: 5px;
    }
    .explore-row {
        padding-left: 27px;
        padding-bottom: 5px;
        padding-top: 10px;
        border-bottom: 1px solid rgba(0,0,0,.1);
        margin-left: 0 !important;
        margin-right: 0 !important;
    }
    .explore-row:last-child {
        border-bottom: 0;
    }
    .explore-title h3 {
        color: #999;
        padding: 12px;
        font-weight: bold;
    }
    .explore-content {
        background: #fff;
        border: 1px solid rgba(0,0,0,.1);
    }
    .explore-avatar img {
        max-width: 90%;
        border-radius: 50%;
    }
    .e-name h3 {
        font-size: 16px;
        color:#262626;
    }
    .e-source, .e-bio {
        font-size: 13px;
        color: #999;
        font-weight: 500;
    }
    .e-focus {
        margin-top: 19px;
        font-size: 14px;
        font-weight: bold;
    }
</style>

