google.charts.load('current', {
    'packages': ['corechart']
  });
  google.charts.setOnLoadCallback(drawChart);
  
  function drawChart() {
    $.get("./data/A1.csv", function (csvString) {
      var arrayData = $.csv.toArrays(csvString, {
        onParseValue: $.csv.hooks.castToScalar
      });
      var data = google.visualization.arrayToDataTable(arrayData);
      var view = new google.visualization.DataView(data)
      view.setColumns([0, 1])
      var options = {
        weight: 900,
        height: 500,
        title: 'เงินเบี้ยหวัด บำเหน็จ บำนาญ',
        legend: {
          position: 'bottom'
        },
        hAxis: {
          title: "Year",
          format: 'year '
        },
        vAxis: {
          title: "Budget(Million Baht)",
          viewWindowMode: 'explicit',
          viewWindow: {
            min: 0
          }
        }
      };
      var chart = new google.visualization.LineChart(document.getElementById('DashBoard-GDP-Factor'));
      chart.draw(view, options);
    });
  
    document.getElementById('Greece-Factor').addEventListener('click', function () {
      $.get("./data/A4.csv", function (csvString) {
        var arrayData = $.csv.toArrays(csvString, {
          onParseValue: $.csv.hooks.castToScalar
        });
        var data = google.visualization.arrayToDataTable(arrayData);
        var view = new google.visualization.DataView(data)
        view.setColumns([0, 1])
        var options = {
          weight: 900,
          height: 500,
          title: 'เงินสำรอง เงินสมทบ และเงินชดเชยของข้าราชการ',
          legend: {
            position: 'bottom'
          },
          hAxis: {
            title: "Year",
            format: 'year '
          },
          vAxis: {
            title: "Budget(Million Baht)",
            viewWindowMode: 'explicit',
            viewWindow: {
              min: 0
            }
          }
        };
        var chart = new google.visualization.LineChart(document.getElementById('DashBoard-GDP-Factor'));
        chart.draw(view, options);
      });
    })
  
    document.getElementById('Bulgaria-Factor').addEventListener('click', function () {
      $.get("./data/A1.csv", function (csvString) {
        var arrayData = $.csv.toArrays(csvString, {
          onParseValue: $.csv.hooks.castToScalar
        });
        var data = google.visualization.arrayToDataTable(arrayData);
        var view = new google.visualization.DataView(data)
        view.setColumns([0, 1])
        var options = {
          weight: 900,
          height: 500,
          title: 'เงินเบี้ยหวัด บำเหน็จ บำนาญ',
          legend: {
            position: 'bottom'
          },
          hAxis: {
            title: "Year",
            format: 'year '
          },
          vAxis: {
            title: "Budget(Million Baht)",
            viewWindowMode: 'explicit',
            viewWindow: {
              min: 0
            }
          }
        };
        var chart = new google.visualization.LineChart(document.getElementById('DashBoard-GDP-Factor'));
        chart.draw(view, options);
      });
    })
  
    document.getElementById('Romania-Factor').addEventListener('click', function () {
      $.get("./data/A16.csv", function (csvString) {
        var arrayData = $.csv.toArrays(csvString, {
          onParseValue: $.csv.hooks.castToScalar
        });
        var data = google.visualization.arrayToDataTable(arrayData);
        var view = new google.visualization.DataView(data)
        view.setColumns([0, 1])
        var options = {
          weight: 900,
          height: 500,
          title: 'เงินสำรองจ่ายเพื่อกรณีฉุกเฉินหรือจำเป็น',
          legend: {
            position: 'bottom'
          },
          hAxis: {
            title: "Year",
            format: 'year '
          },
          vAxis: {
            title: "Budget(Million Baht)",
            viewWindowMode: 'explicit',
            viewWindow: {
              min: 0
            }
          }
        };
        var chart = new google.visualization.LineChart(document.getElementById('DashBoard-GDP-Factor'));
        chart.draw(view, options);
      });
    })
  
    document.getElementById('Poland-Factor').addEventListener('click', function(){
      $.get("./data/A17.csv", function(csvString) {
          var arrayData = $.csv.toArrays(csvString, {onParseValue: $.csv.hooks.castToScalar});          
          var data = google.visualization.arrayToDataTable(arrayData);
          console.log(data);
          var view = new google.visualization.DataView(data)
          view.setColumns([0, 1, 2, 3, 4])
          var options = {
            weight: 900,
            height: 500,
            title: 'รายการงบกลางเปรียบเทียบกับงบกลางโดยรวม',
            legend: { position: 'bottom' },
            hAxis: {
              title : "Year",
              format : 'year '
            },
            vAxis: { 
              title: "Budget(Million Baht)", 
              viewWindowMode:'explicit',
              viewWindow:{
              min:0
            }}
          };
          var chart = new google.visualization.LineChart(document.getElementById('DashBoard-GDP-Factor'));
          chart.draw(view, options);
    });})
  
  }