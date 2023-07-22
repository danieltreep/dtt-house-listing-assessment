import { useSelectedListingStore } from '@/stores/selectedListing'
import { storeToRefs } from 'pinia';

const { selectedListing } = useSelectedListingStore()

const myHeaders = new Headers();
myHeaders.append("X-Api-Key", "u_S2bzOphtsEHvY-47k1LdKnMZUP8RjI");

let formdata = new FormData();

let requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

const editListing = (id) => {
  formdata.append("price", selectedListing.price);
  formdata.append("bedrooms", selectedListing.rooms.bedrooms);
  formdata.append("bathrooms", selectedListing.rooms.bathrooms);
  formdata.append("size", selectedListing.size);
  formdata.append("streetName", selectedListing.location.street);
  formdata.append("houseNumber", selectedListing.location.houseNumber);
  formdata.append("numberAddition", selectedListing.location.houseNumberAddition);
  formdata.append("zip", selectedListing.location.zip);
  formdata.append("city", selectedListing.location.city);
  formdata.append("constructionYear", selectedListing.constructionYear);
  formdata.append("hasGarage", selectedListing.hasGarage);
  formdata.append("description", selectedListing.description);

  for (let pair of formdata.entries()) {
    console.log(pair[0], pair[1])
  }

  fetch(`https://api.intern.d-tt.nl/api/houses/${id}`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

export default editListing