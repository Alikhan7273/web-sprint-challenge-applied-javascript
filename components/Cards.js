// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const CardContainer = document.querySelector('.cards-container');

function TimeCard(object) {
    object.forEach(obj =>{
        //console.log("start here", obj)
            const NewCardDiv = document.createElement('div');
            const NewHeadlineDiv = document.createElement('div');
            const NewAuthorDiv = document.createElement('div');
            const NewImgDiv = document.createElement('div');
            const NewSpan = document.createElement('span');

        

    NewCardDiv.appendChild(NewHeadlineDiv)
    NewCardDiv.appendChild(NewAuthorDiv)
    NewAuthorDiv.appendChild(NewImgDiv)
    NewAuthorDiv.appendChild(NewSpan)

    NewCardDiv.classList.add('card')
    NewHeadlineDiv.classList.add('headline')
    NewAuthorDiv.classList.add('author')
    NewImgDiv.classList.add('img-container')

    NewHeadlineDiv.textContent = obj.headline
    NewImgDiv.innerHTML = `<img src=${obj.authorPhoto} />`;
    NewSpan.textContent = obj.authorName

    CardContainer.appendChild(NewCardDiv)

    NewCardDiv.addEventListener('click', () => {
        console.log(NewHeadlineDiv.textContent)


    })

})}



axios
    .get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        //console.log('link test', response)

        const Java1 = response.data.articles.javascript;
        const bootstrap1 = response.data.articles.bootstrap;
        const Jquery1 = response.data.articles.jquery;
        const Node1 = response.data.articles.node;
        const technology1 = response.data.articles.technology;

        TimeCard(Java1);
        TimeCard(bootstrap1);
        TimeCard(Jquery1);
        TimeCard(Node1);
        TimeCard(technology1);
    })
    .catch(error => {
        console.log('Error!!!!', error)
    })