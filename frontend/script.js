function setOutput(text) {
  document.getElementById("output").textContent = text;
}

function bookTicket() {
  const name = document.getElementById("name").value.trim();
  const source = document.getElementById("source").value.trim();
  const destination = document.getElementById("destination").value.trim();

  fetch(`/book?name=${encodeURIComponent(name)}&source=${encodeURIComponent(source)}&destination=${encodeURIComponent(destination)}`)
    .then(res => res.text())
    .then(data => setOutput(data))
    .catch(() => setOutput("Error while booking ticket."));
}

function cancelTicket() {
  const id = document.getElementById("cancelId").value.trim();

  fetch(`/cancel?id=${encodeURIComponent(id)}`)
    .then(res => res.text())
    .then(data => setOutput(data))
    .catch(() => setOutput("Error while cancelling ticket."));
}

function undoCancel() {
  fetch(`/undo`)
    .then(res => res.text())
    .then(data => setOutput(data))
    .catch(() => setOutput("Error while restoring ticket."));
}

function searchTicket() {
  const id = document.getElementById("searchId").value.trim();

  fetch(`/search?id=${encodeURIComponent(id)}`)
    .then(res => res.text())
    .then(data => setOutput(data))
    .catch(() => setOutput("Error while searching ticket."));
}

function showTickets() {
  fetch(`/tickets`)
    .then(res => res.text())
    .then(data => setOutput(data))
    .catch(() => setOutput("Error while loading booked tickets."));
}

function showWaiting() {
  fetch(`/waiting`)
    .then(res => res.text())
    .then(data => setOutput(data))
    .catch(() => setOutput("Error while loading waiting list."));
}

function showHistory() {
  fetch(`/history`)
    .then(res => res.text())
    .then(data => setOutput(data))
    .catch(() => setOutput("Error while loading cancel history."));
}

function showSeats() {
  fetch(`/seats`)
    .then(res => res.text())
    .then(data => setOutput(data))
    .catch(() => setOutput("Error while loading seats."));
}