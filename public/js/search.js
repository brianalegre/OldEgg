// API CALL
const apiURL = 'http://localhost:3001/api/search/';

// Test API Call
function getProducts() {
  console.log('GETPRODUCTS CALLED ----');
  fetch(apiURL + 'NZXT')
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    }
    );
}

getProducts();
