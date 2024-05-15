async function fetchPokemon() {
  try{
    const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    console.log(response);
   

    if(!response.ok){
      throw new Error('Could not fetch resource');
    }

    const data = await response.json();
    console.log(data);

    const pokemonSpites = data.sprites.front_default;
    const imgElement = document.getElementById('pokemonSpites');

    imgElement.src = pokemonSpites;
    imgElement.style.display = 'block'; //change the code to add or modify the display property from display: none; to display: block; to make it more readable and logical
  }
   
  catch(error) {
    console.log(error);
  }
  
}