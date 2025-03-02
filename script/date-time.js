
function updateDateTime() {
    const now = new Date();
    const formattedDateTime = now.toLocaleString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        
        hour12: true
    });
    document.getElementById("date").innerText = formattedDateTime;
}

updateDateTime();
setInterval(updateDateTime, 1000);