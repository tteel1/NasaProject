const resultsNav = document.getElementById ('resultsNav');
const favoritesNav = document.getElementById ( 'favoritesNav');
const imagesContainer = document.querySelector('.images-containter');
const saveConfirmed = document.querySelector('.save-confirmed');
const loader = document.querySelector('.loader');

//NASA API
const count = 10;
const apiKey = 'DEMO_KEY';
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;

let resultsArray = [];

function updateDOM(){
    resultsArray.forEach((result) => {
        //Card Container
        const card = document.createElement('div')
        card.classList.add('card');
        // Link
        const link = document.createElement('a')
        link.href= result.hdurl;
        link.title = ' View Full Image'
        link.target = '_blank';

        //image
        const image = document.createElement()

    });

}


//Get 10 images for nasa api 
async function getNasaPictures(){
    try {
        const response = await fetch (apiUrl);
        resultsArray = await response.json();
        console.log (resultsArray);
        updateDOM();
    } catch (error) {
        
    }
}

// On load
getNasaPictures();