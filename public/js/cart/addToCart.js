const renderCart = () => {
    const res = await fetch('/api')
}

const addToCart = async () => {
    try {
        const res = await fetch('/api/carts', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' }
        })
    } catch (err) {
        console.log(err)
    }
    renderCart()
}

document
    .getElementById('cart-btn-container')
    .addEventListener('click', targ => {
        if (targ.target && targ.target.matches('.cart-btn')) {
            addToCart()
        }
    })





