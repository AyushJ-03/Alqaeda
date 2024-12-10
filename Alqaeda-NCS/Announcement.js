document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const audience = document.getElementById('audience').value;
    const message = document.getElementById('messageContent').value;

    // Simulate sending the message (you would typically send this to a server)
    console.log(`Message sent to ${audience}: ${message}`);

    // Display success status
    document.getElementById('messageStatus').innerText = `Message sent to ${audience}!`;
    
    // Clear the form
    this.reset();
});

document.getElementById('alertForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const alertMessage = document.getElementById('alertContent').value;

    // Simulate sending the alert (you would typically send this to a server)
    console.log(`Security alert sent: ${alertMessage}`);

    // Display success status
    document.getElementById('alertStatus').innerText = `Security alert sent!`;

    // Clear the form
    this.reset();
});

document.getElementById('announcementForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const announcementMessage = document.getElementById('announcementContent').value;

    // Simulate posting the announcement (you would typically send this to a server)
    console.log(`Announcement posted: ${announcementMessage}`);

    // Display success status
    document.getElementById('announcementStatus').innerText = `Announcement posted!`;

    // Clear the form
    this.reset();
});