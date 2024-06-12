function loadAppointments() {
  let appointments = JSON.parse(localStorage.getItem('appointments')) || [];
  let appointmentsDiv = document.getElementById('appointments');
  appointmentsDiv.innerHTML = '';

  appointments.forEach((appointment, index) => {
      let appointmentDiv = document.createElement('div');
      appointmentDiv.classList.add('appointment');
      appointmentDiv.innerHTML = `
          <p><strong>Name:</strong> ${appointment.name}</p>
          <p><strong>Email:</strong> ${appointment.email}</p>
          <p><strong>Phone:</strong> ${appointment.phone}</p>
      `;
      appointmentsDiv.appendChild(appointmentDiv);
  });
}

loadAppointments();
setInterval(loadAppointments, 1000); // Refresh every second to get new appointments