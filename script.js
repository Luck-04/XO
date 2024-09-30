document.addEventListener('DOMContentLoaded', function () {
    const concertCards = document.querySelectorAll('.concert-card');
    
    concertCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.style.transition = '0.3s';
            card.style.transform = 'scale(1.1)';
        });

        card.addEventListener('mouseout', () => {
            card.style.transform = 'scale(1)';
        });
    });

    // Eventos para calcular el monto y abrir/cerrar modal
    const ticketCountInput = document.getElementById('ticketCount');
    const amountDisplay = document.getElementById('amount');

    ticketCountInput.addEventListener('input', function () {
        const ticketPrice = 50; // Cambia el precio por boleto aquí
        const totalAmount = ticketCountInput.value * ticketPrice;
        amountDisplay.textContent = totalAmount;
    });
});

function openModal() {
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
    document.getElementById("confirmationMessage").textContent = ""; // Limpiar mensaje
}

function confirmPurchase() {
    const confirmationMessage = document.getElementById("confirmationMessage");
    confirmationMessage.textContent = "¡Nos vemos en el concierto!";
}

