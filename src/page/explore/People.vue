<template>
    <div>
        <Nav/>
        <div class="container">
            <Row class="explore">
                <Col class="explore-people" span="14" offset="5">
                    <Row class="explore-title">
                        <h3>推荐</h3>
                    </Row>
                    <Row class="explore-content">
                        <Row :gutter="20" class="explore-row">
                            <Col span="4" class="explore-avatar">
                                <img src="http://pcim2j6mo.bkt.clouddn.com//18-8-17/80592937.jpg">
                            </Col>
                            <Col span="16" class="explore-avatar">
                                <Row class="e-name">
                                    <h3>ivanmartinez</h3>
                                </Row>
                                <Row class="e-bio">Ivan Martínez</Row>
                                <Row class="e-source">Instagram 推荐</Row>
                            </Col>
                            <Col span="3">
                                <Button class="e-focus" type="primary">关注</Button>
                            </Col>
                        </Row>
                    </Row>
                </Col>
            </Row>
        </div>
        <Footer/>
    </div>
</template>
<script>
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
export default {
    components: { Nav, Footer },
}
</script>

<style>
    .explore {
        margin-top: 50px;
        border-radius: 5px;
    }
    .explore-title h3 {
        color: #999;
        padding: 12px;
        font-weight: bold;
    }
    .explore-content {
        padding-left: 27px;
        background: #fff;
        border: 1px solid rgba(0,0,0,.1);
        padding-top: 10px;
        padding-bottom: 5px;
    }
    .explore-avatar img {
        max-width: 90%;
        border-radius: 50%;
    }
    .e-name h3 {
        font-size: 16px;
        color:#262626;
    }
    .e-source, .e-bio {
        font-size: 13px;
        color: #999;
        font-weight: 500;
    }
    .e-focus {
        margin-top: 19px;
        font-size: 14px;
        font-weight: bold;
    }
</style>

