// script.js
document.getElementById('booking-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const service = document.getElementById('service').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;

  if (name && service && date && time) {
    const confirmationMessage = `
      <h3>Agendamento Confirmado!</h3>
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Serviço:</strong> ${service}</p>
      <p><strong>Data:</strong> ${date}</p>
      <p><strong>Horário:</strong> ${time}</p>
      <p>Obrigado por agendar com a Barbearia Luxo!</p>
    `;
    document.getElementById('confirmation').innerHTML = confirmationMessage;
    document.getElementById('booking-form').reset();
  } else {
    alert('Por favor, preencha todos os campos.');
  }
});
