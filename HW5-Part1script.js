function submitForm() {
  const fullname = document.getElementById('fullname').value.trim();
  const age = document.querySelector('input[name="age"]:checked');
  const browsers = document.querySelectorAll('input[name="browser"]:checked');
  const movies = document.getElementById("movies").value;
  const output = document.getElementById("output");

  let messages = [];

  if (!fullname) messages.push("Please enter your full name.");
  if (!age) messages.push("Please select your age group.");
  if (browsers.length === 0) messages.push("Please select at least one browser.");
  if (movies === "selectone" || movies === "") messages.push("Please select a movie genre.");

  if (messages.length > 0) {
    output.style.color = "red";
    output.innerHTML = messages.join("<br>");
  } else {
    output.style.color = "green";
    const selectedBrowsers = Array.from(browsers).map(b => b.value).join(", ");
    const ageText = age.nextElementSibling.textContent;
    const message =
      "Thanks, your data was submitted!\n\n" +
      "Full Name: " + fullname + "\n" +
      "Age Group: " + ageText + "\n" +
      "Preferred Browser(s): " + selectedBrowsers + "\n" +
      "Favorite Movie Genre: " + movies;
    output.innerText = message;
  }
}

function clearForm() {
  document.getElementById("fullname").value = "";
  document.querySelectorAll('input[name="age"]').forEach(a => a.checked = false);
  document.querySelectorAll('input[name="browser"]').forEach(b => b.checked = false);
  document.getElementById("movies").value = "";
  document.getElementById("output").innerHTML = "";
}