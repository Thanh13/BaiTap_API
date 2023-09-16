const ENDPOINT = "https://jsonplaceholder.typicode.com/"
const urlBacon = `${ENDPOINT}todos/2`;
const urlBaconAll = `${ENDPOINT}todos`;
function fetchAPI(url) {
    $.ajax({ method: "GET", url, dataType: "json", })
        .done(data => console.log(data))
        .fail(function() {
            alert("no good");
        });
}
function fetchData(url) {
    $.ajax({
            url,
            beforeSend: function(xhr) {
                xhr.overrideMimeType("text/plain;charset=x-user-defined");
            }
        })
        .done(function(data) {
            console.log("Sample of data: " + data)
        });
}
fetchAPI(urlBacon)
fetchAPI(urlBaconAll)
fetchData(urlBacon)
fetchData(urlBaconAll)