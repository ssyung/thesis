import * as d3 from 'd3'

export default class Controller {

    static displayData(d, data, fulltext) {
        var word = d.word,
            count = d.count,
            interviews;

        interviews = d.mentions;
        var container = d3.select('div.selected')

        container.select('.word')
            .html(word)
            .append('span')
            .attr('class', 'count')
            .html(count + ' times in ' + d.mentions.length + ' interviews')
/*
        container.select('.interviews')
            .selectAll('div.interview').remove()

        container.select('.interviews')
            .selectAll('div.interview').data(interviews)
            .enter().append('div')
            .attr('class', 'interview')
            .html((interview) => interview.title)
            .append('span')
            .attr('class', 'count')
            .html((interview) => interview.count)


        container.select('.interviews')
            .selectAll('div.interview').data(interviews)
            .exit().remove()
*/
        // empty out div.contexts
        container.select('.contexts')
            .selectAll('.context').remove()

        // create new data structure for contexts
        let contexts = [];
        for (let mention of interviews) {
          let re = new RegExp(".{0,50}\\b"+word+"\\b.{0,50}", "gms")
          let matches = fulltext[mention.title].match(re);
          if (matches) {
            for (let match of matches) {
              let wordre = new RegExp("("+word+")", "ms");
              match = match.replace(wordre, "<strong class='highlight'>$&</strong>");
              //trimming partial words from beginning and end
              contexts.push({
                filename: mention.title,
                text: match.substring(match.indexOf(" "), match.lastIndexOf(" ")).trim()
              })
            }
          }
        }

        container.select('.contexts')
            .selectAll('div.context').data(contexts)
            .enter().append('p')
            .attr('class', 'context')
            .html((d) => d.filename + " : " + d.text)
    }

}
