let resultsContainer = document.getElementById("results");
let botonTraerInfo = document.getElementById("botonTraerInfo")
let barraBusqueda = document.getElementById("searchBar")

// resultsContainer.addEventListener('click', () => {
//     console.log("hola")
// })

// API CALL

const getAllCharacters = async () => {
  let res = await axios.get("https://rickandmortyapi.com/api/character");

  return res.data.results;
};

const getCharacterFilter = async () => {
    let res = await axios.get(`https://rickandmortyapi.com/api/character/?name=${searchTerm}`)
    return res.data.results
}

// CREO BARRA DE BUSQUEDA

let searchTerm = ""

barraBusqueda.addEventListener("change", (e) => {
    searchTerm = e.target.value
    console.log(searchTerm)
})

// PINTO TODO AL CARGAR LA PÁGINA


botonTraerInfo.addEventListener("click", () => {
    resultsContainer.replaceChildren()
  getCharacterFilter().then((res) => {
    res.map((char) => {
      console.log(char);
      const tarjetaPersonaje = document.createElement("div");
      const nombrePersonaje = document.createElement("div");
      const localizacionPersonaje = document.createElement("div");
      appendAndStyle(resultsContainer, tarjetaPersonaje, "card");
      appendAndStyle(tarjetaPersonaje, nombrePersonaje, "nombre", char.name);
      appendAndStyle(
        tarjetaPersonaje,
        localizacionPersonaje,
        "nombre",
        char.location.name
      );
    });
  });
});

const appendAndStyle = (father, child, clase, content) => {
  //   tarjetaPersonaje.appendChild(nombrePersonaje)
  //   nombrePersonaje.classList.add("nombre")
  //   nombrePersonaje.innerHTML = char.name

  father.appendChild(child);
  child.classList.add(clase);
  if (content) {
    child.innerHTML = content;
  }
};
