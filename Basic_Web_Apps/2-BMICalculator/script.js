const form = document.querySelector('form')
// this usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector("#results");


    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Pleaes give valid height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Pleaes give valid weight ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        // show the results
        results.innerHTML = `<strong><span>${bmi}</span></strong>`;
        console.log(bmi)

        if (bmi < 18.6) {
            results.innerHTML = `<strong><span>${bmi} Under Weight</span></strong>`;
            results.style.color = "Yellow";
            
        } else if (bmi > 18.6 && bmi < 24.9) {
            results.innerHTML = `<strong><span>${bmi} Normal Range</span></strong>`;
            results.style.color = "Green";
            
        } else if (bmi >= 24.9) {
            results.innerHTML = `<strong><span>${bmi} Overweight</span></strong>`;
            results.style.color = "Red";
            
        }

    }

});