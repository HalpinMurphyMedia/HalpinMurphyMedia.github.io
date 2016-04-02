// JavaScript Document
 
var number=10; 
 
$(function () {
//----------------------------------------------------------------------------------------------------------------------------------------------------------
  // -- First Chart --
    $('#container').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Shots on Target'
        },
        xAxis: {
            categories: ['Team 1', 'Team 2'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Shots on Target',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: '',
            data: [number, 9]
        }]
    });

// -----------------------------------------------------------------------------------------------------------------------------------------------------------
  // -- Second Chart
  $('#container2').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Goals'
        },

        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Goals',
            colorByPoint: true,
            data: [{
                name: 'Team 1',
                y: 3
            }, {
                name: 'Team 2',
                y: 1,
                sliced: true,
                selected: true
            }]
        }]
  // -- End Container2 --
    });
  
// -------------------------------------------------------------------------------------------------------------------------------------------------
  // -- 3rd Chart --
    $('#container3').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Shots off Target'
        },
        xAxis: {
            categories: ['Team 1', 'Team 2'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Shots off Target',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: '',
            data: [6, 4]
        }]
    });
  
// -----------------------------------------------------------------------------------------------------------------------------------------------------
  // -- Fourth Chart
  $('#container4').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Saves'
        },

        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Saves',
            colorByPoint: true,
            data: [{
                name: 'Team 1',
                y: 3
            }, {
                name: 'Team 2',
                y: 6,
                sliced: true,
                selected: true
            }]
        }]
  // -- End Container4 --
    });
	//----------------------------------------------------------------------------------------------------------------------------------------------------------
  // -- 5th Chart --
    $('#container5').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Incomplete Passes'
        },
        xAxis: {
            categories: ['Team 1', 'Team 2'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Incomplete Passes',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: '',
            data: [17, 9]
        }]
    });

// -----------------------------------------------------------------------------------------------------------------------------------------------------------
  // -- 6th Chart
  $('#container6').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Passing Percentage'
        },

        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Passing',
            colorByPoint: true,
            data: [{
                name: 'Team 1',
                y: 61
            }, {
                name: 'Team 2',
                y: 39,
                sliced: true,
                selected: true
            }]
        }]
  // -- End Container6 --
    });
  
// -------------------------------------------------------------------------------------------------------------------------------------------------
  // -- 7th Chart --
    $('#container7').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Headers'
        },
        xAxis: {
            categories: ['Team 1', 'Team 2'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Headers',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: '',
            data: [11, 7]
        }]
    });
  
// -----------------------------------------------------------------------------------------------------------------------------------------------------
  // -- 8th Chart
  $('#container8').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Interceptions'
        },

        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Interceptions',
            colorByPoint: true,
            data: [{
                name: 'Team 1',
                y: 5
            }, {
                name: 'Team 2',
                y: 3,
                sliced: true,
                selected: true
            }]
        }]
  // -- End Container8 --
    });
	
	//----------------------------------------------------------------------------------------------------------------------------------------------------------
  // -- 9th Chart --
    $('#container9').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Tackles'
        },
        xAxis: {
            categories: ['Team 1', 'Team 2'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Tackles',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: '',
            data: [17, 9]
        }]
    });

// -----------------------------------------------------------------------------------------------------------------------------------------------------------
  // -- 10th Chart
  $('#container10').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Fouls'
        },

        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Fouls',
            colorByPoint: true,
            data: [{
                name: 'Team 1',
                y: 11
            }, {
                name: 'Team 2',
                y: 9,
                sliced: true,
                selected: true
            }]
        }]
  // -- End Container10 --
    });
  
// -------------------------------------------------------------------------------------------------------------------------------------------------
  // -- 11th Chart --
    $('#container11').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Bookings'
        },
        xAxis: {
            categories: ['Team 1', 'Team 2'],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Bookings',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'yellow cards',
            data: [1, 4]
        }]
    });
  
// -----------------------------------------------------------------------------------------------------------------------------------------------------
  // -- 12th Chart
  $('#container12').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Offsides'
        },

        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Offsides',
            colorByPoint: true,
            data: [{
                name: 'Team 1',
                y: 5
            }, {
                name: 'Team 2',
                y: 3,
                sliced: true,
                selected: true
            }]
        }]
  // -- End Container12 --
    });
// --------------------------------------------------------------------------------------------------------------------------------------------------------
  
  // -- End Original Function
});