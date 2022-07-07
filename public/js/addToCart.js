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
            return document.location.replace('/login')
        }
        //otherwise we refresh the page
    } catch (err) {
        console.log(err)
    }
};

if (cartBtn) {
    const productId = cartBtn.dataset.id
    cartBtn.addEventListener('click', () => {
        addToCart(productId)
        cartBtn.classList.toggle('added');
        setTimeout(() => location.reload(), 2500)
    })
}