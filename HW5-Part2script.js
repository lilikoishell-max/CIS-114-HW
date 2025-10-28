const stateData = [
    ["AL", "Alabama", "Montgomery", "5,157,699"],
    ["AK", "Alaska", "Juneau", "740,133"],
    ["AZ", "Arizona", "Phoenix", "7,582,384"],
    ["AR", "Arkansas", "Little Rock", "3,088,354"],
    ["CA", "California", "Sacramento", "39,431,263"],
    ["CO", "Colorado", "Denver", "5,957,493"],
];
function submitForm() {
    const statename = document.getElementById('statename').value.trim();
    const output = document.getElementById("output");

    if (!statename) {
        output.style.color = "red";
        output.innerHTML = "Please enter a state name or abbreviation.";
        return;
    }

    const input = statename.toLowerCase();
    let found = false;
    let stateInfo = {};

    for (let i = 0; i < stateData.length; i++) {
        const abbr = stateData[i][0].toLowerCase();
        const name = stateData[i][1].toLowerCase();

        if (input === abbr || input === name) {
            found = true;
            stateInfo.abbr = stateData[i][0];
            stateInfo.name = stateData[i][1];
            stateInfo.capital = stateData[i][2];
            stateInfo.population = stateData[i][3];
            break;
        }
    }
    if (found) {
        output.style.color = "green";
        const message =
            "Thank you for your input, here is the information you requested: \n\n" +
        "State Abbreviation = " + stateInfo.abbr + "\n" +
            "State Name = " + stateInfo.name + "\n" +
            "Capital = " + stateInfo.capital + "\n" +
            "Population = " + stateInfo.population;
        output.innerText = message;
    }
    else {
        output.style.color = "red";
        let availableStates = [];
        for (let i = 0; i < stateData.length; i++) {
            availableStates.push(stateData[i][1]);
        } 
        output.innerHTML = "Sorry we do not have information about this state! <br>" + "We only have information about: " + availableStates.join(", ");
    }
}
    function clearForm() {
        document.getElementById('statename').value = "";
        document.getElementById('output').innerHTML = "";
    } 
