
var searchbtn = document.querySelector(".search-btn"); 
var searchResults = document.querySelector(".results-container"); 

var tasteApi = "427221-EventFin-KMIu1"; 
var ticketApi = "WE75fBd7iGT7YVAkrBDaa39daiK3yUke"; 



function fetchArtists(artist) {
    var tasteUrl = "https://tastedive.com/api/similar?q=" + artist + "&limit=10&apikey=" + tasteApi; 
    fetch(tasteUrl).then(function(response) {
        return response.json(); 
    }).then(function(data) { 
        displayArtists(data);  
    })
}; 


function displayArtists(data) {
    var {Name} = data.Similar.Results[0]; 
    document.querySelector(".result1").textContent = Name; 

    var {Name} = data.Similar.Results[1]; 
    document.querySelector(".result2").textContent = Name; 

    var {Name} = data.Similar.Results[2]; 
    document.querySelector(".result3").textContent = Name; 
    
    var {Name} = data.Similar.Results[3]; 
    document.querySelector(".result4").textContent = Name; 

    var {Name} = data.Similar.Results[4]; 
    document.querySelector(".result5").textContent = Name; 

    var {Name} = data.Similar.Results[5]; 
    document.querySelector(".result6").textContent = Name; 

    var {Name} = data.Similar.Results[6]; 
    document.querySelector(".result7").textContent = Name; 

    var {Name} = data.Similar.Results[7]; 
    document.querySelector(".result8").textContent = Name; 

    var {Name} = data.Similar.Results[8]; 
    document.querySelector(".result9").textContent = Name; 

    var {Name} = data.Similar.Results[9]; 
    document.querySelector(".result10").textContent = Name; 
 
    searchResults.setAttribute("style", "display:flex"); 
    
}






function fetchEvents(artist) {
    var ticketUrl = "https://app.ticketmaster.com/discovery/v2/attractions.json?keyword=" + artist + "&apikey=" + ticketApi;
    fetch(ticketUrl).then(function(response) {
        return response.json(); 
    }).then(function(data) {
        //console.log(data); 
    })
}; 



function search() {
    fetchArtists(document.querySelector(".search-info").value); 
}; 

searchbtn.addEventListener("click", search); 


