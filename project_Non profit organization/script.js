document.getElementById('donation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const amount = document.getElementById('donation-amount').value;
    alert(`Thank you for your donation of ₹${amount}!`);
});
