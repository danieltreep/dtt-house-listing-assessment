const validateForm = () => {

    

    
    

    // // Loop over the elements. If empty: add error classes and if valid: remove error class and increment validatedElements
    // for (let i = 0; i < validateInputElements.length; i++) {
    //     if (validateInputElements[i].value !== '' && validateInputElements[i].value !== 'select') {
    //         errorElements[i].innerText = ''
    //         validateInputElements[i].classList.remove('error')
    //         validatedElements++
    //     } else {
    //         errorElements[i].innerText = 'Required element missing'
    //         validateInputElements[i].classList.add('error')
    //     }
    // }

    validateConstructionYear()
    validateZip()

    // Return true if all required elements are filled in
    return
};

const validateConstructionYear = () => {

    const constructionYearInput = document.querySelectorAll('.construction-year-input')[1]
    
    if (constructionYearInput.value < 1901 || constructionYearInput.value > 2023) {
        constructionYearInput.classList.add('error')
        constructionYearInput.nextElementSibling.innerText = 'Year must be over 1901';
        return false
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
    
    if (!zipRegEx.test(zip.value)) {
        zip.classList.add('error')
        zip.nextElementSibling.innerText = 'Postal code is invalid';
        return false
    } else {
        zip.classList.remove('error')
        zip.nextElementSibling.innerText = '';
        return true
    }
}

export default validateForm