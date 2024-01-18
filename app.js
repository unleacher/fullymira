// Hier solltest du den Code hinzufügen, um eine Verbindung zu deinem Node.js-Server herzustellen und die Abstimmungsergebnisse abzurufen
// Du kannst dazu XMLHttpRequest, Fetch oder andere Technologien verwenden

// Beispiel mit Fetch
fetch('/getVotes')
    .then(response => response.json())
    .then(data => {
        document.getElementById('v1Count').textContent = data.v1Count;
        document.getElementById('v2Count').textContent = data.v2Count;
    })
    .catch(error => {
        console.error('Fehler beim Abrufen der Abstimmungsergebnisse:', error);
    });
