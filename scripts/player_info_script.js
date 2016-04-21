// Player Info Script

//load data from local stoarge to be used to detemine page info
var playerId=localStorage.getItem("playerID");  
var teamColour=localStorage.getItem("teamColour");    
var teamSecColour=localStorage.getItem("teamSecColour");    

var ages=[];
var thisPlayer;
var totalScored;
var scored;

//get year to find players age
var today = new Date();

var yyyy = today.getFullYear();  


var xhttp;
xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function()
{
    if (xhttp.readyState == 4 && xhttp.status == 200) 
    {
        myFunction(xhttp);
    }
};

xhttp.open("GET", "http://www.xmlsoccer.com/FootballDataDemo.asmx/GetPlayerById?ApiKey=TCDZLARAPAZJDMAFURGRYNXUTNMYSXEPDAEEUQWVVXRBVTVKOS&playerId="+playerId, true);
xhttp.send();

function myFunction(xml)
{
    var i, teamTxt, playerName, xmlDoc,country,playerTxt, countryTxt,team, infoTxt,pos,birth,cost,height,playerPos;
    xmlDoc = xml.responseXML;
    teamTxt = "";
    playerTxt = "";
    countryTxt = "";
    infoTxt="";
    playerPos="";

    playerName = xmlDoc.getElementsByTagName("Name");
    country = xmlDoc.getElementsByTagName("Nationality");
    pos = xmlDoc.getElementsByTagName("Position"); 
    birth = xmlDoc.getElementsByTagName("DateOfBirth");
    cost = xmlDoc.getElementsByTagName("Signing"); 
    height = xmlDoc.getElementsByTagName("Height"); 
    
    var player = xmlDoc.getElementsByTagName("Player");



        for (i = 0; i < playerName.length; i++) 
            { 
                playerTxt=playerName[i].childNodes[0].nodeValue;
                thisPlayer=playerName[i].childNodes[0].nodeValue;
                if(country[i].childNodes.length>0)
                    {
                countryTxt= "Country:" + " " +country[i].childNodes[0].nodeValue;
                    }
                //determine players age
                var year = birth[i].childNodes[0].nodeValue.split("-"); 
                ages[i] = yyyy-year[0];
                playerPos=  "Position:" + " " + pos[i].childNodes[0].nodeValue;

                infoTxt=
                    "<tr>"+  "<td>" + "Age:" + " " + ages[0] + "</td>" +"</tr>";

                
                if(player[i].childNodes.length==23)
                    {
                        infoTxt+= "<tr>" + "<td>" + "Height:" + " "  + height[i].childNodes[0].nodeValue +"m"+ "</td>" +"</tr>";

                    }
                
                    if(cost[i].childNodes[0].nodeValue==="Signed")
                    {
                        infoTxt+= "<tr>" + "<td>" + "Cost:"+ " " + "Free" + "</td>" +"</tr>";

                    }
                    else
                    {
                        infoTxt+=
                            "<tr>"+"<td>" + "Cost:"+ " " + cost[i].childNodes[0].nodeValue + "</td>"+"</tr>";
                    }
                
                

            }
            document.getElementById("title").innerHTML = thisPlayer;
            document.getElementById("playerName").innerHTML = playerTxt;
            document.getElementById("pos").innerHTML = playerPos;
            document.getElementById("country").innerHTML = countryTxt;
            document.getElementById("info").innerHTML += infoTxt;


}

//gathers extra info from the top scorers page if the play is in the top 50 goal scorers in the league
var xhttp2;

xhttp2 = new XMLHttpRequest();
xhttp2.onreadystatechange = function() {
    if (xhttp2.readyState == 4 && xhttp2.status == 200)
    {
        myFunction2(xhttp2);
    }
};
xhttp2.open("GET", "http://www.xmlsoccer.com/FootballDataDemo.asmx/GetTopScorersByLeagueAndSeason?ApiKey=TCDZLARAPAZJDMAFURGRYNXUTNMYSXEPDAEEUQWVVXRBVTVKOS&league=ScottishPremierLeague&seasonDateString=1516", true);
xhttp2.send();

function myFunction2(xml)
{
    var name, goals,i, txt, xmlDoc,pens,missedPens; 
    xmlDoc = xml.responseXML;
    txt = "";
    goals = xmlDoc.getElementsByTagName("Goals");
    name = xmlDoc.getElementsByTagName("Name");
    pens = xmlDoc.getElementsByTagName("Penalties");
    missedPens = xmlDoc.getElementsByTagName("MissedPenalties");


    //detects if player is in top scorers list to gain extra stats
    //add space to end of currPlay to ensure names match
    for (i = 0; i < name.length; i++)
    {
        var currPlay = name[i].childNodes[0].nodeValue+" ";
        if(thisPlayer==currPlay)
            {
                txt= "<tr>" + "<td>" + "Goals:" + " "  + goals[i].childNodes[0].nodeValue + "</td>" +"</tr>";
                txt+= "<tr>" + "<td>" + "Penalties:" + " "  + pens[i].childNodes[0].nodeValue + "</td>" +"</tr>";
                txt+= "<tr>" + "<td>" + "Missed Penalties:" + " "  + missedPens[i].childNodes[0].nodeValue + "</td>" +"</tr>";

                scored=parseInt(pens[i].childNodes[0].nodeValue);
                totalScored=parseInt(goals[i].childNodes[0].nodeValue);
                document.getElementById("info").innerHTML += txt;
                //call the charts function
                createCharts();

            }
        
    }
    
}

function createCharts()
{
$('#charts').highcharts({
        chart: {
            type: 'bar'
        },
// The next line allows for custom colours to be used but because both parts of chart are part of one series. So they only take the one colour attribute. If we add another series it would create another bar/pie chart in the same style.
    //loads in the previous pages teams colours to be used on this page
		colors: [teamColour, teamSecColour],
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
            name: "Goals",
            data: [totalScored]},             
       {
            name: "Penalties",
            data: [scored],
                 
            
        },
       ],
        
        tooltip: {
            formatter: function() {return ' ' +
  
                "Goals:" + " " +totalScored+"<br>"+"Penalties:" + " " +scored;                           

            }
        }
    });
}
