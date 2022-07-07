const pageContainer = document.getElementById('section-input')
const cartBtn = document.querySelector('.add-to-cart')

const addToCart = async id => {
    try {
        const productId = id
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
};

if (cartBtn) {
    const productId = cartBtn.dataset.id
    cartBtn.addEventListener('click', e => {
        addToCart(productId)
        cartBtn.classList.toggle('added');
    })
}





