
let fetchBtn = document.getElementById('fetchBtn');
let mediaContainer = document.getElementById('mediaContainer');

//what to do when click:
fetchBtn.addEventListener('click', async function() {

    // Change button text so the user knows it's working
    fetchBtn.textContent = 'Loading...';
    mediaContainer.innerHTML = '<p>Fetching a cat...</p>';

    try {
        // Go get the data from the cat API
        // ?json=true tells the API to give us JSON metadata (including
        // a direct image URL) instead of the raw image file itself
        let response = await fetch('https://cataas.com/cat?json=true');

        // fetch() only rejects on a network failure (e.g. you're offline) —
        // it does NOT reject on a bad HTTP status like 404 or 500, so that
        // has to be checked manually or real server errors slip past silently
        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        // Turn the response body into a usable JS object
        let data = await response.json();

        // Build an <img> tag pointing at the cat image URL the API gave us,
        // and drop it into the page — this is the "refresh" the button does
        mediaContainer.innerHTML = `<img src="${data.url}" alt="A random cat" class="cat-image">`;

    } catch (error) {
        // If the internet is down, the API fails, or the status check above
        // threw, this runs and shows a friendly message instead of breaking
        mediaContainer.innerHTML = '<p>Oops! Something went wrong.</p>';
        console.error('Fetch failed:', error); // helpful while you're testing
    }

    // Change the button text back to normal
    fetchBtn.textContent = 'Fetch New Cat';
});