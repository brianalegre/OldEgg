const heartBtn = document.querySelector('.heart')

const addToWishList = async id => {
    try {
        const productId = id
        const response = await fetch('/wishlist', {
            method: 'POST',
            body: JSON.stringify({ productId }),
            headers: { 'Content-Type': 'application/json' }
        })
        const loggedIn = await response.json()

        if (!loggedIn) {
            return document.location.replace('/login')
        }
    } catch(err) {
        console.log(err)
    }
}

if (heartBtn) {
    const productId = heartBtn.dataset.id
    heartBtn.addEventListener('click', () => {
        addToWishList(productId)
        heartBtn.classList.toggle('active')
    })
}