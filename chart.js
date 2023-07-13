
// Fetch data for chart 1
fetch('https://api.openweathermap.org/data/2.5/forecast?q=London&appid=7b42b77fd1ac138b51e84f60d59f1d8f')
    .then((response) => response.json())
    .then((data) => {
        createChart1(data);
    })
    .catch((error) => {
        console.log("Error:", error);
    });

// Create chart 1
function createChart1(data) {
    const temp = [];
    for (eachData of data.list) {
        temp.push(eachData.main.temp)
    }
    Highcharts.chart('chart1', {
        chart: {
            backgroundColor: 'darkslategrey',
            type: 'line'
        },
        title: {
            text: 'Temperature in London',
            style:{color:'white'},
        },
        xAxis: {
            categories: ['1', '2', '3', '4', '5'],
            labels: {
                style: {
                    color: 'white'
                }
            }
        },
        yAxis: {
            title: {
                text: 'Temperature (°C)',
                style: {
                    color: 'white'
                }
            },
            labels: {
                style: {
                    color: 'white'
                }
            }
        },
        series: [{
            name: 'Temperature',
            data: temp,
            color: 'white'
        }],
        exporting: {
            enabled: true,
            buttons: {
                contextButton: {
                    menuItems: ['viewFullscreen', 'separator', 'downloadPNG', 'downloadJPEG', 'downloadPDF', 'downloadCSV', 'downloadXLS', 'separator', 'printChart']
                }
            },
            filename: 'Temperature in London',
            type: 'image/png'
        }
    });
}

// Fetch data for chart 2
fetch('https://api.openweathermap.org/data/2.5/forecast?q=America&appid=7b42b77fd1ac138b51e84f60d59f1d8f')
    .then((response) => response.json())
    .then((data) => {
        createChart2(data);
    })
    .catch((error) => {
        console.log("Error:", error);
    });

// Create chart 2
function createChart2(data) {
    const temp_min = [];
    const temp_max = [];
    for (eachData of data.list) {
        temp_min.push(eachData.main.temp_min)
        temp_max.push(eachData.main.temp_max)
    }
    Highcharts.chart('chart2', {
        chart: {
            backgroundColor: 'darkslategrey',
            type: 'column'
        },
        title: {
            text: 'Min and Max Temperature in America',
            style:{color:'white'},
        },
        xAxis: {
            categories: ['1', '2', '3', '4', '5'],
            labels: {
                style: {
                    color: 'white'
                }
            }
        },
        yAxis: {
            title: {
                text: 'Temperature (°C)',
                style: {
                    color: 'white'
                }
            },
            labels: {
                style: {
                    color: 'white'
                }
            }
        },
        series: [{
            name: 'Min Temperature',
            data: temp_min,
            color: 'green'
        }, {
            name: 'Max Temperature',
            data: temp_max,
            color: 'pink'
        }],
        exporting: {
           enabled: true,
            buttons: {
                contextButton: {
                    menuItems: ['viewFullscreen', 'separator', 'downloadPNG', 'downloadJPEG', 'downloadPDF', 'downloadCSV', 'downloadXLS', 'separator', 'printChart']
                }
            },
            filename: 'Min and Max Temperature in America',
            type: 'image/png'
        }
    });
}

// Fetch data for chart 3
fetch('https://api.openweathermap.org/data/2.5/forecast?q=china&appid=7b42b77fd1ac138b51e84f60d59f1d8f')
    .then((response) => response.json())
    .then((data) => {
        createChart3(data);
    })
    .catch((error) => {
        console.log("Error:", error);
    });

// Create chart 3
function createChart3(data) {
    const pressure = [];
    const sea_level = [];
    const humidity = [];
    for (eachData of data.list) {
        pressure.push(eachData.main.pressure)
        sea_level.push(eachData.main.sea_level)
        humidity.push(eachData.main.humidity)
    }
    Highcharts.chart('chart3', {
        chart: {
            backgroundColor: 'darkslategrey',
            type: 'area'
        },
        title: {
            text: 'Pressure, Sea Level and Humidity in China',
            style:{color:'white'},
        },
        xAxis: {
            categories: ['1', '2', '3', '4', '5'],
            labels: {
                style: {
                    color: 'white'
                }
            }
        },
        yAxis: [{
            title: {
                text: 'Pressure (hPa)',
                style: {
                    color: 'white'
                }
            },
            labels: {
                style: {
                    color: 'white'
                }
            }
        }, {
            title: {
                text: 'Sea Level (m)',
                style: {
                    color: 'white'
                }
            },
            labels: {
                style: {
                    color: 'white'
                }
            },
            opposite: true
        }, {
            title: {
                text: 'Humidity (%)',
                style: {
                    color: 'white'
                }
            },
            labels: {
                style: {
                    color: 'white'
                }
            },
            opposite: true
        }],
        series: [{
            name: 'Pressure',
            data: pressure,
            yAxis: 0,
            color: 'black'
        }, {
            name: 'Sea Level',
            data: sea_level,
            yAxis: 1,
            color: 'white'
        }, {
            name: 'Humidity',
            data: humidity,
            yAxis: 2,
            color: 'gray'
        }],
        exporting: {
            enabled: true,
            buttons: {
                contextButton: {
                    menuItems: ['viewFullscreen', 'separator', 'downloadPNG', 'downloadJPEG', 'downloadPDF', 'downloadCSV', 'downloadXLS', 'separator', 'printChart']
                }
            },
            filename: 'Pressure, Sea Level and Humidity in China',
            type: 'image/png'
        }
    });
}

// Fetch data for chart 4
fetch('https://api.openweathermap.org/data/2.5/forecast?q=Paris&appid=7b42b77fd1ac138b51e84f60d59f1d8f')
    .then((response) => response.json())
    .then((data) => {
        createChart4(data);
    })
    .catch((error) => {
        console.log("Error:", error);
    });

// Create chart 4
function createChart4(data) {
    const wind_speed = [];
    const wind_deg = [];
    for (eachData of data.list) {
        wind_speed.push(eachData.wind.speed)
        wind_deg.push(eachData.wind.deg)
    }
    Highcharts.chart('chart4', {
        chart: {
            backgroundColor: 'darkslategrey',
            type: 'scatter'
        },
        title: {
            text: 'Wind Speed and Direction in Paris',
            style:{color:'white'},
        },
        xAxis: {
            title: {
                text: 'Wind Direction (°)',
                style: {
                    color: 'white'
                }
            },
            labels: {
                style: {
                    color: 'white'
                }
            }
        },
        yAxis: {
            title: {
                text: 'Wind Speed (m/s)',
                style: {
                    color: 'white'
                }
            },
            labels: {
                style: {
                    color: 'white'
                }
            }
        },
        series: [{
            name: 'Wind',
            data: wind_deg.map((value, index) => [value, wind_speed[index]]),
            color: 'white'
        }],
        exporting: {
            enabled: true,
            buttons: {
                contextButton:{
menuItems: ['viewFullscreen', 'separator', 'downloadPNG', 'downloadJPEG', 'downloadPDF', 'downloadCSV', 'downloadXLS', 'separator', 'printChart']
}
},
filename: 'Wind Speed and Direction in Paris',
type: 'image/png'
}
});
}



    // Define the API key for the weather API
const apiKey = '7b42b77fd1ac138b51e84f60d59f1d8f';

// Define the URL pattern for the weather map tiles
const mapUrl = `https://tile.openweathermap.org/map/precipitation_new/10/523/395.png?appid=7b42b77fd1ac138b51e84f60d59f1d8f`;

// Define the zoom level, tile coordinates, and container element for the map
const zoom = 10;
const x = 523;
const y = 395;
const container = document.getElementById('chart-container');

// Construct the URL for the weather map
const url = mapUrl.replace('{zoom}', zoom).replace('{x}', x).replace('{y}', y);

// Create the Highcharts chart
Highcharts.chart('chart-container', {
  chart: {
    type: 'image'
  },
  title: {
    text: 'Weather Map'
  },
  xAxis: {
    min: 0,
    max: 1024
  },
  yAxis: {
    min: 0,
    max: 1024,
    reversed: true
  },
  series: [{
    type: 'image',
    data: [{
      x: 0,
      y: 0,
      width: 1024,
      height: 1024,
      href: url
    }]
  }]
});
    