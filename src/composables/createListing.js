import { useSingleListingStore } from '@/stores/singleListing'
import uploadImage from './uploadImage';

const { singleListing } = useSingleListingStore()

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

  formdata.append("price", singleListing.price);
  formdata.append("bedrooms", singleListing.rooms.bedrooms);
  formdata.append("bathrooms", singleListing.rooms.bathrooms);
  formdata.append("size", singleListing.size);
  formdata.append("streetName", singleListing.location.street);
  formdata.append("houseNumber", singleListing.location.houseNumber);
  formdata.append("numberAddition", singleListing.location.houseNumberAddition);
  formdata.append("zip", singleListing.location.zip);
  formdata.append("city", singleListing.location.city);
  formdata.append("constructionYear", singleListing.constructionYear);
  formdata.append("hasGarage", singleListing.hasGarage);
  formdata.append("description", singleListing.description);

  await fetch("https://api.intern.d-tt.nl/api/houses", requestOptions)
    .then(response => response.json())
    .then(result => submittedListingId = result.id)
    .catch(error => console.log('error', error));

  // Upload image after receiving the id
  await uploadImage(submittedListingId, singleListing.image)

  // Return id to use as a parameter for the router
  return submittedListingId
}

export default createListing