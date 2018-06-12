/*jslint plusplus : true */
/*global console, alert, prompt*/

function newClacul() {
    "use strict";
    var
        year,
        ybd = document.getElementById("ybd").value,
        mbd = document.getElementById("mbd").value,
        dbd = document.getElementById("dbd").value,
    
        ycd = document.getElementById("ycd").value,
        mcd = document.getElementById("mcd").value,
        dcd = document.getElementById("dcd").value;
    
    
    year = ycd - ybd;
    
    
    
    alert(year);
    
    
}
newClacul();
