<template>
    <div class="container">
        <Row>
            <Col class="login" span="9" offset="8">
                <Row class="login-logo">
                    <Col span="15"offset="5">
                        <img src="http://pcim2j6mo.bkt.clouddn.com//18-8-16/37395195.jpg">
                    </Col>
                </Row>
                <Row class="signup-slogan">
                    <Col span="20" offset="4">
                        <h2>注册Fakeins，分享精彩世界</h2>                        
                    </Col>
                </Row>
                <Row class="login-input">
                    <Col span="15" offset="2">
                        <Input classname="in" type="text" style="width:268px" placeholder="手机号/账号或邮箱"/>
                    </Col>
                </Row>
                <Row class="login-input"> 
                    <Col span="15" offset="2">
                        <Input type="password" style="width:268px" placeholder="全名"/>
                    </Col>
                </Row>
                <Row class="login-input"> 
                    <Col span="15" offset="2">
                        <Input type="password" style="width:268px" placeholder="账号"/>
                    </Col>
                </Row>
                <Row class="login-input"> 
                    <Col span="15" offset="2">
                        <Input type="password" style="width:268px" placeholder="密码"/>
                    </Col>
                </Row>
                <Row class="login-btn">
                    <Col span="15" offset="2">
                        <Button type="primary" style="width:268px">注册</Button>                       
                    </Col>
                </Row>
                <Row class="signup-rule">
                    <Col span="20" offset="2">
                        <h3>注册即表示你同意接受我们的 条款 、 数据使用政策 和 Cookie 政策 。</h3>
                    </Col>
                </Row>
            </Col>
        </Row>
        <Row>
            <Col class="signup" span="9" offset="8">
                <span>有账户了?</span>
                <router-link to="/login">请登录</router-link>
            </Col>
        </Row>
        <Footer/>
    </div>
</template>

<script>
import Footer from '../components/Footer';
export default {
    components: { Footer },
}
</script>
<style>
    body {
        background-color: #fafafa;
    }
    
    .login, .signup {
        border: 1px solid rgba(0,0,0,.125);
        padding: 20px 20px 30px 20px;
        margin-top: 20px;
        background: #fff;
    }
    .signup-slogan {
        color: rgba(0,0,0,.5);
    }
    .login-logo img {
        max-width: 100%;
    }
    .login-input {
        /* height: 45px; */
        position: relative;
        margin-top: 10px;
    }
    .login-input label {
        font-size: 10px;
        padding-left: 5px;
        padding-bottom: 5px;
        z-index: 2;
        position: absolute;
        top: -2%;
    }
    .login-input > * {
        display: block;
    }
    .login-input input {
        height: 36px;
        padding-top: 5px;
        padding-left: 5px;
        width: 268px;
        border: 1px solid rgba(0,0,0,.125);
        outline: 0;
    }
    .login-btn button{
        font-size: 13px;
        font-weight: bold;
    }
    .forget-pass {
        cursor: default;
        margin-top: 9px;
    }
    .forget-pass h4{
        /* color: #003569; */
        text-align: center;
        padding-left: 52px;
        font-size: 12px;
    }
    .signup {
        text-align: center;
        font-size: 13px;
        font-weight: bold;
    }
    .signup > * {
        padding-right: 5px;
    }
    .signup-rule {
        padding: 5px;
        margin-top: 10px;
        text-align: center;
        color: rgba(0,0,0,.4);
    }
</style>

