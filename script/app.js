
const wrapperNavbar = document.querySelector('.wrapper__navbar-btn'),
    wrapperNavbarBtn = document.querySelector('.warapper__navbar-count'),
    navbarBasket = document.querySelector('.wrapper__navbar-basket'),
    navbarBasketClose = document.querySelector('.wrapper__navbar-close'),
    navbarBasketCloseBtn = document.querySelector('.close__menu'),
    wrapperListBtn = document.querySelector('.wrapper__list-btn'),
    wrapperListCount = document.querySelector('.wrapper__list-count');


wrapperNavbar.addEventListener('click', () => {

    navbarBasket.classList.toggle('active');

    navbarBasketClose.addEventListener('click', () => {

        navbarBasket.classList.remove('active')

    });

    navbarBasketCloseBtn.addEventListener('click', () => {

        navbarBasket.classList.remove('active')

    });

});

const products = {

    crazy: {
        name: 'Crazy',
        price: 31000, 
        img: 'images/products/burger-1.png',
        amount: 0,
        get totalSumm(){
            return this.amount * this.price;
        }
    },
    light: {
        name: 'Light',
        price: 26000, 
        img: 'images/products/burger-2.png',
        amount: 0,
        get totalSumm(){
            return this.amount * this.price;
        }
    },

};

