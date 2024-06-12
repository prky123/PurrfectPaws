(function() {
    emailjs.init("vimeurHtDqSvVbtye");
})();

document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;

    let appointmentDetails = {
        name: name,
        email: email,
        phone: phone
    };

    // Store appointment details in local storage
    let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    appointments.push(appointmentDetails);
    localStorage.setItem('appointments', JSON.stringify(appointments));

    
    // Send email using EmailJS
    emailjs.send("service_fde64mq", "template_fmmosuw", {
        to_name: email,
        from_name: "Purrfect Paws!",
        message_html: `New appointment request from ${name}. Email: ${email}, Phone: ${phone}`
    })
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       alert('Appointment submitted and email sent successfully!');
       document.getElementById('appointmentForm').reset();
    }, function(error) {
       console.log('FAILED...', error);
       alert('Failed to send email. Please try again later.');
    });
});