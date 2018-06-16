/*jslint plusplus : true */
/*jshint es5: false */
/*global console, alert, prompt*/

function newClacul() {
    "use strict";
    var cbd = document.getElementById("date").value,// required a value from type date
        ybd = parseInt(cbd.substring(0, 4), 10),//convert a value from string to integer (year_val)
        mbd = parseInt(cbd.substring(5, 7), 10),//convert a value from string to integer (month_val)
        dbd = parseInt(cbd.substring(8, 10), 10),//convert a value from string to integer (day_val)
        bd = new Date(ybd, mbd - 1, dbd),//convert our int_val to UTC Date !(mbd-1) month beg from 0
        bdOnMls = new Date() - bd,//Subtraction our birthday from UTC date to become mellisec num
        yOfBd = Math.floor(bdOnMls / 31536000000),//year of birthday on natural number 
        dOfBd = Math.floor((bdOnMls % 31536000000) / 86400000),//day of birthday on natural number 
        mOfBd = Math.floor(dOfBd / 30);//month of birthday on natural number 
    
    dOfBd = dOfBd % 30;//rest days from months 
    
        
        
        
            
    if (isNaN(yOfBd) || isNaN(mOfBd) || isNaN(dOfBd)) {//if a user dont put a birthday correctly
        document.getElementById("showTime").innerHTML = "<h1>You Don't Put your Birth day date correctly</h1>";
    } else {
    
        document.getElementById("showTime").innerHTML =
            "<h1> You have </h1>    "
            +
            " <h3 style='color:red;font-size: 30px'> " + yOfBd + " </h3> "
            +
            "  <h3> Year Old  And </h3> <br> "
            +
            "  <h3 style='color:red;font-size: 30px'>  " + mOfBd + "  </h3>  "
            +
            " <h3> Months And </h3> <br> "
            +
            "<h3 style='color:red;font-size: 30px' >  " + dOfBd + "  </h3>"
            +
            "  <h3>  Days   </h3>";
    }
}

