window.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    const textInput = document.getElementById("textInput").value;

    document.querySelector("#text").innerText = textInput;

    document.querySelector("#story").removeAttribute("class");
  };
};