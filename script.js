function myFunction(x) {
    x.classList.toggle("change");
    const mbtn=document.querySelector(".menu");
    mbtn.classList.toggle("change1");
  }
var i=0;
let news=[];
news.unshift("Today RAMANUJAN ASSOCIATION OF MATHEMATICS going to conduct an event called CHRONOID, do attend, time: 4.30pm ,venue:J313,J314");
news.push("Engenius event by Student's Research Council at 4.30 pm today.Be sure to check out. Venue : J513,J514");

news.push("Assessment tutorial of DSA on 14.09.2023 is cancelled");



document.getElementById("news").innerHTML=news[i];
function nextnews(a){
  i=i+a; 
  if (i==news.length){
    i=0;
  }
  else if (i<0){
    i=news.length -1;
  } 
  document.getElementById("news").innerHTML=news[i];
  //setTimeout(nextnews, 5200,1);
}

