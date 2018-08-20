<template>
    <div class="container">
        <Row>
            <Col span="9" offset="8">
                <Form class="login">
                    <Row class="login-logo">
                        <Col span="15" offset="3">
                            <img src="http://pcim2j6mo.bkt.clouddn.com//18-8-16/37395195.jpg">
                        </Col>
                    </Row>
                    <FormItem class="login-input">
                        <Input v-model="current.$unique" type="text" placeholder="用户名/手机号或邮箱"/>
                    </FormItem>
                    <FormItem class="login-input"> 
                        <Input v-model="current.password" type="password" placeholder="密码"/>
                    </FormItem>
                    <FormItem class="login-btn">
                        <Col span="6" offset="8">
                            <Button @click.native="submit()" html-type="submit" type="primary">登录</Button>                       
                        </Col>
                    </FormItem>
                    <FormItem class-name="forget-pass">
                        <Col span="6" offset="8">
                            <h4>忘记密码?</h4>
                        </Col>
                    </FormItem>
                </Form>
            </Col>
        </Row>
        <Row>
            <Col class="signup" span="9" offset="8">
                <span>没有账户?</span>
                <router-link to="/signup">注册</router-link>
            </Col>
        </Row>
        <Footer/>
    </div>
</template>

<script>
import api from '../lib/api';
import session from '../lib/session';
import Footer from '../components/Footer';
export default {
    components: { Footer },
    data() {
        return {
            current: {},
        }
    },
    methods: {
        submit() {
            let unique, password;
            if(!(unique = this.current.$unique) || !(password = this.current.password))
                return;
            api('user/read', {
                where: {
                    or: [
                        ['nickname', '=', unique],
                        ['mail', '=', unique],
                        ['phone', '=', unique],
                    ],
                },
            })
            .then(r => {
                console.log(r.data);
                let row;
                if (!(row = r.data[ 0 ]) || row.password !== password) {
                    this.login_failed = true;
                    return;
                }
                this.on_login_succeed(row);
                this.$router.push('/');
                alert('Yo.');
            });
        },
        on_login_succeed (row) {
            this.login_failed = false;
            delete row.password;
            session.login(row);
        },
    }
}
</script>
<style>
    body {
        background-color: #fafafa;
    }
    .login > * {
        padding-left: 20px;
    }
    .login, .signup {
        background: #fff;
        border: 1px solid rgba(0,0,0,.125);
        padding: 20px 0 30px 30px;
        margin-top: 20px;
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
</style>

