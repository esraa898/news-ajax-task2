var iconNav= document.getElementById("icon-nav");
var closenav = document.getElementById("close");
var listitem= document.querySelector(".listitem");
var links = document.querySelectorAll(".linkitem");
var search = document.getElementById("search-text");
var httpreq=  new XMLHttpRequest();

var allData=[];
var category = "general";
 
 
 getData(category);
 
for (i=0 ; i < links.length; i++){
    links[i].addEventListener("click" ,function(e){
      category = e.target.text;
      getData(category);
    // window.alert(e.target.data);
    })
}
function getData(category){
    httpreq.open("GET",  ""+ category+".json");
    httpreq.send();
    httpreq.onreadystatechange = function(){
        if (httpreq.readyState == 4 && httpreq.status == 200  ){
          allData= JSON.parse(httpreq.response);
         displayData();
        } 
    
}
}
function displayData(){
    var temp ="";
    for (var i=0 ; i<allData.length; i++){
        temp += `
        <div class="item">
        <img src="${allData[i].urlToImage}">
          <h1> <span class="name"> Name:</span>  ${allData[i].source.name}  </h1>
        <h2>${allData[i].title}</h2>
        <p>
            ${allData[i].description}
        </p>
        </div>
        
        `
    }
    document.getElementById("rowData").innerHTML = temp;
}

// search 
//  search.addEventListener("onkeyup" , searchtext);

 function searchtext(term){
    var temp ="";
    for (var i=0 ; i<allData.length; i++){
        if (allData[i].source.name.toLowerCase().includes(term.toLowerCase())){
        temp += `
        <div class="item">
        <img src="${allData[i].urlToImage}">
        <h1> <span class="name"> Name:</span>  ${allData[i].source.name}  </h1>
        <h2>${allData[i].title}</h2>
        <p>
            ${allData[i].description}
        </p>
        </div>
        
        `}
    }
    document.getElementById("rowData").innerHTML = temp;
    
 }
 // nav bar 
iconNav.addEventListener("click",showList);
closenav.addEventListener("click",hidelist);

function showList(){
    listitem.style.top ="0";
}
function hidelist(){
    listitem.style.top ="-316px"
}

