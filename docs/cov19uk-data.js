function _l(a) {
    return a.length - 1;
}
function _t(a, s=-1) {
    return (a instanceof Array && s < 0) ? a[_l(a) + 1 + s] : null;
}
function _id(e) {
    return document.getElementById(e);
}
function _idv(e, v) {
    _id(e).innerHTML = v;
    return this;
}

function _pcsv(c, d=1) {
    const r = RegExp(/^\s*-?(\d*\.?\d+|\d+\.?\d*)(e[-+]?\d+)?\s*$/i);
    var t = []
      , v = [];
    if ("string" == typeof c) {
        s = c.split(/\r?\n/);
        if (s instanceof Array) {
            var m = 0;
            for (var i = 0; i < d && i < s.length; i++) {
                t[i] = s[i].split(/\s*,\s*/);
                m = t[i].length < m ? m : t[i].length;
            }
            for (var i = 0; i < t.length; i++)
                while (m - t[i].length > 0)
                    t[t[i].length] = '';
            for (var i = 0; i < m; i++)
                v[i] = [];
            for (var i = d; i < s.length; i++) {
                w = s[i].split(/\s*,\s*/).map(x=>r.test(x) ? parseFloat(x) : x);
                while (m - w.length > 0)
                    w[w.length] = '';
                for (var j = 0; j < w.length; j++) {
                    v[j][v[j].length] = w[j];
                }
            }
            return [t, v];
        }
        return [null, null];
    }
    return [null, null];
}

function _ir(a, b) {
    return (0 == b ? 0 : ((a - b) / b * 100).toFixed(1)) + "%";
}
function _ir_v(a, s=0) {
    var l = _l(a);
    return (l < s + 1) ? 0 : _ir(a[l - s], a[l - s - 1]);
}
function _ir_a(a, s=0) {
    var l = _l(a);
    return (l < s + 2) ? 0 : _ir((a[l - s] - a[l - s - 1]), (a[l - s - 1] - a[l - s - 2]));
}

function _init(types, dates, t='') {
    option = {
        title: {
            text: t,
            left: 'center',
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
            top: '10%',
            //            type: 'scroll',
            //            orient: 'horizontal'
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            },
            bottom: 0
        },
        grid: {
            top: '25%',
            left: '3%',
            right: '3%',
            bottom: '10%',
            containLabel: true,
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

    return option;
}

function set_option_for_total_cases_in_uk(types, dates, values) {
    option = _init(types, dates, 'Total Cases in UK');

    option['legend']['selected'] = {
        'UKTested': false,
        //@todo. Hard code
        'UKNegative': false,
        //@todo. Hard code
    }

    for (var i = 0; i < types.length; i++) {
        option['series'].push({
            name: types[i],
            type: 'line',
            stack: false,
            //            areaStyle: {},
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

function set_option_for_total_cases_in_countries(types, dates, values) {
    option = _init(types, dates, 'Total Cases in Countries');

    for (var i = 0; i < types.length; i++) {
        option['series'].push({
            name: types[i],
            type: 'line',
            stack: 'sum',
            areaStyle: {},
            data: values[i]
        });
    }
    return option;
}

function set_option_for_total_cases_in_england(types, dates, values) {
    // specify chart configuration item and data
    option = _init(types, dates, 'NHS in England');
    option['legend']['selected'] = {
        // 'Total': false,
        //@todo. hard code
    }

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

function set_option_for_local_cases_in_england(types, dates, values) {
    // specify chart configuration item and data
    option = _init(types, dates, 'UTLA in England');
    option['grid']['top'] = '50%';
    option['legend']['top'] = '7%';
    option['legend']['height'] = '42%';
    option['legend']['type'] = 'scroll';
    option['legend']['orient'] = 'horizonal';
    option['legend']['formatter'] = function(name) {
        var b = types.indexOf(name);
        return name + (-1 != b ? ('(' + _t(values[b]) + ')') : '');
    }

    option['legend']['selected'] = {
        //@todo. hard code
        'Barking and Dagenham': false,
        'Barnet': false,
        'Barnsley': false,
        'Bath and North East Somerset': false,
        'Bedford': false,
        'Bexley': false,
        'Birmingham': false,
        'Blackburn with Darwen': false,
        'Blackpool': false,
        'Bolton': false,
        'Bournemouth Christchurch and Poole': false,
        'Bracknell Forest': false,
        'Bradford': false,
        'Brent': false,
        'Brighton and Hove': false,
        'Bristol City of': false,
        'Bromley': false,
        'Buckinghamshire': false,
        'Bury': false,
        'Calderdale': false,
        'Cambridgeshire': false,
        'Camden': false,
        'Central Bedfordshire': false,
        'Cheshire East': false,
        'Cheshire West and Chester': false,
        'Cornwall and Isles of Scilly': false,
        'County Durham': false,
        'Coventry': false,
        'Croydon': false,
        'Cumbria': false,
        'Darlington': false,
        'Derby': false,
        'Derbyshire': false,
        'Devon': false,
        'Doncaster': false,
        'Dorset': false,
        'Dudley': false,
        'Ealing': false,
        'East Riding of Yorkshire': false,
        'East Sussex': false,
        'Enfield': false,
        'Essex': false,
        'Gateshead': false,
        'Gloucestershire': false,
        'Greenwich': false,
        'Hackney and City of London': false,
        'Halton': false,
        'Hammersmith and Fulham': false,
        'Hampshire': false,
        'Haringey': false,
        'Harrow': false,
        'Hartlepool': false,
        'Havering': false,
        'Herefordshire County of': false,
        'Hertfordshire': false,
        'Hillingdon': false,
        'Hounslow': false,
        'Isle of Wight': false,
        'Islington': false,
        'Kensington and Chelsea': false,
        'Kent': false,
        'Kingston upon Hull City of': false,
        'Kingston upon Thames': false,
        'Kirklees': false,
        'Knowsley': false,
        'Lambeth': false,
        'Lancashire': false,
        'Leeds': true,
        'Leicester': false,
        'Leicestershire': false,
        'Lewisham': false,
        'Lincolnshire': false,
        'Liverpool': false,
        'Luton': false,
        'Manchester': false,
        'Medway': false,
        'Merton': false,
        'Middlesbrough': false,
        'Milton Keynes': false,
        'Newcastle upon Tyne': true,
        'Newham': false,
        'Norfolk': false,
        'North East Lincolnshire': false,
        'North Lincolnshire': false,
        'North Somerset': false,
        'North Tyneside': false,
        'North Yorkshire': false,
        'Northamptonshire': false,
        'Northumberland': false,
        'Nottingham': false,
        'Nottinghamshire': false,
        'Oldham': false,
        'Oxfordshire': false,
        'Peterborough': false,
        'Plymouth': false,
        'Portsmouth': false,
        'Reading': false,
        'Redbridge': false,
        'Redcar and Cleveland': false,
        'Richmond upon Thames': false,
        'Rochdale': false,
        'Rotherham': false,
        'Rutland': false,
        'Salford': false,
        'Sandwell': false,
        'Sefton': false,
        'Sheffield': false,
        'Shropshire': false,
        'Slough': false,
        'Solihull': false,
        'Somerset': false,
        'South Gloucestershire': false,
        'South Tyneside': false,
        'Southampton': false,
        'Southend-on-Sea': false,
        'Southwark': false,
        'St. Helens': false,
        'Staffordshire': false,
        'Stockport': false,
        'Stockton-on-Tees': false,
        'Stoke-on-Trent': false,
        'Suffolk': false,
        'Sunderland': false,
        'Surrey': false,
        'Sutton': false,
        'Swindon': false,
        'Tameside': false,
        'Telford and Wrekin': false,
        'Thurrock': false,
        'Torbay': false,
        'Tower Hamlets': false,
        'Trafford': false,
        'Wakefield': false,
        'Walsall': false,
        'Waltham Forest': false,
        'Wandsworth': false,
        'Warrington': false,
        'Warwickshire': false,
        'West Berkshire': false,
        'West Sussex': false,
        'Westminster': false,
        'Wigan': false,
        'Wiltshire': false,
        'Windsor and Maidenhead': false,
        'Wirral': false,
        'Wokingham': false,
        'Wolverhampton': false,
        'Worcestershire': false,
        'York': false,
        'Awaiting confirmation': false,

    }

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
    option['series'][67 /*Leeds*/
    ]['label'] = {
        normal: {
            show: true,
            position: 'top'
        }
    };
    return option;
}

function set_option_for_daily_cases(types, dates, values, t='') {

    var v = [];
    for (var i = 0; i < values.length; i++) {
        v[i] = [];
        for (var j = values[i].length - 1; j >= 0; j--) {
            if ('' == values[i][j])
                values[i][j] = 0;
            if ('' == values[i][j - 1])
                values[i][j - 1] = 0;
            v[i][j] = values[i][j] - values[i][j - (0 == j ? 0 : 1)];
        }
    }

    option = _init(types, dates, t);
    option['legend']['selected'] = {
        'UKTested': false,
        //@todo. Hard code
        'UKNegative': false,
        //@todo. Hard code
    }

    for (var i = 0; i < types.length; i++) {
        option['series'].push({
            name: types[i],
            type: 'bar',
            stack: false,
            data: v[i]
        });
    }

    return option;
}

var figures = {}
  , theme = null;

['total-cases-in-uk', 'daily-cases-in-uk', 'total-cases-in-countries', 'daily-cases-in-countries', 'total-cases-in-england', 'local-cases-in-england'].map(x=>(figures[x] = echarts.init(_id(x), theme)) && figures[x].showLoading());

//...

$.get('https://raw.githubusercontent.com/xshaun/covid-19-uk/master/number-of-cases-in-UK.csv').done(function(csv_string) {
    [t,v] = _pcsv(csv_string)
    if (null == t || null == v)
        return;

    v = v.map(x=>x.slice(25));
    //@todo. as lack of data to avoid too many 0s

    // ["UKTested", "UKNegative", "UKCases", ....]
    var types = t[0].slice(1);

    // Update
    _idv('t', _t(v[0])); /* date */
    _idv('dc-nt-uk', _t(v[3]) - _t(v[3], -2));
    _idv('tc-nt-uk', _t(v[3]));
    _idv('tr-nt-uk', _t(v[5]));
    _idv('td-nt-uk', _t(v[4]));

    _idv('dc-ir-uk', _ir_a(v[3]));
    _idv('tc-ir-uk', _ir_v(v[3], 1));
    _idv('tr-ir-uk', _ir_v(v[5]));
    _idv('td-ir-uk', _ir_v(v[4]));

    yd = '(' + _t(v[0], -2) + ')';
    _idv('dc-ny-uk', _t(v[3], -2) - _t(v[3], -3) + yd);
    _idv('tc-ny-uk', _t(v[3], -2) + yd);
    _idv('tr-ny-uk', _t(v[5], -2) + yd);
    _idv('td-ny-uk', _t(v[4], -2) + yd);


    // UK
    figures['total-cases-in-uk'].setOption(set_option_for_total_cases_in_uk(types, v[0], v.slice(1)), theme);
    figures['total-cases-in-uk'].hideLoading();
    figures['daily-cases-in-uk'].setOption(set_option_for_daily_cases(types, v[0], v.slice(1), 'Daily Cases in UK'));
    figures['daily-cases-in-uk'].hideLoading();
});

$.get('https://raw.githubusercontent.com/xshaun/covid-19-uk/master/number-of-cases-in-Countries.csv').done(function(csv_string) {

    [t,v] = _pcsv(csv_string)
    if (null == t || null == v)
        return;

    // [ EnglandCases, ScolandCases, WaleCases, NICases, ....]
    var types = t[0].slice(1);

    yd = '(' + _t(v[0], -2) + ')';
    ['e', 's', 'w', 'n'].map((x,i)=>_idv('nt-' + x, _t(v[1 + i]))._idv('ir-' + x, _ir_v(v[1 + i]))._idv('ny-' + x, _t(v[1 + i], -2) + yd))

    // Countries
    figures['total-cases-in-countries'].setOption(set_option_for_total_cases_in_countries(types, v[0], v.slice(1)));
    figures['total-cases-in-countries'].hideLoading();
    figures['daily-cases-in-countries'].setOption(set_option_for_daily_cases(types, v[0], v.slice(1), 'Daily Cases in Countries'));
    figures['daily-cases-in-countries'].hideLoading();
});

$.get('https://raw.githubusercontent.com/xshaun/covid-19-uk/master/cases-identified-in-England.csv').done(function(csv_string) {
    [t,v] = _pcsv(csv_string)
    if (null == t || null == v)
        return;

    // [ East of England, London, Midlands, ....]
    var types = t[0].slice(1);

    // England
    var option = set_option_for_total_cases_in_england(types, v[0], v.slice(1));
    if (figures['total-cases-in-england'].getWidth() < 500) {
        option['grid']['top'] = 170;
        //                    option['grid']['bottom'] = 30;
    }
    figures['total-cases-in-england'].setOption(option);
    figures['total-cases-in-england'].hideLoading();
});

$.get('https://raw.githubusercontent.com/xshaun/covid-19-uk/master/cases-identified-locally-in-England.csv').done(function(csv_string) {
    [t,v] = _pcsv(csv_string, 2)
    if (null == t || null == v)
        return;

    // [ East of England, London, Midlands, ....]
    var types = t[1].slice(1);

    // England
    figures['local-cases-in-england'].setOption(set_option_for_local_cases_in_england(types, v[0], v.slice(1)));
    figures['local-cases-in-england'].hideLoading();
});
