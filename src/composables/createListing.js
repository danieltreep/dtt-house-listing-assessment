import { useNewListingStore } from '@/stores/newListing'

const { newListing } = useNewListingStore()

const myHeaders = new Headers();
myHeaders.append("X-Api-Key", "u_S2bzOphtsEHvY-47k1LdKnMZUP8RjI");

let formdata = new FormData();


let requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

const createListing = () => {
  formdata.append("price", newListing.price);
  formdata.append("bedrooms", newListing.rooms.bedrooms);
  formdata.append("bathrooms", newListing.rooms.bathrooms);
  formdata.append("size", newListing.size);
  formdata.append("streetName", newListing.location.street);
  formdata.append("houseNumber", newListing.location.houseNumber);
  formdata.append("numberAddition", newListing.location.houseNumberAddition);
  formdata.append("zip", newListing.location.zip);
  formdata.append("city", newListing.location.city);
  formdata.append("constructionYear", newListing.constructionYear);
  formdata.append("hasGarage", newListing.hasGarage);
  formdata.append("description", newListing.description);

  fetch("https://api.intern.d-tt.nl/api/houses", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

export default createListing