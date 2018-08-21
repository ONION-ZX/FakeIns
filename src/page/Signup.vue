<template>
    <div class="container">
        <Row>
            <Col span="9" offset="8">
                <Form @submit.native.prevent="submit" class="signup">
                    <Row class="signup-logo">
                        <Col span="15"offset="5">
                            <img src="http://pcim2j6mo.bkt.clouddn.com//18-8-16/37395195.jpg">
                        </Col>
                    </Row>
                    <Row class="signup-slogan">
                        <Col span="20" offset="2">
                            <h2>注册Fakeins，分享精彩世界</h2>                        
                        </Col>
                    </Row>
                    <!-- <FormItem class="signup-input">
                        <Input type="text" @on-click="send_code()" v-model="form.$unique" icon="ios-send" placeholder="手机号/邮箱" style="width: auto" />
                    </FormItem>
                    <FormItem class="signup-input">
                        <Input v-model="form.user_code" classname="in" type="text" placeholder="验证码"/>
                    </FormItem> -->
                    <FormItem class="signup-input"> 
                        <Input v-model="form.nickname" type="text" placeholder="昵称"/>
                    </FormItem>
                    <FormItem class="signup-input"> 
                        <Input v-model="form.password" type="password" placeholder="密码"/>
                    </FormItem>
                    <Row class="signup-btn">
                        <Button html-type="submit" type="primary" style="width:268px">注册</Button>                       
                    </Row>
                    <Row class="signup-rule">
                        <Col span="20" offset="2">
                            <h3>注册即表示你同意接受我们的 条款 、 数据使用政策 和 Cookie 政策 。</h3>
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Row>
        <Row>
            <Col class="signup" span="9" offset="8">
                <span>有账户了?</span>
                <router-link to="/signup">请登录</router-link>
            </Col>
        </Row>
        <Footer/>
    </div>
</template>

<script>
import api from '../lib/api';
import Footer from '../components/Footer';
export default {
    components: { Footer },
    data() {
        return {
            code: '',
            form: {},
            signup_by: 'phone',
            invalid_code: false,
        }
    },
    methods: {
        submit() {
            // this.invalid_code = this.form.user_code !== this.code;
            // if(this.invalid_code)
            //     return;

            // if (this.signup_by == 'mail')
            //     delete this.form.phone;
            // else
            //      delete this.form.mail;

            api('user/create',this.form)
                .then(r => {
                    this.invalid_code = false;
                    alert('注册成功!');
                    this.$router.push('/login');
                });
        },
        send_code() {
            let action
              , by_mail
              , unique = this.form.$unique
              , phone_reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/
              , mail_reg = /^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/;
            if(phone_reg.test(unique))
                this.signup_by = 'sms';
            else if(mail_reg.test(unique))
                this.signup_by = 'mail';
            action = this.signup_by;

            if(by_mail = this.signup_by == 'mail')
                action = 'mail';
            // if ((by_mail && !this.form.mail) || (!by_mail && !this.form.phone))
            //     return;

            console.log(this.form);

            api(`captcha/${action}`, { phone : this.form.$unique, mail: this.form.$unique })
                .then(r => {
                this.code = atob(r.data.result);
                });
        }
    }
}
</script>
<style>
    body {
        background-color: #fafafa;
    }
    .ivu-form-item {
        margin-bottom: 10px;
    }
    
    .signup {
        border: 1px solid rgba(0,0,0,.125);
        padding: 20px 20px 30px 20px;
        margin-top: 20px;
        background: #fff;
    }
    .signup-slogan {
        color: rgba(0,0,0,.5);
    }
    .signup-logo img {
        max-width: 100%;
    }
    .signup-input {
        /* height: 45px; */
        position: relative;
        margin-top: 10px;
    }
    .signup-input label {
        font-size: 10px;
        padding-left: 5px;
        padding-bottom: 5px;
        z-index: 2;
        position: absolute;
        top: -2%;
    }
    .signup-input > * {
        display: block;
    }
    .signup-input input {
        height: 36px;
        padding-top: 5px;
        padding-left: 5px;
        width: 268px;
        border: 1px solid rgba(0,0,0,.125);
        outline: 0;
    }
    .signup-btn button{
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

