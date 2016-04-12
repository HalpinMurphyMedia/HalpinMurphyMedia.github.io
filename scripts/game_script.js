// JavaScript Document

var teamList=[];
var splitTxtHome=[];
var homeColour="";
var awayColour="";
var homeRange="";
var awayRange="";

//necessarry info for teams which was not given via api
var celtic =new Object();
celtic.name ="Celtic";
celtic.colour = "#2E6F38";
celtic.away="#255022";
celtic.range = "green";
celtic.secColour ="white";
celtic.capacity = 60832;
teamList.push(celtic);

var aberdeen =new Object();
aberdeen.name ="Aberdeen";
aberdeen.colour = "#D2312C";
aberdeen.secColour ="white";
aberdeen.capacity = 20916;
aberdeen.away="#1F1F1F";
aberdeen.range = "red";
teamList.push(aberdeen);

var stJohnstone =new Object();
stJohnstone.name ="St Johnstone";
stJohnstone.colour = "#18327A";
stJohnstone.secColour ="#1F1F1F";
stJohnstone.capacity = 10696;
stJohnstone.away="#E1E6FA";
stJohnstone.range = "blue";
teamList.push(stJohnstone);

var motherwell =new Object();
motherwell.name ="Motherwell";
motherwell.colour = "#F0AD35";
motherwell.secColour ="white";
motherwell.capacity = 13677;
motherwell.away="#80222B";
motherwell.range = "yellow";
teamList.push(motherwell);

var inverness =new Object();
inverness.name ="Inverness C";
inverness.colour = "#184991";
inverness.secColour ="#1F1F1F";
inverness.capacity = 7800;
inverness.away="#E1E6FA";
inverness.range = "blue";
teamList.push(inverness);

var hearts =new Object();
hearts.name ="Hearts";
hearts.colour = "#80222B";
hearts.secColour ="#1F1F1F";
hearts.capacity = 17529;
hearts.away="#BEBEBE";
hearts.range = "red";
teamList.push(hearts);

var dundeeU =new Object();
dundeeU.name ="Dundee United";
dundeeU.colour = "#EC8127";
dundeeU.secColour ="#1F1F1F";
dundeeU.capacity = 14223;
dundeeU.away="#E1E6FA";
dundeeU.range = "yellow";
teamList.push(dundeeU);


var ross =new Object();
ross.name ="Ross County";
ross.colour = "#000F44";
ross.away="#DC3232";
ross.range = "blue";
ross.secColour ="white";
ross.capacity = 6541;
teamList.push(ross);

var dundee =new Object();
dundee.name ="Dundee FC";
dundee.colour = "#031F4A";
dundee.away="#5ABEFA";
dundee.range = "blue";
dundee.secColour ="white";
dundee.capacity = 11506;
teamList.push(dundee);

var kilmarnock =new Object();
kilmarnock.name ="Kilmarnock";
kilmarnock.colour = "#222B7A";
kilmarnock.secColour ="white";
kilmarnock.capacity = 18182;
kilmarnock.away="#1F1F1F";
kilmarnock.range = "blue";
teamList.push(kilmarnock);

var partick =new Object();
partick.name ="Partick";
partick.colour = "#C81E28";
partick.secColour ="yellow";
partick.capacity = 10102;
partick.away="#84B2CF";
partick.range = "red";
teamList.push(partick);

var hamilton =new Object();
 hamilton.name ="Hamilton";
 hamilton.colour = "#AF3838";
hamilton.secColour ="white";
 hamilton.capacity = 6018;
hamilton.away="#78BEFA";
hamilton.range = "red";
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
                        homeColour=teamList[y].colour;
                        homeRange=teamList[y].range;
//                                            alert(homeRange);

                        $(".teamOne").css("color",(teamList[y].secColour));

   
                }
                //also loop thorugh to see if away team matches and if so also get their colour and font colour
                if(aTeam[0].childNodes[0].nodeValue==teamList[y].name)
                    {
                        
                        $(".teamTwo").css("background-color",(teamList[y].away));  
                        awayColour=teamList[y].away;
//                        awayRange=teamList[y].range;
//                        alert(awayRange);
//                        alert(homeRange);

                        $(".teamTwo").css("color",(teamList[y].secColour));
                        
//                        if(homeRange==awayRange)
//                        {
////                            alert("match");
//                            $(".teamTwo").css("background-color",(teamList[y].away));  
//                            awayColour=teamList[y].away;
//
//                        }   

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
            
//              homeLineupTxt +=
                  
                  if(homeLG[i].childNodes.length>0)
                  {
                       homeLineupTxt +=" <div class=awayG><p>"+homeLG[i].childNodes[0].nodeValue+"</p></div>"
                  }
                if(homeLD[i].childNodes.length>0)
                  {
                       homeLineupTxt += " <div class=awayG><p>"+homeLD[i].childNodes[0].nodeValue+"</p></div>"   
                  }
                if(homeLM[i].childNodes.length>0)
                  {    
                       homeLineupTxt +=" <div class=awayG><p>"+homeLM[i].childNodes[0].nodeValue+"</p></div>"
                  }
                if(homeLF[i].childNodes.length>0)
                  {    
                       homeLineupTxt +=" <div class=awayG><p>"+homeLF[i].childNodes[0].nodeValue+"</p></div>"
                  }
                
                if(awayLF[i].childNodes.length>0)
                  {
                       awayLineupTxt +=" <div class=awayG><p>"+awayLF[i].childNodes[0].nodeValue+"</p></div>"
                  }
                if(awayLM[i].childNodes.length>0)
                  {
                       awayLineupTxt += " <div class=awayG><p>"+awayLM[i].childNodes[0].nodeValue+"</p></div>"   
                  }
                if(awayLD[i].childNodes.length>0)
                  {    
                       awayLineupTxt +=" <div class=awayG><p>"+awayLD[i].childNodes[0].nodeValue+"</p></div>"
                  }
                if(awayLG[i].childNodes.length>0)
                  {    
                       awayLineupTxt +=" <div class=awayG><p>"+awayLG[i].childNodes[0].nodeValue+"</p></div>"
                  }
                
                  
              
             
            
//            awayLineupTxt +=  
//             " <div class=awayG><p>"+awayLF[i].childNodes[0].nodeValue+"</p></div>"
//              + " <div class=awayG><p>"+awayLM[i].childNodes[0].nodeValue+"</p></div>"   
//              + " <div class=awayG><p>"+awayLD[i].childNodes[0].nodeValue+"</p></div>"
//              + " <div class=awayG><p>"+awayLG[i].childNodes[0].nodeValue+"</p></div>";
                
                //gets the string of scorers from home side
                 if(homeGoalDets[i].childNodes.length>0)
                    {
                        homeGoalText = homeGoalDets[i].childNodes[0].nodeValue;
                        //split the string at ; mark which seperates each player
                        splitTxtHome = homeGoalText.split(";");
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
            document.getElementById("HCdetails").innerHTML += homeYellowFinal;
            document.getElementById("ACdetails").innerHTML +=  awayYellowFinal;
            document.getElementById("details").innerHTML += homeRedFinal + awayRedFinal;
            document.getElementById("HGdetails").innerHTML += hGoalsDis;
            document.getElementById("AGdetails").innerHTML += aGoalsDis;
            $("#ACdetails").hide();
            $("#HCdetails").hide();
            $("#AGdetails").hide();
            $("#HGdetails").hide();
            $("#details").hide();


    
    
    document.getElementById("field").innerHTML=homeLineupTxt+awayLineupTxt;

    
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
		colors: [homeColour, awayColour],
        title: {
            text: 'Goals'
        },
        xAxis: {
            categories: " ",
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
            name: teamOne,
            data: [homeGoals]},             
       {
            name: teamTwo,
            data: [awayGoals],
                 
            
        },
       ],
        
        tooltip: {
            formatter: function() {return ' ' +
  
                teamOne + '<br />' + document.getElementById('HGdetails').innerHTML+ teamTwo+"<br/>" +document.getElementById('AGdetails').innerHTML;                           

            }
        }
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
      		colors: [homeColour, awayColour],

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
// The next line allows for custom colours to be used but because both parts of chart are part of one series. So they only take the one colour attribute. If we add another series it would create another bar/pie chart in the same style.
		colors: [homeColour, awayColour],
        title: {
            text: 'Yellow Cards'
        },
        xAxis: {
            categories: " ",
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Yellows',
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
            name: teamOne,
            data: [homeYellowAmount]},             
       {
            name: teamTwo,
            data: [awayYellowAmount],
                 
            
        },
       ],
        
        tooltip: {
            formatter: function() {return ' ' +
  
                teamOne + '<br />' + document.getElementById('HCdetails').innerHTML+ teamTwo+"<br/>" +document.getElementById('ACdetails').innerHTML;                           

            }
        }
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
      		colors: [homeColour, awayColour],

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