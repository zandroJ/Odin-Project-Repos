console.log("i am back");

fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  .then((response) => response.json())
  .then((data) => console.log(`Success! Found Pokemon: ${data.name.toUpperCase()}`))
  .catch((error) => console.log("Something went wrong:", error));
