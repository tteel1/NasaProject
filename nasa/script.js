

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
        const card = document.createElement('div');
        card.classList.add('card');


        // Link
        const link = document.createElement('a');
        link.href= result.hdurl;
        link.title = 'View Full Image';
        link.target = '_blank';

        //image
        const image = document.createElement('img');
        image.src = result.url;
        image.alt = 'Nasa Picture of the Day';
        image.loading = 'lazy';
        image.classList.add('card-img-top');

        //Card Body
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        //Card Title
        const cardTitle = document.createElement('h5');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = result.title;
        // Save Text
        const saveText = document.createElement('p');
        saveText.classList.add('clickable');
        saveText.textContent = 'Add to Favorites';

        //Card Text
        const cardText = document.createElement ('p');
        cardText.textContent = result.explanation;
        // Footer Container
        const footer = document.createElement('small')
        footer.classList.add('text-muted');

        //Date
        const date = document.createElement('strong');
        date.textContent = result.date;

        // Copyright
        const copyright =document.createElement ('span');
        copyright.textContent = ` ${result.copyright}`;
        //Append
        footer.append(date, copyright);
        cardBody.append(cardTitle, saveText, cardText, footer);
        link.appendChild(image);
        card.append(link, cardBody);
        imagesContainer.appendChild(card);
        onsole.log(card);

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
