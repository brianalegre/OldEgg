// API CALL
const apiURL = 'http://localhost:3001/api/search/';

// Get Data from API
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
