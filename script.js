function myFunction(x) {
    x.classList.toggle("change");
    const mbtn=document.querySelector(".menu");
    mbtn.classList.toggle("change1");
  }
var i=0;
let news=[];

news.unshift("EVS report submission postponed to Monday(30.10.23)");
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

