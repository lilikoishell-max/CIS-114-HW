function searchCharacter() {
    const content = document.getElementById('content').value;
    const searchChar = document.getElementById('searchChar').value;
    const result = document.getElementById('result')
    if (content === "" || searchChar === "") {
        result.style.color = "red";
        result.innerHTML ="Please fill in both boxes!";
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
        const newWindow = window.open("", "NotFoundWindow", "width=300,height=100,left=1000,top=100");
        newWindow.document.write(
            "<!DOCTYPE html>" +
            "<html><head><title> Search Results </title></head><body>" +
            "<p> Search character '" + searchChar + "' was not found in the content you typed. </p>" +
            "<button onclick='window.close() '> Close </button>" +
            "</body></html>"
        );
    }
}
  function clearForm() {
    document.getElementById('content').value = ""
    document.getElementById('searchChar').value = "";
    document.getElementById('result').innerHTML = "";
    }