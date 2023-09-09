function myFunction(x) {
    x.classList.toggle("change");
    const mbtn=document.querySelector(".menu");
    mbtn.classList.toggle("change1");
  }
var i=0;
let news=[];
news.push("G20 Summit kicks off today: Full schedule as world leaders meet at Delhi's Bharat Mandapam");
news.push("Tuesday 7th period is assinged as Analog Electronics.");
news.push("Assessment tutorials of LANA and EMF on 13.09.2023");
news.push("Assessment tutorial of DSA on 14.09.2023 is cancelled.");
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
  setTimeout(nextnews, 4500,1);
}
setTimeout(nextnews,4700,1);
