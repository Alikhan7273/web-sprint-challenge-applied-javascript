// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

const HeaderContainer = document.querySelector('.header-container')

const Head = Header()

// HeaderContainer.appendChild(Head)

HeaderContainer.appendChild(Head)

function Header() {
    const NewHeader = document.createElement('div')
    const span = document.createElement('span')
    const h1 = document.createElement('h1')
    const span2 = document.createElement('span')

    NewHeader.classList.add('header')
    span.classList.add('date')
    span2.classList.add('temp')

    NewHeader.appendChild(span)
    NewHeader.appendChild(h1)
    NewHeader.appendChild(span2)

    span.textContent = 'MARCH 28, 2020'
    h1.textContent = 'Lambda Times'
    span2.textContent = '98°'

    return NewHeader
}
