const openBtn = document.querySelector('.open'),
    product = document.querySelectorAll('.product'),
    card = document.querySelectorAll('.card'),
    buttons = document.querySelectorAll('.btnPoduct');


function createCart() {
    let cart = document.createElement('div'),
        field = document.createElement('div'),
        heading = document.createElement('h2'),
        closeBtn = document.createElement('button');


    cart.classList.add('cart')
    field.classList.add('cart-field')
    closeBtn.classList.add('close')

    heading.textContent = 'Sizning Savatingizda'
    closeBtn.textContent = 'Yopish'

    document.body.appendChild(cart)
    cart.appendChild(heading)
    cart.appendChild(field)
    cart.appendChild(closeBtn)

}
createCart()

const cart = document.querySelector('.cart'),
    closeBtn = document.querySelector('.close'),
    field = document.querySelector('.cart-field')


openBtn.addEventListener('click', function() {
    cart.style.display = 'block'
})

closeBtn.addEventListener('click', function() {
    cart.style.display = 'none'
})


buttons.forEach(function(item, i) {
    item.addEventListener('click', function() {
        let cloneItem = product[i].cloneNode(true)
        btn = cloneItem.querySelector('button')


        btn.remove()
        field.appendChild(cloneItem)
        product[i].remove()
    })
})