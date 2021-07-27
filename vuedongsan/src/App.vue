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
  <div>
    <img src="./assets/room0.jpg" class="room-img">
    <h4 @click="모달창열렸니 = true">{{ products[0] }}</h4>
    <p>월세 {{ price[0] }} 만원</p>
    <button @click="신고수[0]++">허위매물신고</button>
    <span> 신고수 : {{ 신고수[0] }}</span>
  </div>
      <img src="./assets/room1.jpg" class="room-img">
    <div>
    <h4>{{ products[1] }}</h4>
    <p>월세 {{ price[1] }} 만원</p>
    <button @click="신고수[1]++">허위매물신고</button>
    <span> 신고수 : {{ 신고수[1] }}</span>
  </div>
      <img src="./assets/room2.jpg" class="room-img">
    <div>
    <h4>{{ products[2] }}</h4>
    <p>월세 {{ price[2] }} 만원</p>
    <button @click="신고수[2]++">허위매물신고</button>
    <span> 신고수 : {{ 신고수[2] }}</span>
  </div>
  
</template>


<script>

export default {
  name: 'App',
  data(){
    return {
      모달창열렸니 : false,
      신고수 : [0, 0, 0],
      menus : ['Home', 'Shop', 'About'],
      price : [160, 80, 50],
      products : ['역삼동 원룸', '천호동 원룸', '서대문 원룸']
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