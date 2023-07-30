const validateForm = () => {

    // Call the validate functions
    validateZip()
    validateConstructionYear()
    validateStreet()
    
    // Return true if all required elements match
    if (validateZip() && validateConstructionYear() && validateStreet()) {
        return true
    }
};

const validateConstructionYear = () => {

    const constructionYearInput = document.querySelectorAll('.construction-year-input')[1]
    
    // Validate if the value is between 1901 and 2023. If not add error message and class
    if (constructionYearInput.value < 1901 || constructionYearInput.value > 2023) {
        constructionYearInput.classList.add('error')
        constructionYearInput.nextElementSibling.innerText = 'Year must be over 1901';
        
    } else {
        constructionYearInput.classList.remove('error')
        constructionYearInput.nextElementSibling.innerText = '';
        return true
    }
}

const validateStreet = () => {

    const street = document.querySelectorAll('.street')[1]
    const streetRegEx = new RegExp(/\d/);
    
    // Validate if the value has no numbers. If not add error message and class
    if (streetRegEx.test(street.value)) {
        street.classList.add('error')
        street.nextElementSibling.innerText = 'A street name can not include a number';
        
    } else {
        street.classList.remove('error')
        street.nextElementSibling.innerText = '';
        return true
    }
}

const validateZip = () => {

    // Get the adress input and compare it to a regex, [1] because the class is also applied to the whole base input element
    const zip = document.querySelectorAll('.zip')[1]
    const zipRegEx = new RegExp(/^[1-9][0-9]{3} ?[a-z]{2}$/i);
    
    // Validate if the value is a valid postal code. If not add error message and class
    if (!zipRegEx.test(zip.value)) {
        zip.classList.add('error')
        zip.nextElementSibling.innerText = 'Please enter a valid postal code';

    } else {
        zip.classList.remove('error')
        zip.nextElementSibling.innerText = '';
        return true
    }
}

export default validateForm