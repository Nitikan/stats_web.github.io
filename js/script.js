google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Name', 'Budget(Million Baht)'],
  ['A01', 108094],
  ['A02', 5200],
  ['A03', 9766],
  ['A04', 32142],
  ['A05', 765],
  ['A06', 61844],
  ['A07', 2300],
  ['A08', 600],
  ['A09', 0],
  ['A10', 0],
  ['A11', 0],
  ['A12', 0],
  ['A13', 0],
  ['A14', 0],
  ['A15', 2700],
  ['A16', 66000],
  ['A17', 0],
  ['A18', 12800],
  ['A19', 120000],
  ['A20', 0],
  ['A21', 0],
  ['A22', 0],
  ['A23', 0],
  ['A24', 0],
  ['A25', 0]
]);

  // Optional; add a title and set the width and height of the chart
  var options = {'width':800, 'height':400};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}