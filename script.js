function myFunction(x) {
    x.classList.toggle("change");
  }
var i=0;
let news=['This webpage is decided to be published on september 3 as the event of "Nithish Kumar" birthday.','I appreciate everyone who involved in this project.'];
news.unshift("Yep! INDIA has successfully landed on the south pole of the moon");
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
}


