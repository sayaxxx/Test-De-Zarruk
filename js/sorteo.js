document.getElementById('startDraw').addEventListener('click', async function() {

    let names = await fetchNamesFromNetlify();
    
    let winner = names[Math.floor(Math.random() * names.length)];

    document.getElementById('winnerName').textContent = winner;
});

async function fetchNamesFromNetlify() {
    const endpoint = 'https://api.netlify.com/api/v1/forms/TU_FORM_ID/submissions?access_token=TU_NETLIFY_TOKEN';
    let response = await fetch(endpoint);
    let data = await response.json();

    return data.map(entry => entry.data.userName);
}
