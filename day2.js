function number(value) { //Function for getting the vlue and displaying on the input bar

    document.form1.result.value = document.form1.result.value + value;
}

function clearall(value) { //Function for clearing the input bar
    document.form1.result.value = value;
}

function calculate() { //Function for calculating

    document.form1.result.value = eval(document.form1.result.value);
}