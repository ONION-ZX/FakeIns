<template>
    <div class="nav">
        <Row>
            <Col class="search" span="3"></Col>
            <Col class="logo" span="16">
                <Col span="8">
                    <router-link to="/view">
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
                    <!-- <Icon type="ios-chatbubbles-outline" color="#262626" size="23"/> -->
                     <!-- <Dropdown>
                        <a>
                            <Icon type="ios-chatbubbles-outline" color="#262626" size="23"/>
                            <span>{{noti_count}}</span>
                        </a>
                        <DropdownMenu slot="noti_list">
                            <DropdownItem v-for="it in noti_list">{{it.content}}</DropdownItem>
                        </DropdownMenu>
                    </Dropdown> -->
                    <Dropdown>
                        <a>
                            <Icon type="ios-chatbubbles-outline" color="#262626" size="23"/>
                            <span>{{noti_count}}</span>
                        </a>
                        <DropdownMenu slot="list">
                            <DropdownItem v-for="it in noti_list">{{it.$tpl.content}}</DropdownItem>
                        </DropdownMenu>
                </Dropdown>
                </Col>
                <Col span="3" class="nav-recommand">
                    <router-link to="/explore">
                        <Icon type="ios-compass-outline" color="#262626" size="23"/>
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
                    <Input v-model="postins.content" :rows="6" wrap="soft" type="textarea" placeholder="What's happening?" />
                </Row>
                <Form @submit.native.prevent="post()">
                    <Row class="modal-addition">
                        <Col span="2" class="upload-col">
                            <Icon class="down" type="ios-image-outline" size="24" color="#262626"/>
                            <input class="up" @change="post_img()" type="file" id="uploader">
                            <!-- <Upload :headers="headers" action="//mock-cdn.biaoyansu.com/">
                                <Button icon="ios-cloud-upload-outline">Upload files</Button>
                            </Upload> -->
                        </Col>
                        <Col span="2">
                            <Icon type="ios-navigate-outline" size="24" color="#262626" />
                        </Col>
                        <Col span="17">
                            <Icon type="ios-link-outline" size="24" color="#262626" />
                        </Col>
                        <Col span="2">
                            <button @click="post" html-type="submit" type="button">分享</button>
                        </Col>
                    </Row>
                    <Row class="uploaded_list"></Row>
                </Form>
            </Row>
        </Row>
    </div>
</template>
<script>
    /* eslint-disable */ 
    import session from '../lib/session';
    import api from '../lib/api';    
    export default {
        mounted() {
            this.count_noti();
            // this.create_noti();
            // this.create_notitpl();
        },  
        data () {
            return {
                show_modal: false,
                postins: {},
                img_url: '',
                uinfo: session.uinfo(),
                noti_list: [],
                noti_count: 0,
            }
        },
        methods: {
            // create_notitpl() {
            //     api('noti_tpl/create', {
            //         name: 'recharge',
            //         content: '余额不足 请充值',
            //     })
            // },
            // create_noti() {
            //     api('notification/create', {
            //         user_id: session.uinfo().id,
            //         type_id: 1,
            //     })
            // },
            post() {
                this.postins.user_id = this.uinfo.id;
                api('post/create', this.postins)
                    .then(r => {
                        this.postins = {};
                        document.querySelector('.uploaded_list').innerHTML = '';
                        alert('分享成功!');
                    })
            },
            post_img() {
                let file = uploader.files[ 0 ];
                let fd   = new FormData();
                fd.append("file", file);
                fd.append('name', 'my-file.jpg');
                fd.append('age', 18);

                api('_file/create', fd)
                .then(r => {
                    let data  = r.data;
                    let image = document.createElement('img');
                    image.classList.add('upload');
                    let target = document.querySelector('.uploaded_list');
                    image.src = 'http://'+ data._base_url + '/' + data._key;
                    target.insertAdjacentElement('afterbegin',image);
                    this.postins.img_url = image.src;
                });
            },
            count_noti() {
                api('notification/read', {
                    where: {
                        user_id: session.uinfo().id,
                        status: 'unread',
                    },
                    with: {
                       relation    : 'belongs_to',
                       model       : 'noti_tpl',
                       foreign_key : 'type_id',
                       as          : 'tpl',
                    },
                }).then(r => {
                    this.noti_count = r.total;
                    this.noti_list = r.data;
                })
            },
        } 
    }
</script>
<style>
    .down {
        position: relative;
    }
    .up {
        position: absolute;
        top: 0;
        left:0;
    }
    .upload-col {
        position: relative;
    }
    .upload {
        width: 80px;
        height: 80px;
        margin-right: 10px;
        border: 1px dashed rgba(0,0,0,.3);
    }
    #uploader {
        color: transparent;
        position: absolute;
        opacity: 0;
        cursor: pointer;
    }
    .nav {
        background: #fff;
        height: 80px;
        padding-top: 15px;
        border-bottom:1px solid rgba(0,0,0,.0975);
    }
    .logo img {
        width: 60%;
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
        width: 113%;
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

