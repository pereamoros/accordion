function loadData() {
  var myRequest = new XMLHttpRequest();
  myRequest.open("GET", "data.txt", true);
  myRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("ajax-bonus").innerHTML = this.responseText;
    }
  };
  myRequest.send();
}

window.onload = loadData(); 