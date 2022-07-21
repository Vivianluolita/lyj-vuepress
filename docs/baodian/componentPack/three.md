### [如何更好地封装组件？](https://www.bilibili.com/video/BV1h44y1v7Jr?spm_id_from=..search-card.all.click&vd_source=55f2748683e944b85c80a2f1a2c8cac3)

```
1. $attrs 简化多层组件之间props传值；
2. $listeners 简化多层组件之间事件传递；
3. $Slots 更多拓展自定义组件传值，包括自定义html元素，及对象；
4. props validator 增强组件传值稳健性，可自定义业务代码效验参数；
5. $refs 对外提供API 增强组件灵活度和可控性；

```
![111](../../.vuepress/public/image/componentPack/01.png)


### dialog

### radio（1. slot只有两层 2. 父元素外层v-model绑定 3. computed中转并emit）

![111](../../.vuepress/public/image/componentPack/307.png)
![111](../../.vuepress/public/image/componentPack/308.png)
![111](../../.vuepress/public/image/componentPack/309.png)
![111](../../.vuepress/public/image/componentPack/310.png)

### radio-group（1. slot只有三层，借助provide inject 让孙子元素知道 radio-grop在变化 2. 父元素外层v-model绑定 3. computed中转并emit）

![111](../../.vuepress/public/image/componentPack/311.png)
![111](../../.vuepress/public/image/componentPack/312.png)