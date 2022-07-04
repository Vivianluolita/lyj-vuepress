## [前端面试官必问系列-后台系统的权限控制与管理【完结】](https://www.bilibili.com/video/BV15Q4y1K79c?spm_id_from=..search-card.all.click&vd_source=55f2748683e944b85c80a2f1a2c8cac3)
### 权限控制内容


![111](../../.vuepress/public/image/permission/01.png)





### 菜单控制

- vuex存储菜单权限。并通过computed映射state数据

![111](../../.vuepress/public/image/permission/02.png)
![111](../../.vuepress/public/image/permission/03.png)
![111](../../.vuepress/public/image/permission/04.png)
![111](../../.vuepress/public/image/permission/05.png)

- vuex结合sessionstorage 做数据持久化。session无法解决跨页问题。
![111](../../.vuepress/public/image/permission/06.png)
![111](../../.vuepress/public/image/permission/07.png)

- 如何退出登陆处理数据（crear，reload）

![111](../../.vuepress/public/image/permission/08.png)
![111](../../.vuepress/public/image/permission/07.png)

- 跳转页面前判断是否有token，决定是否去登陆页面
![111](../../.vuepress/public/image/permission/09.png)

- 动态路由（因为前面都是直接判断token，再进入页面。但是有的不需要这种规则，需要动态的push进去路由里面，时机是在登陆成功后）
![111](../../.vuepress/public/image/permission/10.png)
![111](../../.vuepress/public/image/permission/11.png)
![111](../../.vuepress/public/image/permission/12.png)
![111](../../.vuepress/public/image/permission/13.png)
![111](../../.vuepress/public/image/permission/23.png)
![111](../../.vuepress/public/image/permission/24.png)
### 界面控制

### 按钮控制

![111](../../.vuepress/public/image/permission/15.png)

- 自定义指令（利用meta）

![111](../../.vuepress/public/image/permission/16.png)
![111](../../.vuepress/public/image/permission/17.png)
![111](../../.vuepress/public/image/permission/18.png)
![111](../../.vuepress/public/image/permission/19.png)
![111](../../.vuepress/public/image/permission/20.png)
![111](../../.vuepress/public/image/permission/21.png)
![111](../../.vuepress/public/image/permission/22.png)
![111](../../.vuepress/public/image/permission/25.png)
### 请求和相应控制

![111](../../.vuepress/public/image/permission/26.png)
![111](../../.vuepress/public/image/permission/27.png)
![111](../../.vuepress/public/image/permission/28.png)
![111](../../.vuepress/public/image/permission/29.png)

- 响应控制，跳转404页面，当后台返回401
![111](../../.vuepress/public/image/permission/30.png)
![111](../../.vuepress/public/image/permission/31.png)