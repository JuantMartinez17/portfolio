document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        const formData = {
            name: name,
            email: email,
            subject: subject,
            body: message
        }

        fetch('https://portfolio-production-621d.up.railway.app/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.success){
                alert('Thanks for your interest. I will contact you soon.');
                form.reset();
            } else{
                alert('There was an error sending the email. Please try again later.');
            }
        })
        .catch(err => {
            console.error('Error sending email', err);
            alert('There was an error sending the email. Please try again later.');
        })
    });
});