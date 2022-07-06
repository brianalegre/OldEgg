const deleteBtns = document.querySelectorAll('#cart-item-delete')
const cartContainer = document.getElementById('cart-container')

const deleteFromCart = async targ => {
    try {
        const productId = targ.dataset.id

        const response = await fetch('/cart', {
            method: 'DELETE',
            body: JSON.stringify({ productId }),
            headers: {
              'Content-Type': 'application/json',
            },
        })
        if (response.ok) return document.location.replace('/cart');
    } catch(err) {
        console.log(err)
    }
}

if (cartContainer) {
    cartContainer.addEventListener('click', targ => {
        if (targ.target && targ.target.matches('#cart-item-delete')) {
            deleteFromCart(targ.target)
        }
    })
}