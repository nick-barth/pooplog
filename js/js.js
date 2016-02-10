//function for counting numbers, thanks stackoverflow
(function($) {
    $.fn.countTo = function(options) {
        // merge the default plugin settings with the custom options
        options = $.extend({}, $.fn.countTo.defaults, options || {});

        // how many times to update the value, and how much to increment the value on each update
        var loops = Math.ceil(options.speed / options.refreshInterval),
            increment = (options.to - options.from) / loops;

        return $(this).each(function() {
            var _this = this,
                loopCount = 0,
                value = options.from,
                interval = setInterval(updateTimer, options.refreshInterval);

            function updateTimer() {
                value += increment;
                loopCount++;
                $(_this).html(value.toFixed(options.decimals));

                if (typeof(options.onUpdate) == 'function') {
                    options.onUpdate.call(_this, value);
                }

                if (loopCount >= loops) {
                    clearInterval(interval);
                    value = options.to;

                    if (typeof(options.onComplete) == 'function') {
                        options.onComplete.call(_this, value);
                    }
                }
            }
        });
    };

    $.fn.countTo.defaults = {
        from: 0,  // the number the element should start at
        to: 100,  // the number the element should end at
        speed: 1000,  // how long it should take to count between the target numbers
        refreshInterval: 100,  // how often the element should be updated
        decimals: 0,  // the number of decimal places to show
        onUpdate: null,  // callback method for every time the element is updated,
        onComplete: null,  // callback method for when the element finishes updating
    };
})(jQuery);

$(document).ready(function() {

  $('.timer').countTo({
          from: 0,
          to: 515,
          speed: 2000,
          refreshInterval: 4,
  });
  $('.timer2').countTo({
          from: 0,
          to: 1.41,
          speed: 2600,
          refreshInterval: 5,
          decimals: 2,
  });
  $('.timer3').countTo({
          from: 0,
          to: 40,
          speed: 2300,
          refreshInterval: 3,
  });
  $('.timer4').countTo({
          from: 0,
          to: 3.89,
          speed: 2700,
          refreshInterval: 4,
          decimals: 2,
  });

  var monthly_chart = c3.generate({
      bindto: '#monthly_chart',
      data: {
        columns: [
          ['data1', 53, 48, 48, 49, 38, 42, 37, 35, 45, 39, 41, 40],
          ['data2', 3.6, 3.4, 3.9, 3.8, 3.5, 3.8, 3.9, 4.1, 4, 4.4, 3.8, 3.9]
        ],
        colors: {
          data2: '#814F16',
          data1: '#AD8E3B',
        },
        axes: {
          data2: 'y2',
        },
        types: {
          data1: 'bar'
        },
        names: {
          data1: 'Poops Per Month',
          data2: 'Average Consistancy',
        }
      },
      axis: {
        y: {
          label: {
            text: 'Total Poops',
            position: 'outer-middle'
          },
        },
        y2: {
          show: true,
          label: {
            text: 'Average Consitancy',
            position: 'outer-middle'
          }
        },
        x: {
            type: 'category',
            categories: ['January', 'February','March','April','May','June','July','August','Steptember','October','November','December']
          }
        }
  });
  var per_day_pie = c3.generate({
    bindto: '#pie2',
    data: {
        columns: [
            ['0 Poops', 24],
            ['1 Poop', 207],
            ['2 Poops', 102],
            ['3 Poops', 20],
            ['4 Poops', 11],
        ],
        type : 'donut',
    },
    color: {
      pattern: ['#594101', '#AD8E3B', '#814F16','#477187', '#684F91', '#AA9D39']
    },
    donut: {
        title: "1b. Poops Per Day",
        label: {
          format: function (value, ratio, id) {
            return d3.format('s')(value);
          }
        }
      }
    });

  var location_pie = c3.generate({
    bindto: '#pie1',
    data: {
        columns: [
            ['Work', 254],
            ['Home', 204],
            ['Other', 57],
        ],
        type : 'donut',
        onclick: function (d, i) {
          if(d.id === 'Other')
          {
            location_pie.load({
                columns: [
                    ['Wegmans', 8],
                    ['Litchfield', 5],
                    ['Pho Dollar', 4],
                    ['Cousins', 3],
                    ['Parents', 3]
                ],
                unload: ['Other', 'Home', 'Work'],
            });

            setTimeout(function () {
              location_pie.load({
                columns: [
                    ['Work', 254],
                    ['Home', 204],
                    ['Other', 57],
                ],
                  unload: ['Wegmans', 'Litchfield', 'Pho Dollar', 'Cousins', 'Parents'],
              });
            }, 15000);
          }
         },
    },
    color: {
      pattern: ['#594101', '#AD8E3B', '#814F16','#477187', '#684F91', '#AA9D39', ]
    },
    donut: {
        title: "1a. Poops by Location",
        label: {
          format: function (value, ratio, id) {
            return d3.format('s')(value);
          }
        }
      }
    });

    $( ".month-day" ).change(function() {
      if ($('.month-day').val() == 'day'){
         monthly_chart.load({
           columns:[
               ['data3', 79, 77, 71, 89, 72, 64, 63],
               ['data4', 3.7, 3.8, 3.9, 3.7, 3.8, 3.8, 4.1]
           ],
           axes: {
             data4: 'y2',
           },
           types: {
             data3: 'bar',
           },
           colors: {
             data4: '#814F16',
             data3: '#AD8E3B',
           },
           categories :  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],

           unload: ['data1', 'data2']
         });
        monthly_chart.axis.labels({y2: 'Poops Per Day'});
        monthly_chart.data.names({data3: 'Poops Per Day', data4: 'Average Consistancy'});
        $('.2a').hide();
        $('.2b').show();


      } else {
        monthly_chart.load({
          columns: [
            ['data1', 53, 48, 48, 49, 38, 42, 37, 35, 45, 39, 41, 40],
            ['data2', 3.6, 3.4, 3.9, 3.8, 3.5, 3.8, 3.9, 4.1, 4, 4.4, 3.8, 3.9]
          ],
          colors: {
            data2: '#814F16',
            data1: '#AD8E3B',
          },
          axes: {
            data2: 'y2',
          },
          types: {
            data1: 'bar'
          },
          names: {
            data1: 'Poops Per Month',
            data2: 'Average Consistancy',
          },
          categories: ['January', 'February','March','April','May','June','July','August','Steptember','October','November','December'],
          unload:['data3', 'data4']
        });
        monthly_chart.axis.labels({y2: 'Poops Per Month'});
        monthly_chart.data.names({data1: 'Poops Per Month', data2: 'Average Consistancy'});
        $('.2b').hide();
        $('.2a').show();
      }
    });
// RADAR CHART
var w = 425,
	h = 425;

//Data
var d = [
		  [
      {axis:"0",value:4},
      {axis:"23",value:10},
      {axis:"22",value:16},
      {axis:"21",value:16},
      {axis:"20",value:24},
      {axis:"19",value:18},
      {axis:"18",value:6},
      {axis:"17",value:10},
      {axis:"16",value:19},
      {axis:"15",value:25},
      {axis:"14",value:31},
      {axis:"13",value:40},
      {axis:"12",value:44},
      {axis:"11",value:72},
      {axis:"10",value:93},
      {axis:"9",value:63},
      {axis:"8",value:10},
      {axis:"7",value:0},
      {axis:"6",value:2},
      {axis:"5",value:0},
      {axis:"4",value:2},
      {axis:"3",value:0},
      {axis:"2",value:1},
      {axis:"1",value:8},
		  ]
		];

//Options for the Radar chart, other than default
var mycfg = {
  w: w,
  h: h,
  maxValue: 100,
  levels: 5,
  ExtraWidthX: 300,
  color: function() {}
}

//Call function to draw the Radar chart
//Will expect that data is in %'s
RadarChart.draw("#hours-radar", d, mycfg);

////////////////////////////////////////////
/////////// Initiate legend ////////////////
////////////////////////////////////////////

var svg = d3.select('#body')
	.selectAll('svg')
	.append('svg')
	.attr("width", w+300)
	.attr("height", h)

//Create the title for the legend
var text = svg.append("text")
	.attr("class", "title")
	.attr('transform', 'translate(90,0)')
	.attr("x", w - 70)
	.attr("y", 10)
	.attr("font-size", "12px")
	.attr("fill", "#404040")
	.text("Poops per hour of the day");

//Initiate Legend
var legend = svg.append("g")
	.attr("class", "legend")
	.attr("height", 100)
	.attr("width", 200)
	.attr('transform', 'translate(90,20)')
	;
	//Create colour squares
	legend.selectAll('rect')
	  .data(LegendOptions)
	  .enter()
	  .append("rect")
	  .attr("x", w - 65)
	  .attr("y", function(d, i){ return i * 20;})
	  .attr("width", 10)
	  .attr("height", 10)
	  .style("fill", function(d, i){ return colorscale(i);})
	  ;
	//Create text next to squares
	legend.selectAll('text')
	  .data(LegendOptions)
	  .enter()
	  .append("text")
	  .attr("x", w - 52)
	  .attr("y", function(d, i){ return i * 20 + 9;})
	  .attr("font-size", "11px")
	  .attr("fill", "#737373")
	  .text(function(d) { return d; })
	  ;



});
