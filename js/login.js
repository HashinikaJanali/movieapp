// js/login.js
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission (page reload)

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Dummy check - replace with real validation if needed
  if (username === 'admin' && password === '1234') {
    // Redirect to index.html
    window.location.href = 'index.html';
  } else {
    alert('Invalid username or password');
  }
});
