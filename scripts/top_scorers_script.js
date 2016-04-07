// Top Scorers Table

var xhttp;

xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200)
    {
        myFunction(xhttp);
    }
};
xhttp.open("GET", "http://www.xmlsoccer.com/FootballDataDemo.asmx/GetTopScorersByLeagueAndSeason?ApiKey=TCDZLARAPAZJDMAFURGRYNXUTNMYSXEPDAEEUQWVVXRBVTVKOS&league=ScottishPremierLeague&seasonDateString=1516", true);
xhttp.send();

function myFunction(xml)
    {
    var name, rank, i, txt, xmlDoc; 
    xmlDoc = xml.responseXML;
    txt = "";
    goals = xmlDoc.getElementsByTagName("Goals");
    name = xmlDoc.getElementsByTagName("Name");
    team = xmlDoc.getElementsByTagName("TeamName");

    for (i = 0; i < name.length; i++)
    { 
        
        pos=i+1;
        txt +="<tr class = shade_one>" 
       
            + "<td>" 
            + pos
            + "</td>"
       
            + "<td>" 
            + name[i].childNodes[0].nodeValue 
            + "</td>"
        
            + "<td>" 
            + team[i].childNodes[0].nodeValue 
            + "</td>"
            
        
            + "<td>" 
            + goals[i].childNodes[0].nodeValue 
            + "</td>"
           
            + "</tr>";



    }
    document.getElementById("topScorer").innerHTML += txt;
}