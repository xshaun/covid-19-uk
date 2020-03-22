function _l(e){return e.length-1}function _t(e,t=-1){return e instanceof Array&&t<0?e[_l(e)+1+t]:null}function _id(e){return document.getElementById(e)}function _idv(e,t){return null!=_id(e)&&(_id(e).innerHTML=t),this}function _pcsv(e,t=1){const n=RegExp(/^\s*-?(\d*\.?\d+|\d+\.?\d*)(e[-+]?\d+)?\s*$/i);var o=[],i=[];if("string"==typeof e){if(s=e.split(/\r?\n/),s instanceof Array){for(var r=0,a=0;a<t&&a<s.length;a++)0!=s[a].search(/^\s*$/i)&&(o[a]=s[a].split(/\s*,\s*/),r=o[a].length<r?r:o[a].length);for(a=0;a<o.length;a++)for(;r-o[a].length>0;)o[o[a].length]="";for(a=0;a<r;a++)i[a]=[];for(a=t;a<s.length;a++)if(0!=s[a].search(/^\s*$/i)){for(w=s[a].split(/\s*,\s*/).map(e=>n.test(e)?parseFloat(e):e);r-w.length>0;)w[w.length]="";for(var l=0;l<w.length;l++)i[l][i[l].length]=w[l]}return[o,i]}return[null,null]}return[null,null]}function _ir(e,t){return(0==t?0:((e-t)/t*100).toFixed(1))+"%"}function _ir_v(e,t=0){var n=_l(e);return n<t+1?0:_ir(e[n-t],e[n-t-1])}function _ir_a(e,t=0){var n=_l(e);return n<t+2?0:_ir(e[n-t]-e[n-t-1],e[n-t-1]-e[n-t-2])}function _init(e,t,n=""){return option={title:{text:n,left:"center"},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:e,top:"10%"},toolbox:{feature:{saveAsImage:{}},bottom:0},grid:{top:"25%",left:"3%",right:"3%",bottom:"10%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:t}],yAxis:[{type:"value"}],series:[]},option}function set_option_for_total_cases_in_uk(e,t,n){option=_init(e,t,"Total Cases in UK"),option.legend.selected={UKTested:!1,UKNegative:!1};for(var o=0;o<e.length;o++)option.series.push({name:e[o],type:"line",stack:!1,data:n[o]});return option.series[2].label={normal:{show:!0,position:"top"}},option}function set_option_for_total_cases_in_countries(e,t,n){option=_init(e,t,"Total Cases in Countries");for(var o=0;o<e.length;o++)option.series.push({name:e[o],type:"line",stack:"sum",areaStyle:{},data:n[o]});return option}function set_option_for_total_cases_in_england(e,t,n){option=_init(e,t,"NHS in England"),option.legend.selected={};for(var o=0;o<e.length;o++)option.series.push({name:e[o],type:"line",stack:"sum",areaStyle:{},data:n[o]});return option.series[e.length-1].stack=!1,option.series[e.length-1].label={normal:{show:!0,position:"top"}},option}function set_option_for_local_cases_in_england(e,t,n){option=_init(e,t,"UTLA in England"),option.grid.top="50%",option.legend.top="7%",option.legend.height="42%",option.legend.type="scroll",option.legend.orient="horizonal",option.legend.formatter=function(t){var o=e.indexOf(t);return t+(-1!=o?"("+_t(n[o])+")":"")},option.legend.selected={"Barking and Dagenham":!1,Barnet:!1,Barnsley:!1,"Bath and North East Somerset":!1,Bedford:!1,Bexley:!1,Birmingham:!1,"Blackburn with Darwen":!1,Blackpool:!1,Bolton:!1,"Bournemouth Christchurch and Poole":!1,"Bracknell Forest":!1,Bradford:!1,Brent:!1,"Brighton and Hove":!1,"Bristol City of":!1,Bromley:!1,Buckinghamshire:!1,Bury:!1,Calderdale:!1,Cambridgeshire:!1,Camden:!1,"Central Bedfordshire":!1,"Cheshire East":!1,"Cheshire West and Chester":!1,"Cornwall and Isles of Scilly":!1,"County Durham":!1,Coventry:!1,Croydon:!1,Cumbria:!1,Darlington:!1,Derby:!1,Derbyshire:!1,Devon:!1,Doncaster:!1,Dorset:!1,Dudley:!1,Ealing:!1,"East Riding of Yorkshire":!1,"East Sussex":!1,Enfield:!1,Essex:!1,Gateshead:!1,Gloucestershire:!1,Greenwich:!1,"Hackney and City of London":!1,Halton:!1,"Hammersmith and Fulham":!1,Hampshire:!1,Haringey:!1,Harrow:!1,Hartlepool:!1,Havering:!1,"Herefordshire County of":!1,Hertfordshire:!1,Hillingdon:!1,Hounslow:!1,"Isle of Wight":!1,Islington:!1,"Kensington and Chelsea":!1,Kent:!1,"Kingston upon Hull City of":!1,"Kingston upon Thames":!1,Kirklees:!1,Knowsley:!1,Lambeth:!1,Lancashire:!1,Leeds:!0,Leicester:!0,Leicestershire:!1,Lewisham:!1,Lincolnshire:!1,Liverpool:!1,Luton:!1,Manchester:!1,Medway:!1,Merton:!1,Middlesbrough:!1,"Milton Keynes":!1,"Newcastle upon Tyne":!0,Newham:!1,Norfolk:!1,"North East Lincolnshire":!1,"North Lincolnshire":!1,"North Somerset":!1,"North Tyneside":!1,"North Yorkshire":!1,Northamptonshire:!1,Northumberland:!1,Nottingham:!1,Nottinghamshire:!1,Oldham:!1,Oxfordshire:!1,Peterborough:!1,Plymouth:!1,Portsmouth:!1,Reading:!1,Redbridge:!1,"Redcar and Cleveland":!1,"Richmond upon Thames":!1,Rochdale:!1,Rotherham:!1,Rutland:!1,Salford:!1,Sandwell:!1,Sefton:!1,Sheffield:!1,Shropshire:!1,Slough:!1,Solihull:!1,Somerset:!1,"South Gloucestershire":!1,"South Tyneside":!1,Southampton:!1,"Southend-on-Sea":!1,Southwark:!1,"St. Helens":!1,Staffordshire:!1,Stockport:!1,"Stockton-on-Tees":!1,"Stoke-on-Trent":!1,Suffolk:!1,Sunderland:!1,Surrey:!1,Sutton:!1,Swindon:!1,Tameside:!1,"Telford and Wrekin":!1,Thurrock:!1,Torbay:!1,"Tower Hamlets":!1,Trafford:!1,Wakefield:!1,Walsall:!1,"Waltham Forest":!1,Wandsworth:!1,Warrington:!1,Warwickshire:!1,"West Berkshire":!1,"West Sussex":!1,Westminster:!1,Wigan:!1,Wiltshire:!1,"Windsor and Maidenhead":!1,Wirral:!1,Wokingham:!1,Wolverhampton:!1,Worcestershire:!1,York:!1,"Awaiting confirmation":!1};for(var o=0;o<e.length;o++)option.series.push({name:e[o],type:"line",stack:"sum",areaStyle:{},data:n[o]});return _p={normal:{show:!0,position:"top"}},option.series[67].label=_p,option.series[68].label=_p,option.series[79].label=_p,option}function set_option_for_daily_cases(e,t,n,o=""){for(var i=[],s=0;s<n.length;s++){i[s]=[];for(var r=n[s].length-1;r>=0;r--)""==n[s][r]&&(n[s][r]=0),""==n[s][r-1]&&(n[s][r-1]=0),i[s][r]=n[s][r]-n[s][r-(0==r?0:1)]}option=_init(e,t,o),option.legend.selected={UKTested:!1,UKNegative:!1};for(s=0;s<e.length;s++)option.series.push({name:e[s],type:"bar",stack:!1,data:i[s]});return option}var figures={},theme=null;["total-cases-in-uk","daily-cases-in-uk","total-cases-in-countries","daily-cases-in-countries","total-cases-in-england","local-cases-in-england"].map(e=>(figures[e]=echarts.init(_id(e),theme))&&figures[e].showLoading()),$.get("https://raw.githubusercontent.com/xshaun/covid-19-uk/master/number-of-cases-in-UK.csv").done(function(e){if([t,v]=_pcsv(e),null!=t&&null!=v){v=v.map(e=>e.slice(25));var n=t[0].slice(1),o="<td><code class='x-nt'>?1</code><span class='x-ir'>?2 &uarr;</span></td>";_idv("t",_t(v[0]));for(var i=1;i<8;i++)_idv("tw"+i,"<td class='x-d'>?1</td>".replace("?1",_t(v[0],-1*i))+o.replace("?1",_t(v[3],-1*i)-_t(v[3],-1*i-1)).replace("?2",_ir_a(v[3],i-1))+o.replace("?1",_t(v[3],-1*i)).replace("?2",_ir_v(v[3],i))+o.replace("?1",_t(v[5],-1*i)).replace("?2",_ir_v(v[5],i-1))+o.replace("?1",_t(v[4],-1*i)).replace("?2",_ir_v(v[4],i-1)));figures["total-cases-in-uk"].setOption(set_option_for_total_cases_in_uk(n,v[0],v.slice(1)),theme),figures["total-cases-in-uk"].hideLoading(),figures["daily-cases-in-uk"].setOption(set_option_for_daily_cases(n,v[0],v.slice(1),"Daily Cases in UK")),figures["daily-cases-in-uk"].hideLoading()}}),$.get("https://raw.githubusercontent.com/xshaun/covid-19-uk/master/cases-identified-in-Counties.csv").done(function(e){if([t,v]=_pcsv(e),null!=t&&null!=v){for(var n=t[0].slice(1),o="<td><code class='x-nt'>?1</code><span class='x-ir'>?2 &uarr;</span></td>",i=1;i<8;i++)_idv("cw"+i,"<td class='x-d'>?1</td>".replace("?1",_t(v[0],-1*i))+o.replace("?1",_t(v[1],-1*i)).replace("?2",_ir_v(v[1],i-1))+o.replace("?1",_t(v[2],-1*i)).replace("?2",_ir_v(v[2],i-1))+o.replace("?1",_t(v[3],-1*i)).replace("?2",_ir_v(v[3],i-1))+o.replace("?1",_t(v[4],-1*i)).replace("?2",_ir_v(v[4],i-1)));figures["total-cases-in-countries"].setOption(set_option_for_total_cases_in_countries(n,v[0],v.slice(1))),figures["total-cases-in-countries"].hideLoading(),figures["daily-cases-in-countries"].setOption(set_option_for_daily_cases(n,v[0],v.slice(1),"Daily Cases in Countries")),figures["daily-cases-in-countries"].hideLoading()}}),$.get("https://raw.githubusercontent.com/xshaun/covid-19-uk/master/cases-identified-in-England.csv").done(function(e){if([t,v]=_pcsv(e),null!=t&&null!=v){var n=set_option_for_total_cases_in_england(t[0].slice(1),v[0],v.slice(1));figures["total-cases-in-england"].setOption(n),figures["total-cases-in-england"].hideLoading()}}),$.get("https://raw.githubusercontent.com/xshaun/covid-19-uk/master/cases-identified-locally-in-England.csv").done(function(e){if([t,v]=_pcsv(e,2),null!=t&&null!=v){var n=t[1].slice(1);figures["local-cases-in-england"].setOption(set_option_for_local_cases_in_england(n,v[0],v.slice(1))),figures["local-cases-in-england"].hideLoading()}});