### 将url转为base64字符串，存于本地

```
  async getBase64ImageUrl (url, callBack, imgType) {
      if (!imgType) {
        imgType = "image/png";
      }
      var img = new Image();
      img.src = url;
      img.crossOrigin = "anonymous";
      img.onload = function () {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, img.width, img.height);
        var dataURL = canvas.toDataURL(imgType);
        // console.log(dataURL, 'dataURL')
        callBack(dataURL)
      }
    },
```

### 蒙版封装

```
// 有七张图片分别定位到不同的页面。
<guide-page :visible="firstFlag" @closeDialogModal="closeDialogModal">
    <img :class="this.$store.state.auth.ifQuide == true ?       'registerPngQuideTwo':'registerPngQuideTwoClose'" src="../../assets/images/guidePng02.png" />
</guide-page>

// 这个是最外面的蒙版
 <div @click.self="handleOut()"
         class="md-wapper"
         v-if="this.$store.state.auth.visiblesCom"></div>

// 蒙版样式
.md-wapper {
  z-index: 1000;
  position: fixed;
  /* left: 0;
  top: 0; */
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background: #000;
  left: 0;
  top: 0;
}

.registerPngQuideTwo {
  position: absolute;
  z-index: 1001;
  top: -30px;
  right: 65px;
}

.QuidePngClose,
.registerPngQuideThreeClose,
.registerPngQuideFourClose,
.registerPngQuideFiveClose,
.registerPngQuideSixClose,
.registerPngQuideSevenClose {
  display: none;
}

```

```
// 蒙版是否出现
firstFlag: false,
// 关闭蒙版 调用方法

 closeDialogModal () {
      console.log('closeDialogModal')
      this.firstFlag = false
      // 关闭蒙版
      this.$store.commit('setVisiblesCom', false)
      this.$store.commit('setIfHasConfigJson', true)
      // 关闭蒙版继续执行插盘登录
      this.handHb()
      this.$store.commit('setAutoPanLoginModal', false)
    },     
```

```
<template>
  <transition @after-enter="afterEnter" @after-leave="afterLeave" name="dialog-fade">
    <div>
      <div  @click="handleOut()" class="md-content">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
    export default {
        name: "guidePage",
        props:{
            visibleModal: {
                type: Boolean,
                default: false
            },
            closeOnClickModal: {
                type: Boolean,
                default: true
            },
        },
        methods:{
            afterEnter(){

            },
            afterLeave(){

            },
            handleOut(){
                console.log("关闭图片弹窗layout.vue png1 png2")
                this.$emit('closeDialogModal')
                this.$store.commit('setIfQuide', false)
         
            }
        },

    }
</script>

<style scoped lang="scss">
    .md-content{
        z-index: 1001;
        position: absolute;
        width: 100%;
    }
</style>



```