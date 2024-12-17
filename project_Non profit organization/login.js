document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simple client-side validation (for demonstration purposes)
    if(username === 'Devraj' && password === 'devraj') {
        alert('Login successful!');
        window.location.href = 'index.html'; // Redirect to home page after successful login
    } else {
        alert('Invalid username or password. Please try again.');
    }
});
