<template>
    <div>
        <Nav/>
        <div class="container discover">
            <Row class="discover-user">
                <Row class="discover-user-title">
                    <Col span="22">
                        <span>发现用户</span>
                    </Col>
                    <Col class="all-right" span="2">
                        <a>查看全部</a>
                    </Col>
                </Row>
                <Row class="discover-content">
                    <Col class="user-card" span="7" offset="1">
                        <Row class="user-avatar">
                            <Col span="8" offset="8">
                                <img src="http://pcim2j6mo.bkt.clouddn.com//18-8-17/92101297.jpg">
                            </Col>
                        </Row>
                        <Row>
                            <Col span="24" class="user-name">
                                <h3>👑Rihanna👑</h3>
                            </Col>
                            <Col span="20" offset="4">
                            </Col>
                        </Row>
                        <Row class="user-source">
                            <Col span="15" offset="9">
                                <h4>Instagram 推荐</h4>
                            </Col>
                        </Row>
                        <Row class="btn-focus">
                            <Col span="6" offset="10">
                                <Button type="primary">关注</Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col class="user-card" span="7">
                        <Row class="user-avatar">
                            <Col span="8" offset="8">
                                <img src="http://pcim2j6mo.bkt.clouddn.com//18-8-15/51928164.jpg">
                            </Col>
                        </Row>
                        <Row>
                            <Col span="24" class="user-name">
                                <h3>URVASHI RAUTELA 🇮🇳Actor</h3>
                            </Col>
                        </Row>
                        <Row class="user-source">
                            <Col span="15" offset="9">
                                <h4>Instagram 推荐</h4>
                            </Col>
                        </Row>
                        <Row class="btn-focus">
                            <Col span="6" offset="10">
                                <Button type="primary">关注</Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col class="user-card" span="7">
                        <Row class="user-avatar">
                            <Col span="8" offset="8">
                                <img src="http://pcim2j6mo.bkt.clouddn.com//18-8-17/82592208.jpg">
                            </Col>
                        </Row>
                        <Row>
                            <Col span="24" class="user-name">
                                <h3>liuwenlw</h3>
                            </Col>
                        </Row>
                        <Row class="user-source">
                            <Col span="15" offset="9">
                                <h4>Instagram 推荐</h4>
                            </Col>
                        </Row>
                        <Row class="btn-focus">
                            <Col span="6" offset="10">
                                <Button type="primary">关注</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Row>
            <Row class="discover-post">
                <Row class="discover-post-title">
                    <span>探索</span>
                </Row>
                <Row :gutter="20" class="post-content">
                    <Col span="8" class="me-post">
                        <img src="http://pcim2j6mo.bkt.clouddn.com//18-8-17/32114041.jpg">
                        <div class="me-post-layer discover">
                            <Row class="me-layer-params">
                                <Col span="8">
                                    <Col span="3">
                                        <Icon type="md-heart" size="25" offset="4" color="#fff"/>
                                    </Col>
                                    <Col class="me-post-data" span="3" offset="4">6,245</Col>
                                </Col>
                                <Col span="8">
                                    <Col span="3">
                                        <Icon type="ios-chatbubbles"size="25" offset="4" color="#fff" />
                                    </Col>
                                    <Col class="me-post-data" span="3" offset="4">50</Col>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col span="8" class="me-post">
                        <img src="http://pcim2j6mo.bkt.clouddn.com//18-8-17/27840293.jpg">
                        <div class="me-post-layer discover">
                            <Row :gutter="20" class="me-layer-params">
                                <Col span="8">
                                    <Col span="3">
                                        <Icon type="md-heart" size="25" offset="4" color="#fff"/>
                                    </Col>
                                    <Col class="me-post-data" span="3" offset="4">6,245</Col>
                                </Col>
                                <Col span="8">
                                    <Col span="3">
                                        <Icon type="ios-chatbubbles"size="25" offset="4" color="#fff" />
                                    </Col>
                                    <Col class="me-post-data" span="3" offset="4">50</Col>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col span="8" class="me-post">
                        <img src="http://pcim2j6mo.bkt.clouddn.com//18-8-17/88011229.jpg">
                        <div class="me-post-layer discover">
                            <Row :gutter="20" class="me-layer-params">
                                <Col span="8">
                                    <Col span="3">
                                        <Icon type="md-heart" size="25" offset="4" color="#fff"/>
                                    </Col>
                                    <Col class="me-post-data" span="3" offset="4">6,245</Col>
                                </Col>
                                <Col span="8">
                                    <Col span="3">
                                        <Icon type="ios-chatbubbles"size="25" offset="4" color="#fff" />
                                    </Col>
                                    <Col class="me-post-data" span="3" offset="4">50</Col>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col span="8" class="me-post">
                        <img src="http://pcim2j6mo.bkt.clouddn.com//18-8-15/51928164.jpg">
                        <div class="me-post-layer discover">
                            <Row :gutter="20" class="me-layer-params">
                                <Col span="8">
                                    <Col span="3">
                                        <Icon type="md-heart" size="25" offset="4" color="#fff"/>
                                    </Col>
                                    <Col class="me-post-data" span="3" offset="4">6,245</Col>
                                </Col>
                                <Col span="8">
                                    <Col span="3">
                                        <Icon type="ios-chatbubbles"size="25" offset="4" color="#fff" />
                                    </Col>
                                    <Col class="me-post-data" span="3" offset="4">50</Col>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col span="8" class="me-post">
                        <img src="http://pcim2j6mo.bkt.clouddn.com//18-8-17/80592937.jpg">
                        <div class="me-post-layer discover">
                            <Row :gutter="20" class="me-layer-params">
                                <Col span="8">
                                    <Col span="3">
                                        <Icon type="md-heart" size="25" offset="4" color="#fff"/>
                                    </Col>
                                    <Col class="me-post-data" span="3" offset="4">6,245</Col>
                                </Col>
                                <Col span="8">
                                    <Col span="3">
                                        <Icon type="ios-chatbubbles"size="25" offset="4" color="#fff" />
                                    </Col>
                                    <Col class="me-post-data" span="3" offset="4">50</Col>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col span="8" class="me-post">
                        <img src="http://pcim2j6mo.bkt.clouddn.com//18-8-17/46895835.jpg">
                        <div class="me-post-layer discover">
                            <Row :gutter="20" class="me-layer-params">
                                <Col span="8">
                                    <Col span="3">
                                        <Icon type="md-heart" size="25" offset="4" color="#fff"/>
                                    </Col>
                                    <Col class="me-post-data" span="3" offset="4">6,245</Col>
                                </Col>
                                <Col span="8">
                                    <Col span="3">
                                        <Icon type="ios-chatbubbles"size="25" offset="4" color="#fff" />
                                    </Col>
                                    <Col class="me-post-data" span="3" offset="4">50</Col>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
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
    .discover {
        margin-top: 30px;
    }
    .discover-user-title, .discover-content, .discover-post-title {
        padding: 15px;
        padding-left: 0;
    }
    .discover-user-title span,
    .discover-post-title span {
        color: #999;
        font-size: 14px;
        font-weight: 600;
    }
    .user-card {
        margin-right: 20px;
        border: 1px solid rgba(0,0,0,.06);
        padding-top: 30px;
        background: #fff;
        padding-bottom: 20px;
        margin-top: 10px;

    }
    .user-avatar img {
        border: 1px solid rgba(0,0,0,.3);
        max-width: 100%;
        border-radius: 50%;
    }
    .btn-focus {
        margin-top: 10px;
    }
    .btn-focus button {
        font-size: 13px;
        font-weight: bold;
    }
    .user-source h4 {
        color: rgba(0,0,0,.3);
    }
    .all-right {
        text-align: right;
    }
    .user-name h3 {
        text-align: center;
    }
    .me-post-layer.discover {
        top: -20px;
        left: 10px;
        width: 320px;
        height: 320px;
    }
</style>

