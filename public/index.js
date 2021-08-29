document.getElementById("buttonSub").addEventListener("click", subscription);

function subscription(){
    document.getElementById("sub-p").innerHTML="Thank you for subscription!";
}

 document.getElementById("dog-search").addEventListener("mouseover", dog);
 document.getElementById("cat-search").addEventListener("mouseover", cat);

function dog(){
  document.getElementById("dog-icon").style.display = "inline";
}

function cat(){
    document.getElementById("cat-icon").style.display = "inline";
}


