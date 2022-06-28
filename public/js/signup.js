const signupForm = document.querySelector('#signup-form')

const signupFormHandler = async event => {
    event.preventDefault();
  
    const firstName = document.querySelector('#firstname-signup').value.trim();
    const lastName = document.querySelector('#lastname-signup').value.trim();
    const userName = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    // Check all form variables 
    if (firstName && lastName && userName && email && password) {
        try {
            const response = await fetch('/api/signup', {
            method: 'POST',
            body: JSON.stringify({ firstName, lastName, userName, email, password }),
            headers: { 'Content-Type': 'application/json' },
            });
    
            if (response.ok) {
                return document.location.replace('/');
            }
        } catch (err) {
            console.log(err)
        }
        const checkMessage = document.querySelector('.invalid-auth')

        if (checkMessage) {
            checkMessage.remove()
        }

        const message = {
            tag: 'p',
            setAttr: {
            class: 'invalid-auth'
            },
            textContent: 'Unable to post user data, unable to signup.',
            appendTo: signupForm
        }
        return appendContent(message)
    }
    // If one of the form variables is undefined continue here.
    const checkMessage = document.querySelector('.invalid-auth')

    if (checkMessage) {
      checkMessage.remove()
    }

    const message = {
        tag: 'p',
        setAttr: {
            class: 'invalid-auth'
        },
        textContent: 'You must fill out the entire form!',
        appendTo: signupForm
    }
    appendContent(message)
}

signupForm.addEventListener('submit', signupFormHandler);