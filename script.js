function myFunction(x) {
    x.classList.toggle("change");
    const mbtn=document.querySelector(".menu");
    mbtn.classList.toggle("change1");
  }
var i=0;
let news=[];
news.unshift("Cheers to another trip around the sun! Keep shining. We are wishing you a happy birthday 'AISHWARYA'");
news.push("Remainder...! Don't forget to write EMFW problems in tutorial note...!");
news.push("Assessment tutorial of DSA on 14.09.2023 is cancelled");
news.push("Monday first hour is EMF and the class starts at 8.45 am");
news.push("Tuesday 7th period is assinged as Analog Electronics.");
news.push("Assessment tutorials of LANA and EMF on 13.09.2023");

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
setTimeout(nextnews,5200,1);
