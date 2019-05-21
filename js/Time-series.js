google.charts.load('current', {
    'packages': ['corechart']
  });
  google.charts.setOnLoadCallback(drawChart);
  
  function drawChart() {
    $.get("./data/times_series_data.csv", function (csvString) {
      var arrayData = $.csv.toArrays(csvString, {
        onParseValue: $.csv.hooks.castToScalar
      });
      var data = google.visualization.arrayToDataTable(arrayData);
      console.log(data);
      var view = new google.visualization.DataView(data)
      var options = {
        weight: 900,
        height: 500,
        title: 'Time Series Of Expenditure Central',
        legend: {
          position: 'bottom'
        },
        hAxis: {
          title: "Date",
          format: 'Date '
        },
        vAxis: {
          title: "Time Series Of Expenditure Central (MillionBaht)",
          viewWindowMode: 'explicit',
          viewWindow: {
            min: 0
          }
        }
      };
      var chart = new google.visualization.LineChart(document.getElementById('DashBoard-Time-Series'));
      chart.draw(view, options);
    });
  

  }