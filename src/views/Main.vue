<template>
    <div class="main">
        <!-- 侧边栏 -->
        <aside class="main-left" :class="{'left-collapsed': collapsed}">
            <div class="left-brand">
                <img src="../assets/logo-min.jpg" alt="logo">
                <span class="brand-title" v-if="!collapsed">{{adminName}}</span>
            </div>
            <div class="left-nav">
                <!-- 未折叠 -->
                <Menu theme="light" :open-names="[$route.name]" accordion width="auto" :active-name="$route.name" @on-select="handleChangeMenu" v-if="!collapsed">
                    <div class="warrper" v-for="(item, index) in $router.options.routes" v-if="!item.hidden" :key="index">
                        <Submenu :name="item.name" v-if="item.children&&item.children.length>0">
                            <template slot="title">
                                <Icon :type="item.icon" :size="16"></Icon>{{item.title}}
                            </template>
                            <MenuItem :name="child.name" v-if="!child.hidden" v-for="(child,i) in item.children" :key="i">{{child.title}}</MenuItem>
                        </Submenu>
                        <MenuItem :name="item.name" :key="i" v-else>{{child.title}}</MenuItem>

                    </div>
                </Menu>
                <!-- 已折叠 -->
                <div style="text-align: center;" v-for="(item, index) in $router.options.routes" :key="index" v-if="collapsed">
                    <Dropdown transfer v-if="item.children&&item.children.length>0" placement="right-start" :key="index" @on-click="handleChangeMenu">
                        <Button style="width: 70px; padding: 10px 0;" type="text">
                            <Icon :size="20" :type="item.icon"></Icon>
                        </Button>
                        <DropdownMenu style="width: 200px;" slot="list">
                            <template v-for="(child, i) in item.children">
                                <DropdownItem :name="child.name" :key="i" style="text-indent:1rem;">{{ child.title }}</DropdownItem>
                            </template>
                        </DropdownMenu>
                    </Dropdown>
                </div>

            </div>
        </aside>
        <div class="main-right" :class="{'right-collapsed': collapsed}">
            <header class="right-header">
                <!-- 折叠按钮 -->
                <Button class="header-collapsed" type="text" @click="handleToggle">
                    <Icon type="navicon-round" :size="24" color="#333"></Icon>
                </Button>
                <!-- 面包屑 -->
                <Breadcrumb class="header-breadcrumb">
                    <BreadcrumbItem to="/">
                        <strong>home</strong>
                    </BreadcrumbItem>
                    <BreadcrumbItem :to="item.path" v-for="item in $route.matched" :key="item.name">{{ item.name }}</BreadcrumbItem>
                </Breadcrumb>
                <!-- 个人中心 -->
                <div class="header-profile">
                    <div class="profile-tools">
                        <div class="tools-item">
                            <Tooltip :content="messageCount > 0 ? '有' + messageCount + '条未读消息' : '无未读消息'" placement="bottom">
                                <Badge :count="messageCount" dot>
                                    <Icon type="ios-bell" :size="22"></Icon>
                                </Badge>
                            </Tooltip>
                        </div>
                    </div>
                    <Row type="flex" justify="end" align="middle" class="user-dropdown-innercon">
                        <Dropdown transfer trigger="click">
                            <a href="javascript:void(0)" style="color:#333;">
                                <span class="main-user-name">{{ userName }}</span>
                                <Icon type="arrow-down-b"></Icon>
                            </a>
                            <DropdownMenu slot="list">
                                <DropdownItem name="ownSpace" @click.native="handlePageGoto('profile')">个人中心</DropdownItem>
                                <DropdownItem name="loginout" divided @click.native="handlePageGoto('logout')">退出登录</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <Avatar :src="avatorPath" class="user-avatar"></Avatar>
                    </Row>
                </div>
            </header>
            <!-- 内容区域 -->
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
import Cookies from 'js-cookie'
export default {
    name: "Main",
    data() {
        return {
            avatorPath:
                "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&fm=27&gp=0.jpg",
            userName: "chaoshuai",
            adminName: "微信CRM",
            messageCount: 4,
            collapsed: false
        };
    },
    mounted() {
        this.userName = Cookies.get('username')
    },
    methods: {
        handleToggle() {
            this.collapsed = !this.collapsed;
        },
        handlePageGoto(name) {
            if (name === "logout") {
                Cookies.remove('token')
                Cookies.remove('username')
                this.$router.push({ name: 'login' });
            } else {
                this.$router.push({ name });
            }
        },
        handleChangeMenu(name) {
            this.$router.push({ name });
        }
    }
};
</script>

<style scoped lang="scss">
@import "~styles/index.scss";
%bg-border-styles {
    background-color: white;
    border-bottom: 1px solid $color-border;
}
.main {
    @include fullScreen();
    display: flex;
    .main-left {
        flex: 0 200px;
        min-width: 200px;
        background-color: #fff;
        &.left-collapsed {
            flex: 0 70px;
            min-width: 70px;
        }
        .left-brand {
            height: 4rem;
            padding: 1rem 0;
            text-align: center;
            @extend %bg-border-styles;
            img {
                max-height: 100%;
                display: inline-block;
                vertical-align: bottom;
                width: auto;
            }
            .brand-title {
                font-size: 1.25rem;
                font-size: 600;
            }
        }
    }
    .main-right {
        flex: 1;
        max-width: calc(100% - 200px);
        &.right-collapsed {
            max-width: calc(100% - 70px);
        }
        .right-header {
            padding: 1rem 0;
            height: 4rem;
            @extend %bg-border-styles;
            .header-collapsed {
                float: left;
                width: 3rem;
                height: 100%;
                line-height: 100%;
                margin: 0 0.75rem;
                padding: 0;
                cursor: pointer;
            }
            .header-breadcrumb {
                float: left;
                height: 2rem;
                line-height: 2rem;
                cursor: pointer;
            }
            .header-profile {
                display: flex;
                justify-content: flex-end;
                height: 2rem;
                line-height: 2rem;
                .profile-tools {
                    flex: 0 4rem;
                    .tools-item {
                        display: inline-block;
                        width: 2rem;
                        cursor: pointer;
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
        .right-content {
            padding: 1rem;
            height: calc(100% - 6rem);
            overflow-x: hidden;
            overflow-y: scroll;
        }
        .right-footer {
            height: 2rem;
            line-height: 2rem;
            text-align: center;
            @include etchedText();
        }
    }
}
</style>