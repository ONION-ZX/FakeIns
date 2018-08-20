<template>
    <div>
        <Nav/>
        <div class="container">
            <Row :gutter="30">
                <Col class="left" span="15">
                    <Card class="home-card">
                        <p slot="title" class="publisher">beijing_silvermine</p>
                        <img class="home" src="http://pcim2j6mo.bkt.clouddn.com//18-8-15/46606719.jpg">
                        <Row :gutter="12">
                            <Col class="home icon" span="22">
                                <Icon style="padding-left:10px" class="home" type="ios-heart-outline" size="28"/>
                                <Icon class="home" type="ios-chatbubbles-outline" size="28"/>
                            </Col>
                            <Col span="2">
                                <Icon class="home" type="ios-bookmark-outline" size="28"/>
                            </Col>
                        </Row>
                        <div class="row">
                            <span class="praise">5,050 次赞</span>
                        </div>
                        <Row class="detail home">
                            <Row>
                                <Col span="5" class="publisher home">sadtopographies</Col>
                                <Col span="19" class="desc home">Unfortunate Cove, Cook’s Harbour, Canada #unfortunate</Col>
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
                                <Col span="22">
                                    <input type="text" placeholder="添加评论...">
                                </Col>
                                <Col span="2">...</Col>
                            </Row>
                        </Row>
                    </Card>
                    <Card class="home-card">
                        <p slot="title">The standard card</p>
                        <img class="home" src="http://pcim2j6mo.bkt.clouddn.com//18-8-15/51928164.jpg">
                        <Row>
                            <Col class="home" span="22">
                                <Icon class="home" type="ios-heart-outline" size="28"/>
                                <Icon class="home" type="ios-chatbubbles-outline" size="28"/>
                            </Col>
                            <Col span="2">
                                <Icon class="home" type="ios-bookmark-outline" size="28"/>
                            </Col>
                        </Row>
                        <div class="row">
                            <span class="praise">5,050 次赞</span>
                        </div>
                        <Row class="detail home">
                            <Row>
                                <Col span="5" class="publisher home">sadtopographies</Col>
                                <Col span="19" class="desc home">Unfortunate Cove, Cook’s Harbour, Canada #unfortunate</Col>
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
                                <Col span="22">
                                    <input type="text" placeholder="添加评论...">
                                </Col>
                                <Col span="2">...</Col>
                            </Row>
                        </Row>
                    </Card>
                    <Card class="home-card">
                        <p slot="title">The standard card</p>
                        <img class="home" src="http://pcim2j6mo.bkt.clouddn.com//18-8-15/72395664.jpg">
                        <Row>
                            <Col class="home" span="22">
                                <Icon class="home" type="ios-heart-outline" size="28"/>
                                <Icon class="home" type="ios-chatbubbles-outline" size="28"/>
                            </Col>
                            <Col span="2">
                                <Icon class="home" type="ios-bookmark-outline" size="28"/>
                            </Col>
                        </Row>
                        <div class="row">
                            <span class="praise">5,050 次赞</span>
                        </div>
                        <Row class="detail home">
                            <Row>
                                <Col span="5" class="publisher home">sadtopographies</Col>
                                <Col span="19" class="desc home">Unfortunate Cove, Cook’s Harbour, Canada #unfortunate</Col>
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
                                <Col span="22">
                                    <input type="text" placeholder="添加评论...">
                                </Col>
                                <Col span="2">...</Col>
                            </Row>
                        </Row>
                    </Card>
                </Col>
                <Col class="home-right" span="9">
                    <Row :gutter="16" class="user">
                        <Col span="7">
                            <router-link to="/me">
                                <img :src="current.avatar_url">
                            </router-link>
                        </Col>
                        <Col class="username" span="17">
                            <Row :gutter="16">{{uinfo.nickname}}</Row>
                            <Row :gutter="16" class="bio">{{current.bio}}</Row>
                            <!-- <Row :gutter="16" class="bio">: )</Row> -->
                        </Col>
                    </Row>
                    <Row class="shortcut">
                        <h3>快拍</h3>
                        <p>你的关注对象动态会显示在这里哦</p>
                    </Row>
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
        this.read();
    },
    data() {
        return {
            current: {},
            uinfo: session.uinfo(),
        }        
    },
    methods: {
        read() {
            api('user/read', {where: {id: 4}})
                .then(r => {
                    this.current = r.data[0];
                })
        }
    }
}
</script>

<style>
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
</style>

