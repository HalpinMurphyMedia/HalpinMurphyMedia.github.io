// Team Info Script

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
            document.getElementById("country").innerHTML = couTxt;
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
    var txt, xmlDoc, pName, height, num, player, plyId, pos; 
    xmlDoc = xml.responseXML;
    names = "";
    player = xmlDoc.getElementsByTagName("Player"); 
    pos = xmlDoc.getElementsByTagName("Position");
    pName = xmlDoc.getElementsByTagName("Name");
    height = xmlDoc.getElementsByTagName("Height");
    num = xmlDoc.getElementsByTagName("PlayerNumber");  
    plyId = xmlDoc.getElementsByTagName("Id");
    
        
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
                + "</td> "
				+"<td>"
                + plyId[i].childNodes[0].nodeValue
				+"</td>"
//                if(player[i].childNodes.nodeValue>0)
//                    {
//                        + num[i].childNodes[0].nodeValue;
//                    }
                
        
                + "</tr>";
        
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
            homeTeam[i].childNodes[0].nodeValue  + " "
            + hGoals[i].childNodes[0].nodeValue + " " 
            + aGoals[i].childNodes[0].nodeValue + " " 
            + awayTeam[i].childNodes[0].nodeValue +"<br>";
    }
    document.getElementById("prev").innerHTML=txt;
}     
    
    
    

//get function to obtain a teams previous league positions    
//function getPositions()
//{
    
        var xhttp4;
        //splits years into 2 sections which can then be altered indivually 
        var year1 =15;
        var year2 =16;
        year1.toString();
        year2.toString();
        //combines 2 strings which can be sent to the get function
        var year = ''.concat(year1,year2);

//        for(var x=0;x<2;x++)
//        {
        xhttp4 = new XMLHttpRequest();
//     xhttp4.onreadystatechange = function()
//        {
//        if (xhttp4.readyState == 4 && xhttp4.status == 200) 
//            {
//                myFunction4(xhttp4);
//            }
//        };
        
    
    for(var x=0;x<2;x++)
        {
          xhttp4.onreadystatechange = function()
        {
        if (xhttp4.readyState == 4 && xhttp4.status == 200) 
            {
                myFunction4(xhttp4);
             }
          };
        xhttp4.open("GET", "http://www.xmlsoccer.com/FootballDataDemo.asmx/GetLeagueStandingsBySeason?ApiKey=TCDZLARAPAZJDMAFURGRYNXUTNMYSXEPDAEEUQWVVXRBVTVKOS&league=ScottishPremierLeague&seasonDateString="+year, true);
        xhttp4.send();  
            

            year1-=1;
            year2-=1;
//            alert(year1);
//            alert(year2); 
            function myFunction4(xml)
        {
            var team,xmlDoc;
            xmlDoc = xml.responseXML;

            team=xmlDoc.getElementsByTagName("Team");
//            alert(team.length);
            for(i=0;i<team.length;i++)
            {
                
                if(thisTeam===team[i].childNodes[0].nodeValue)
                    {

                        var position=i+1;
                        year = ''.concat(year1,year2);

//                        alert(year+" "+position);
                    }
            }
        }

    }
    
//}
    
//function myFunction4(xml)
//        {
//            var team,xmlDoc;
//            xmlDoc = xml.responseXML;
//
//            team=xmlDoc.getElementsByTagName("Team");
//            alert(team.length);
//            for(i=0;i<team.length;i++)
//            {
//                
//                if(thisTeam===team[i].childNodes[0].nodeValue)
//                    {
//
//                        var position=i+1;
//                        year = ''.concat(year1,year2);
//
//                        alert(year+" "+position);
//                    }
//            }
//        }    
       

//function getDate()
//{
//    var today = new Date();
//    var dd = today.getDate();
//    var mm = today.getMonth()+1;
//    var yyyy = today.getFullYear();       
//
//    if(dd<10)
//    {
//        dd='0'+dd
//    } 
//
//    if(mm<10)
//    {
//        mm='0'+mm
//    } 
//
//    today = yyyy+'-'+mm+'-'+dd;       
//}
    