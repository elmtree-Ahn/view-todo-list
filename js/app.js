Vue.component('sibling-component', {
  props: ['propsdata'],
  template: '<p>{{ propsdata }}</p>'
})

Vue.component('child-component', {
  props: ['propsdata'],
  template: '<p>{{ propsdata }}</p>'
})

let app = new Vue({
  el: '#app',
  data: {
    message: "Hello Vue! passed from Parent Component",
    anotherMessage: "나는 Vue 개발자 입니다."
  }
})

