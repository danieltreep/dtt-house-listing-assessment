const myHeaders = new Headers();
myHeaders.append("X-Api-Key", "u_S2bzOphtsEHvY-47k1LdKnMZUP8RjI");

var formdata = new FormData();
formdata.append("image", fileInput.files[0], "pexels-photo-1311518.jpeg");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch("https://api.intern.d-tt.nl/api/houses/:houseId/upload", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));