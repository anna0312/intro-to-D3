'use strict'


const dataset = [
  { label: 'Yorkie', count: 10 },
  { label: 'Puggle', count: 5 },
  { label: 'Lab', count: 80 },
  { label: 'Bull Dog', count: 40 },
  { label: 'Shar Pei', count: 40 },
  { label: 'Mixed Breed', count: 40 }
]

const chart_it = function(){
  const width = 360
  const height = 360
  const radius = Math.min(width, height) / 2
  const color = d3.scaleOrdinal(d3.schemeCategory20c)

  $('#chart').empty()

  let svg = d3.select('#chart')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .append('g')
    .attr('transform', 'translate(' + (width / 2) +
       ',' + (height / 2) + ')')

  let arc = d3.arc()
    .innerRadius(0)
    .outerRadius(radius)

  let pie = d3.pie()
    .value(d => d.count)
    .sort(null)

  let path = svg.selectAll('path')
    .data(pie(dataset))
    .enter()
    .append('path')
    .attr('d', arc)
    .attr('fill', function(d) {
        return color(d.data.label)
   })
 }

chart_it()

$('#add').on('click', function(e){
	dataset[0].count = dataset[0].count + 10
  chart_it()
})
