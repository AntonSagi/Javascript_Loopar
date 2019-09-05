var kulSaker = ["Spela CS", "Koda", "Kolla netflix", "Laga mat", "Dricka öl"];
var myList = document.createElement("ul");
myList.setAttribute("id", "myList");
document.body.appendChild(myList);


function myLoop() {

    for (i = 0; i < kulSaker.length; i++) {
        var myLi = document.createElement("li");
        var myArray = document.createTextNode(kulSaker[i]);
        myLi.appendChild(myArray);
        document.getElementById("myList").appendChild(myLi);
    }
}

window.onload = myLoop();