function readJson() {
    fetch('/ward-program/data')
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error " + response.status);
            }
            return response.json();
        })
        .then(json => {
            document.getElementById('name').innerHTML = json.name;
            // TODO: do more DOM manipulation!
        addList("name","","")
        addList("thing", "end of stuff", "morestuff")
        })
        .catch(function () {
            this.dataError = true;
        })
}

// STORED FUNCTIONS BUCKET
function addList(idName, thing, ThirdThing) {
    document.getElementById(idName).innerHTML = "test "+ "thing" + " "+ thing + " "+ ThirdThing
}

readJson();
