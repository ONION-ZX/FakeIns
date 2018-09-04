<template>
    <div>
        
        <div class="container">
            <Row class="chat-title">
                <Col span="19">
                    <h2>Direct Messages</h2>
                </Col>
                <Col span="1">
                    <Icon type="ios-checkmark-circle-outline" color="#1DA1F2" size="30"/>
                </Col>
                <Col span="3"><Button type="primary" shape="circle">New message</Button></Col>
                <Col span="1" class="backhome">
                    <router-link to="/view">
                        <Icon type="ios-planet-outline" size="26"/>
                    </router-link>
                </Col>
            </Row>
            <Row :gutter="20" class="chat-body">
                <Col span="8">
                    <Row @click.native="show_current_chat(it)" v-for="it in contact_list" :gutter="20" :class="{'friend':true,'active':it.id == on_click_id}">
                        <Col span="5">
                            <img :src="it.avatar_url">
                        </Col>
                        <Col span="5">
                            <Row class="friend-name">{{it.nickname}}</Row>
                            <Row class="recent-chat">Hello :)</Row>
                        </Col>
                    </Row>
                </Col>
                <Col span="16">
                    <Row class="current-chat-title">
                        <h2>{{current.nickname}}</h2>
                    </Row>
                    <Row class="chat-records">
                        <Row v-for="it in chat_record" class="chat-content">{{it}}</Row>
                        <!-- <Row>
                            <Col class="left chat-content" span="7">Yo.</Col>
                        </Row>
                        <Row class="right chat-content">Yooooooop.</Row>
                        <Row>
                            <Col class="left chat-content" span="7">YoYoYo.</Col>
                        </Row> -->
                    </Row>
                    <Row class="chat-input">
                        <form @submit="send_msg">
                            <Row :gutter="5">
                                <Col span="22">
                                    <Input v-model="input_msg" autofocus :rows="3" type="textarea"/>
                                </Col>
                                <Col span="2">
                                    <Button type="default" html-type="submit">Send</Button>
                                </Col>
                            </Row>
                        </form>
                    </Row>
                </Col>
            </Row>
        </div>
    </div>
</template>
<script>
import api from '../lib/api';
import session from '../lib/session';
export default {
    mounted() {
        this.read_msg();
        this.read_contact();
    },
    data() {
        return {
            form: {},
            current: {
                nickname: 'onion',
            },
            chat_record:[],
            input_msg: '',
            message_list: [],
            contact_id_list: [],
            contact_list: [],
            on_click_id: '',
        }
    },
    methods: {
        read_msg() {
            api('msg/read',{to: session.uinfo().id})
                .then(r => {
                    this.message_list = r.data;
                    this.read_contact();
                })
        },
        read_contact() {
            let result = [];
            this.message_list.forEach(row => {
                result.push(row.from);
            })
            let arr = Array.from(new Set(result));
            this.contact_id_list = arr;
            api('user/find_many',{in: this.contact_id_list})
                .then(r => {
                    this.contact_list = r.data;
                })
        },
        send_msg() {
            this.form.user_id = session.uinfo().id;
            api('msg/create', this.form)
                .then(r => {
                    this.read_msg();
                })
        },
        show_current_chat(it) {
            this.current = it;
            this.on_click_id = it.id;
            api('msg/read',{where:{from:[session.uinfo().id,it.id]}})
                .then(r => {
                    this.chat_record = r.data;
                })
        } 
    }
}
</script>

<style>
    .chat-title {
        /* text-align: center; */
        background: #f9faf9;
        border-bottom: 1px solid #e5e5e5;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    .backhome {
        padding-top: 2px;
    }
    .chat-body {
        padding-top: 15px;
    }
    .chat-body .friend {
        padding: 10px;
        border-bottom: 1px solid #efefef;
        padding-right: 0;
    }
    .chat-body .friend:hover {
        background: #efefef;
    }
    .friend.active {
        background: #efefef;
    }
    .friend img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
    }
    .friend .friend-name {
        font-size: 16px;
        margin-bottom : 5px;
    }
    .friend .recent-chat {
        color: #999;
    }
    .current-chat-title {
        border-bottom: 1px solid #efefef;
        padding-bottom: 15px;
    }
    .chat-content {
        border-radius: 10px;
        margin-top: 10px;
        padding: 10px;
    }
    .chat-content.left {
        background: #efefef;
    }
    .chat-content.right {
        text-align: right;
    }
    .chat-input {
        margin-top: 15px;
    }
    .chat-input textarea {
        outline: 0;
        border: 0;
    }
    .chat-records {
        height: 250px;
        border-bottom: 1px solid #e3e1e1;
    }
    .chat-input button {
        margin-top: 40px;
    }
</style>

