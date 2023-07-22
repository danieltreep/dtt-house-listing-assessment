const myHeaders = new Headers();
myHeaders.append("X-Api-Key", "u_S2bzOphtsEHvY-47k1LdKnMZUP8RjI");

const requestOptions = {
  method: 'DELETE',
  headers: myHeaders,
  redirect: 'follow'
};

const deleteListing = (id) => {
  fetch(`https://api.intern.d-tt.nl/api/houses/${id}`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

}

export default deleteListing