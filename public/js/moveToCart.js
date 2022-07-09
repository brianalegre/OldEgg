const moveToCartBtn = document.querySelector('#move-to-cart')
const wishlistContainer = document.getElementById('cart-container')

const moveToCart = async id => {
    try {
        const productId = id

        const wishResponse = await fetch('/wishlist', {
            method: 'DELETE',
            body: JSON.stringify({ productId }),
            headers: {
              'Content-Type': 'application/json',
            },
        })
        if (wishResponse.ok) {
            await addToCart(productId)
            return document.location.replace('/wishlist')
        }
        if (wishResponse.status === 401) return document.location.replace('/login')
    } catch(err) {
        console.log(err)
    }
}

if (moveToCartBtn) {
    const productId = moveToCartBtn.dataset.id
    wishlistContainer.addEventListener('click', targ => {
        if (targ.target && targ.target.matches('#move-to-cart')) {
            moveToCart(productId)
        }
    })
}