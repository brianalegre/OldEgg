const productPageContainer = document.querySelector('.product-page-container')

const addToCart = async targ => {
    try {
        const productId = targ.dataset.id

        const res = await fetch('/cart', {
            method: 'POST',
            body: JSON.stringify({ productId }),
            headers: { 'Content-Type': 'application/json' }
        })
    } catch (err) {
        console.log(err)
    }
    // renderCart()
}

if (productPageContainer) {
    productPageContainer.addEventListener('click', targ => {
        if (targ.target && targ.target.matches('.cart-btn')) {
            addToCart(targ.target)
        }
    })
}





