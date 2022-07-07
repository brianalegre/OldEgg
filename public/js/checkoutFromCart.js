const paymentCheckoutBtn = document.getElementById('payment-checkout-btn')
const btnMsgContainer = document.querySelector('.btn-msg-container')

const checkoutFromCart = async () => {
    const response = await fetch('/cart/checkout', {method: 'POST'})
    if (response.ok) {
        return document.location.replace('/cart')
    }
    // otherwise if the res is not ok
    const message = {
        tag: 'p',
        setAttr: {
          class: 'invalid-auth',
        },
        // set this to backend message
        textContent: 'Insufficient balance',
        appendTo: btnMsgContainer,
      };
    appendContent(message)
}

if (paymentCheckoutBtn) {
    paymentCheckoutBtn.addEventListener('click', checkoutFromCart)
}
