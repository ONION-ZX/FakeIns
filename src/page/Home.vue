<template>
    <div>
        <Nav/>
        <div class="container">
            <Row v-if="timeline.length" :gutter="30">
                <Col class="left" span="13" offset="2">
                    <Card v-for="it in timeline" class="home-card">
                        <router-link :to="'/publisher/'+ it.user_id" class="card-title">
                            <Row :gutter="10">
                                <Col span="9" class="avatar-thumb">
                                    <img :src="it.$user.avatar_url ? it.$user.avatar_url : 'http://pcim2j6mo.bkt.clouddn.com//18-8-16/1563166.jpg'">
                                </Col>      
                                <Col span="10" offset="3">{{it.$user.nickname}}</Col>
                            </Row>
                        </router-link>
                        <img v-if="it.img_url" class="home" :src="it.img_url">
                        <Row :gutter="12" class="icon-group">
                            <Col class="home icon" span="22">
                                <Icon @click.native="like(it)" style="padding-left:10px" class="home" type="ios-heart-outline" size="28"/>
                                <Icon class="home" type="ios-chatbubbles-outline" size="28"/>
                            </Col>
                            <Col span="2">
                                <Icon class="home" type="ios-bookmark-outline" size="28"/>
                            </Col>
                        </Row>
                        <div class="row" v-if="it.like_list">
                            <span class="praise">{{it.like_list.length}}次赞</span>
                        </div>
                        <Row class="detail home">
                            <Row>
                                <Col span="2" class="publisher home">{{it.$user.nickname}}</Col>
                                <Col span="19" class="desc home">{{it.content}}</Col>
                            </Row>
                            <Row v-if="it.comment_list">
                                <span class="comment">全部 {{it.comment_list.length}}条评论 </span>
                            </Row>
                            <Row  class="comments">
                                <Row v-for="comment in it.comment_list" class="content">
                                    <Col span="2" class="other home">{{comment.$user.nickname}}</Col>
                                    <Col span="17" v-if="comment.reply_to" class="desc home">@{{comment.reply_to}}{{comment.content}}</Col>
                                    <Col span="17" v-else class="desc home">{{comment.content}}</Col>
                                    <Col span="2" class="desc home">
                                        <Button size="small" @click.native="on_click_input = form.reply_to = it.id" type="default">回复</Button>
                                    </Col>
                                    <Col span="2" class="desc home">
                                        <Button @click="delete_comment(comment.id)" size="small" type="default">删除</Button>
                                    </Col>
                                </Row>
                                <Row class="line">
                                    <span class="ago">19小时前</span>
                                </Row>
                            </Row>
                            <Row class="add_comment">
                                <Form @submit.native.prevent="comment(it)">
                                    <Col @click.native="show_cinput(it.id)" span="21">
                                        <input v-focus v-if="(on_click_input == it.id) || (form.reply_to == it.id)" v-model="form.content" type="text" placeholder="添加评论...">
                                        <input v-else type="text" placeholder="添加评论...">
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
            <Row v-else class="home explore">
                <Col class="explore-people" span="20" offset="1">
                    <Row class="explore-title">
                        <h2>推荐用户</h2>
                    </Row>
                    <Row class="explore-content">
                        <Row v-for="it in explore_list" :gutter="20" class="explore-row">
                            <Col span="4" class="explore-avatar">

                                <router-link :to="'/publisher/'+it.id">
                                    <img :src="it.avatar_url ? it.avatar_url : 'http://pcim2j6mo.bkt.clouddn.com//18-8-16/7258985.jpg'">
                                </router-link>
                            </Col>
                            <Col span="16" class="explore-avatar">
                                <Row class="e-name">
                                    <h3>{{it.nickname}}</h3>
                                </Row>
                                <Row class="e-bio">R I H A N N A</Row>
                                <Row class="e-source">Instagram 推荐</Row>
                            </Col>
                            <Col span="3">
                                <Button v-if="it.id==on_click_btn" class="e-focus" type="default" @click.native="unfollow_explore(it)">已关注</Button>
                                <Button v-else class="e-focus" type="primary" @click.native="follow_explore(it)">关注</Button>
                            </Col>
                        </Row>
                    </Row>
                </Col>
            </Row>
        </div>
        <Footer/>
    </div>
</template>
<script>
 /* eslint-disable */ 
import api from '../lib/api';
import session from '../lib/session';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import focus from '../directives/focus';
export default {
    components: { Nav, Footer },
    directives: { focus },
    mounted() {
        this.init_form();
        this.read();
        this.read_all();
        this.read_followed();
        this.read_explore_people();
        // this.delete();
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
            show_comment_input: true,
            explore_list: [],
            btn_text: '关注',
            uinfo: session.uinfo(),
            with: [
                {relation: 'has_one', model: 'user'},
            ],
            on_click_input :'',
            on_click_btn: '',
        }        
    },
    methods: {
        delete() {
            api('post/delete_many',{in:[0,1,2,3]})
        },
        read_explore_people() {
            api('user/read',{where: [['id','!=',this.uinfo.id]],limit: 8})
                .then(r => {
                    this.explore_list = r.data;
                })
        },
        show_cinput(id) {
            this.on_click_input = id;
        },
        init_form() {
            this.form = {
                user_id: this.uinfo.id,
                reply_to: null,
            };
        },
        read_comment() {
            this.timeline.forEach(row => {
                api('comment/read',{where:{post_id: row.id},with:this.with})
                    .then(r => {
                        if(r.data) {
                            row.comment_list = r.data;
                        }
                    })          
            })
        },
        comment(it) {
            this.form.post_id = it.id;
            this.form.user_id = this.uinfo.id;
            api('comment/create',this.form)
                .then(r => {
                    this.init_form();
                    // this.comment_list.unshift(r.data);
                    this.read_comment();
                })
        },
        delete_comment(id) {
            if(confirm('确认要删除自己的评论?')) {
                api('comment/delete', {id})
                    .then(r => {
                        this.read_comment();
                    })
                }
        },
        like(it) {
            //判断我是否赞过这条微博, 读_bind__post_user表
            api('_bind__post_user/read', {where:{and: {post_id: it.id, user_id: this.uinfo.id}}})
                .then(r => {
                    if(r.data) {
                        api('user/unbind',{
                            model: 'post',
                            glue: {
                                [this.uinfo.id]: it.id,
                            }
                        }).then(r => {
                            this.read_timeline_like(it.id);
                        })
                    } else {
                        api('user/bind', {
                            model: 'post',
                            glue: {
                                [this.uinfo.id]: it.id,                            }
                        }).then(r => {
                            this.read_timeline_like(it.id);
                        })
                    }
                });
        },
        read_timeline_like(id) {
            if(!id)
                return;

            api('_bind__post_user/read',{where: {post_id:id}})
                   .then(r => {
                       console.log(r.data);
                   })
        },
        read_timeline_like() {
            this.timeline.forEach(row => {
                api('_bind__post_user/read',{where: {post_id:row.id}})
                   .then(r => {
                       row.like_list = r.data;
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
                this.followed_list = r.data.$user || [];
            }).then(() => {
                this.read_timeline();
                this.read_comment();
            })
        },
        read_timeline () {
            //自己发的微博也算到时间线内
            this.followed_list.push(this.current);
            api('post/read', {
                where : [
                    [ 'user_id', 'in', this.pluck_arr(this.followed_list, 'id') ],
                ],
                limit: 5,
                with: this.with,
            }).then(r => {
                this.timeline = r.data || [];
            }).then(() => {
                this.read_timeline_like();
                this.read_comment();
                }
            );
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
                this.btn_text = '关注';
            })
        },
        follow_explore(user) {
            api('user/bind', {
                model: 'user',
                glue: {
                    [this.uinfo.id]: user.id,
                }
            }).then(r => {
                this.on_click_btn = user.id;
            })
        },
        unfollow_explore(user) {
            api('user/unbind', {
                model: 'user',
                glue: {
                    [this.uinfo.id]: user.id,
                }
            }).then(r => {
                this.on_click_btn = '';
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
    .card-title {
        display: inline-block;
        padding: 12px;
        padding-bottom: 0;
        font-weight: bold;
        color: #262626;
    }
    .home.explore {
        margin-top: 80px;
        margin-bottom: 20px;
    }
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
        /* height: 500px; */
    }
    .avatar-thumb img {
        display: inline-block;
        border-radius: 50%;
        width: 35px;
        height: 35px;
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
    .icon-group {
        padding-top: 10px;
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
    .explore-title h2 {
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
    .comments .content {
        margin-top: 8px;
    }
</style>

