### 动态组件


![111](../../.vuepress/public/image/comments/04.png)


### 组件封装

- sync（传入属性，和传入对象的写法。并且它是通过传入prop，并且可以监听。而且可以改变prop的值。）
![111](../../.vuepress/public/image/comments/05.png)
![111](../../.vuepress/public/image/comments/06.png)
![111](../../.vuepress/public/image/comments/07.png)
![111](../../.vuepress/public/image/comments/08.png)
![111](../../.vuepress/public/image/comments/09.png)
![111](../../.vuepress/public/image/comments/10.png)

### [彻底理解 vue 的 .sync 修饰符](https://www.bilibili.com/video/BV1WQ4y1q7be?spm_id_from=..search-card.all.click)

- 原理以及使用场景
![111](../../.vuepress/public/image/comments/11.png)
![111](../../.vuepress/public/image/comments/14.png)

- 使用

![111](../../.vuepress/public/image/comments/12.png)

![111](../../.vuepress/public/image/comments/13.png)
![111](../../.vuepress/public/image/comments/14.png)
![111](../../.vuepress/public/image/comments/15.png)
![111](../../.vuepress/public/image/comments/16.png)
![111](../../.vuepress/public/image/comments/17.png)
![111](../../.vuepress/public/image/comments/18.png)
![111](../../.vuepress/public/image/comments/19.png)
![111](../../.vuepress/public/image/comments/20.png)
![111](../../.vuepress/public/image/comments/21.png)
![111](../../.vuepress/public/image/comments/22.png)
![111](../../.vuepress/public/image/comments/23.png)
![111](../../.vuepress/public/image/comments/24.png)
![111](../../.vuepress/public/image/comments/25.png)
![111](../../.vuepress/public/image/comments/26.png)
![111](../../.vuepress/public/image/comments/27.png)
![111](../../.vuepress/public/image/comments/28.png)
![111](../../.vuepress/public/image/comments/29.png)
![111](../../.vuepress/public/image/comments/30.png)
![111](../../.vuepress/public/image/comments/31.png)
![111](../../.vuepress/public/image/comments/32.png)

### 资料



> vue 双向绑定(v-model 双向绑定、.sync 双向绑定、.sync 传对象)

- [vue封装组件双向绑定](https://segmentfault.com/a/1190000040655672)
> @input="handleInput" :value="value1"

- [vue封装组件双向绑定](https://www.i4k.xyz/article/lucky___star/88565634)
> 定义组件时的 model 选项，从而实现了自定义组件 v-model 功能

- [vue 封装组件 实现自定义双向绑定](https://www.superweb999.com/article/1302892.html)
> 定义组件时的 model 选项，从而实现了自定义组件 v-model 功能

- [vue 封装组件 嵌套两层组件，最外面一层](https://www.superweb999.com/article/1302892.html)
> 定义组件时的 model 选项，从而实现了自定义组件 v-model 功能

- [vue 动态创建不同的组件 利用循环遍历 component is 解决问题](https://blog.csdn.net/jmszl1991/article/details/109366670)
- [vue 动态创建不同的组件 利用循环遍历 component is 解决问题](https://blog.csdn.net/H_O_W_E/article/details/111581331)

### b站其他

- [【Vue高级】sync修饰符的原理和作用](https://www.bilibili.com/video/BV1pV411S7GZ?spm_id_from=..search-card.all.click)

![111](../../.vuepress/public/image/comments/33.png)
![111](../../.vuepress/public/image/comments/34.png)
![111](../../.vuepress/public/image/comments/35.png)

### emit() 传递两个参数

```

父组件页面
<div v-if="item.itemComment && item.itemComment.length">
  <div :key="indexTwo + 'index7'" v-for="(items,indexTwo) in item.itemComment">
    <div>
      <!-- 评论列表 -->
      <CommentItem
        :ifReply='ifReply'
        v-bind.sync='items'
        :index="index"
        :indexTwo="indexTwo"
        :saveOperateFlag="saveOperateFlag"
        @delComment="delComment($event,indexTwo)"
        @addReply="addReply($event,indexTwo)"
      />
    </div>
</div>    

delComment(argumentses,indexTwo){
      // let ifNewComment
      let _this = this
      console.log("当前editor数组index",argumentses)
      console.log("当前评论对象数组index",indexTwo)
}  

子组件页面

btnCancel(event){
  console.log("cancel",event)
  console.log("cancel index",this.index)
  this.$emit('delComment',this.index,this.indexTwo)
},
```