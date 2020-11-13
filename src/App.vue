<!--
 * @Author: Vhen
 * @Date: 2020-11-13 13:25:53
 * @LastEditors: Vhen
 * @LastEditTime: 2020-11-13 15:20:49
 * @Description: 
-->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/test">test</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
