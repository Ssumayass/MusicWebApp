



const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login__link');
const registerLink = document.querySelector('.registration__link');

registerLink.addEventListener('click', () =>{
    wrapper.classList.add('register');
});

loginLink.addEventListener('click', () =>{
    wrapper.classList.remove('register');
});

const loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click', (event) => {
  event.preventDefault(); // prevent the default form submission

  const email = document.querySelector('#login__email').value;
  const password = document.querySelector('#password').value;

  fetch('/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      email: email,
      password: password
    })
  })
  .then(response => {
    if (response.ok) {
      response.json().then(data => {
        if (data.isLoggedIn) {
          localStorage.setItem('login_email', data.email);
          console.log('login_email: ', data.email)
          alert('login successfully')
          window.location.href = '/';
        } else {
          console.log('Invalid username or password');
          alert('Invalid username or password')
        }
      });
    } else {
      console.log('Error:', response.status);
    }
  })
  .catch(error => console.error(error));
});

const registerForm = document.querySelector('.register form');

registerForm.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent the default form submission

  const email = registerForm.querySelector('input[name="email"]').value;
  const password = registerForm.querySelector('input[name="password"]').value;
  const confirmPassword = registerForm.querySelector('input[name="confirm__password"]').value;

  if (password === confirmPassword) {
    fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    .then(response => {
      if (response.ok) {
        console.log('Registration successful');
        alert('Registration successful');
        registerSuccessCallback();
      } else if (response.status === 409) {
        console.log('Registration failed:', response.statusText);
        alert('Registration failed');
      } else {
        console.log('Registration failed:', response.statusText);
        alert('Registration failed');
        response.json().then(data => {
        });
      }
    })
    .catch(error => console.error(error));
  } else {
    alert('password is not match');
  }
});

function registerSuccessCallback() {
  document.querySelector('.wrapper').classList.toggle('register');
}


var homeProfileLink = document.querySelector('.login__profile');

// Get the login email from localStorage
var email = localStorage.getItem('login_email');
// Check if email is not an empty string
if (email !== null) {
  
  homeProfileLink.textContent = 'Logout';
}


homeProfileLink.addEventListener('click', function() {

  if (homeProfileLink.textContent === 'Logout') {
    homeProfileLink.textContent = 'Login';
    localStorage.removeItem('login_email');
  }
});
