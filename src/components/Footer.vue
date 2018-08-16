<template>
    <div class="container">
        <Row class="global_footer">
            <Col span="18">           
                <span>关于我们</span>
                <span>支持</span>
                <span>新闻中心</span>
                <span>API</span>
                <span>工作</span>
                <span>隐私条款</span>
                <span>目录</span>
                <span>
                    <router-link to="/me">个人主页</router-link>
                </span>
                <span>话题标签</span>
                <span>语言</span>
            </Col>
            <Col class="footer-right" span="6">© 2018 INSTAGRAM</Col>
        </Row>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    
}
</script>
<style scoped>
    .global_footer {
        margin-top: 20px;
        padding: 10px;
    }
    .global_footer a,
    .global_footer span{
        cursor: pointer;
        font-weight: bold;
        color: #003569;
    }
    .global_footer a:hover,
    .global_footer span:hover {
        color:purple;
    }
    .global_footer span {
        padding: 5px;
    }
    .footer-right {
        font-weight: bold;
        text-align: right;
        color: #999;
    }
</style>


