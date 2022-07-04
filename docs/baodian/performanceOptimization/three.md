### 查看渲染


![111](../../.vuepress/public/image/performanceOptimization/01.png)
![111](../../.vuepress/public/image/performanceOptimization/02.png)
![111](../../.vuepress/public/image/performanceOptimization/03.png)
![111](../../.vuepress/public/image/performanceOptimization/04.png)
![111](../../.vuepress/public/image/performanceOptimization/05.png)
![111](../../.vuepress/public/image/performanceOptimization/07.png)


### [优化前端页面](https://www.bilibili.com/video/BV1CD4y1X7V5?p=4&vd_source=55f2748683e944b85c80a2f1a2c8cac3)

- 防止后台图片尺寸不同而影响页面

![111](../../.vuepress/public/image/performanceOptimization/06.png)

- overflow ， magin负值
![111](../../.vuepress/public/image/performanceOptimization/08.png)

- first-child
![111](../../.vuepress/public/image/performanceOptimization/09.png)

- 代码快速生成
![111](../../.vuepress/public/image/performanceOptimization/10.png)
![111](../../.vuepress/public/image/performanceOptimization/11.png)
![111](../../.vuepress/public/image/performanceOptimization/15.png)
![111](../../.vuepress/public/image/performanceOptimization/16.png)
![111](../../.vuepress/public/image/performanceOptimization/17.png)

- 利用溢出隐藏和宽度计算差值 写页面

![111](../../.vuepress/public/image/performanceOptimization/12.png)

- 伪元素
![111](../../.vuepress/public/image/performanceOptimization/13.png)
![111](../../.vuepress/public/image/performanceOptimization/14.png)

- a标签撑满相应父级
![111](../../.vuepress/public/image/performanceOptimization/15.png)


- webpack文件的压缩和合并

> 安装
![111](../../.vuepress/public/image/performanceOptimization/18.png)
![111](../../.vuepress/public/image/performanceOptimization/19.png)

> 配置

![111](../../.vuepress/public/image/performanceOptimization/20.png)
> webpack.config.js配置

![111](../../.vuepress/public/image/performanceOptimization/21.png)

```
./  表示package.json所在的位置
```