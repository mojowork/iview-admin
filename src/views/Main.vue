<template>
    <div class="main">
        <!-- 侧边栏 -->
        <aside class="main-left" :class="{'left-fold': fold}">
            <div class="left-brand">
                <img src="../assets/logo.png" alt="">
                <span class="brand-title" v-if="!fold">微信CRM系统</span>
            </div>
            <div class="left-nav">
                <Menu theme="dark" :open-names="['1']" accordion style="width: 100%;">
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="ios-paper"></Icon>
                            内容管理
                        </template>
                        <MenuItem name="1-1">文章管理</MenuItem>
                        <MenuItem name="1-2">评论管理</MenuItem>
                        <MenuItem name="1-3">举报管理</MenuItem>
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            <Icon type="ios-people"></Icon>
                            用户管理
                        </template>
                        <MenuItem name="2-1">新增用户</MenuItem>
                        <MenuItem name="2-2">活跃用户</MenuItem>
                    </Submenu>
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="stats-bars"></Icon>
                            统计分析
                        </template>
                        <MenuGroup title="使用">
                            <MenuItem name="3-1">新增和启动</MenuItem>
                            <MenuItem name="3-2">活跃分析</MenuItem>
                            <MenuItem name="3-3">时段分析</MenuItem>
                        </MenuGroup>
                        <MenuGroup title="留存">
                            <MenuItem name="3-4">用户留存</MenuItem>
                            <MenuItem name="3-5">流失用户</MenuItem>
                        </MenuGroup>
                    </Submenu>
                </Menu>
            </div>
        </aside>
        <div class="main-right">
            <header class="right-header">
                <div class="header-fold" @click="handleFold">
                    <Icon type="navicon-round" size="20"></Icon>
                </div>
                <div class="header-profile">
                    <div class="profile-tools">
                        <div class="tools-item">
                            <Icon type="unlocked" size="20"></Icon>
                        </div>
                        <div class="tools-item">
                            <Icon type="power" size="20"></Icon>
                        </div>
                        <div class="tools-item">
                            <Icon type="android-cloud"  size="20"></Icon>
                        </div>
                    </div>
                    <Row type="flex" justify="end" align="middle" class="user-dropdown-innercon">
                        <Dropdown transfer trigger="click" @on-click="handleClickUserDropdown">
                            <a href="javascript:void(0)" style="color:#333;">
                                <span class="main-user-name">{{ userName }}</span>
                                <Icon type="arrow-down-b"></Icon>
                            </a>
                            <DropdownMenu slot="list">
                                <DropdownItem name="ownSpace" @click.native="handlePageGoto('profile')">个人中心</DropdownItem>
                                <DropdownItem name="loginout" divided @click.native="handlePageGoto('login')">退出登录</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <Avatar :src="avatorPath" class="user-avatar"></Avatar>
                    </Row>
                </div>
            </header>
            <section class="right-content">
                <router-view/>
            </section>
            <footer class="right-footer">
                2018-2018 &copy; system by chaoshuai All rights reserved
            </footer>
            
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Main',
        data() {
            return {
                avatorPath: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&fm=27&gp=0.jpg",
                userName: 'chaoshuai',
                fold: false
            }
        },
        methods: {
            handleFold() {
                this.fold = !this.fold
                console.log('handleFold',  this.fold)
            },
            handleClickUserDropdown() {

            }
        },
        
    }
</script>

<style scoped lang="scss">
@import '~styles/index.scss';
%bg-border-styles {
    background-color: white;
    border-bottom: 1px solid $color-border;
}
.main{
    @include fullScreen();
    display: flex;
    .main-left{
        width: 200px;
        flex: 0 200px;
        background-color: $color-nav;
        &.left-fold{
            width: 70px;
            flex: 0 70px;
        }
        .left-brand{
            height: 4rem;
            padding: 1rem 0;
            img {
                max-height: 100%;
                display: inline-block;
                vertical-align: bottom;;
                width: auto;
                margin-left:1rem;
            }
            .brand-title{
                color: #fff;
                font-size: 1.25rem;
                font-size: 600;
            }
        }
    }
    .main-right{
        flex: 1;
        .right-header{
            padding: 1rem 0;
            height: 4rem;
            @extend %bg-border-styles;
            .header-fold{
                height: 2rem;
                line-height: 2rem;
                float: left;
                margin: 0 1rem;
                cursor: pointer;
            }
            .header-profile{
                display: flex;
                justify-content: flex-end;
                height: 2rem;
                line-height: 2rem;
                height: 2rem;
                .profile-tools{
                    flex: 0 130px;
                    .tools-item{
                        display: inline-block;
                        width: 2rem;
                    }
                }
                .main-user-name {
                    user-select: none;
                }
                .user-avatar {
                    margin: 0 1rem;
                }
            }
        }
        .right-content{
            padding: 1rem;
            height: calc(100% - 6rem);
            // overflow: hidden;
            // overflow-y: scroll;
        }
        .right-footer{
            height: 2rem;
            text-align: center;
            @include etchedText();
        }
    }
}
</style>