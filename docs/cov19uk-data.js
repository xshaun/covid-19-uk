function set_option_for_cases_in_uk(types, dates, values) {

    // specify chart configuration item and data
    option = {
        title: {
            text: 'total no.'
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
            data: types,
            //['tested', 'negative', 'positive in UK', 'positive in England']
            selected: {
                'tested': false,
                'negative': false,
            }
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
        series: []
    };

    for (var i = 0; i < types.length; i++) {
        option['series'].push({
            name: types[i],
            type: 'line',
            stack: false,
            areaStyle: {},
            data: values[i]
        });
    }
    option['series'][2]['label'] = {
        normal: {
            show: true,
            position: 'top'
        }
    };
    return option;
}

function set_option_for_cases_increase_in_uk(dates, values) {

    types = ['increase in UK', 'increase in England'];
    values = values.slice(2);
    for (var i = 0; i < values.length; i++) {
        for (var j = values[i].length - 1; j >= 0; j--) {
            if (0 == j)
                values[i][j] -= values[i][j];
            else
                values[i][j] -= values[i][j - 1];
        }
    }
    // specify chart configuration item and data
    option = {
        title: {
            text: 'increase no.'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: types
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
            stack: false,
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            data: values[0]
        }, {
            name: types[1],
            type: 'line',
            stack: false,
            data: values[1]
        }]
    };

    return option;
}

function set_option_for_cases_in_england(types, dates, values) {

    // specify chart configuration item and data
    option = {
        title: {
            text: 'total no. (overlay)'
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
            data: types,
            left: 180,
            selected: {
                'Total': false,
            }
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
        series: []
    };

    for (var i = 0; i < types.length; i++) {
        option['series'].push({
            name: types[i],
            type: 'line',
            stack: 'sum',
            areaStyle: {},
            data: values[i]
        });
    }
    // Total
    option['series'][types.length - 1]['stack'] = false;
    option['series'][types.length - 1]['label'] = {
        normal: {
            show: true,
            position: 'top'
        }
    };
    return option;
}

function set_option_for_cases_increase_in_england(types, dates, values) {

    for (var i = 0; i < values.length; i++) {
        for (var j = values[i].length - 1; j >= 0; j--) {
            if (0 == j)
                values[i][j] -= values[i][j];
            else
                values[i][j] -= values[i][j - 1];
        }
    }
    // specify chart configuration item and data
    option = {
        title: {
            text: 'increase no.'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: types,
            left: 150
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
        series: []
    };

    for (var i = 0; i < types.length; i++) {
        option['series'].push({
            name: types[i],
            type: 'line',
            stack: false,
            data: values[i]
        });
    }

    return option;
}
;
var cases_in_uk = echarts.init(document.getElementById('cases-in-uk'));
cases_in_uk.showLoading();

var cases_increase_in_uk = echarts.init(document.getElementById('cases-increase-in-uk'));
cases_increase_in_uk.showLoading();

var cases_in_england = echarts.init(document.getElementById('cases-in-england'));
cases_in_england.showLoading();

var cases_increase_in_england = echarts.init(document.getElementById('cases-increase-in-england'));
cases_increase_in_england.showLoading();

//...

$.get('https://raw.githubusercontent.com/xshaun/covid-19-uk/master/number-of-cases-in-UK.csv').done(function(csv_string) {
    var csv_array = Papa.parse(csv_string).data;

    // ["date", "tested", "negative", "positive in UK", "positive in England"] -> ["tested", "negative", "positive in UK", "positive in England"]
    var types = csv_array[0].slice(1);
    var values = [];
    for (var i = 1; i < csv_array.length; i++) {
        for (var j = 0; j < csv_array[0].length; j++) {
            if (1 == i)
                values[j] = [];
            values[j][i - 1] = csv_array[i][j];
        }
    }
    var dates = values[0];
    //['6 Mar', '7 Mar', '8 Mar']
    values = values.slice(1);
    //[[...tested...], [...negative...], [...positive in UK...], [...positive in England...] ]

    var option_for_cases_in_uk = set_option_for_cases_in_uk(types, dates, values);
    cases_in_uk.hideLoading();
    cases_in_uk.setOption(option_for_cases_in_uk);
    // use configuration item and data specified to show chart

    var option_for_cases_increase_in_uk = set_option_for_cases_increase_in_uk(dates, values);
    cases_increase_in_uk.hideLoading();
    cases_increase_in_uk.setOption(option_for_cases_increase_in_uk);
});

$.get('https://raw.githubusercontent.com/xshaun/covid-19-uk/master/cases-identified-in-England.csv').done(function(csv_string) {
    var csv_array = Papa.parse(csv_string).data;

    // ["East of England", "London", "Midlands",...]
    var types = csv_array[0].slice(1);
    var values = [];
    for (var i = 1; i < csv_array.length; i++) {
        for (var j = 0; j < csv_array[0].length; j++) {
            if (1 == i)
                values[j] = [];
            values[j][i - 1] = csv_array[i][j];
        }
    }
    var dates = values[0];
    //['6 Mar', '7 Mar', '8 Mar']
    values = values.slice(1);
    //[[...tested...], [...negative...], [...positive in UK...], [...positive in England...] ]

    var option_for_cases_in_england = set_option_for_cases_in_england(types, dates, values);
    cases_in_england.hideLoading();
    cases_in_england.setOption(option_for_cases_in_england);

    var option_for_cases_increase_in_england = set_option_for_cases_increase_in_england(types, dates, values);
    cases_increase_in_england.hideLoading();
    cases_increase_in_england.setOption(option_for_cases_increase_in_england);
});
