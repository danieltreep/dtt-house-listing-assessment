import { ref } from "vue"

const myHeaders = new Headers();
myHeaders.append("X-Api-Key", "u_S2bzOphtsEHvY-47k1LdKnMZUP8RjI");

const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

const getListings = async () => {

    // Save the listings in this ref that can be returned
    const documents = ref([])

    await fetch("https://api.intern.d-tt.nl/api/houses", requestOptions)
        .then(response => response.json())
        .then(result => documents.value = result)
        .catch(error => console.log('error', error));

    return { documents }
}

export default getListings