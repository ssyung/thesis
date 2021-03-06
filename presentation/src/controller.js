import * as d3 from 'd3'
const shuffle = require('shuffle-array')

export default class Controller {

    static displayData(d, data, fulltext) {
        var word = d.word,
            count = d.count,
            interviews;

        interviews = d.mentions;
        var container = d3.select('div.selected')

        container.select('.word')
            .html(word.charAt(0).toUpperCase() + word.slice(1))
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
          let re = new RegExp(".{0,50}\\b"+word+"\\b.{0,50}", "gims")
          let matches = fulltext[mention.title].match(re);
          if (matches) {
            for (let match of matches) {
              let wordre = new RegExp("("+word+")", "ims");
              match = match.replace(wordre, "<strong class='highlight'>$&</strong>");
              let name = mention.title.replace('_timecode.txt', '');
              let name_parts = name.split("_", 2);
              name = name_parts[1] + " " + name_parts[0].substr(0, 1);

              //trimming partial words from beginning and end
              contexts.push({
                name: name,
                text: match.substring(match.indexOf(" "), match.lastIndexOf(" ")).trim()
              })
            }
          }
        }
        shuffle(contexts);
        container.select('.contexts')
            .selectAll('div.context').data(contexts)
            .enter().append('p')
            .attr('class', 'context')
            .html((d) => "<em>" + d.name + "</em> : " + d.text)
    }

}
