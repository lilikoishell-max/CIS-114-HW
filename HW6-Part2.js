function searchCharacter() {
    const content = document.getElementById('content').value;
    const searchChar = document.getElementById('searchChar').value;
    const result = document.getElementById('result')
    if (content === "" || searchChar === "") {
        alert("Please fill in both boxes!");
        return;
    }
    const lowerContent = content.toLowerCase();
    const lowersearchChar = searchChar.toLowerCase();
    let count = 0;
    for (let i = 0; i < lowerContent.length; i++) {
        if (lowerContent.charAt(i) === lowersearchChar) {
            count++;
        }
    }
    if (count > 0) {
            result.innerHTML = "The character '" + searchChar + "' appears " + count + " times.";
        result.style.color = "red";
     } else {
            result.innerHTML = "";
            const newWindow = window.open("", "No Occurrences Found", "width=400,height=200");
        }
}