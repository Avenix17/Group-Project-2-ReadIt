// const loginForm = async(event) => {
//     event.preventDefault();

//     const password = document.querySelector('#password-login').value.trim();
//     const username = document.querySelector('#username-login').value.trim();

//     if (username && password) {
//         const response = await fetch ('/api/users/login', {
//             method: 'POST',
//             body: JSON.stringify({ username, password}),
//             headers: { 'Content-Type': 'application/json'},
//         });

//         if (response.ok) {
//             document.location.replace('/');
//         } else {
//             alert('response.statusText');
//         }
//     }
// };

// const signupForm = async (event) => {
//     event.preventDefault();

//     const name = document.querySelector('#name-signup').value.trim();
//     const email = document.querySelector('#email-signup').value.trim();
//     const password = document.querySelector('#password-signup').value.trim();

//     if (name && email && password) {
//         const response = await fetch('/api/users', {
//           method: 'POST',
//           body: JSON.stringify({ name, email, password }),
//           headers: { 'Content-Type': 'application/json' },
//         });
    
//         if (response.ok) {
//           document.location.replace('/profile');
//         } else {
//           alert(response.statusText);
//         }
//       }
// };

// document
//   .querySelector('.login-form')
//   .addEventListener('submit', loginForm);

// document
//   .querySelector('.signup-form')
//   .addEventListener('submit', signupForm);