Vue.component('mini-coding-presentation', {
  template: '<div><h5>Hey there</h5><p>We are MiniCoding</p></div>'
})

Vue.component('language-description', {
  props: ['lan'],
  template: '<li>Name: {{ lan.name }} -> Rating: {{ lan.rate }}</li>'
})

var componentsApp = new Vue({
  el: '#components',
  data: {
    languages: [
      {id: 0, name: "Ruby", rate: 9},
      {id: 1, name: "Java", rate: 8},
      {id: 2, name: "JavaScript", rate: 10}
    ]
  }
})
