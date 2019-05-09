<template>
  <div>
    <svg id="chart"></svg>
    <div class="selected">
      <div class="word"></div>
      <div class="contexts"></div>
    </div>
  </div>
</template>

<script>
  const d3 = require('d3');
  const data = require('/src/data/bubbledata.json')
  const fulltext = require('/src/data/giantdata.json')
  import Controller from '/src/controller'

  export default {
    data() {
      return {

      }
    },
    props: ['words'],
    methods: {
      go(chartData) {
        const canvasWidth = 1000,
          canvasHeight = 600,
          padding = { top: 10, right: 10, bottom: 10, left: 10 },
          maxRadius = 70

        const width = canvasWidth - padding.left - padding.right;
        const height = canvasHeight - padding.top - padding.bottom;

        var rScale = d3.scaleSqrt().range([0, maxRadius])

        const count = (topic) => +topic.count
        const wordId = (topic) => topic.word
        const textContent = (topic) => topic.word
        const circleColor = (topic) => topic.color

        var label,
            countLabel,
            container,
            words,
            node

        chartData = chartData.map((word) => {
          return {
            word: word.word,
            re: new RegExp("\\b(" + word.word + ")\\b", "g"),
            x: canvasWidth/2,
            y: canvasHeight/2,
            color: word.color
          }
        })

        function topic(topic) {
          topic.count = 0;
          topic.mentions = [];

          data.interviews.forEach(function(interview, idx) {
            var text = interview.text,
                match,
                localCount = 0;

            topic.re.lastIndex = 0;

            while (match = topic.re.exec(text)) {
              ++topic.count;
              ++localCount;
            }

            if(localCount > 0) {
              topic.mentions.push({
                title: interview.filename,
                index: idx,
                count: localCount
              });
            }
          });

          return topic;
        }
        chartData.forEach(topic)

        var xMax = d3.max(chartData.map(word => word.count))

        var force = d3.forceSimulation()
          .force('y', d3.forceY().strength(0.4).y(canvasHeight/2))
          .force('x', d3.forceX().strength(0.1).x(canvasWidth/2))
          .force('charge', d3.forceManyBody().strength(0))
          // .force('center', d3.forceCenter(canvasWidth / 2, canvasHeight / 2))
          .force('collide', d3.forceCollide(function(d) {
              return rScale(count(d)) + 1
            })
            .iterations(10)
            .strength(.5)
          )
          .alphaTarget(0)
          .on('tick', tick)

        draw()
        function draw() {

          rScale.domain([0, xMax])

          d3.select('#chart')
            .selectAll('g.container')
            .data([chartData])
            .enter().append('g')
            .attr('class', 'container')
            .attr('transform', `translate( ${padding.left} , ${padding.top} )`)

          container = d3.select('g.container')

          // label = container.selectAll('')
          redraw()
        }

        function redraw() {

          force.nodes(chartData)

          node = container.selectAll('.node')
              .data(chartData, wordId)

          node.exit().remove()

          var nodeEnter = node.enter()
            .append('g')
            .attr('class', 'node')
            // .attr('xlink:href', (d) => `${ encodeURIComponent(wordId(d)) }`)
            .on('click', click)
            .on('mouseover', mouseover)
            .on('mouseout', mouseout)
            .call(d3.drag()
              .on('start', dragstarted)
              .on('drag', dragged)
              .on('end', dragended));

          node = container.selectAll('.node')

          nodeEnter
            .append('circle')
            .attr('fill', circleColor)
            .attr('r', (d) => rScale(count(d)))

          nodeEnter.append('text')
            .attr('class', 'label')
            .text(textContent)
            .style('font-size', (d) => Math.max(8, rScale(count(d) / 5)) + 'px')
            .attr('transform', function(d) {
              var w = ( this.getBBox ? this.getBBox() : this.getBoundingClientRect() ).width
              return `translate( ${ -w/2 } , ${ rScale(count(d)) - Math.max(8, rScale(count(d)))/1.25 } )`
            })
            .style('width', (d) => 2.5 * rScale(count(d)) + 'px')

          label = container.selectAll('text.label')

          nodeEnter.append('text', 'count')
            .attr('class', 'count')
            .text(count)

          countLabel = container.selectAll('text.count')

          countLabel
            .style('font-size', 10)
            .attr('transform', function(d) {
              var w = ( this.getBBox ? this.getBBox() : this.getBoundingClientRect() ).width
              return `translate( ${ -w/2 } , ${ Math.max(8, rScale(count(d)))/1.25 } )`
            })

        }


        function click(d) {
            node.classed('active', (n) => wordId(n) == wordId(d) )
            Controller.displayData(d, data, fulltext)
        }
        function dragstarted(d) {
            if (!d3.event.active) force.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
        }

        function dragged(d) {
            d.fx = d3.event.x;
            d.fy = d3.event.y;
        }

        function dragended(d) {
            if (!d3.event.active) force.alphaTarget(0);
            d.fx = null;
            d.fy = null;
        }
        function mouseover(d) {
            node.classed('hover', (n) => wordId(n) == wordId(d))
        }

        function mouseout(d) {
            node.classed('hover', false)
        }

        function tick(e) {
            container.selectAll('.node')
                .attr('transform', (d) => `translate( ${ d.x }, ${ d.y } )`)
        }




        function addTopic(word) {
          var t = topic({ word: word, re: new RegExp("\\b(" + word.trim() + ")\\b", "g")});
          var check = chartData.find(function(w) {
            return w.word === word
          })
          if(check) return click(check)
          t.x = width
          t.y = 0
          chartData.push(t);

          // force.stop()
          redraw()
          force.alpha(0.2)
          force.restart()
          // force.alphaTarget(1)
          click(t)
        }
      }
    },
    mounted() {
      this.go(this.words);
    }
  }

</script>

<style lang="scss">
  #chart {
    display: block;
    width: 1000px;
    height: 600px;
    margin: 0 auto;
  }

  .node circle {
      opacity:0.7;
      // fill: #723582;
      /*stroke: #66f;*/
  }

  .node text {
      font-family: 'Roboto Mono', sans-serif;
      fill: #001f3f;
      stroke: none;
  }
  .node .count {
      font-family:sans-serif;
  }

  .node.hover circle {
      opacity:0.4;
  }

  .node.active circle, .node.active.hover circle {
      opacity:1.0;
  }

  .selected {
    margin: 0 auto;
    max-width: 600px;
    font-family: 'Roboto Mono', sans-serif;
  }

  .selected .word {
    font-size: 40;
    font-weight: bold;
  }

  .selected .count {
    float: right;
  }

  p.context {
    font-family: 'Roboto Mono', serif;
    margin: 2em 0;
  }

  .highlight {
    background-color: #bca99c;
    opacity: 0.8;
  }
</style>
