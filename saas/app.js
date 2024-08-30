let listProductHTML = document.querySelector('.col-9');
let listCartHTML = document.querySelector('.container-lg');
let iconCart = document.querySelector('.btn');
let iconCartSpan = document.querySelector('.btn span');
let body = document.querySelector('body');
let closeCart = document.querySelector('.close');
let containerlg = [];
let cart = [];


iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})
closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
})

    const addDataToHTML = () => {
    // remove datas default from HTML

        // add new datas
        if(containerlg.length > 0) // if has data
        {
            containerlg.forEach(containerlg => {
                let newProduct = document.createElement('div');
                newProduct.dataset.id = containerlg.id;
                newProduct.classList.add('item');
                newProduct.innerHTML = 
                `<img src="${product.image}" alt="">
                <h2>${product.name}</h2>
                <div class="price">$${product.price}</div>
                <button class="addCart">Add To Cart</button>`;
                listProductHTML.appendChild(newProduct);
            });
        }
    }
    listProductHTML.addEventListener('click', (event) => {
        let positionClick = event.target;
        if(positionClick.classList.contains('addCart')){
            let id_product = positionClick.parentElement.dataset.id;
            addToCart(id_product);
        }
    })
