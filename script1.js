document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login');
    const bookingForm = document.getElementById('booking');
    const loginError = document.getElementById('login-error');
    const bookingError = document.getElementById('booking-error');
    const bookingSuccess = document.getElementById('booking-success');
    
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Placeholder for actual authentication logic
        if (username === 'user' && password === 'password') {
            loginError.textContent = '';
            document.getElementById('login-form').style.display = 'none';
            document.getElementById('booking-form').style.display = 'block';
        } else {
            loginError.textContent = 'Invalid username or password';
        }
    });

    bookingForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const seat = document.getElementById('seat').value;
        
        // Placeholder for actual seat booking logic
        if (seat) {
            bookingError.textContent = '';
            bookingSuccess.textContent = `Seat ${seat} successfully booked!`;
        } else {
            bookingError.textContent = 'Please select a seat';
        }
    });
});
