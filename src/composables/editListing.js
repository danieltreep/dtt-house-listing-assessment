import { useSelectedListingStore } from '@/stores/selectedListing'
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

  // Get all the (new) information from the selected listing store
  const { selectedListing } = useSelectedListingStore()

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

  if (typeof selectedListing.image !== "string") {
    await uploadImage(id, selectedListing.image)
  }

  await fetch(`https://api.intern.d-tt.nl/api/houses/${id}`, requestOptions)
    .then(response => response.text())
    .then(result => console.log('Edited listing', result))
    .catch(error => console.log('error', error));

    console.log(selectedListing.image)
  
}

export default editListing