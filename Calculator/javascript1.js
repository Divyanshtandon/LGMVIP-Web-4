function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteChar() {
    var displayValue = document.getElementById("display").value;
    document.getElementById("display").value = displayValue.slice(0, -1);
}

function appendValue(value) {
    document.getElementById("display").value += value;
}

function calculate() {
    try {
        var result = eval(document.getElementById("display").value);
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}