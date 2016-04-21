// Team Info Script

//necessarry info for teams which was not given via api
var teamList=[];

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

// global variables
var totalShots;
var totalCon;
var totalGoals;
var totalYellow;
var totalRed;
var gamesPlayed;
var avgCards;
var rate;
var teamC;
var teamAC;

var teamId=localStorage.getItem("teamID");    
var thisTeam="";
var today = new Date();
var oneMonthAgo = new Date();
 
//gets the current date
//used to determine the last months
//matches a team has played
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

        for(y=0;y<teamList.length;y++)
            {
                //checks if the cureent team is one of the 12 defined above
                if(team[0].childNodes[0].nodeValue==teamList[y].name)
                    {
                        //if so we can gather the colour info and change the page deisgn sloghty based on this using jquery
                        $("#teamName").css("background-color",(teamList[y].colour));  
                        $("#teamName").css("color",(teamList[y].secColour));
                        
                        teamC=teamList[y].colour;
                        teamAC=teamList[y].away;
                        //also save this infomation to be used by the player page as the only
                        //way to access players is through the team page
                        localStorage.setItem("teamColour",teamList[y].colour);
                        localStorage.setItem("team",teamList[y].name);
                        localStorage.setItem("teamSecColour",teamList[y].away);


                    }
                    
            }
    
        //adds in the teams name, country and stadium
        for (i = 0; i < team.length; i++) 
            { 
                
                teamTxt=team[i].childNodes[0].nodeValue;
                
                stdTxt=stadium[i].childNodes[0].nodeValue;
                
                couTxt=country[i].childNodes[0].nodeValue;
            }
    
    
            document.getElementById("teamName").innerHTML = teamTxt;
                document.getElementById("title").innerHTML =teamTxt;

            document.getElementById("stadium").innerHTML = stdTxt;
            thisTeam=teamTxt;

} 

//loads a list of the players for the current team
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
       
        
            
    }
    document.getElementById("players").innerHTML += names;
    //changes table colours based on the team
    $("#players th").css("background-color",teamC);  
    $("#prev th").css("background-color",teamC);  

}   
    
//saves the player id before the player page is loaded    
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
    var txt, xmlDoc, homeTeam, awayTeam,hGoals,aGoals,matchId,homeId,awayId; 
    txt="";
    xmlDoc = xml.responseXML;
    homeTeam = xmlDoc.getElementsByTagName("HomeTeam");
    awayTeam = xmlDoc.getElementsByTagName("AwayTeam");
    hGoals = xmlDoc.getElementsByTagName("HomeGoals");
    aGoals = xmlDoc.getElementsByTagName("AwayGoals");
    matchId = xmlDoc.getElementsByTagName("Id");
    homeId = xmlDoc.getElementsByTagName("HomeTeam_Id");
    awayId = xmlDoc.getElementsByTagName("AwayTeam_Id");
    
        
    for (i = 0; i < homeTeam.length; i++) 
    {     

        //fills in match information in the same manner as the index page
        txt+= "<tr>" 
            + "<td onclick=getTeamData("+homeId[i].childNodes[0].nodeValue+")>" 
            + '<a href="team.html">'
            + homeTeam[i].childNodes[0].nodeValue 
            +"</a>"
            + "</td>"
        
            + "<td class='mScore' onclick=getMatchData("+matchId[i].childNodes[0].nodeValue+")>"
            + '<a href="game.html">'
            + hGoals[i].childNodes[0].nodeValue
            + " "
            + aGoals[i].childNodes[0].nodeValue
            +"</a>"
            + "</td>"
        
            + "<td onclick=getTeamData("+awayId[i].childNodes[0].nodeValue+")>" 
            + '<a href="team.html">'
            + awayTeam[i].childNodes[0].nodeValue 
            +"</a>"
            +"</td>"                
            +"</tr>";

    }
    document.getElementById("prev").innerHTML+=txt;
}     
 
//gets info for the team that is presnt in xml soccers league table such as goals, cards, positon
//shots etc
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
            //parses the data into int format to enure we can
            //use these numbers and perform the maths we want to
            totalGoals=parseInt(goals[i].childNodes[0].nodeValue);
            
            totalCon=parseInt(goalsA[i].childNodes[0].nodeValue);
            
            totalShots=parseInt(shots[i].childNodes[0].nodeValue);
            
            //using toal shots and goals we can determine a teams shot conversion rate
            rate=totalShots/totalGoals;
            
            //set to 2 decinaml places to avoid a long list of numbers
            rate= rate.toFixed(2);
            
            totalYellow= parseInt(yellows[i].childNodes[0].nodeValue);
            totalRed= parseInt(reds[i].childNodes[0].nodeValue);
            var totalC= totalRed+totalYellow;

            //using a similar method to gethering a teams shot conversion rate we can 
            //also deterime a teams average cards per game based on how many cards they have
            //obtained and how many games played
            gamesPlayed= parseInt(played[i].childNodes[0].nodeValue);
            avgCards = totalC/gamesPlayed;
            avgCards =avgCards.toFixed(2);
            
            document.getElementById("currentPos").innerHTML+=i+1;




        }
    }
            showCharts();    
}   

//send match id from clicked item to thsi function which then saves it in local storage and can then be loaded by the next page
function getMatchData(matchId)
{        
    var id = matchId;
    localStorage.setItem("matchID",matchId);
}

//store team id in local stroage, used when user selects a team, this can then be loaded by the next page    
function getTeamData(teamId)
{        
    var tId = teamId;
    localStorage.setItem("teamID",teamId);
} 


//creates and displays the charts on the page
function showCharts()
    {
        
    $('#goalCharts').highcharts({
        chart: {
            type: 'bar'
        },
        //uses the colours we saved above to genreate different
        //style charts for different teams
        colors: [teamAC, teamC,],
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
      		colors: ["#FFE11A","#B9121B"],
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

