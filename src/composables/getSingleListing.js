import { ref } from "vue"

const myHeaders = new Headers();
myHeaders.append("X-Api-Key", "u_S2bzOphtsEHvY-47k1LdKnMZUP8RjI");

const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

const getSingleListing = async (id) => {
    
    // Save listing is this ref so it can be returned
    const document = ref([])

    await fetch(`https://api.intern.d-tt.nl/api/houses/${id}`, requestOptions)
        .then(response => response.json())
        .then(result => document.value = result)
        .catch(error => console.log('error', error));

    return { document }
}

export default getSingleListing