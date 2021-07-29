<template>
  <!-- 모달창 -->
  <div class="black-bg" v-if="모달창열렸니 == true">
    <div class="white-bg">
      <h4>상세 페이지</h4>
      <p>내용을 적으세요.</p>
      <button @click="모달창열렸니 = false">닫기</button>
    </div>
  </div>

  <!-- 메뉴 -->
  <div class="menu">
    <a v-for="(menu,i) in menus" :key="i">{{ menu }}</a>
  </div>
  <!-- 매물 -->
  <div v-for="(원룸, i) in 원룸들" :key="i">
    <img :src="원룸.image" class="room-img">
    <h4 @click="모달창열렸니 = true">{{ 원룸.title }}</h4>
    <p>월세 {{ 원룸.price }} 원</p>
  </div>
  
</template>


<script>
import data from './oneroom.js';

export default {
  name: 'App',
  data(){
    return {
      원룸들 : data,
      모달창열렸니 : false,
      신고수 : [0, 0, 0],
      menus : ['Home', 'Shop', 'About']
    }
  },
  methods : {
    increase() {
      for (let i = 0; i < 4; i++)
      this.신고수[i]++
    }
  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* 모달창 */
body {
  margin: 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  position: fixed;
  width: 100%;
  height: 100%;
  padding: 20px;
  background: rgba(0,0,0,.5);
}
.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}

  /* <div class="black-bg">
    <div class="white-bg">
      <h4>상세 페이지</h4>
      <p>내용을 적으세요.</p>
    </div>
  </div> */

/* 메뉴바 */
.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
}
/* 매물 */
.room-img {
  width: 100%;
  margin-top: 40px;
}
</style>
````