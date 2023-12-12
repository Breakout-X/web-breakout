const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});
// Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
let value = params.some_key; // "some_value"
if (value !== null) {
    document.write(`
      <h1>Param test.</h1>
      <button onclick="writeValue()">Get value</button>
      <br>
      <br>
      <p id="key">No value recived.</p>`)
}
let value_2 = params.token; // "some_value"
if (value_2 !== null) {
    document.write(`
      <h1>Token value</h1>
      <p id="key">No value recived.</p>`);
    var key = document.getElementById("key");
    if (value_2 !== null) {
        key.textContent = ("The value is: " + value_2.toString());
    }else{
        key.textContent = ("No value recived. ");
    }
}
  
  function writeValue() {
    var key = document.getElementById("key");
    if (value !== null) {
      key.textContent = ("The value is: " + value.toString());
    }else{
      key.textContent = ("No value recived. ");
    }
  }