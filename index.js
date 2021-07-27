var dateInput = document.querySelector("#date");
var numberInput = document.querySelector("#lucky-number");

var checkBtn = document.querySelector("#check-btn");

var closeBtn = document.querySelector("#close-btn");
var privacyNoticeBox = document.querySelector(".privacy-notice");

// Output Divs

var isLucky = document.querySelector("#lucky");
var notLucky = document.querySelector("#not-lucky");

checkBtn.addEventListener("click",clickHandler);
closeBtn.addEventListener("click",closeHandler);

function clickHandler(){
    var dateValue = dateInput.value;
    var luckyNumberValue = numberInput.value;
    var sum= 0;
    for ( var i=0; i < dateValue.length ; i++){
       if (dateValue[i] !== "-"){
           sum = sum + parseInt(dateValue[i]);
       }
    }
    if (dateValue.length > 0 && luckyNumberValue >0){
        if (sum % luckyNumberValue === 0){
            isLucky.classList.remove("hidden");
            notLucky.classList.add("hidden");
        }
        else{
            notLucky.classList.remove("hidden");
            isLucky.classList.add("hidden");
        }
    }
    
}

function closeHandler(){
    privacyNoticeBox.style.display = "none"
}
