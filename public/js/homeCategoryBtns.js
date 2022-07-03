const categoryBtns = document.querySelectorAll('.btn');

const createBtns = async () => {
  for (let i = 0; i < categoryBtns.length; i++) {
    const categoriesAPI = await fetch('http://localhost:3001/api/categories');
    const categories = await categoriesAPI.json();
    console.log(categories[i].category_name)
    categoryBtns[i].textContent = categories[i].category_name
    categoryBtns[i].addEventListener('click', () => {
        document.location.replace('/categories/' + categories[i].category_id)
    })
  }
};

createBtns();
