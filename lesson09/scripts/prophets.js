// Declare a const variable named "url" that contains the URL string of the JSON resource provided.
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

// Declare a const variable named "cards" that selects the HTML div element with an id value of "cards".
const cards = document.querySelector('#cards');

// Create an async defined function named "getProphetData" to fetch data from the JSON source url using the await fetch() method.
async function getProphetData() {
    // Store the response from the fetch() method in a const variable named "response".
    const response = await fetch(url);

    // Convert the response to a JSON object using the .json method and store the results in a const variable named "data".
    const data = await response.json();

    // Add a console.table() expression method to check the data response at this point in the console window.
    console.table(data.prophets); // temporary testing of data retrieval

    // Call the function displayProphets() with the data.prophets argument.
    displayProphets(data.prophets);
}

// Define a function expression named "displayProphets" that handles a single parameter named "prophets" somewhere in your js file.
// Use an arrow expression to contain statements that will process the parameter value and build a card for each prophet.
const displayProphets = (prophets) => {
    console.log('Displaying prophets:', prophets);

    // Inside the function, use a forEach loop with the array parameter to process each "prophet" record one at a time, creating a new card each time.
    prophets.forEach((prophet) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');

        // Populate the heading element with the prophet's full name using a template string to build the full name.
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        // Build the image element by setting the src, alt, loading, width, and height attributes using setAttribute().
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        // Using appendChild() on the section element named "card", add the heading and image elements one at a time.
        card.appendChild(fullName);
        card.appendChild(portrait);

        // Finally, add the section card to the "cards" div that was selected at the beginning of the script file.
        cards.appendChild(card);
    });
};

// Call the getProphetData() function to start the process.
getProphetData();
