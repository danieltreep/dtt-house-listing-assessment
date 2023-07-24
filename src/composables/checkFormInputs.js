
// Check if all required inputs have a value
const checkFormInputs = () => {

    // Get all the elements that need to be validated
    const validateInputElements = document.querySelectorAll('.validateInput')

    // Keep track of how many elements are validated
    let validatedElements = 0

    // Check if all required elements have a value. If they do increment validatedElements
    for (let i = 0; i < validateInputElements.length; i++) {
        if (validateInputElements[i].value !== '' && validateInputElements[i].value !== 'select') {
            validatedElements++
        }
    }

    // Return true if all required elements are filled in
    return validatedElements === validateInputElements.length ? true : false;
};

export default checkFormInputs