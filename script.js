function myFunction(x) {
    x.classList.toggle("change");
    const mbtn=document.querySelector(".menu");
    mbtn.classList.toggle("change1");
  }
var i=0;
let news=[];

news.push("14/10/2023 GET READY FOR SHRISTI");
news.unshift("Hurray! India becomes no 1 circket team in all three formats");
news.unshift("CA test starts on Tuesday");
news.unshift("Monday first period is EMF and the class starts at 8.30 am");
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

