var removeCartItemButtons = docment.getElementByClassName('btn-banger')
console.log(removeCartItemButtons)
for (var i = 0; i < removeCartItemButtons.length; i++){
    var button = removeCartItemButtons[i]
    button.addEventListener('click', function(event){
        //console.log('clicked')
        var buttonClicked = event.target
        buttonClicked.parentElement.parantElement.remove()
        updateCartTotal()
    })
}

function updateCartTotal(){
    var removeCartItemcontainer = document.getElementByClassName('cart-items') 
    var cartRows = removeCartItemcontainer.getElementByClassName('cart-row')
    for (var i = 0; i < cartRows.length; i++){
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    document.getElementByClassName('cart-total-price')[0]
}