document.getElementById('startDraw').addEventListener('click', async function() {

    let names = await fetchNamesFromNetlify();
    
    let winner = names[Math.floor(Math.random() * names.length)];

    document.getElementById('winnerName').textContent = winner;
    console.log(names)
    console.log(winner)
});

async function fetchNamesFromNetlify() {
    const endpoint = 'https://api.netlify.com/api/v1/forms/650001eb1c9d9b00083dd503/submissions?access_token=Qqj7j74jqsPbnaJpnsrOQPJFREXWEd71g9AO7Pfaokc';
    let response = await fetch(endpoint);
    let data = await response.json();

    return data.map(entry => entry.data.userName);
}
