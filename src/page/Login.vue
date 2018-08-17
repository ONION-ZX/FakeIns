<template>
    <div class="container">
        <Row>
            <Col class="login" span="9" offset="8">
                <Row class="login-logo">
                    <Col span="15"offset="5">
                        <img src="http://pcim2j6mo.bkt.clouddn.com//18-8-16/37395195.jpg">
                    </Col>
                </Row>
                <Row class="login-input">
                    <Col span="15" offset="2">
                        <!-- <label>手机号/账号或邮箱</label> -->
                        <Input type="text" style="width:268px" placeholder="手机号/账号或邮箱"/>
                    </Col>
                </Row>
                <Row class="login-input"> 
                    <Col span="15" offset="2">
                        <!-- <label>密码</label> -->
                        <Input type="password" style="width:268px" placeholder="密码"/>
                    </Col>
                </Row>
                <Row>
                    <Col span="15" offset="2">
                        <Button type="primary" style="width:268px">登录</Button>                       
                    </Col>
                </Row>
                <Row class-name="forget-pass">
                    <Col span="15" offset="2">
                        <h4>忘记密码?</h4>
                   </Col>
                </Row>
            </Col>
        </Row>
    </div>
</template>

<script>
export default {
    
}
</script>
<style>
    body {
        background-color: #fafafa;
    }
    .login {
        border: 1px solid rgba(0,0,0,.125);
        padding: 20px 20px 30px 20px;
        margin-top: 20px;
        background: #fff;
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
    .forget-pass {
        cursor: default;
        margin-top: 9px;
    }
    .forget-pass h4{
        text-align: center;
        padding-left: 52px;
    }
</style>

