google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Effort', 'Amount given'],
        ['', 20],
        ['Estoque', 80]
    ]);

    var options = {
        pieHole: 0.5,
        pieSliceTextStyle: {
            color: 'black',
        },
        legend: 'none',
        backgroundColor: 'transparent'
    };

    var chart = new google.visualization.PieChart(document.getElementById('donut_single'));
    chart.draw(data, options);
}