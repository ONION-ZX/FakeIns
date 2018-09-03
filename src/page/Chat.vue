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
                    <Row :gutter="20" class="friend active">
                        <Col span="5">
                            <img src="http://pcim2j6mo.bkt.clouddn.com//18-9-3/99724575.jpg">
                        </Col>
                        <Col span="5">
                            <Row class="friend-name">WHH</Row>
                            <Row class="recent-chat">Hello :)</Row>
                        </Col>
                    </Row>
                    <Row :gutter="20" class="friend">
                        <Col span="5">
                            <img src="http://pcim2j6mo.bkt.clouddn.com//18-8-16/1563166.jpg">
                        </Col>
                        <Col span="5">
                            <Row class="friend-name">LSD</Row>
                            <Row class="recent-chat">Yo.</Row>
                        </Col>
                    </Row>
                    <Row :gutter="20" class="friend">
                        <Col span="5">
                            <img src="http://pcim2j6mo.bkt.clouddn.com//18-9-3/51434425.jpg">
                        </Col>
                        <Col span="18">
                            <Row class="friend-name">齐木楠雄</Row>
                            <Row class="recent-chat">なさい。いのか分からない。.</Row>
                        </Col>
                    </Row>
                </Col>
                <Col span="16">
                    <Row class="current-chat-title">
                        <h2>WHH</h2>
                    </Row>
                    <Row class="chat-records">
                        <Row>
                            <Col class="left chat-content" span="7">Yo.</Col>
                        </Row>
                        <Row class="right chat-content">Yooooooop.</Row>
                        <Row>
                            <Col class="left chat-content" span="7">YoYoYo.</Col>
                        </Row>
                    </Row>
                    <Row class="chat-input">
                        <form>
                            <Input :rows="3" type="textarea"/>
                            <button type="submit" hidden></button>
                        </form>
                    </Row>
                </Col>
            </Row>
        </div>
    </div>
</template>
<script>
export default {
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
</style>

