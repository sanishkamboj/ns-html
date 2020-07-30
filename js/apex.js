

// CIRCLE CHART
$(document).ready(function() {
    var options = {
        chart: {
            height: 280,
            type: 'radialBar',
        },
        colors: ['#DD121F'],
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '70%',
                }
            },
        },
        series: [1954],
        labels: ['Kcal'],
    }
    var chart = new ApexCharts(
        document.querySelector("#apex-circle-chart"),
        options
    );

    chart.render();
});


// CIRCLE CHART
$(document).ready(function() {
    var options = {
        chart: {
            height: 250,
            type: 'radialBar',
        },
        colors: ['#DD121F'],
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '70%',
                }
            },
        },
        series: [50],
        labels: ['Protein'],
    }
    var chart = new ApexCharts(
        document.querySelector("#apex-circle-chart-protein"),
        options
    );

    chart.render();
});



// CIRCLE CHART
$(document).ready(function() {
    var options = {
        chart: {
            height: 250,
            type: 'radialBar',
        },
        colors: ['#DD121F'],
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '70%',
                }
            },
        },
        series: [75],
        labels: ['Carbs'],
    }
    var chart = new ApexCharts(
        document.querySelector("#apex-circle-chart-carbs"),
        options
    );

    chart.render();
});



// CIRCLE CHART
$(document).ready(function() {
    var options = {
        chart: {
            height: 250,
            type: 'radialBar',
        },
        colors: ['#DD121F'],
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '70%',
                }
            },
        },
        series: [65],
        labels: ['Fat'],
    }
    var chart = new ApexCharts(
        document.querySelector("#apex-circle-chart-fat"),
        options
    );

    chart.render();
});
