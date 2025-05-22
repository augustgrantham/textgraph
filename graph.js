const button = document.getElementById("graphBtn");
const check = document.getElementById("test");
const graphsheet = document.getElementById("graphsheet");
function graph() {
    let print = "<table>";
    let empty = " ";
    for(let y = 20; y >= 0; y--) {
        console.log(y);
        print += "<tr>";
        for(let x = 0; x <= 20; x++)
        {
            print += "<td>(" + x + "," + y + ")</td>";
        }
        print += "</td>";
    }
    check.innerHTML = "button fucking clicked";
    graphsheet.innerHTML = print;
    

}
