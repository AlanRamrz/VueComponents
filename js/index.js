Vue.component('mini-coding-presentation', {
  template: '<div><h5>Hey there</h5><p>We are MiniCoding</p></div>'
})

Vue.component('language-description', {
  props: ['lan'],
  template: '<li>Name: {{ lan.name }} -> Rating: {{ lan.rate }}</li>'
})

Vue.component('counter',{
  template: `<div>
              <button v-on:click="decrease">-</button>
              <label>{{ count }}</label>
              <button v-on:click="increment">+</button>
            </div>`,
  //As a function so every element has its own counter
  data: function(){
    return{
      count: 0
    }
  },
  methods: {
    increment: function(){
      this.count++
    },
    decrease: function(){
      this.count--
    }
  }
})

var custonComponentsApp = new Vue({
  el: '#customComponents',
  data: {
    languages: [
      {id: 0, name: "Ruby", rate: 9},
      {id: 1, name: "Java", rate: 8},
      {id: 2, name: "JavaScript", rate: 10}
    ]
  }
})

var basicComponentsApp = new Vue({
  el: '#basicComponents',
  data: {
    inputChecked: true,
    arrayChecked: [],
    radio: '',
    list: [
      {text: 'JS', value: 'js'},
      {text: 'Java', value: 'java'},
      {text: 'Ruby', value: 'ruby'}
    ],
    selectedOption: ''
  }
})
