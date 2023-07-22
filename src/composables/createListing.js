const myHeaders = new Headers();
myHeaders.append("X-Api-Key", "u_S2bzOphtsEHvY-47k1LdKnMZUP8RjI");

var formdata = new FormData();
formdata.append("price", "20");
formdata.append("bedrooms", "1");
formdata.append("bathrooms", "1");
formdata.append("size", "1");
formdata.append("streetName", "Overtoom");
formdata.append("houseNumber", "21");
formdata.append("numberAddition", "A");
formdata.append("zip", "1181TY");
formdata.append("city", "Amsterdam");
formdata.append("constructionYear", "1901");
formdata.append("hasGarage", "false");
formdata.append("description", "Nice house!");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

const createListing = () => {
  console.log('from createListing')
  for (let pair of formdata.entries()) {
    console.log(pair[0], pair[1])
  }

  // console.log(data)
  // fetch("https://api.intern.d-tt.nl/api/houses", requestOptions)
  //   .then(response => response.json())
  //   .then(result => console.log(result))
  //   .catch(error => console.log('error', error));
}

export default createListing