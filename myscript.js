


function myFunction1() {
    var x = document.getElementById("formular");
    var text = "";
    var i;
    for (i = 0; i < x.length; i++) {
      text += x.elements[i].value + " ";
    }
  
    string = document.createElement("p"); 
    string.setAttribute("id", "comm");
    var node = document.createTextNode(text); 
    string.appendChild(node); 
    var element = document.getElementById("demo");
    element.appendChild(string);
  }

  function showHint(str) {
    var xhttp;
    if (str.length == 0) { 
      document.getElementById("txtHint").innerHTML = "";
      return;
    }
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("txtHint").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "gethint.php?q="+str, true);
    xhttp.send();   
  }
  
  function show_alert() {
    var x = document.getElementById("formular");
    var i;
    var j=0;
    for (i = 0; i < x.length; i++) {
      if(x.elements[i].value=="")
     {
       j=j+1;
     }
    }
    if(j==0){
      myFunction1();
  }
  if(j!=0)
  {
    alert("Completati toate campurile!!!");
  }
  }
  
  function remove() {
  
    var elem = document.getElementById("demo");
    elem.parentNode.removeChild(elem)
  
    string = document.createElement("p"); 
    string.setAttribute("id", "demo");
    var node = document.createTextNode(""); 
    string.appendChild(node); 
    var element = document.getElementById("dem");
    element.appendChild(string);
  }
  
  function modifyButton(){
    var btn2 = document.createElement("BUTTON");
    btn1.setAttribute("id", "modifica");
    var node2 = document.createTextNode("Modifica");
    btn2.appendChild(node2);
    var element2 = document.getElementById("demo");
    element.appendChild(btn2);
  
  }
  
  function myFunction2() { 
  
    document.getElementById("nume").value = "";
    document.getElementById("prenume").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mesaj").value = "";
  }
  
 
