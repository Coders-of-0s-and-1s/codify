let feedback=[];
let a="";
function submit(){
    let a=document.getElementById("finput").value;
    if (a){
        feedback.push(a);
        alert("Thank you for your feedback");
        document.getElementById("finput").value="";
        document.getElementById("fsubmit").innerHTML="SUMITTED";
    }
}

