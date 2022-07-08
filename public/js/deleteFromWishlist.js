const deleteBtn = document.querySelector('#wishlist-item-delete')

const deleteFromWishlist = async targ => {
    try {
        const productId = targ.dataset.id
        console.log(productId)
        const response = await fetch('/wishlist', {
            method: 'DELETE',
            body: JSON.stringify({ productId }),
            headers: {
              'Content-Type': 'application/json',
            },
        })
        if (response.ok) return document.location.replace('/wishlist');
        if (response.status === 401) return document.location.replace('/login')
    } catch(err) {
        console.log(err)
    }
}

if (deleteBtn) {
    cartContainer.addEventListener('click', targ => {
        if (targ.target && targ.target.matches('#wishlist-item-delete')) {
            deleteFromWishlist(targ.target)
        }
    })
}