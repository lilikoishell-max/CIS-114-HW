function setCookie(name, value) {
    document.cookie = name + "=" + value + "; path=/";
}

function getCookie(name) {
    const cookieArray = document.cookie.split(";");
    for (let cookie of cookieArray) {
        const parts = cookie.trim().split("=");
        if (parts[0] === name) {
            return parts[1];
        }
    }
    return null;
}


function loadPage() {
    const realname = getCookie("realname");
    const username = getCookie("username");
    const area = document.getElementById("contentArea");

    if (realname !== null && username !== null) {
        area.innerHTML =
            "<h2> Welcome Back, " + realname + "!</h2>" +
            "<p>Your username: " + username + "</p>";
    }
    else {
        area.innerHTML =
            "<label>Name: </label> <input type='text' id='realname'><br><br>" +
            "<label>Username: </label><input type='text' id='username'><br><br>" +
            "<button id='saveBtn'> Save </button>"+
            "<p id='errormessage' style='color:red;'></p>";
    }
}
function saveUser() {
    const name = document.getElementById("realname").value;
    const user = document.getElementById("username").value;
    const errormessage = document.getElementById("errormessage");

    if (name === "" || user === "") {
        errormessage.value = "Please fill in both fields!"
        return
    }
    setCookie("realname", name);
    setCookie("username", user);

    history.go(0);
}
window.onload = loadPage;
document.addEventListener("click", function (event) {
    if (event.target.id === "saveBtn") {
        saveUser();
    }
});
