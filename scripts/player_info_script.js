// Player Info Script

var playerId=localStorage.getItem("playerID");    
var ages=[];

//get year to find players age
var today = new Date();

var yyyy = today.getFullYear();  

//today.toString();

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
    var i, teamTxt, playerName, xmlDoc,country,playerTxt, countryTxt,team, infoTxt,pos,birth,cost,height;
    xmlDoc = xml.responseXML;
    teamTxt = "";
    playerTxt = "";
    countryTxt = "";
    infoTxt="";

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
                countryTxt=country[i].childNodes[0].nodeValue;
                
                //determine players age
                var year = birth[i].childNodes[0].nodeValue.split("-"); 
                ages[i] = yyyy-year[0];
//                alert(ages[0]);
                
                infoTxt=
                        "Position:" + " " + pos[i].childNodes[0].nodeValue
                        +"<br>"
                        + "Age:" + " " + ages[0]
                        +"<br>"
                
                if(player[i].childNodes.length==23)
                    {
                        infoTxt+= "Height:" + " " + height[i].childNodes[0].nodeValue
                        +"<br>"

                    }
                
                    if(cost[i].childNodes[0].nodeValue==="Signed")
                    {
                        infoTxt+="Cost:" + " " + "Free";
                    }
                    else
                    {
                        +"Cost:" + " " + cost[i].childNodes[0].nodeValue;           
                    }
                
                

            }
    
            document.getElementById("playerName").innerHTML = playerTxt;
            document.getElementById("country").innerHTML = countryTxt;
            document.getElementById("info").innerHTML = infoTxt;


} 