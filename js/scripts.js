window.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    const textInput = document.getElementById("textInput").value;
    // const person2Input = document.getElementById("person2Input").value;
    // const animalInput= document.getElementById("animalInput").value;
    // const exclamationInput = document.getElementById("exclamationInput").value;
    // const verbInput = document.getElementById("verbInput").value;
    // // new line below
    // const nounInput = document.getElementById("nounInput").value;

    document.querySelector("#text").innerText = textInput;
    // document.querySelector("span#person1b").innerText = person1Input;
    // document.querySelector("span#person1c").innerText = person1Input;
    // document.querySelector("span#person2a").innerText = person2Input;
    // document.querySelector("span#person2b").innerText = person2Input;
    // document.querySelector("span#animal").innerText = animalInput;
    // document.querySelector("span#verb").innerText = verbInput;
    // // new line below
    // document.querySelector("span#noun").innerText = nounInput;
    // document.querySelector("span#exclamation").innerText = exclamationInput;

    document.querySelector("#story").removeAttribute("class");
  };
};