<template>
  <!-- 메뉴 -->
  <div class="menu">
    <a v-for="(menu,i) in menus" :key="i">{{ menu }}</a>
  </div>
  <!-- 매물 -->
  <div>
    <h4>{{ products[0] }}</h4>
    <p>월세 {{ price1 }} 만원</p>
  </div>
  <div>
    <h4>{{ products[1] }}</h4>
    <p>월세 {{ price2 }} 만원</p>
  </div>
  <div>
    <h4>{{ products[2] }}</h4>
    <p>월세 {{ price3 }} 만원</p>
  </div>
  
  
</template>


<script>

export default {
  name: 'App',
  data(){
    return {
      menus : ['Home', 'Shop', 'About'],
      price1 : 160,
      price2 : 80,
      price3 : 50,
      products : ['역삼동 원룸', '천호동 원룸', '서대문 원룸']
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
.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color: white;
  padding: 10px;
}
</style>
````