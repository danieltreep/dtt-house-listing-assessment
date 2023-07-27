import { useSingleListingStore } from '@/stores/singleListing'
import uploadImage from './uploadImage';

const myHeaders = new Headers();
myHeaders.append("X-Api-Key", "u_S2bzOphtsEHvY-47k1LdKnMZUP8RjI");

// Create a new listing and everytime this is called create new formdata
const createListing = async () => {

  const formdata = new FormData();

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow'
  };

  // Get the data from store
  const { singleListing } = useSingleListingStore()

  // Save returned id from api so it can be returned
  let listingId = null;

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
    .then(result => listingId = result.id)
    .catch(error => console.log('error', error));

  // Upload image after receiving the id
  await uploadImage(listingId, singleListing.image)

  // Return id to use as a parameter for the router
  return listingId
}

export default createListing