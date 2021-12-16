function calc() {
    var val1 = parseInt(document.querySelector("#value1").value);
    var val2 = parseInt(document.querySelector("#value2").value);
    var operator = document.querySelector("#operator").value;
    var calculate;

    if (operator == "add") {
        calculate = val1 + val2;
    } else if (operator == "min") {
        calculate = val1 - val2;
    } else if (operator == "div") {
        calculate = val1 / val2;
    } else if (operator == "mul") {
        calculate = val1 * val2;
    }


    document.querySelector("#result").innerHTML = calculate;
}