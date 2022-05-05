// Responsive Menu - With Eventlistener
let menu = document.querySelector('.header ul');
let btn = document.querySelector('.header button');

btn.addEventListener('click', () => {
    if (btn.innerText === 'MENU') {
        menu.style.display = 'block';
        btn.innerText = 'CLOSE';
    } else {
        menu.style.display = 'none';
        btn.innerText = 'MENU';
    }
})

// Responsive Menu - With onClick function
// const mobileMenu = () => {
//     let menu = document.querySelector('.header ul');
//     let btn = document.querySelector('.header button');


//     if (btn.innerText === 'MENU') {
//         menu.style.display = 'block';
//         btn.innerText = 'CLOSE';
//     } else {
//         menu.style.display = 'none';
//         btn.innerText = 'MENU';
//     }
// }


// Slider 
let leftBtn = document.querySelector('#left-btn');
let rightBtn = document.querySelector('#right-btn');
let pictures = document.querySelectorAll('.slider-images img');

let imgNum = 0;

const moveRight = () => {
    displayNone();
    imgNum++;
    if (imgNum === pictures.length) {
        imgNum = 0;

    }
    pictures[imgNum].style.display = 'block';
}

const moveLeft = () => {
    displayNone();
    imgNum--;
    if (imgNum === -1) {
        imgNum = pictures.length - 1;
    }
    pictures[imgNum].style.display = 'block';
}

leftBtn.addEventListener('click', moveLeft);
rightBtn.addEventListener('click', moveRight);

const displayNone = () => {
    pictures.forEach((item) => {
        item.style.display = 'none';
    });
}

// Portfolio Filter
let btnSve = document.querySelector('[data-category="sve"]');
let btnRestorani = document.querySelector('[data-category="restorani"]');
let btnHoteli = document.querySelector('[data-category="hoteli"]');
let btnKorporacije = document.querySelector('[data-category="korporacije"]');
let btnOstalo = document.querySelector('[data-category="ostalo"]');

const portfolioSortV2 = el => {
    let categories = el.getAttribute('data-category');
    let items = document.querySelectorAll('.portfolio-single-item');

    items.forEach(item => {
        item.style.display = 'none';
    });

    if (categories === 'sve') {
        items.forEach(item => {
            item.style.display = 'block';
        });
    }

    items.forEach((item) => {
        if (item.getAttribute('data-category').includes(categories)) {
            item.style.display = 'block';
        }
    });
}

btnHoteli.addEventListener('click', () => {
    if (categories === 'hoteli') {
        items.forEach(item => {
            item.style.display = 'block';
        });
    }
});



// const portfolioSort = (el) => {
//     let categories = el.getAttribute('data-category');
//     let items = document.querySelectorAll('.portfolio-single-item');

//     items.forEach(item => {
//         item.style.display = 'none';
//     });

//     if (categories === 'sve') {
//         items.forEach(item => {
//             item.style.display = 'block';
//         });
//     }

//     items.forEach((item) => {
//         if (item.getAttribute('data-category').includes(categories)) {
//             item.style.display = 'block';
//         }
//     });
// }


// Modal - With Eventlistener
let modalContent = document.querySelector('.popup-modal');
let overlay = document.querySelector('.overlay');
let modalBtn = document.querySelector('.modal-section button');
let clsModal = document.querySelector('#closeModal');

modalBtn.addEventListener('click', () => {
    modalContent.style.display = 'block';
    overlay.style.display = 'block';
})

clsModal.addEventListener('click', () => {
    modalContent.style.display = 'none';
    overlay.style.display = 'none';
})

// Modal - With onClick function
// let modalContent = document.querySelector('.popup-modal');
// let overlay = document.querySelector('.overlay');

// const openModal = () => {
//     modalContent.style.display = 'block';
//     overlay.style.display = 'block';
// }

// const closeModal = () => {
//     modalContent.style.display = 'none';
//     overlay.style.display = 'none';
// }