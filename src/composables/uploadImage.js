const myHeaders = new Headers();
myHeaders.append("X-Api-Key", "u_S2bzOphtsEHvY-47k1LdKnMZUP8RjI");

// This function is only called when a file is uploaded.
const uploadImage = async (id, file) => {

  const formdata = new FormData();

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow'
  };

  formdata.append("image", file, file.name);

  await fetch(`https://api.intern.d-tt.nl/api/houses/${id}/upload`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

export default uploadImage