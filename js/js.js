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
          speed: 2000,
          refreshInterval: 5,
          decimals: 2,
  });
  $('.timer3').countTo({
          from: 0,
          to: 40,
          speed: 2000,
          refreshInterval: 3,
  });
  $('.timer4').countTo({
          from: 0,
          to: 3.89,
          speed: 2000,
          refreshInterval: 4,
          decimals: 2,
  });

  var monthly_chart = c3.generate({
      bindto: '#chart',
      data: {
        columns: [
          ['data1', 30, 200, 100, 400, 150, 250],
          ['data2', 50, 20, 10, 40, 15, 25]
        ],
        colors: {
          data2: '#F5DEB3',
          data1: '#593001',
        },
        axes: {
          data2: 'y2'
        },
        types: {
          data2: 'bar'
        }
      },
      axis: {
        y: {
          label: {
            text: 'Y Label',
            position: 'outer-middle'
          },
          tick: {
            format: d3.format("$,") // ADD
          }
        },
        y2: {
          show: true,
          label: {
            text: 'Y2 Label',
            position: 'outer-middle'
          }
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
        title: "Poops Per Day",
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
        title: "Poops by Location",
        label: {
          format: function (value, ratio, id) {
            return d3.format('s')(value);
          }
        }
      }
    });

});
