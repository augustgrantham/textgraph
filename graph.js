// html objects
const button = document.getElementById("graphBtn");
const check = document.getElementById("test");
const graphsheet = document.getElementById("graphsheet");
//javascript variables
let print;
function graph() {
    print = "<table>";
    let empty = " ";
    for(let y = 20; y >= 0; y--) {
        print += "<tr>";
        for(let x = -10; x <= 10; x++)
        {
            let func = (x**2);
            if(y == func) {
                print += "<td id=\"point\"></td>";
            }
            else {
                print += "<td>(" + x + "," + y + ")</td>";
            }
            
        }
        print += "</td>";
    }
    updateGraph();
}

function updateGraph() {
    check.innerHTML = "button fucking clicked";
    graphsheet.innerHTML = print;
    graphsheet.scrollLeft = 250;
    graphsheet.scrollTop = 100;
    

}
