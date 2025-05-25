// html objects
const button = document.getElementById("graphBtn");
const check = document.getElementById("test");
const graphsheet = document.getElementById("graphsheet");
//javascript variables
let print;
function graph() {
    print = "<table>";
    let empty = " ";
    for(let y = 50; y >= -50; y--) {
        print += "<tr>";
        for(let x = -30; x <= 30; x++)
        {
            let func = (x**2);
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
                print += "<td> </td>";
            }
            
        }
        print += "</td>";
    }
    updateGraph();
}

function updateGraph() {
    check.innerHTML = "Graph created!";
    graphsheet.innerHTML = print;
    graphsheet.scrollLeft = 250;
    graphsheet.scrollTop = 450;
    

}
