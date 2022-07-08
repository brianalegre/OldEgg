const paymentCheckoutBtn = document.getElementById('payment-checkout-btn');
const btnMsgContainer = document.querySelector('#pcb-container');

const checkoutFromCart = async targ => {
  targ.preventDefault()
  try {
    const response = await fetch('/cart/checkout', { method: 'POST' });
    if (response.ok) {
      return document.location.replace('/cart');
    }
    const data = await response.json();
    const checkMessage = document.querySelector('.invalid-auth');
    if (checkMessage) {
      checkMessage.remove();
    }
    // error handling
    switch (data.error) {
      case 0:
        message = {
          tag: 'p',
          setAttr: {
            class: 'invalid-auth',
          },
          // set this to backend message
          textContent: data.message,
          appendTo: btnMsgContainer,
        };
        appendContent(message);
        break;
      case 1:
        message = {
          tag: 'p',
          setAttr: {
            class: 'invalid-auth',
          },
          // set this to backend message
          textContent: data.message,
          appendTo: btnMsgContainer,
        };
        appendContent(message);
        break;
      default:
        break;
    }
  } catch (err) {
    console.log(err);
  }
};

if (paymentCheckoutBtn) {
  paymentCheckoutBtn.addEventListener('click', checkoutFromCart);
}
