<template>
  <div class="backtop BackTop-wrapper_3XDbcaq" v-show="isShow" @click="backTop">
    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTM4IiBoZWlnaHQ9IjEyOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOCAxMSkiIGZpbGw9IiM5OTkiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHJlY3QgeD0iMi4yMzkiIHdpZHRoPSI5OC41MjIiIGhlaWdodD0iOC45MTciIHJ4PSI0LjQ1OCIvPjxyZWN0IHRyYW5zZm9ybT0icm90YXRlKDkwIDUxLjUgNjIuNDE3KSIgeD0iNi43MTciIHk9IjU3Ljk1OCIgd2lkdGg9Ijg5LjU2NSIgaGVpZ2h0PSI4LjkxNyIgcng9IjQuNDU4Ii8+PHJlY3QgdHJhbnNmb3JtPSJzY2FsZSgtMSAxKSByb3RhdGUoNDUgMCAtMjUuNzU3KSIgeD0iLTYuNjcxIiB5PSI0MC4xNzEiIHdpZHRoPSI3MS42NTIiIGhlaWdodD0iOC45MTciIHJ4PSI0LjQ1OCIvPjxyZWN0IHRyYW5zZm9ybT0icm90YXRlKDQ1IDczLjkzOCA0NC42MykiIHg9IjM4LjExMiIgeT0iNDAuMTcxIiB3aWR0aD0iNzEuNjUyIiBoZWlnaHQ9IjguOTE3IiByeD0iNC40NTgiLz48L2c+PC9zdmc+" class="BackTop-icon_2Js4K94">
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShow: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.toggle)
  },
  methods: {
    toggle () {
      let clientHeight =
        document.documentElement.clientHeight || document.body.clientHeight
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      if (scrollTop >= clientHeight) {
        this.isShow = true
      } else if (scrollTop === 0) {
        this.isShow = false
      }
    },
    backTop () {
      if (window.pageYOffset) {
        window.pageYOffset = 0
      }
      if (document.documentElement.scrollTop) {
        document.documentElement.scrollTop = 0
      } else {
        document.body.scrollTop = 0
      }
      this.isShow = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.backtop {
  z-index: 3;
}
.BackTop-wrapper_3XDbcaq {
  position: fixed;
  right: 0.4rem;
  right: 4vw;
  bottom: 2rem;
  bottom: 20vw;
  display: -webkit-flex;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-justify-content: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 1.133333rem;
  width: 11.333333vw;
  height: 1.133333rem;
  height: 11.333333vw;
  border: 0.013333rem solid #999;
  border: 0.133333vw solid #999;
  border-radius: 50%;
  background: #fff;
  -webkit-transition: opacity 0.3s;
  transition: opacity 0.3s;
  will-change: transform;
}
.BackTop-icon_2Js4K94 {
  width: 0.533333rem;
  width: 5.333333vw;
  height: 0.533333rem;
  height: 5.333333vw;
}
</style>
