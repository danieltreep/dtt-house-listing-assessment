import { useNewListingStore } from '@/stores/newListing'
import uploadImage from './uploadImage';

const { newListing } = useNewListingStore()

const myHeaders = new Headers();
myHeaders.append("X-Api-Key", "u_S2bzOphtsEHvY-47k1LdKnMZUP8RjI");

const formdata = new FormData();


const requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

const createListing = async () => {

  // Save returned id from api so it can be returned
  let submittedListingId = null;

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

  await fetch("https://api.intern.d-tt.nl/api/houses", requestOptions)
    .then(response => response.json())
    .then(result => submittedListingId = result.id)
    .catch(error => console.log('error', error));

  // Upload image after receiving the id
  await uploadImage(submittedListingId, newListing.file)

  // Return id to use as a parameter for the router
  return submittedListingId
}

export default createListing