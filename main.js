const getAllCharacters = async () => {
  try {
    let res = await axios.get("https://rickandmortyapi.com/api/character");
    return res.data.results;
  } catch (error) {
    console.error(error);
  }
};



// getAllCharacters().then((res) => {
//   res.map((char) => {
//     console.log(`El nombre del personaje es ${char.name}`);
//     console.log(`Su localización es ${char.location}`);
//   });
// });

const getAllUsers = async () => {
  let res = await axios.get("https://reqres.in/api/users");
  console.log(res.data);
};

// getAllUsers();

let body = {
    "username" : "Mara",
    "password" : 3023235
}

const createUser = async () => {
    let res = await axios.post('https://reqres.in/api/users', body)

    console.log(res.data)
}

createUser()