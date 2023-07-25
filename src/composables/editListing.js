import { useSingleListingStore } from '@/stores/singleListing'
import uploadImage from './uploadImage';

const myHeaders = new Headers();
myHeaders.append("X-Api-Key", "u_S2bzOphtsEHvY-47k1LdKnMZUP8RjI");

const formdata = new FormData();

const requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

const editListing = async (id) => {

  // Get all the (new) information from the Single listing store
  const { singleListing } = useSingleListingStore()

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

  // Only upload an image if it is a file and not a link
  if (typeof singleListing.image !== "string") {
    await uploadImage(id, singleListing.image)
  }

  await fetch(`https://api.intern.d-tt.nl/api/houses/${id}`, requestOptions)
    .then(response => response.text())
    .then(result => console.log('Edited listing', result))
    .catch(error => console.log('error', error));
  
}

export default editListing