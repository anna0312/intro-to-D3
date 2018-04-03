'use strict'

const c3 = require('c3')

const chart = c3.generate({
  data: {
    columns: [
      ['Pretty awesome', 30],
      ['Extremely awesome', 120],
      ['Someone mentioned donuts?', 80]
    ],
    type: 'donut',
    onclick: function (d, i) {
      console.log('onclick', d, i)
    }
  },
  donut: {
    title: 'What do you think?'
  }
})

setTimeout(function () {
  chart.load()
}, 1500)
