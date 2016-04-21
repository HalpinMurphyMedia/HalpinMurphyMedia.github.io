// League Table Script


//gathers and creates the current table for the scottish league
//includes stats such as games wom, lost and goals etc
var xhttp;

xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) 
	{
        myFunction(xhttp);
    }
};
xhttp.open("GET", "http://www.xmlsoccer.com/FootballDataDemo.asmx/GetLeagueStandingsBySeason?ApiKey=TCDZLARAPAZJDMAFURGRYNXUTNMYSXEPDAEEUQWVVXRBVTVKOS&league=ScottishPremierLeague&seasonDateString=1516", true);
xhttp.send();

function myFunction(xml)
    {
    var team, points, i, txt, xmlDoc, played, goalDiff, won, drawn, lost, goalsFor, goalsAgainst,teamId; 
    xmlDoc = xml.responseXML;
    txt =" ";
    team = xmlDoc.getElementsByTagName("Team");
    teamId = xmlDoc.getElementsByTagName("Team_Id");
    points = xmlDoc.getElementsByTagName("Points");
    played = xmlDoc.getElementsByTagName("Played");
    goalDiff = xmlDoc.getElementsByTagName("Goal_Difference");
    won = xmlDoc.getElementsByTagName("Won");
    drawn = xmlDoc.getElementsByTagName("Draw");
    lost = xmlDoc.getElementsByTagName("Lost");
    goalsFor = xmlDoc.getElementsByTagName("Goals_For");
    goalsAgainst = xmlDoc.getElementsByTagName("Goals_Against");
    
    for (i = 0; i < team.length; i++)
    { 
        pos=i+1;
        txt +="<tr class = shade_one >" 
       
            + "<td>" 
            + pos
            + "</td>"
       
            + "<td onclick=getTeamData("+teamId[i].childNodes[0].nodeValue+")>" 
            + '<a href="team.html">'
            + team[i].childNodes[0].nodeValue 
            +"</a>"
            +"</td>"   
       
            + "<td>" 
            + played[i].childNodes[0].nodeValue
            +"</td>"
            
            + "<td>" 
            + won[i].childNodes[0].nodeValue
            +"</td>"
            
            + "<td>" 
            + drawn[i].childNodes[0].nodeValue
            +"</td>"
            
            + "<td>" 
            + lost[i].childNodes[0].nodeValue
            +"</td>"
            
            + "<td>" 
            +goalsFor[i].childNodes[0].nodeValue
            +"</td>"
            
            + "<td>" 
            + goalsAgainst[i].childNodes[0].nodeValue
            +"</td>"
            
            +"<td>"
            + goalDiff[i].childNodes[0].nodeValue
            +"</td>"
            
            + "<td>" 
            + points[i].childNodes[0].nodeValue
            +"</td>"
       
            + "</tr>";


    }
    document.getElementById("leagueTable").innerHTML += txt;
}

//store team id in local stroage, used when user selects a team, this can then be loaded by the next page    
function getTeamData(teamId)
{        
    var tId = teamId;
    localStorage.setItem("teamID",teamId);
} 