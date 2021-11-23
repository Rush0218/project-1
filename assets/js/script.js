var searchbtn = document.querySelector(".search-btn"); 
var searchResults = document.querySelector(".results-container"); 

var tasteApi = "427221-EventFin-KMIu1"; 
var ticketApi = "WE75fBd7iGT7YVAkrBDaa39daiK3yUke"; 

function fetchArtists(artist) {
    
    var tasteUrl ="https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?q=" + artist + "&limit=10&apikey=" + tasteApi; 
    fetch(tasteUrl).then(function(response) {
        return response.json(); 
    }).then(function(data) { 
        displayArtists(data); 
    })
}; 

function displayArtists(data) {
    var {Name} = data.Similar.Results[0]; 
    document.querySelector(".result1").textContent = Name; 
    fetchEvents(Name); 

    var {Name} = data.Similar.Results[1]; 
    document.querySelector(".result2").textContent = Name; 
    fetchEvents2(Name); 

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





//fetch functions
function fetchEvents(artist) {
    var ticketUrl = "https://app.ticketmaster.com/discovery/v2/attractions.json?keyword=" + artist + "&apikey=" + ticketApi;
    fetch(ticketUrl).then(function(response) {
        if (artist.ok) {}
        return response.json(); 
    }).then(function(data) {
        console.log(data); 
        displayEvent(data); 
    })
}; 

function fetchEvents2(artist) {
    var ticketUrl = "https://app.ticketmaster.com/discovery/v2/attractions.json?keyword=" + artist + "&apikey=" + ticketApi;
    fetch(ticketUrl).then(function(response) {
        return response.json(); 
    }).then(function(data) {
        console.log(data); 
        displayEvent2(data); 
    })
}; 




//display fucntions
function displayEvent(data) {
    var { name } = data._embedded.attractions[0].classifications[0].subGenre; 
    var { url } = data._embedded.attractions[0];  
    document.querySelector("#event1").textContent = name; 
    var a = document.createElement("a"); 
    a.href = url; 
    a.target = "_blank"; 
    a.textContent = "Upcoming Events"; 
    var linkOne = document.querySelector("#link1"); 
    linkOne.appendChild(a); 
    var { url } = data._embedded.attractions[0].externalLinks.homepage[0]; 
    var b = document.createElement("a"); 
    b.href = url; 
    b.target = "_blank"; 
    b.textContent="Homepage"; 
    var homeLink = document.querySelector("#homepage1"); 
    homeLink.appendChild(b); 
}; 

function displayEvent2(data) {
    var { name } = data._embedded.attractions[0].classifications[0].subGenre; 
    var { url } = data._embedded.attractions[0];  
    document.querySelector("#event2").textContent = name; 
    var a = document.createElement("a"); 
    a.href = url; 
    a.target = "_blank"; 
    a.textContent = "Upcoming Events"; 
    var linkOne = document.querySelector("#link2"); 
    linkOne.appendChild(a); 
    var { url } = data._embedded.attractions[0].externalLinks.homepage[0]; 
    var b = document.createElement("a"); 
    b.href = url; 
    b.target = "_blank"; 
    b.textContent="Homepage"; 
    var homeLink = document.querySelector("#homepage2"); 
    homeLink.appendChild(b); 
}; 

function displayEvent3(data) {
    var { name } = data._embedded.attractions[0].classifications[0].subGenre; 
    var { url } = data._embedded.attractions[0];  
    document.querySelector("#event3").textContent = name; 
    var a = document.createElement("a"); 
    a.href = url; 
    a.target = "_blank"; 
    a.textContent = "Upcoming Events"; 
    var linkOne = document.querySelector("#link3"); 
    linkOne.appendChild(a); 
    var { url } = data._embedded.attractions[0].externalLinks.homepage[0]; 
    var b = document.createElement("a"); 
    b.href = url; 
    b.target = "_blank"; 
    b.textContent="Homepage"; 
    var homeLink = document.querySelector("#homepage3"); 
    homeLink.appendChild(b); 
};



function search() {
    fetchArtists(document.querySelector(".search-info").value); 
}; 

searchbtn.addEventListener("click", search); 


