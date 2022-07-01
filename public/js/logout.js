const logoutBtnHandler = async () => {
    try {
      const res = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      })
  
      if (res.ok) {
        return document.location.replace('/')
      }
      alert('Failed to logout')
    } catch (err) {
      console.log(err)
    }
}

document
    .querySelector('#logout-btn')
    .addEventListener('click', logoutBtnHandler) 