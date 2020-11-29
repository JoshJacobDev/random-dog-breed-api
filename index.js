'use strict';


function fetchDogImage(breed) {
    let url = `https://dog.ceo/api/breed/${breed}/images/random`

    fetch(url)
        .then(response => response.json())
        .then(responseJson => displayImages(responseJson))
        .catch(error => alert('Something went wrong. Try again.'))
}

function displayImages(responseJson) {
    console.log(responseJson);
    if (responseJson.status == 'error') {
        alert('Breed not found. Try again.');
    } else {
        $('.results').removeClass('hidden');
        $('.results').html(`<img src='${responseJson.message}' alt='Picture(s) of your desired breed!'>`);
    };
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        let dogBreed = $('#breed').val();
        let breed = dogBreed.toLowerCase();
        fetchDogImage(breed);
    });
}

$(watchForm);