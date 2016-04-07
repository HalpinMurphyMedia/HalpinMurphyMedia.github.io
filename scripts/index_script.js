// Index script

  //gets current date in format to be used as well as date minus 1 month to be used
    //shows all games from previous month
    var today = new Date();
    var startDate = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();  
    
    var SDdd = startDate.getDate();
    var SDmm = startDate.getMonth();
    var SDyyyy = startDate.getFullYear();

    //ensures date stays in format 
    if(dd<10)
    {
        dd='0'+dd;
    } 

    if(mm<10)
    {
        mm='0'+mm;
    } 
    
     if(SDdd<10)
    {
        SDdd='0'+SDdd;
    } 

    if(SDmm<10)
    {
        SDmm='0'+SDmm;
    } 

    today = yyyy+'-'+mm+'-'+dd;
    startDate = SDyyyy+'-'+SDmm+'-'+SDdd;
    
    //convert to string to be used and call the get games function
    today.toString();
    startDate.toString();
    getGames();

//called when user wants to see games from previous dates
  function changeDate()
    {
        var newDate = document.getElementById("inputDate").value;
        newDate.toString();
        startDate=newDate;
        getGames();
    }    
    
//set up and call games if they are currently being played    
var matchDetails=[];
var xhttp;
xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function()
{
    if (xhttp.readyState == 4 && xhttp.status == 200) 
    {
        myFunction(xhttp);
    }
};
    
xhttp.open("GET", "http://www.xmlsoccer.com/FootballDataDemo.asmx/GetLiveScoreByLeague?ApiKey=TCDZLARAPAZJDMAFURGRYNXUTNMYSXEPDAEEUQWVVXRBVTVKOS&league=ScottishPremierLeague", true);
    
    
xhttp.send();

function myFunction(xml)
{
    var home, away, hTeam, aTeam, i, txt, xmlDoc; 
    xmlDoc = xml.responseXML;
    txt = "";
    if( xmlDoc.getElementsByTagName("XMLSOCCER.COM").length < 2 )
        {
            //no live games currently on. display this message
            document.getElementById("live").innerHTML = "No matches are currently being played";
        }
    else
    {    
        home = xmlDoc.getElementsByTagName("HomeGoals");
        away = xmlDoc.getElementsByTagName("AwayGoals");
        hTeam = xmlDoc.getElementsByTagName("HomeTeam");
        aTeam = xmlDoc.getElementsByTagName("AwayTeam");

        for (i = 0; i < home.length; i++) 
        { 
        txt +="<tr>" 
            + "<td>" 
            + hTeam[i].childNodes[0].nodeValue 
            + "</td>"
            + "<td onclick=getMatchData()>"
            + home[i].childNodes[0].nodeValue
            + " "
            + away[i].childNodes[0].nodeValue
            + "</td>"
            + "<td>" 
            + aTeam[i].childNodes[0].nodeValue 
            + "</tr>";
        }
        document.getElementById("tableLive").innerHTML = txt;
    }
}


//var xhttp2;
//xhttp2 = new XMLHttpRequest();
//xhttp2.onreadystatechange = function()
//{
//    if (xhttp2.readyState == 4 && xhttp2.status == 200) 
//    {
//        myFunction2(xhttp2);
//    }
//};
    
//xhttp2.open("GET", "http://www.xmlsoccer.com/FootballDataDemo.asmx/GetFixturesByLeagueAndSeason?ApiKey=TCDZLARAPAZJDMAFURGRYNXUTNMYSXEPDAEEUQWVVXRBVTVKOS&seasonDateString=1516&league=ScottishPremierLeauge", true);

//retrive and show results from previous games
function getGames()
    {    
        var xhttp2;
        xhttp2 = new XMLHttpRequest();
        xhttp2.onreadystatechange = function()
        {
            if (xhttp2.readyState == 4 && xhttp2.status == 200) 
            {
            myFunction2(xhttp2);
            }
        };        
        
        xhttp2.open("GET", "http://www.xmlsoccer.com/FootballDataDemo.asmx/GetFixturesByDateIntervalAndLeague?league=ScottishPremierLeague&ApiKey=TCDZLARAPAZJDMAFURGRYNXUTNMYSXEPDAEEUQWVVXRBVTVKOS&startDateString="+startDate+"&endDateString="+today, true);
        
        xhttp2.send();
}

function myFunction2(xml)
    {
    var home, away, hTeam, aTeam, i, txt, xmlDoc, matchId, homeId, awayId, dateText; 
    xmlDoc = xml.responseXML;
    txt = "";
    dateText=startDate;
    home = xmlDoc.getElementsByTagName("HomeGoals");
    away = xmlDoc.getElementsByTagName("AwayGoals");
    hTeam = xmlDoc.getElementsByTagName("HomeTeam");
    aTeam = xmlDoc.getElementsByTagName("AwayTeam");
    hGoalDetails = xmlDoc.getElementsByTagName("HomeGoalDetails");
    aGoalDetails = xmlDoc.getElementsByTagName("AwayGoalDetails");
    matchId = xmlDoc.getElementsByTagName("Id");
    homeId = xmlDoc.getElementsByTagName("HomeTeam_Id");
    awayId = xmlDoc.getElementsByTagName("AwayTeam_Id");

    //loop trough list of every game and display relevant data    
    for (i = 0; i < home.length; i++) 
    {          
        txt +=
            "<tr>" 
            + "<td onclick=getTeamData("+homeId[i].childNodes[0].nodeValue+")>" 
            + '<a href="teamInfo.html">'
            + hTeam[i].childNodes[0].nodeValue 
            +"</a>"
            + "</td>"
            + "<td onclick=getMatchData("+matchId[i].childNodes[0].nodeValue+")>"
            + '<a href="game.html">'
            + home[i].childNodes[0].nodeValue
            + " "
            + away[i].childNodes[0].nodeValue
            +"</a>"
            + "</td>"
            + "<td onclick=getTeamData("+awayId[i].childNodes[0].nodeValue+")>" 
            + '<a href="teamInfo.html">'
            + aTeam[i].childNodes[0].nodeValue 
            +"</a>"
            +"</td>"                
            +"</tr>";

    }
    document.getElementById("table").innerHTML = txt;
    document.getElementById("past").innerHTML = "Games since" + " " + startDate;
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