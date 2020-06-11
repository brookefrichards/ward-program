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
        })
        .catch(function () {
            this.dataError = true;
        })
}

readJson();
