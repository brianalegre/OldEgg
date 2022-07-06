// HTML Targeting Elements
const userUpdateForm = document.querySelector('#userUpdate-form');
const updateBtn = document.querySelector('#update-btn');


// const updateUserInfo = async (event) => {
//   event.preventDefault();

// Check if password and confirm password match

// const first_name = document.querySelector('#firstname-signup').value.trim();
// const last_name = document.querySelector('#lastname-signup').value.trim();
// const email = document.querySelector('#email-signup').value.trim();
const password = document.querySelector('#password-login').value.trim();
const confirmPassword = document.querySelector('#password-confirm').value.trim();

function checkPassword() {
  // Check if password and confirm password match
  if (password !== confirmPassword) {
    const message = {
      tag: 'p',
      setAttr: {
        class: 'invalid-auth',
      },
      textContent: 'Passwords do not match!',
      appendTo: userUpdateForm,
    };
    appendContent(message);
  } else {
    console.log('passwords match');
  }
}


// Listen for submit event on update button
updateBtn.addEventListener('click', checkPassword);
