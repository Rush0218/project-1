var searchbtn = document.querySelector(".search-btn"); 
var searchResults = document.querySelector(".results-container"); 
var tasteApi = "427221-EventFin-KMIu1"; 
var ticketApi = "WE75fBd7iGT7YVAkrBDaa39daiK3yUke"; 


function fetchArtists(artist) {
    var tasteUrl ="https://tastedive.com/api/similar?q=" + artist + "&limit=10&apikey=" + tasteApi;
    fetch(tasteUrl).then(function(response) {
        return response.json(); 
    }).then(function(data) { 
        displayArtists(data, artist); 
      })
}; 


function displayArtists(data, artist) {

    function clearSearch(){
        document.getElementById("searchForm").value = "";
    };

    var history = document.querySelector(".search-history"); 
    var list = document.querySelector(".search-list"); 
    var listItem = document.createElement("button"); 

    localStorage.setItem("history", artist); 
    listItem.textContent = localStorage.getItem("history"); 
    list.appendChild(listItem); 
    history.setAttribute("style", "display: block"); 

    var {Name} = data.Similar.Results[0]; 
    document.querySelector(".result1").textContent = Name;
    fetchEvents(Name); 
    
    var {Name} = data.Similar.Results[1]; 
    document.querySelector(".result2").textContent = Name; 
    fetchEvents2(Name); 

    var {Name} = data.Similar.Results[2]; 
    document.querySelector(".result3").textContent = Name; 
    fetchEvents3(Name);
    
    var {Name} = data.Similar.Results[3]; 
    document.querySelector(".result4").textContent = Name; 
    fetchEvents4(Name);

    var {Name} = data.Similar.Results[4]; 
    document.querySelector(".result5").textContent = Name; 
    fetchEvents5(Name);

 
    searchResults.setAttribute("style", "display:flex"); 

    clearSearch();
};
//fetch functions
function fetchEvents(artist) {
    var ticketUrl = "https://app.ticketmaster.com/discovery/v2/attractions.json?keyword=" + artist + "&apikey=" + ticketApi;
    fetch(ticketUrl).then(function(response) {
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

function fetchEvents3(artist) {
    var ticketUrl = "https://app.ticketmaster.com/discovery/v2/attractions.json?keyword=" + artist + "&apikey=" + ticketApi;
    fetch(ticketUrl).then(function(response) {
        return response.json(); 
    }).then(function(data) {
        console.log(data); 
        displayEvent3(data); 
    })
}; 

function fetchEvents4(artist) {
    var ticketUrl = "https://app.ticketmaster.com/discovery/v2/attractions.json?keyword=" + artist + "&apikey=" + ticketApi;
    fetch(ticketUrl).then(function(response) {
        return response.json(); 
    }).then(function(data) {
        console.log(data); 
        displayEvent4(data); 
    })
}; 

function fetchEvents5(artist) {
    var ticketUrl = "https://app.ticketmaster.com/discovery/v2/attractions.json?keyword=" + artist + "&apikey=" + ticketApi;
    fetch(ticketUrl).then(function(response) {
        return response.json(); 
    }).then(function(data) {
        console.log(data); 
        displayEvent5(data); 
    })
}; 


//display functions
function displayEvent(data) {
    var { name } = data._embedded.attractions[0].classifications[0].subGenre; 
    var { url } = data._embedded.attractions[0];  
    document.querySelector("#event1").textContent = name; 
    var a = document.querySelector("#link1"); 
    a.href = url;  
    a.textContent = "Upcoming Events"; 
    var { url } = data._embedded.attractions[0].externalLinks.homepage[0]; 
    var b = document.querySelector("#homepage1")
    b.href = url; 
    b.textContent="Homepage"; 
}; 


function displayEvent2(data) {
    var { name } = data._embedded.attractions[0].classifications[0].subGenre; 
    var { url } = data._embedded.attractions[0];  
    document.querySelector("#event2").textContent = name; 
    var a = document.querySelector("#link2"); 
    a.href = url;  
    a.textContent = "Upcoming Events"; 
    var { url } = data._embedded.attractions[0].externalLinks.homepage[0]; 
    var b = document.querySelector("#homepage2")
    b.href = url; 
    b.textContent="Homepage"; 
}; 

function displayEvent3(data) {
    var { name } = data._embedded.attractions[0].classifications[0].subGenre; 
    var { url } = data._embedded.attractions[0];  
    document.querySelector("#event3").textContent = name; 
    var a = document.querySelector("#link3"); 
    a.href = url;  
    a.textContent = "Upcoming Events"; 
    var { url } = data._embedded.attractions[0].externalLinks.homepage[0]; 
    var b = document.querySelector("#homepage3")
    b.href = url; 
    b.textContent="Homepage"; 
}; 

function displayEvent4(data) {
    var { name } = data._embedded.attractions[0].classifications[0].subGenre; 
    var { url } = data._embedded.attractions[0];  
    document.querySelector("#event4").textContent = name; 
    var a = document.querySelector("#link4"); 
    a.href = url;  
    a.textContent = "Upcoming Events"; 
    var { url } = data._embedded.attractions[0].externalLinks.homepage[0]; 
    var b = document.querySelector("#homepage4")
    b.href = url; 
    b.textContent="Homepage"; 
}; 

function displayEvent5(data) {
    var { name } = data._embedded.attractions[0].classifications[0].subGenre; 
    var { url } = data._embedded.attractions[0];  
    document.querySelector("#event5").textContent = name; 
    var a = document.querySelector("#link5"); 
    a.href = url;  
    a.textContent = "Upcoming Events"; 
    var { url } = data._embedded.attractions[0].externalLinks.homepage[0]; 
    var b = document.querySelector("#homepage5")
    b.href = url; 
    b.textContent="Homepage"; 
}; 





function search() {
    fetchArtists(document.querySelector(".search-info").value); 
}; 
searchbtn.addEventListener("click", search); 