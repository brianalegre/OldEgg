const paymentCheckoutBtn = document.getElementById('payment-checkout-btn');
const btnMsgContainer = document.querySelector('#pcb-container');
const checkoutForm = document.querySelector('#checkout-form');


const checkoutFromCart = async targ => {
  targ.preventDefault()

  // HTML Targeting Elements
  const userEmail = document.querySelector('#email').value.trim();
  const userPhone = document.querySelector('#phone').value.trim();
  const userFullName = document.querySelector('#fullname').value.trim();
  const userAddress = document.querySelector('#address').value.trim();
  const userCity = document.querySelector('#city').value.trim();
  const userZip = document.querySelector('#zip-code').value.trim();
  const checkMessage = document.querySelector('.invalid-auth');
  const checkValidMessage = document.querySelector('.valid-auth');


  if (checkMessage) {
    checkMessage.remove();
  }

  if (checkValidMessage) {
    checkValidMessage.remove();
  }

  if (userEmail === '' || userPhone === '' || userFullName === '' || userAddress === '' || userCity === '' || userZip === '') {
    const message = {
      tag: 'p',
      setAttr: {
        class: 'invalid-auth',
      },
      // Display message on page
      textContent: 'Please fill out all fields!',
      appendTo: checkoutForm,
    };
    return appendContent(message);
  }

  try {
    const response = await fetch('/cart/checkout', { method: 'POST' });
    if (response.ok) {
      return document.location.replace('/cart');
    }
    const data = await response.json();
    if (response.ok) {
      const message = {
        tag: 'p',
        setAttr: {
          class: 'valid-auth',
        },
        // Display message on page
        textContent: data,
        // textContent: data.message,
        appendTo: checkoutForm,
      };
      setTimeout(() => document.replace('/'), 2500);
      return appendContent(message);
    }
  } catch (err) {
    console.log(err);
  };
};


if (paymentCheckoutBtn) {
  paymentCheckoutBtn.addEventListener('click', checkoutFromCart);
};
