import { ref } from "vue"

const myHeaders = new Headers();
myHeaders.append("X-Api-Key", "u_S2bzOphtsEHvY-47k1LdKnMZUP8RjI");

const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

const getSelectedListing = async (id) => {
    const error = ref(null);
    const isPending = ref(false)
    const document = ref([])

    await fetch(`https://api.intern.d-tt.nl/api/houses/${id}`, requestOptions)
        .then(response => response.json())
        .then(result => {
            // console.log(result)
            document.value = result
        })
        .catch(error => console.log('error', error));

    return { error, isPending, document }
}

export default getSelectedListing