
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = (principal * years * rate)/100;
    // convert the 'No of Years' into the actual year in the future
    var year = new Date().getFullYear()+parseInt(years);
    //reads the value of the range slider and displays it the <span> adjacent to the slider.
    function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
    }
    function compute(){  
        document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"
    }
    
    //positive number validation
    if (principal <= 0) {alert("Enter a positive number")} 

    


