const productList = document.getElementById('productList');

// Fetch data from the supplier's product API
fetch('https://www.course-api.com/javascript-store-products')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the response as JSON
        
    })
    .then(products => {
        products.forEach(product => {
            const fields = product.fields; // Access the fields object
            const imageUrl = fields.image[0].url; //access images url in array

            const listItem = document.createElement('li'); //create list item
            //Displaying product info
            const productInfo = document.createTextNode(`Product: ${fields.name}, Price: $${fields.price}, Company: ${fields.company}`);
            listItem.appendChild(productInfo); //adding to list item

            const img = document.createElement('img'); //creating image element
            img.src = imageUrl;
            img.alt = fields.name;
            listItem.appendChild(img); //adding image to list item   
           
            productList.appendChild(listItem); //adding list item to list
            });
        })