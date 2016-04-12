
// Team Info Script
var totalShots;
var totalCon;
var totalGoals;
var totalYellow;
var totalRed;
var gamesPlayed;
var avgCards;
var rate;


var teamId=localStorage.getItem("teamID");    
var thisTeam="";
var today = new Date();
var oneMonthAgo = new Date();
    
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();  
    
var PMmm = oneMonthAgo.getMonth();

if(dd<10)
{
    dd='0'+dd
} 

if(mm<10)
{
    mm='0'+mm
} 

if(PMmm<10)
{
    PMmm='0'+PMmm
}    

today = yyyy+'-'+mm+'-'+dd;
oneMonthAgo = yyyy+'-'+PMmm+'-'+dd;
today.toString();
oneMonthAgo.toString();

//getPositions();    
    
var xhttp;
xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function()
{
    if (xhttp.readyState == 4 && xhttp.status == 200) 
    {
        myFunction(xhttp);
    }
};
xhttp.open("GET", "http://www.xmlsoccer.com/FootballDataDemo.asmx/GetTeam?ApiKey=TCDZLARAPAZJDMAFURGRYNXUTNMYSXEPDAEEUQWVVXRBVTVKOS&teamName="+teamId, true);
xhttp.send();

function myFunction(xml)
{
    var i, teamTxt, team, xmlDoc, stadium, stdTxt, country, couTxt;
    xmlDoc = xml.responseXML;
    teamTxt = "";
    stdTxt = "";
    couTxt + "";
    team = xmlDoc.getElementsByTagName("Name");
    stadium = xmlDoc.getElementsByTagName("Stadium");
    country = xmlDoc.getElementsByTagName("Country");


        for (i = 0; i < team.length; i++) 
            { 
                teamTxt=team[i].childNodes[0].nodeValue;
                
                stdTxt=stadium[i].childNodes[0].nodeValue;
                
                couTxt=country[i].childNodes[0].nodeValue;
            }
    
    
            document.getElementById("teamName").innerHTML = teamTxt;
            document.getElementById("stadium").innerHTML = stdTxt;
//            document.getElementById("country").innerHTML = couTxt;
            thisTeam=teamTxt;

} 


var xhttp2;
xhttp2 = new XMLHttpRequest();
xhttp2.onreadystatechange = function()
{
    if (xhttp2.readyState == 4 && xhttp2.status == 200) 
    {
        myFunction2(xhttp2);
    }
};
    xhttp2.open("GET", "http://www.xmlsoccer.com/FootballDataDemo.asmx/GetPlayersByTeam?ApiKey=TCDZLARAPAZJDMAFURGRYNXUTNMYSXEPDAEEUQWVVXRBVTVKOS&teamId="+teamId, true);
    xhttp2.send();

function myFunction2(xml)
    {
        
    heights=[];
    var txt, xmlDoc, pName, height, num, player, plyId, pos,dob; 
        var ages =[];
    xmlDoc = xml.responseXML;
    names = "";
    player = xmlDoc.getElementsByTagName("Player"); 
    pos = xmlDoc.getElementsByTagName("Position");
    pName = xmlDoc.getElementsByTagName("Name");
    height = xmlDoc.getElementsByTagName("Height");
    num = xmlDoc.getElementsByTagName("PlayerNumber");  
    plyId = xmlDoc.getElementsByTagName("Id");
        nat = xmlDoc.getElementsByTagName("Nationality");
    dob =  xmlDoc.getElementsByTagName("DateOfBirth"); 
    
        
    for (i = 0; i < pName.length; i++) 
    {      
//         var year = dob[i].childNodes[0].nodeValue.split("-"); 
//        ages[i] = yyyy-year[0];
          names +=
		  		"<tr>"
                +"<td onclick=getPlayerData("+plyId[i].childNodes[0].nodeValue+")>"
                + '<a href="playerinfo.html">'
                + pName[i].childNodes[0].nodeValue
                +'</a>'
				+'</td>'
				+"<td>"
                +pos[i].childNodes[0].nodeValue
                + "</td>"
          
                if(player[i].childNodes[0].length==40)
                    {
                +"<td>"
                +nat[i].childNodes[0].nodeValue
				+"</td>"
                    }
                else
                {
                +"<td>"
                +"N/A"
				+"</td>"
                }
        
                +"</tr>";
       
        
              
//        alert(ages[i]);
  
//        alert(age);
        
        
//        alert(age[0]);
//				+"<td>"
//                + dob[i].childNodes[0].nodeValue
//				+"</td>"
          
//                if(player[i].childNodes.nodeValue>0)
//                    {
//                        + num[i].childNodes[0].nodeValue;
//                    }
                
        
                
        
    }
    document.getElementById("players").innerHTML += names;
}   
    
    
function getPlayerData(plyId)
    {
        var playId = plyId;
        localStorage.setItem("playerID",playId);
    }
  
//Get method for obatining a teams previous matches    
var xhttp3;
xhttp3 = new XMLHttpRequest();
xhttp3.onreadystatechange = function()
{
    if (xhttp3.readyState == 4 && xhttp3.status == 200) 
    {
        myFunction3(xhttp3);
    }
};
    xhttp3.open("GET", "http://www.xmlsoccer.com/FootballDataDemo.asmx/GetFixturesByDateIntervalAndTeam?ApiKey=TCDZLARAPAZJDMAFURGRYNXUTNMYSXEPDAEEUQWVVXRBVTVKOS&startDateString="+oneMonthAgo+"&endDateString="+today+"&teamId="+teamId, true);
    xhttp3.send();   
    
function myFunction3(xml)
    {
    var txt, xmlDoc, homeTeam, awayTeam,hGoals,aGoals; 
    txt="";
    xmlDoc = xml.responseXML;
    homeTeam = xmlDoc.getElementsByTagName("HomeTeam");
    awayTeam = xmlDoc.getElementsByTagName("AwayTeam");
    hGoals = xmlDoc.getElementsByTagName("HomeGoals");
    aGoals = xmlDoc.getElementsByTagName("AwayGoals");

    
        
    for (i = 0; i < homeTeam.length; i++) 
    {     
        txt+=
            "<tr>"
            +"<td>"
            +homeTeam[i].childNodes[0].nodeValue
            +"</td>"
        
            +"<td>"
            + hGoals[i].childNodes[0].nodeValue + " " 
            + aGoals[i].childNodes[0].nodeValue
            +"</td>"
        
            +"<td>"

            + awayTeam[i].childNodes[0].nodeValue
            +"</td>"
            +"</tr>";

    }
    document.getElementById("prev").innerHTML+=txt;
}     
    
var xhttp4;
    xhttp4 = new XMLHttpRequest();
    xhttp4.onreadystatechange = function()
    {
    if (xhttp4.readyState == 4 && xhttp4.status == 200) 
        {
            myFunction4(xhttp4);
        }
    };
    xhttp4.open("GET", "http://www.xmlsoccer.com/FootballDataDemo.asmx/GetLeagueStandingsBySeason?ApiKey=TCDZLARAPAZJDMAFURGRYNXUTNMYSXEPDAEEUQWVVXRBVTVKOS&league=ScottishPremierLeague&seasonDateString=1516", true);
    xhttp4.send(); 
    function myFunction4(xml)
    {
    var txt, xmlDoc, team,goals,shots,yellows,reds,played,goalsA; 
    txt="";
    xmlDoc = xml.responseXML;
    team = xmlDoc.getElementsByTagName("Team");
    goals = xmlDoc.getElementsByTagName("Goals_For");
    shots = xmlDoc.getElementsByTagName("NumberOfShots");
    yellows = xmlDoc.getElementsByTagName("YellowCards");
    reds = xmlDoc.getElementsByTagName("RedCards");
    played = xmlDoc.getElementsByTagName("Played");
        goalsA = xmlDoc.getElementsByTagName("Goals_Against");
        

    
        
    for (i = 0; i < team.length; i++) 
    {     
        if(thisTeam===team[i].childNodes[0].nodeValue)
        {
            totalGoals=parseInt(goals[i].childNodes[0].nodeValue);
            
            totalCon=parseInt(goalsA[i].childNodes[0].nodeValue);
            
            totalShots=parseInt(shots[i].childNodes[0].nodeValue);
            
            rate=totalShots/totalGoals;
            
            rate= rate.toFixed(2);
            
            totalYellow= parseInt(yellows[i].childNodes[0].nodeValue);
            totalRed= parseInt(reds[i].childNodes[0].nodeValue);
            var totalC= totalRed+totalYellow;

            gamesPlayed= parseInt(played[i].childNodes[0].nodeValue);
            avgCards = totalC/gamesPlayed;
            avgCards =avgCards.toFixed(2);
            
            document.getElementById("currentPos").innerHTML+=i+1;
//            document.getElementById("shots").innerHTML+=totalShots;
//            document.getElementById("rate").innerHTML+=rate;
//            document.getElementById("avgCards").innerHTML+=avgCards;
            
//            alert(totalGoals);
//            alert(totalShots);
//            alert(totalC);
//            alert(gamesPlayed);
//            alert(avgCards);




        }
    }
            showCharts();    
}         
    

function showCharts()
    {
//        var chart = new Highcharts.Chart({
//        chart: {
//            renderTo: 'goalCharts',
//            type: 'bar'
//        },
//        xAxis: {
//            categories: ['Main Item']
//        },
//        
//            
//        series: [{
//            data: [{
//                y: totalGoals+totalShots+gamesPlayed,
//                Goals: totalGoals,
//                Games: gamesPlayed,
//                Shots: totalShots,
//            }]
//            
//        }],
//        tooltip: {
//            formatter: function() {return ' ' +
//                'Goals: ' + this.point.Goals + '<br />' +
//                'Games: ' + this.point.Games + '<br />' +
//                'Shots: ' + this.point.Shots;
//            }
//        }
//    });
        
    $('#goalCharts').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Goals and Shots'
        },
        xAxis: {
            categories: ['Goals & Shots']
        },
        yAxis: {
            min: 0,
            title: {
            }
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [{
            name: 'Goals',
            data: 
            
            [{
                y: totalGoals,
                Goals: totalGoals,
                Shots: totalShots,
                Games: gamesPlayed,
                Against: totalCon,
                Rate: rate,
            }]
            
        }, {
            name: 'Games',
            data: 
                
             [{
                y: gamesPlayed,
                Goals: totalGoals,
                Shots: totalShots,
                Games: gamesPlayed,
                Against: totalCon,
                Rate: rate,
            }]
            
        },
                 {
            name: 'Goals Conceeded',
            data: 
                
             [{
                y: totalCon,
                Goals: totalGoals,
                Shots: totalShots,
                Games: gamesPlayed,
                Against: totalCon,
                Rate: rate,
            }]
            
        },
                 
                 
                 {
            name: 'Shots',
            data: 
            
             [{
                y: totalShots,
                Goals: totalGoals,
                Shots: totalShots,
                Games: gamesPlayed,
                Against: totalCon,
                Rate: rate,
            }]
            
        }],
        
         tooltip: {
            formatter: function() {return ' ' +
                'Total Shots: ' + this.point.Shots + '<br />' +
                'Total Conceeded: ' + this.point.Against + '<br />' +
                'Total Games: ' + this.point.Games + '<br />' +
                'Total Goals: ' + this.point.Goals + '<br />' +
                'Shot Conversion Rate: ' + this.point.Rate +"%";
            }
        }
        
    }); 
        
        
        
        
  $('#cardCharts').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Total Cards'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
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
            name: 'Yellows',
            colorByPoint: true,
            data: [{
                name: 'Yellows',
                y: totalYellow,
                yellows:totalYellow,
                reds:totalRed,
                avg:avgCards,
            }, {
                name: 'Reds',
                y: totalRed,
                yellows:totalYellow,
                reds:totalRed,
                avg:avgCards,
            }]
        }],
      
     tooltip: {
            formatter: function() {return ' ' +
                'Total Yellows: ' + this.point.yellows + '<br />' +
                'Total Reds: ' + this.point.reds + '<br />' +
                'Average Cards Per Game: ' + this.point.avg;
            }
        } 
      
    });
    }

    
// $('#goalCharts').highcharts({
//        chart: {
//            type: 'bar'
//        },
//        title: {
//            text: 'Goals'
//        },
//        xAxis: {
//            categories: ["Games", "Goals","Shots"],
//            title: {
//                text: null
//            }
//        },
//        yAxis: {
//            min: 0,
//            title: {
//                text: 'Goals',
//                align: 'high'
//            },
//            labels: {
//                overflow: 'justify'
//            }
//        },
//        plotOptions: {
//            bar: {
//                dataLabels: {
//                    enabled: true
//                }
//            }
//        },
//        legend: {
//            layout: 'vertical',
//            align: 'right',
//            verticalAlign: 'top',
//            x: -40,
//            y: 80,
//            floating: true,
//            borderWidth: 1,
//            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
//            shadow: true
//        },
//        credits: {
//            enabled: false
//        },
//        series: [{
////            name: "Goals" "Games" "Shots",
//            data: [gamesPlayed,totalGoals, totalShots]
//        }]
//    });
        
     // -- Second Chart
//  $('#cardCharts').highcharts({
//        chart: {
//		colors: ['#0000FF', '#006600'],
//            plotBackgroundColor: null,
//            plotBorderWidth: null,
//            plotShadow: false,
//            type: 'pie'
//        },
//        title: {
//            text: 'Cards'
//        },
//
//        plotOptions: {
//            pie: {
//                allowPointSelect: true,
//                cursor: 'pointer',
//                dataLabels: {
//                    enabled: true,
//                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
//                    style: {
//                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
//                    }
//                }
//            }
//        },
//        series: [{
//            name: 'Cards',
//            colorByPoint: true,
//            data:
//            
////            [{
////                name: "Yellow Cards",
////                y: totalYellow,
////            }
////             
//             [{
//                name: "Yellow Cards",
//                y: totalYellow,
//                yellow :totalYellow,
//                red: totalRed,
//                avg: avgCards,
//            }],
//            
//            series: [{
//            name: 'Red Cards',
//            colorByPoint: true,
//            data:
//            
////            [{
////                name: "Yellow Cards",
////                y: totalYellow,
////            }
////             
//             [{
//                name: "Yellow Cards",
//                y: totalRed,
//                yellow :totalYellow,
//                red: totalRed,
//                avg: avgCards,
//            }],
//             
////             , {
////                name: "Red",
////                y: totalRed,
////
////            }]
//        }],
//                              
//        tooltip: {
//            formatter: function() {return ' ' +
//                'Total Yellows: ' + this.point.yellow + '<br />' +
//                'Total Reds: ' + this.point.red + '<br />' +
//                'Average Cards Per Game: ' + this.point.avg;
//            }
//        }
//        }
//                              
//  // -- End Container2 --
////    });    
//
//        
//}