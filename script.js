function updateMainImage(url) {
	document.getElementById("main_img").src=url;
}

function addToCart() {
	alert("Item added to cart Successfully!")
}
function increase() {
      document.getElementById("i&d").stepUp();
   }
function decrease() {
      document.getElementById("i&d").stepDown();
   }

function pageOnLoad() {

	fetch("https://cdn.shopify.com/s/files/1/0564/3685/0790/files/singleProduct.json?v=1701948448")
    .then(response => {
        if (!response.ok) {
        throw new Error('Network issue occurred');
        }
        return response.json();
    })
    .then(data => {
        // Process the retrieved user data
        console.log('Data:', data);

        // desciption
        const descrElement = document.createElement('p')
        descrElement.innerHTML = data.product.description
        document.getElementById('description').appendChild(descrElement)

        // vendor
        document.getElementById("vendor").innerText = data.product.vendor

        //title
        document.getElementById("title").innerText = data.product.title

        //price
        document.getElementById("price").innerText = data.product.price

        //compare at price
        const compareAt = document.createElement("s")
        compareAt.innerText = data.product.compare_at_price
        document.getElementById("compare_at").appendChild(compareAt)

        // percent discount
        const originalPrice = parseInt(data.product.compare_at_price.slice(1))
        const discountedPrice = parseInt(data.product.price.slice(1))
        const percentOff = ~~(((originalPrice - discountedPrice) / originalPrice) * 100)
        document.getElementById("percent_off").innerText = `${percentOff}% off`        

    })
    .catch(error => {
        console.error('Error:', error);
    });
}