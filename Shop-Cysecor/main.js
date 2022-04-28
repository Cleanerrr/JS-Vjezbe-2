let xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

        let obj = JSON.parse(this.responseText);
        let productsEl = document.querySelector('#products');
        let html = "";

        for (let i = 0; i < obj.length; i++) {
            html += `<div class="card mb-5" style="width: 18rem;">
                        <img src="${obj[i].image}" class="card-img-top mh-50 p-3" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${obj[i].title}</h5>                            
                            <button type="button" class="btn btn-outline-dark form-control my-3" disabled>${obj[i].material}</button>                            
                            <h5 class="card-text">${obj[i].price}€</h5>
                            <button onclick='addToCart(this)' class="btn btn-primary my-3" data-product-id="${obj[i].id}">Add to Cart</button>
                            <button onclick='see_more(this)' class="btn btn-info my-3 float-end" data-product-id="${obj[i].id}" data-bs-toggle="modal" data-bs-target="#modalDetails">Details</button>
                        </div>
                        </div>`;
        }

        productsEl.innerHTML = html;


    }
}

xhttp.open("GET", "https://626a3238737b438c1c438154.mockapi.io/Products", true);
xhttp.send();


let itemAllreadyAdded = false;

function addToCart(el) {
    let id = el.getAttribute('data-product-id');

    if (!itemAllreadyAdded) {
        document.querySelector('#cartWrapper').innerHTML = `<div class='row'>
                                                                <div class='col-md-9'><h3>Your Cart Items</h3></div>
                                                                <div class='col-md-3'><strong>Total: </strong>€ <span id='totalPrice'></span></div>
                                                            </div>`;
        itemAllreadyAdded = true;
    }

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            let obj = JSON.parse(this.responseText);
            let cartWrapper = document.querySelector('#cartWrapper');

            cartWrapper.innerHTML += `<div class="row">
                                        <div class="d-flex justify-content-between">
                                            <div class='col-md-6'><h5>${obj.title}</h5></div>
                                            <div class='col-md-4'><p>${obj.price} €</p></div>
                                            <div class='col-md-2'><button onclick='removeItem(this)' class="btn btn-outline-danger float-end">Remove</button></div>
                                        </div>
                                    </div>`;
        }
    }
    xhttp.open("GET", "https://626a3238737b438c1c438154.mockapi.io/Products/" + id, true);
    xhttp.send();

}

function removeItem(el) {
    let cartItem = el.closest('.row');
    cartItem.remove();
}


function see_more(el) {
    let id = el.getAttribute('data-product-id');

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            let obj = JSON.parse(this.responseText);
            let productDetails = document.querySelector('#productDetails');

            productDetails.innerHTML = `<div>
                                            <h4>${obj.title}</h4>
                                            <p>${obj.description}</p>
                                            <p>Material: ${obj.material}</p>                               
                                            <h5>Price: ${obj.price}</h5>
                                            <button onclick='addToCart()' class="btn btn-primary my-3">Add to Cart</button>
                                        </div>`;

        }
    }
    xhttp.open("GET", "https://626a3238737b438c1c438154.mockapi.io/Products/" + id, true);
    xhttp.send();


}