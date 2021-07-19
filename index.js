var dateInput = document.querySelector("#date")
var numberInput = document.querySelector("#lucky-number")

var checkBtn = document.querySelector("#check-btn")

// Output Divs

var isLucky = document.querySelector("#lucky")
var notLucky = document.querySelector("#not-lucky")

checkBtn.addEventListener("click",clickHandler)

function clickHandler(){
    var dateValue = dateInput.value;
    var luckyNumberValue = numberInput.value;
    var sum= 0
    for ( var i=0; i < dateValue.length ; i++){
       if (dateValue[i] !== "-"){
           sum = sum + parseInt(dateValue[i])
       }
    }
    if (dateValue.length > 0 && luckyNumberValue >0){
        if (sum % luckyNumberValue === 0){
            isLucky.classList.remove("hidden")
            notLucky.classList.add("hidden")
        }
        else{
            notLucky.classList.remove("hidden")
            isLucky.classList.add("hidden")
        }
    }
    
}
