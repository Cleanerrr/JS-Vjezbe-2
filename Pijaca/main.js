function addToCart(element) {
    let mainEl = element.closest('.single-item');
    let name = mainEl.querySelector('h3').innerText;
    let price = mainEl.querySelector('.price').innerText;
    let quantity = mainEl.querySelector('.actions input').value;
    let dodajBtn = mainEl.querySelector('.actions button');

    quantity = parseInt(quantity);
    price = price.substring(1);
    price = parseInt(price);
    let total = quantity * price;

    let korpa = document.querySelector('.cart-items');
    korpa.innerHTML += `<div class="cart-single-item">
                            <h3>${name}</h3>
                            <p>$${price} x ${quantity} = $${total}</p>
                            <button onclick="ukloni(this)">Ukloni</button>
                        </div>`;
    dodajBtn.innerText = 'Dodano';
    dodajBtn.setAttribute('disabled', true);
}

function ukloni(el) {
    let mainEl = el.closest('.cart-single-item');
    mainEl.remove();
    // dodajBtn.innerText = 'Dodaj';
    // dodajBtn.removeAttribute('disabled');
}