const heartBtns = document.querySelectorAll('.heart')

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

heartBtns.forEach(button => {
    button.addEventListener('click', e => {
        button.classList.toggle('active')
    })
});