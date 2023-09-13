document.getElementById('startDraw').addEventListener('click', async function() {
    let names = await fetchNamesFromNetlify();

    if (names.length === 0) {
        alert("No hay nombres para sortear.");
        return;
    }

    let winner = names[Math.floor(Math.random() * names.length)];

    document.getElementById('winnerName').textContent = winner;
});

async function fetchNamesFromNetlify() {
    const endpoint = 'https://api.netlify.com/api/v1/forms/650001eb1c9d9b00083dd503/submissions?access_token=Qqj7j74jqsPbnaJpnsrOQPJFREXWEd71g9AO7Pfaokc';
    let response = await fetch(endpoint);
    let data = await response.json();

    let names = data.map(entry => entry.data.userName);
    
    let uniqueNames = [...new Set(names)];

    return uniqueNames;
}

