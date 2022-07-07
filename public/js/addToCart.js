const pageContainer = document.getElementById('section-input')
const cartBtn = document.querySelectorAll('.cart-btn')

const addToCart = async targ => {
    try {
        const productId = targ.dataset.id

        const response = await fetch('/cart', {
            method: 'POST',
            body: JSON.stringify({ productId }),
            headers: { 'Content-Type': 'application/json' }
        })
        const loggedIn = await response.json()
        if (!loggedIn) {
            document.location.replace('/login')
        }
    } catch (err) {
        console.log(err)
    }
}

if (cartBtn) {
    pageContainer.addEventListener('click', targ => {
        if (targ.target && targ.target.matches('.cart-btn')) {
            addToCart(targ.target)
        }
    })
}





