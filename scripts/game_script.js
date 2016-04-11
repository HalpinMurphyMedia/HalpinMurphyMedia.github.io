// JavaScript Document

var teamList=[];

//necessarry info for teams which was not given via api
var celtic =new Object();
celtic.name ="Celtic";
celtic.colour = "green";
celtic.secColour ="white";
celtic.capacity = 60832;
teamList.push(celtic);

var ross =new Object();
ross.name ="Ross County";
ross.colour = "blue";
ross.secColour ="white";
ross.capacity = 6541;
teamList.push(ross);

var aberdeen =new Object();
aberdeen.name ="Aberdeen";
aberdeen.colour = "red";
aberdeen.secColour ="white";
aberdeen.capacity = 20916;
teamList.push(aberdeen);

var stJohnstone =new Object();
stJohnstone.name ="St Johnstone";
stJohnstone.colour = "green";
stJohnstone.secColour ="white";
stJohnstone.capacity = 10696;
teamList.push(stJohnstone);

var motherwell =new Object();
motherwell.name ="Motherwell";
motherwell.colour = "red";
motherwell.secColour ="white";
motherwell.capacity = 13677;
teamList.push(motherwell);

var inverness =new Object();
inverness.name ="Inverness C";
inverness.colour = "green";
inverness.secColour ="white";
inverness.capacity = 7800;
teamList.push(inverness);

var hearts =new Object();
hearts.name ="Hearts";
hearts.colour = "purple";
hearts.secColour ="black";
hearts.capacity = 17529;
teamList.push(hearts);

var dundeeU =new Object();
dundeeU.name ="Dundee United";
dundeeU.colour = "orange";
dundeeU.secColour ="black";
dundeeU.capacity = 14223;
teamList.push(dundeeU);

var dundee =new Object();
dundee.name ="Dundee FC";
dundee.colour = "blue";
dundee.secColour ="white";
dundee.capacity = 11506;
teamList.push(dundee);

var kilmarnock =new Object();
kilmarnock.name ="Kilmarnock";
kilmarnock.colour = "blue";
kilmarnock.secColour ="white";
kilmarnock.capacity = 18182;
teamList.push(kilmarnock);

var partick =new Object();
partick.name ="Partick Thistle";
partick.colour = "red";
partick.secColour ="orange";
partick.capacity = 10102;
teamList.push(partick);

var hamilton =new Object();
 hamilton.name ="Hamilton";
 hamilton.colour = "red";
hamilton.secColour ="white";
 hamilton.capacity = 6018;
teamList.push(hamilton);




//initialise variables to be used
var i, teams,teamOne,teamTwo, xmlDoc, hTeam, aTeam, hGoals, aGoals,score,time,timeTxt,homeGoalDets, awayGoalDets, homeGoalText, awayGoalText,homeLG,awayLG,homeLD,awayLD,homeLM,awayLM,honeLF,awayLF,homeLineupTxt,awayLineupTxt, homeGoals,awayGoals,homeYellow,awayYellow,awayYellowAmount,homeYellowAmount,homeRed,awayRed,homeRedAmount,awayRedAmount,totalRed,stadiumTotalCap,spec,emptySeats,filledSeats;


        
//load match id from local storage to be used in the xml get request    
var matchId=localStorage.getItem("matchID");    

var xhttp;
xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function()
{
    if (xhttp.readyState == 4 && xhttp.status == 200) 
    {
        myFunction(xhttp);
    }
};
xhttp.open("GET", "http://www.xmlsoccer.com/FootballDataDemo.asmx/GetFixtureMatchByID?ApiKey=TCDZLARAPAZJDMAFURGRYNXUTNMYSXEPDAEEUQWVVXRBVTVKOS&Id="+matchId, true);
    
xhttp.send();

function myFunction(xml)
{
    
  
    xmlDoc = xml.responseXML;
    teamOne = "";
    score = "";
    timeTxt = "";
    homeGoalText = "";
    awayGoalText = "";
    homeLineupTxt = "";
    awayLineupTxt = "";
    teamOne="";
    teamTwo="";
    stadiumTotalCap=45000;
    
    hTeam = xmlDoc.getElementsByTagName("HomeTeam");
    aTeam = xmlDoc.getElementsByTagName("AwayTeam");
    hGoals = xmlDoc.getElementsByTagName("HomeGoals");
    aGoals= xmlDoc.getElementsByTagName("AwayGoals");
    time= xmlDoc.getElementsByTagName("Time");
    
    homeGoalDets = xmlDoc.getElementsByTagName("HomeGoalDetails");
    awayGoalDets= xmlDoc.getElementsByTagName("AwayGoalDetails");
    
    homeYellow = xmlDoc.getElementsByTagName("HomeTeamYellowCardDetails");
    awayYellow = xmlDoc.getElementsByTagName("AwayTeamYellowCardDetails");
    
    homeRed = xmlDoc.getElementsByTagName("HomeTeamRedCardDetails");
    awayRed= xmlDoc.getElementsByTagName("AwayTeamRedCardDetails");

    
    homeLG = xmlDoc.getElementsByTagName("HomeLineupGoalkeeper");
    homeLD = xmlDoc.getElementsByTagName("HomeLineupDefense");
    homeLM = xmlDoc.getElementsByTagName("HomeLineupMidfield");
    homeLF = xmlDoc.getElementsByTagName("HomeLineupForward");

    awayLG = xmlDoc.getElementsByTagName("AwayLineupGoalkeeper");
    awayLD = xmlDoc.getElementsByTagName("AwayLineupDefense");
    awayLM = xmlDoc.getElementsByTagName("AwayLineupMidfield");
    awayLF = xmlDoc.getElementsByTagName("AwayLineupForward");

    spec = xmlDoc.getElementsByTagName("Spectators");
    
    var aGoalsDis="";
    var hGoalsDis="";
    
    var homeYellowDeets="";
    var homeYellowFinal="";
    var homeRedDeets="";
    var homeRedFinal="";
    
    var awayYellowDeets="";
    var awayYellowFinal="";
    var awayRedDeets="";
    var awayRedFinal="";
    

//loop through list of teams and if the home team name matches take the capacity of their stadium which is used to generate a pie chart later
        for(y=0;y<teamList.length;y++)
            {
                if(hTeam[0].childNodes[0].nodeValue==teamList[y].name)
                {
                        stadiumTotalCap=(teamList[y].capacity);
                        
                    if(spec[0].childNodes.length>0)
                     {

                        filledSeats=parseInt(spec[0].childNodes[0].nodeValue);
                        emptySeats=stadiumTotalCap-filledSeats; 
                     }
                    else
                    {
                        filledSeats=0;
                        emptySeats=stadiumTotalCap-filledSeats; 
                    }
                    //as well as getting total capacity of the stadium also get the teams colour to be used in the bg and their secondary colour to be                      used for font
                        $(".teamOne").css("background-color",(teamList[y].colour));                          
                        $(".teamOne").css("color",(teamList[y].secColour));
   
                }
                //also loop thorugh to see if away team matches and if so also get their colour and font colour
                if(aTeam[0].childNodes[0].nodeValue==teamList[y].name)
                    {
                        $(".teamTwo").css("background-color",(teamList[y].colour));  
                        $(".teamTwo").css("color",(teamList[y].secColour));

                    }
            }

    
        for (i = 0; i < hTeam.length; i++) 
            { 
            teamOne =
                hTeam[i].childNodes[0].nodeValue;
            
            teamTwo=    
                aTeam[i].childNodes[0].nodeValue;

            homeGoals = parseInt(hGoals[i].childNodes[0].nodeValue);
            awayGoals = parseInt(aGoals[i].childNodes[0].nodeValue);
//                alert(awayGoals);
                
            score =
                hGoals[i].childNodes[0].nodeValue 
                + " "
                + "-"
                + " "
                + aGoals[i].childNodes[0].nodeValue
                +"<br>"
                + time[i].childNodes[0].nodeValue;
            
              homeLineupTxt +=
                  "<br>"
                  + homeLG[i].childNodes[0].nodeValue
                  + "<br>"
                  + homeLD[i].childNodes[0].nodeValue
                  + "<br>"
                  + homeLM[i].childNodes[0].nodeValue
                  + "<br>"
                  + homeLF[i].childNodes[0].nodeValue;
                  
            
            awayLineupTxt +=  
                  "<br>"
                  + awayLF[i].childNodes[0].nodeValue
                  + "<br>"
                  + awayLM[i].childNodes[0].nodeValue
                  + "<br>"
                  + awayLD[i].childNodes[0].nodeValue
                  + "<br>"
                  + awayLG[i].childNodes[0].nodeValue;
                
                //gets the string of scorers from home side
                 if(homeGoalDets[i].childNodes.length>0)
                    {
                        homeGoalText = homeGoalDets[i].childNodes[0].nodeValue;
                        //split the string at ; mark which seperates each player
                        var splitTxtHome = homeGoalText.split(";");
                        //reverse the list to get the time in the correct order
                        splitTxtHome.reverse();    
                        //delete the first entry of the list which is now blabnk due to split method
                        splitTxtHome.splice(0,1);
                        //loop through scorers list length and display each item
                        for(x=0;x<splitTxtHome.length;x++)
                            {                        
                                hGoalsDis+=splitTxtHome[x]+"<br>";
                            }
                    }
                    else
                    {
                        homeGoalText=" ";
                    }
                
                if(awayGoalDets[i].childNodes.length>0)
                    {
                        awayGoalText= awayGoalDets[i].childNodes[0].nodeValue;
                        var splitTxtAway= awayGoalText.split(";");
                        splitTxtAway.reverse();    
                        splitTxtAway.splice(0,1);
                        for(x=0;x<splitTxtAway.length;x++)
                            {                        
                                aGoalsDis+=splitTxtAway[x]+"<br>";
                            }
                    }
                    else
                    {
                        awayGoalText=" ";
                    }
                
                if(homeYellow[i].childNodes.length>0)
                    {
                       homeYellowDeets = homeYellow[i].childNodes[0].nodeValue;
                        var splitTxtHomeYellow = homeYellowDeets.split(";");
                        splitTxtHomeYellow.reverse();    
                        splitTxtHomeYellow.splice(0,1);
                        homeYellowAmount=splitTxtHomeYellow.length;
                        for(x=0;x<splitTxtHomeYellow.length;x++)
                            {                        
                                homeYellowFinal+=splitTxtHomeYellow[x]+"<br>";
                            }
                    }
                    else
                    {
                        homeYellowFinal=" ";
                        homeYellowAmount=0;
                    }
                
                if(awayYellow[i].childNodes.length>0)
                    {
                       awayYellowDeets = awayYellow[i].childNodes[0].nodeValue;
                        var splitTxtAwayYellow = awayYellowDeets.split(";");
                        splitTxtAwayYellow.reverse();    
                        splitTxtAwayYellow.splice(0,1);
                        awayYellowAmount=splitTxtAwayYellow.length;
                        for(x=0;x<splitTxtAwayYellow.length;x++)
                            {                        
                                awayYellowFinal+=splitTxtAwayYellow[x]+"<br>";
                            }
                    }
                    else
                    {
                        awayYellowFinal=" ";
                        awayYellowAmount=0;

                    }
                
                
                if(homeRed[i].childNodes.length>0)
                    {
                       homeRedDeets = homeRed[i].childNodes[0].nodeValue;
                        var splitTxtHomeRed = homeRedDeets.split(";");
                        splitTxtHomeRed.reverse();    
                        splitTxtHomeRed.splice(0,1);
                        homeRedAmount=splitTxtHomeRed.length;
                        for(x=0;x<splitTxtHomeRed.length;x++)
                            {                        
                                homeRedFinal+=splitTxtHomeRed[x]+"<br>";
                                totalRed+1;
                            }
                    }
                    else
                    {
                        homeRedFinal=" ";
                        homeRedAmount=0;
                    }
                
                
                if(awayRed[i].childNodes.length>0)
                    {
                       awayRedDeets = awayRed[i].childNodes[0].nodeValue;
                        var splitTxtAwayRed = awayRedDeets.split(";");
                        splitTxtAwayRed.reverse();    
                        splitTxtAwayRed.splice(0,1);
                        awayRedAmount=splitTxtAwayRed.length;
                        for(x=0;x<splitTxtAwayRed.length;x++)
                            {                        
                                awayRedFinal+=splitTxtAwayRed[x]+"<br>";
                                totalRed+1;
                            }
                    }
                    else
                    {
                        awayRedFinal=" ";
                        awayRedAmount=0;
                    }
                
            }
            //display gathered information
            document.getElementById("details").innerHTML += "Yellow Cards" + "<br>" +homeYellowFinal + awayYellowFinal;
            document.getElementById("details").innerHTML += "Red Cards" + "<br>" + homeRedFinal + awayRedFinal;
            document.getElementById("details").innerHTML += "Goals" + "<br>" + hGoalsDis + aGoalsDis;

    
            document.getElementById("t1").innerHTML = teamOne;
            document.getElementById("t2").innerHTML = teamTwo;
            document.getElementById("score").innerHTML = score;
            //call charts loading function
            loadCharts();
}            


//load the charts for the page 
function loadCharts()
  {
//----------------------------------------------------------------------------------------------------------------------------------------------------------
  // -- First Chart --													GOALS
    $('#container').highcharts({
        chart: {
            type: 'bar'
        },
// The next line allows for custom colours to be used but because both parts of chart are part of one series. So they only take the one colour attribute. If we add another series it would create another bar/pie chart in the same style.
		colors: ['#0000FF', '#006600',],
        title: {
            text: 'Goals'
        },
        xAxis: {
            categories: [teamOne, teamTwo],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Goals',
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
            name: 'Goals',
            data: [homeGoals, awayGoals]
        }]
    });

// -----------------------------------------------------------------------------------------------------------------------------------------------------------
  // -- Second Chart											ATTENDANCE
  $('#container2').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Attendance'
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
            name: 'Attendance',
            colorByPoint: true,
            data: [{
                name: "Filled Seats",
                y: filledSeats,
            }, {
                name: "Empty Seats",
                y: emptySeats,
//                sliced: true,
//                selected: true
            }]
        }]
  // -- End Container2 --
    });
  
  //----------------------------------------------------------------------------------------------------------------------------------------------------------
  
  // -- 3th Chart --											YELLOW CARDS
    $('#container5').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Yellow Cards'
        },
        xAxis: {
            categories: [teamOne, teamTwo],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Yellow Cards',
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
            name: 'Yellow Cards',
            data: [homeYellowAmount, awayYellowAmount]
        }]
    });

// -----------------------------------------------------------------------------------------------------------------------------------------------------------
  // -- 4th Chart															RED CARDS
  $('#container6').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Red Cards'
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
            name: 'Red Cards',
            colorByPoint: true,
            data: [{
                name: teamOne,
                y: homeRedAmount
            }, {
                name: teamTwo,
                y: awayRedAmount,
                sliced: true,
                selected: true
            }]
        }]
  // -- End Container6 --
    });
  

// _________________________________________________________________________________________________________________________________________________
// Page Reloading														PAGE RELOADING

// Calls a function to reload the page every 30 seconds based on a timer and clears all existing data on the page. This reloads the entire page
// This will only be enabled on pages that contain data that may change.
// This causes the full page to reload. Ideally we want to be able to reload only the variable data.
$(document).ready(function(){
setInterval(function(){cache_clear()},30000);
});
function cache_clear()
{
window.location.reload(true);
}
  // -- End Original Function
}