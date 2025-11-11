function submitForm() {
    const input = document.getElementById('number').value;
    const result = document.getElementById('result');
    result.style.color = "black";
    result.value = '';

    const num = parseFloat(input);
    
    const decimalPart = input.split('.')[1];
    if (!decimalPart || decimalPart.length < 4) {
        result.style.color = "red";
        result.value = "You need to type a number with at least 4 decimal places"
        return
    }

    const roundedInt = Math.round(num);
    const sqrtRounded = Math.round(Math.sqrt(num));
    const tenth = num.toFixed(1);
    const hundredth = num.toFixed(2);
    const thousandth = num.toFixed(3);

    result.value =
        "You typed number " + num + "\n" +
        "Rounded to nearest integer: " + roundedInt + "\n" +
        "Square root of rounded #: " + sqrtRounded + "\n" +
        "Rounded to the nearest tenth: " + tenth + "\n" +
        "Rounded to the nearest hundredth: " + hundredth + "\n" +
        "Rounded to the nearest thousandth: " + thousandth + "\n";
}
function clearForm() {
    document.getElementById('number').value = ""
    document.getElementById('result').value = "";
}
