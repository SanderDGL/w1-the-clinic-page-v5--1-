// ==== DEEL 1: BOEKINGSFORMULIER (Punt 7 uit de opdracht) ====
const booking = document.querySelector('#booking');
const message = document.querySelector('#message');

booking.addEventListener('submit', (event) => {
  // Voorkom dat de pagina herlaadt
  event.preventDefault();
  // De verplichte tekst die de validator wil zien
  message.textContent = 'Nothing was sent and nothing was booked: this page cannot take bookings yet.';
});


// ==== DEEL 2: PRIJS BEREKENEN (Punt 10 uit de opdracht) ====
const service = document.querySelector('#service');
const repairs = document.querySelector('#repairs');
const total = document.querySelector('#total');

function showEstimate() {
  // Zorg dat het getal niet onder de 0 kan gaan en rond hele getallen af
  const count = Math.max(0, Math.floor(Number(repairs.value) || 0));
  // Berekening: basisprijs van service (10 of 45) + (aantal kleine reparaties * EUR 5)
  total.textContent = 'EUR ' + (Number(service.value) + count * 5);
}

// Luister naar wijzigingen in de invoervelden
service.addEventListener('change', showEstimate);
repairs.addEventListener('input', showEstimate);

// Voer de functie direct één keer uit bij het laden van de pagina
showEstimate();
