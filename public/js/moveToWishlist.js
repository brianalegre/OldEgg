const moveToWishlistBtn = document.querySelector('#move-to-wishlist')

const moveToWishlist = async id => {
    try {
        const productId = id

        const cartResponse = await fetch('/cart', {
            method: 'DELETE',
            body: JSON.stringify({ productId }),
            headers: {
              'Content-Type': 'application/json',
            },
        })
        if (cartResponse.ok) {
            addToWishList(productId)
            return document.location.replace('/cart')
        }
        if (cartResponse.status === 401) return document.location.replace('/login')
    } catch(err) {
        console.log(err)
    }
}

if (moveToWishlistBtn) {
    const productId = moveToWishlistBtn.dataset.id
    cartContainer.addEventListener('click', targ => {
        if (targ.target && targ.target.matches('#move-to-wishlist')) {
            moveToWishlist(productId)
        }
    })
}