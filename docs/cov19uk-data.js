var cases_in_uk = echarts.init(document.getElementById('cases-in-uk'));
cases_in_uk.showLoading();

//...

function set_option_for_cases_in_uk(csv_data) {

    var types = csv_data[0].slice(1);
    // ["date", "tested", "negative", "positive in UK", "positive in England"] -> ["tested", "negative", "positive in UK", "positive in England"]
    var values = [];

    for (var i = 1; i < csv_data.length; i++) {
        for (var j = 0; j < csv_data[0].length; j++) {
            if (1 == i)
                values[j] = [];
            values[j][i] = csv_data[i][j];
        }
    }
    var dates = values[0];
    values = values.slice(1);

    console.log(types);
    console.log(values[1]);

    // specify chart configuration item and data
    option = {
        title: {
            text: 'Total'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data: types //['tested', 'negative', 'positive in UK', 'positive in England']
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: dates // time
        }],
        yAxis: [{
            type: 'value'
        }],
        series: [{
            name: types[0],
            type: 'line',
            stack: '',
            areaStyle: {},
            data: values[0]
        }, {
            name: types[1],
            type: 'line',
            stack: '',
            areaStyle: {},
            data: values[1]
        }, {
            name: types[2],
            type: 'line',
            stack: '',
            areaStyle: {},
            data: values[2]
        }, {
            name: types[3],
            type: 'line',

            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: {},
            data: values[3]
        }]
    };

    return option;
}

$.get('https://raw.githubusercontent.com/xshaun/covid-19-uk/master/number-of-cases-in-UK.csv').done(function(csv_string) {
    var csv_array = Papa.parse(csv_string).data;

    var option_for_cases_in_uk = set_option_for_cases_in_uk(csv_array);

    cases_in_uk.hideLoading();
    // use configuration item and data specified to show chart
    cases_in_uk.setOption(option_for_cases_in_uk);
});
