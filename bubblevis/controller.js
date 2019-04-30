import * as d3 from 'd3'

export default class Controller {

    static displayData(d, data) {
        var word = d.word,
            count = d.count,
            interviews;

        interviews = d.mentions;

        var container = d3.select('div.selected')

        container.select('.word')
            .html(word.charAt(0).toUpperCase() + word.slice(1))
            .append('span')
            .attr('class', 'count')
            .html(count + ' times, ' + d.mentions.length + ' interviews')

        container.select('.interviews')
            .selectAll('div.interview').remove()

        container.select('.interviews')
            .selectAll('div.interview').data(interviews)
            .enter().append('div')
            .attr('class', 'interview')
            .html((interview) => interview.title)
            .append('span')
            .attr('class', 'count')
            .html((interview) => interview.count + ' times')

        container.select('.interviews')
            .selectAll('span')
            .html((interview) => interview.count + ' times')

        container.select('.interviews')
            .selectAll('div.interview').data(interviews)
            .exit().remove()
    }

}
