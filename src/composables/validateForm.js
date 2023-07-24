const validateForm = () => {

    validateZip()
    validateConstructionYear()
    
    // Return true if all required elements match
    if (validateZip() && validateConstructionYear()) {
        return true
    }
};

const validateConstructionYear = () => {

    const constructionYearInput = document.querySelectorAll('.construction-year-input')[1]
    
    // Validate if the value is between 1901 and 2023. If not add error message
    if (constructionYearInput.value < 1901 || constructionYearInput.value > 2023) {
        constructionYearInput.classList.add('error')
        constructionYearInput.nextElementSibling.innerText = 'Year must be over 1901';
        
    } else {
        constructionYearInput.classList.remove('error')
        constructionYearInput.nextElementSibling.innerText = '';
        return true
    }
}

const validateZip = () => {

    // Get the adress input and compare it to a regex
    const zip = document.querySelectorAll('.zip')[1]
    const zipRegEx = new RegExp(/^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i);
    
    // If the value doesn't match add errors
    if (!zipRegEx.test(zip.value)) {
        zip.classList.add('error')
        zip.nextElementSibling.innerText = 'Postal code is invalid';

    } else {
        zip.classList.remove('error')
        zip.nextElementSibling.innerText = '';
        return true
    }
}

export default validateForm