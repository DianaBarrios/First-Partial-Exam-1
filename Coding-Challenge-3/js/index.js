document.getElementById("submitBtn").addEventListener(click, function(){
    let num = document.getElementsByClassName("fizzBuzzNumber")[0].value;
    document.getElementsByClassName("resultsSection")[0].innerHTML = num;
})