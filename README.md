
[logo]: https://raw.githubusercontent.com/d3/d3-logo/master/d3.png "D3"
![D3](https://s3.amazonaws.com/anna0312wdi/misc/d3logo.png "D3")


## Prerequisites

-   A love of things that are awesome. And some basic HTML and JavaScript

## Objectives

By the end of this talk you should be able to:
-   Tell everyone how cool D3 is
-   Understand the variety of applications D3 has
-   Be familiar with at least one D3 wrapper
-   Use a wrapper to create a chart
-   Marvel at how easy it was

## Preparation

1.  Fork and clone this repository.
 [FAQ](https://git.generalassemb.ly/ga-wdi-boston/meta/wiki/ForkAndClone)
1.  Create a new branch, `training`, for your work.
1.  Checkout to the `training` branch.
1.  Install dependencies with `npm install`.


## What is D3?

[https://d3js.org/](https://d3js.org/)
D3 (Data Driven Documents) is a JavaScript library for visualizing data using
 [SVG](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics), [Canvas](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics), and HTML to manipulate the DOM.




## A wide variety of applications


[Show Reel](https://bl.ocks.org/mbostock/1256572): An example of a number of
different charts in action, in this case representing the stock market.

[What's your skill set?](http://bl.ocks.org/wizicer/f662a0b04425fc0f7489): Something a little closer to home for us.


[Economic Output](https://archive.nytimes.com/www.nytimes.com/interactive/2013/04/08/business/global/asia-map.html):
A nice example of D3 in use to elegantly depict economic and population data.


[Fashion Week](http://www.nytimes.com/newsgraphics/2013/09/13/fashion-week-editors-picks/index.html): D3 can be used
for more than just charts. Here it's used to render fashion week images.


[Clock](http://bl.ocks.org/mbostock/1096355):
Because why look at your phone for the time when you could use this.

[We are getting dumber](https://www.theguardian.com/world/interactive/2013/feb/12/state-of-the-union-reading-level):
A traditional graph format with beautifully illustrated evidence of our decreasing collective intelligence.


### Just some cool stuff

[Force-Directed Graph](https://bl.ocks.org/mbostock/4062045)

[Collision Detection](https://bl.ocks.org/mbostock/3231298)

[Geographical Bounding Boxes](https://www.jasondavies.com/maps/bounds/)



## That's great. Now how do we use it?

We can all agree that D3 is amazing. But it's also pretty complex. Lucky for us there are some great wrappers out there for those of us who aren't mathematicians.

[C3](http://c3js.org/) is my favorite because it's absurdly easy to use. If time permits, lets do a code along!

Open assets/scripts/donut.js and lets make us a chart!
If we run out of time, here's the code we were going to write

```javascript

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

```

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
