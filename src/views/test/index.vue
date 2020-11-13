<!--
 * @Author: Vhen
 * @Date: 2020-11-13 15:15:47
 * @LastEditors: Vhen
 * @LastEditTime: 2020-11-13 16:42:37
 * @Description: 
-->
<template>
  <div class="test">
    <div class="line" :style="{ background: variables.green }"></div>
    <v-test></v-test>
    <div class="line" :style="{ background: variables.pink }"></div>
    {{test}}  <button @click="testFn('2222')">改变test值</button>
  </div>
</template>

<script>
import variables from "assets/scss/variables.scss";
import { mapActions, mapGetters } from 'vuex'
export default {
  name: "test",
  props: {},
  data() {
    return {};
  },
  computed: {
    variables() {
      return variables;
    },
    ...mapGetters('app', ['test'])
  },
  components: {},
  methods: {
    ...mapActions('app', ['testFn'])
  },
  mounted() {
    this.$apis.getUser().then(res=>{
      console.log(res);
    })
  },
  watch: {},
};
</script>
<style lang='scss' scoped>
.test {
  margin-top: 30px;
}
.line {
  width: 100%;
  height: 4px;
  margin: 20px auto;
}
</style>
