document.addEventListener('DOMContentLoaded', () => {
    // DOM elements
    const authButtons = document.querySelector('.auth-buttons');
    const loginButton = document.createElement('button');
    const signupButton = document.createElement('button');
    const logoutButton = document.createElement('button');
  
    // Function to handle login, signup, and logout button updates
    function updateAuthButtons() {
      // Check if the user is logged in (using localStorage)
      const userLoggedIn = localStorage.getItem('userLoggedIn') === 'true';
      
      console.log('User Logged In:', userLoggedIn);  // Debugging log
  
      // Clear the auth-buttons section before updating
      authButtons.innerHTML = '';
  
      if (userLoggedIn) {
        // User is logged in, show "Logout" button
        logoutButton.textContent = 'Logout';
        logoutButton.classList.add('btn', 'btn-danger');
        logoutButton.addEventListener('click', () => {
          // Clear login status from localStorage and reload the page
          localStorage.setItem('userLoggedIn', 'false');
          console.log('User logged out');
          window.location.reload(); // Reload to update the UI
        });
        authButtons.appendChild(logoutButton);
      } else {
        // User is not logged in, show "Login" and "Sign Up" buttons
        loginButton.textContent = 'Login';
        loginButton.classList.add('btn', 'btn-outline');
        loginButton.addEventListener('click', () => {
          // Set login status in localStorage and reload the page
          localStorage.setItem('userLoggedIn', 'true');
          console.log('User logged in');
          window.location.reload(); // Reload to update the UI
        });
        authButtons.appendChild(loginButton);
  
        signupButton.textContent = 'Sign Up';
        signupButton.classList.add('btn', 'btn-primary');
        signupButton.addEventListener('click', () => {
          // Set login status in localStorage and reload the page
          localStorage.setItem('userLoggedIn', 'true');
          console.log('User signed up');
          window.location.reload(); // Reload to update the UI
        });
        authButtons.appendChild(signupButton);
      }
    }
  
    // Run the function to update the buttons on page load
    updateAuthButtons();
});