// API CALL
// Test API Call
const getProducts = async () => {
  console.log('GETPRODUCTS CALLED ----');
  const apiURL = 'http://localhost:3001/api/search/';
  
  try {
  const data = await fetch(apiURL + 'NZXT')
  console.log(data)
  } catch (err) {
    console.log(err)
  }
}

getProducts();
