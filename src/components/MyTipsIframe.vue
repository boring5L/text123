<template>

</template>

<script>
 let defaultZindex= 9
export default {
  name: "MyTipsIframe",
  props: {
    name: {
      type: String,
      default: "弹窗",
      require: true,
    },
    // 过渡动画的模式，具体请自行查看 https://cn.vuejs.org/v2/guide/transitions.html
    widthPot: {
      type: String,
      default: "rem",
    },
    // animate__fadeIn
    // animate__bounceIn
    // animate__zoomIn
    mode: {
      type: String,
      default: "zoomIn",
    },
    // 根据这个布尔值来决定是否显示ifram
    visible: {
      type: Boolean,
      required: true,
    },
    // content-box宽度 百分比形式
    width: {
      type: Number,
      default: 7,
    },
    // content-box高度 百分比形式
    height: {
      type: [Number, String],
      default: 70,
    },
    isHeightFull: {
      type: Boolean,
      default: false,
    },
    // 内容框往下平移 百分比
    top: {
      type: Number,
      default: 0,
    },
    bg: {
      type: String,
    },
    bgTopUrl: {
      type: String,
    },
    // 百分比
    bg2Top: {
      type: Number,
      default: 0,
    },
    // 是否显示黑色背景遮罩层
    modal: {
      type: Boolean,
      default: true,
    },
    // 点击遮罩层关闭
    modalClose: {
      type: Boolean,
      default: true,
    },
    // 关闭按钮的往下偏移度 单位 rem
    closeBottom: {
      type: Number,
    },

    // 按钮显示在哪  目前只写了两种位置，如有特殊需求位置调整 请使用css样式 !important 覆盖掉内联样式。
    buttonPosition: {
      type: String,
      default: "bottom",
      validator: function (value) {
        return ["bottom", "top-right"].indexOf(value) !== -1;
      },
    },
    btnColor: {
      type: String,
      default: "white",
    },
    bg2Width: {
      type: [String, Number],
      default: "4",
    },
    bg2Height: {
      type: [String, Number],
      default: "auto",
    },
    isTimer: Boolean,
    timer: {
      type: Number,
      default: 5000,
    },
  },
  data() {
    return {
      setTimeout: "", // 定时器
    };
  },

  //组件
  components: {},
  watch: {
    visible: {
      handler: function (nVal) {
       
      const ZINDEX =  document.body.getAttribute("ZINDEX")
      if(ZINDEX){
        defaultZindex++
      }
      document.body.setAttribute("ZINDEX",defaultZindex)
        if (nVal) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "auto";
        }
      },
      immediate: true,
    },
  },
  //计算
  computed: {
    computedStyle: function () {
      return {
        width: `${this.width}${this.widthPot}`,
        height: this.isHeightFull ? "100%" : `${this.height}rem`,
        background: this.bg
          ? `transparent url(${this.bg}) no-repeat  `
          : undefined,
        top: this.top ? `${this.top}%` : undefined,
      };
    },
    computedWindow: function () {
      const ZINDEX =  document.body.getAttribute("ZINDEX")
      return {
        "background-color": this.modal ? "rgba(0, 0, 0, 0.6);" : "transparent",
        // "z-index":ZINDEX
      };
    },
    computedButtonStyle: function () {
      const is = this.buttonPosition === "top-right";
      return {
        bottom: "-1rem",
        bottom: is ? undefined : "-.8rem",
        left: is ? undefined : "50%",
        transform: is ? undefined : "translate(-50%)",
        transform: is ? undefined : "translate(-50%)",
        top: is ? "-0.55rem" : undefined,
        right: is ? "0.45rem" : undefined,
        color: this.btnColor,
      };
    },
    computedBgTopImageStyle: function () {
      return {
        top: this.bg2Top ? `${this.bg2Top}%` : "0%",
        width: `${this.bg2Width}rem`,
        height: `${this.bg2Height}rem`,
      };
    },
  },
  methods: {
    clickModal() {
      if (this.setTimeout) {
        // 如果有定时器 则关闭定时器
        clearTimeout(this.setTimeout);
      }
      this.modalClose ? this.$emit("clickLayer", false) : "";
    },
    clickBtn() {
      if (this.setTimeout) {
        // 如果有定时器 则关闭定时器
        clearTimeout(this.setTimeout);
      }
      this.$emit("clickBtn");
    },
  },

  //挂载
  mounted() {
    // console.log("this.buttonPosition", this.buttonPosition);
    // 如果需要定时器关闭
    if (this.isTimer) {
      this.setTimeout = setTimeout(() => {
        // 定时器的回调 自定义事件
        this.$emit("setTimer");
        //
      }, this.timer);
    }
  },
};
</script>

<style lang="less" scoped>
.window {
  width: 7.5rem;
  height: 100%;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  font-size: 0.3rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.window .button {
  /* background-image: url(https://pc1.h5taotao.com/template/static/img/closeclose.5d11e221.png); */
  width: 0.66rem;
  height: 0.66rem;
  line-height: 0.5rem;
  background-size: cover;
  position: absolute;
  text-align: center;
  border-radius: 50%;
  overflow: hidden;

  >img {
    width: 100%;
    height: 100%;
  }
}

.window .content-container {
  min-height: 20%;
  position: relative;
  background-color: transparent;
  color: black;
  border-radius: 0.1rem;
  background-size: 100% 100% !important;
  animation-duration: .5s;
  /* background: white; */
  /* overflow: auto; */
  /* box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5); */
}
.window .zoomIn-leave-to,.window .zoomIn-leave-active{
  animation-duration: .2s;
}
.window .content-container .bg-top-url {
  position: absolute;
  top: -47%;
  z-index: 88;
  left: 50%;
  transform: translateX(-50%);
}

.slot {
  max-height: 100%;
}
</style>