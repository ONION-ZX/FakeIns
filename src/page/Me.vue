<template>
    <div>
        <Nav/>
        <div class="container">
            <Row class="me-header" :gutter="20">
                <Col span="5" class="avatar" offset="2">
                    <img src="http://pcim2j6mo.bkt.clouddn.com//18-8-16/7258985.jpg">
                </Col>
                <Col class="me-info" span="15" offset="1">
                    <Row class="me-top">
                        <Col class="me-name" span="4">ONION</Col>
                        <Col class="me-edit" span="3">
                            <Button type="default">编辑个人主页</Button>
                        </Col>
                        <Col class="me-set" span="15" offset="2">
                            <Icon type="ios-settings-outline" size="30" color="#262626" />
                        </Col>
                    </Row>
                    <Row class="me-act">
                        <Col span="4">
                            <h3>61 帖子</h3>
                        </Col>
                        <Col span="4">
                            <h3>2096 粉丝</h3>
                        </Col>
                        <Col span="4">
                            <h3>正在关注 82</h3>
                        </Col>
                    </Row>
                    <Row class="me-bio">
                        <p>(づ￣3￣）づ╭❤～</p>
                    </Row>
                </Col>
            </Row>
        </div>
        <Footer/>
    </div>
</template>
<script>
import Footer from '../components/Footer';
import Nav from '../components/Nav';
export default {
    components: { Nav, Footer },
}
</script>

<style>
    .me-header {
      padding-bottom: 20px;
      border-bottom: 1px solid rgba(0,0,0,.1);
      margin-top: 50px; 
   }
   .me-header > * {
      color: #262626;
   }
   .avatar img {
       max-width: 90%;
       border-radius: 50%;
   } 
   .me-name {
       font-size: 30px;
       font-weight: 300;
   }
   .me-edit, .me-set, .me-act {
       margin-top: 7px;
   }
   .me-edit button span {
       color:#262626;
       font-size: 13px;
       font-weight: 500;
   }
   .me-bio {
       margin-top: 15px;
   }
   .me-bio h3{
       font-weight: 500;
   }
</style>

