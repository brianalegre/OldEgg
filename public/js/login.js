const loginForm = document.querySelector('#login-form');

const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  // Check all form variables
  if (email && password) {
    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        return document.location.replace('/');
      }
    } catch (err) {
      console.log(err);
    }
    const checkMessage = document.querySelector('.invalid-auth');

    if (checkMessage) {
      checkMessage.remove();
    }
    const message = {
      tag: 'p',
      setAttr: {
        class: 'invalid-auth',
      },
      textContent: 'Unable to confirm username/password combination.',
      appendTo: loginForm,
    };
    return appendContent(message);
  }
  // If one of the form variables is undefined check here.
  const checkMessage = document.querySelector('.invalid-auth');

  if (checkMessage) {
    checkMessage.remove();
  }

  const message = {
    tag: 'p',
    setAttr: {
      class: 'invalid-auth',
    },
    textContent: 'Please enter a valid username or password!',
    appendTo: loginForm,
  };
  appendContent(message);
};

loginForm.addEventListener('submit', loginFormHandler);
