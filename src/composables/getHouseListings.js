import { ref } from "vue"

const myHeaders = new Headers();
myHeaders.append("X-Api-Key", "u_S2bzOphtsEHvY-47k1LdKnMZUP8RjI");

const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

const getHouseListings = async () => {
    const error = ref(null);
    const isPending = ref(false)
    const documents = ref([])

    await fetch("https://api.intern.d-tt.nl/api/houses", requestOptions)
        .then(response => response.json())
        .then(result => {
            // console.log(result)
            documents.value = result
        })
        .catch(error => console.log('error', error));

    return { error, isPending, documents }
}

export default getHouseListings