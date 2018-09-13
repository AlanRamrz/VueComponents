Vue.component('mini-coding-presentation', {
  template: '<div><h5>Hey there</h5><p>We are MiniCoding</p></div>'
})

Vue.component('language-description', {
  props: ['lan'],
  template: '<li>Name: {{ lan.name }} -> Rating: {{ lan.rate }}</li>'
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
