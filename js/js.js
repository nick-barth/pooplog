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
    from: 0, // the number the element should start at
    to: 100, // the number the element should end at
    speed: 1000, // how long it should take to count between the target numbers
    refreshInterval: 100, // how often the element should be updated
    decimals: 0, // the number of decimal places to show
    onUpdate: null, // callback method for every time the element is updated,
    onComplete: null, // callback method for when the element finishes updating
  };
})(jQuery);

//maybe add heatmap later?
function initMap() {
  var myLatLng = {
    lat: 42.886386,
    lng: -78.878176
  };

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: {
      lat: 42.892424,
      lng: -78.871549
    },
    map: map,
    title: 'Town Ballroom',
    icon: 'favicon.ico'
  });
  var marker2 = new google.maps.Marker({
    position: {
      lat: 42.915547,
      lng: -78.889803
    },
    map: map,
    title: 'Pho Dollar',
    icon: 'favicon.ico'
  });
  var marker3 = new google.maps.Marker({
    position: {
      lat: 42.938835,
      lng: -78.882346
    },
    map: map,
    title: 'Wegmans',
    icon: 'favicon.ico'
  });
  var marker4 = new google.maps.Marker({
    position: {
      lat: 42.912071,
      lng: -78.876872
    },
    map: map,
    title: 'Thirsy Buffalo',
    icon: 'favicon.ico'
  });
  var marker5 = new google.maps.Marker({
    position: {
      lat: 42.894570,
      lng: -78.868439
    },
    map: map,
    title: 'Work',
    icon: 'favicon.ico'
  });
  var marker6 = new google.maps.Marker({
    position: {
      lat: 42.964949,
      lng: -78.772100
    },
    map: map,
    title: 'Parents',
    icon: 'favicon.ico'
  });
  var marker7 = new google.maps.Marker({
    position: {
      lat: 42.911461,
      lng: -78.877383
    },
    map: map,
    title: 'Milkies',
    icon: 'favicon.ico'
  });
  var marker8 = new google.maps.Marker({
    position: {
      lat: 40.761490,
      lng: -73.977632
    },
    map: map,
    title: 'MoMA',
    icon: 'favicon.ico'
  });
  var marker9 = new google.maps.Marker({
    position: {
      lat: 43.652580,
      lng: -79.398615
    },
    map: map,
    title: 'Chinatown Toronto',
    icon: 'favicon.ico'
  });
  var marker10 = new google.maps.Marker({
    position: {
      lat: 41.942873,
      lng: -87.677510
    },
    map: map,
    title: 'Chicago',
    icon: 'favicon.ico'
  });
  var marker11 = new google.maps.Marker({
    position: {
      lat: 40.437273,
      lng: -79.980915
    },
    map: map,
    title: 'Pittsburgh',
    icon: 'favicon.ico'
  });
  var marker12 = new google.maps.Marker({
    position: {
      lat: 33.466140,
      lng: -79.099388
    },
    map: map,
    title: 'Litchfield Beach',
    icon: 'favicon.ico'
  });
  var marker13 = new google.maps.Marker({
    position: {
      lat: 42.923203,
      lng: -78.876828
    },
    map: map,
    title: 'Cafe Aroma',
    icon: 'favicon.ico'
  });
  var marker14 = new google.maps.Marker({
    position: {
      lat: 42.276178,
      lng: -78.670873
    },
    map: map,
    title: 'Madigans',
    icon: 'favicon.ico'
  });
  var marker15 = new google.maps.Marker({
    position: {
      lat: 42.827938,
      lng: -78.696278
    },
    map: map,
    title: 'Columns',
    icon: 'favicon.ico'
  });
  var marker16 = new google.maps.Marker({
    position: {
      lat: 40.757283,
      lng: -73.965424
    },
    map: map,
    title: 'NYC Airbnb',
    icon: 'favicon.ico'
  });
  var marker17 = new google.maps.Marker({
    position: {
      lat: 42.894987,
      lng: -78.875933
    },
    map: map,
    title: 'Buffalo Club',
    icon: 'favicon.ico'
  });
  var marker17 = new google.maps.Marker({
    position: {
      lat: 42.903345,
      lng: -78.873207
    },
    map: map,
    title: 'CTG',
    icon: 'favicon.ico'
  });
  var marker17 = new google.maps.Marker({
    position: {
      lat: 43.021918,
      lng: -78.687792
    },
    map: map,
    title: 'Cousins',
    icon: 'favicon.ico'
  });
}

function UncheckAll() {
  var w = document.getElementsByTagName('input');
  for (var i = 0; i < w.length; i++) {
    if (w[i].type == 'checkbox' && w[i].value != 'total') {
      w[i].checked = false;
    }
  }
}

$(document).ready(function() {

  //timers
  UncheckAll();
  $(":checkbox[value=total]").prop("checked", "true");
  $(".month-day").val("month");

  $('.timer').countTo({
    from: 0,
    to: 515,
    speed: 1000,
    refreshInterval: 4,
  });
  $('.timer2').countTo({
    from: 0,
    to: 1.41,
    speed: 1600,
    refreshInterval: 5,
    decimals: 2,
  });
  $('.timer3').countTo({
    from: 0,
    to: 40,
    speed: 1300,
    refreshInterval: 3,
  });
  $('.timer4').countTo({
    from: 0,
    to: 3.89,
    speed: 1700,
    refreshInterval: 4,
    decimals: 2,
  });

  //monthly chart initialization
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
        categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Steptember', 'October', 'November', 'December']
      }
    }
  });

  //per day initialisation
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
      type: 'pie',
    },
    color: {
      pattern: ['#594101', '#AD8E3B', '#814F16', '#477187', '#684F91', '#AA9D39']
    },
    pie: {
      title: "1b. Poops Per Day",
      label: {
        format: function(value, ratio, id) {
          return d3.format('s')(value);
        },
        threshold: 0
      }
    }
  });
  // location pie here!!!
  var location_pie = c3.generate({
    bindto: '#pie1',
    data: {
      columns: [
        ['Work', 254],
        ['Home', 204],
        ['Other', 57],
      ],
      type: 'pie',
      onclick: function(d, i) {
        if (d.id === 'Other') {
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

          setTimeout(function() {
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
      pattern: ['#594101', '#AD8E3B', '#814F16', '#477187', '#684F91', '#AA9D39', ]
    },
    pie: {
      title: "1a. Poops by Location",
      label: {
        format: function(value, ratio, id) {
          return d3.format('s')(value);
        }
      }
    }
  });

  // month day dropdown change function

  $(".month-day").change(function() {
    if ($('.month-day').val() == 'day') {
      monthly_chart.load({
        columns: [
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
        categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],

        unload: ['data1', 'data2']
      });
      monthly_chart.axis.labels({
        y2: 'Average Consistancy'
      });
      monthly_chart.data.names({
        data3: 'Poops Per Day',
        data4: 'Average Consistancy'
      });
      $('.2a').hide();
      $('.2b').show();

      // ELSE MONTH BABY
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
        categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Steptember', 'October', 'November', 'December'],
        unload: ['data3', 'data4']
      });
      monthly_chart.axis.labels({
        y2: 'Average Consistancy'
      });
      monthly_chart.data.names({
        data1: 'Poops Per Month',
        data2: 'Average Consistancy'
      });
      $('.2b').hide();
      $('.2a').show();
    }
  });
 //checkbox change function

 //TODO: figure out what to do with nothing clicked? Leave it blank?
  $(".checkbox").change(function() {

    if (this.value == 'weekday') {
      if (this.checked) {
        timebar.load({
          columns: [
            ['data2', 3, 4, 1, 0, 1, 0, 1, 0, 9, 61, 86, 53, 23, 28, 15, 17, 12, 6, 2, 13, 20, 11, 14, 7]
          ],
        });
      } else {
        timebar.unload({
          ids: ['data2']
        });
      }
    } else if (this.value == 'weekend') {
      if (this.checked) {
        timebar.load({
          columns: [
            ['data3', 1, 4, 0, 0, 1, 0, 1, 0, 1, 2, 7, 19, 21, 12, 16, 8, 7, 4, 4, 5, 4, 5, 2, 3]
          ],
        });
      } else {
        timebar.unload({
          ids: ['data3']
        });
      }
    } else if (this.value == 'total') {
      if (this.checked) {
        timebar.load({
          columns: [
            ['data1', 4, 8, 1, 0, 2, 0, 2, 0, 10, 63, 93, 72, 44, 40, 31, 25, 19, 10, 6, 18, 24, 16, 16, 10]
          ],
        });
      } else {
        timebar.unload({
          ids: ['data1']
        });
      }
    }
  });

//woahhhh time bar graph here, i supposse its actually a histogram.
  var timebar = c3.generate({
    bindto: '#timebar',
    data: {
      x: 'x',
      columns: [
        ['x', '12AM', '1AM', '2AM', '3AM', '4AM', '5AM', '6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM', '11PM'],
        ['data1', 4, 8, 1, 0, 2, 0, 2, 0, 10, 63, 93, 72, 44, 40, 31, 25, 19, 10, 6, 18, 24, 16, 16, 10],
      ],
      type: 'bar',
      names: {
        data1: 'Total',
        data2: 'Weekdays',
        data3: 'Weekends'
      },
      colors: {
        data1: '#814F16',
        data2: '#AD8E3B',
        data3: '#594101'
      },
    },
    axis: {
      x: {
        label: {
          text: 'Time, by Hour',
          position: 'outer-left'
        },
        type: 'categorized',
        tick: {
          culling: false
        },
      },
      y: {
        label: {
          text: 'Total Poops',
          position: 'outer-center'
        }
      }
    }
  });
});
