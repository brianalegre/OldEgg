const addToCart = async targ => {
    try {
        const productId = targ.dataset.id
        console.log(productId)

        // const res = await fetch('/api/carts', {
        //     method: 'POST',
        //     body: JSON.stringify({  }),
        //     headers: { 'Content-Type': 'application/json' }
        // })
    } catch (err) {
        console.log(err)
    }
    renderCart()
}

document
    .getElementById('.cart-btn-container')
    .addEventListener('click', targ => {
        if (targ.target && targ.target.matches('.cart-btn')) {
            addToCart(targ.target)
        }
    })





