<template>
  <div class="txt">
    {{state.personal.userInfo}}
  </div>
</template>

<script>
import { computed, reactive } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    // vuex4 通过 useStore 在组合API入口内声明获取全局状态实例 store
    const store = useStore()
    // 所有的状态变量都在 state 内
    const state = store.state
    console.log('statestatttstatsd', store)
    return {
      state
    }
  }
}
</script>

<style scoped lang="scss" src="./style.scss">
</style>