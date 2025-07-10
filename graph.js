// html objects
const button = document.getElementById("graphBtn");
const check = document.getElementById("test");
const graphsheet = document.getElementById("graphsheet");
const funct = document.getElementById("dropbtn");



//javascript variables
let print;
let type = "linear";
let a = 1;
let c = 0;
let func;
function graph() {
    print = "<table>";
    let empty = " ";
    for(let y = 50; y >= -50; y--) {
        print += "<tr>";
        for(let x = -30; x <= 30; x++)
        {
          switch(type)
          {
            case "linear":
              func = x;
              break;
            case "quadratic":
              func = (x**2);
              break;
            case "exponential":
              func = (2**x);
              break;
            case "absolute":
              func = (Math.abs(x));
              break;
          }
            if(y == func) {
                print += "<td id=\"point\"></td>";
            }
            else if(x == 0){
                print += "<td id=\"axis\"></td>";
            }
            else if(y == 0){
                print += "<td id=\"axis\"></td>";
            }
            else {
                print += "<td></td>";
            }
            
        }
        print += "</td>";
    }
    updateGraph();
}
function linear()
{
  type = "linear";
  funct.innerHTML = "Linear";
}
function quadratic()
{
  type = "quadratic";
  funct.innerHTML = "Quadratic";
}
function exponential() {
  type = "exponential";
  funct.innerHTML = "Exponential";
}
function absolute() {
  type = "absolute";
  funct.innerHTML = "Absolute";
}
function updateGraph() {
    check.innerHTML = "Graph created!";
    graphsheet.innerHTML = print;
    graphsheet.scrollLeft = 250;
    graphsheet.scrollTop = 300;
    

}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
