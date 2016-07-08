document.addEventListener('DOMContentLoaded',function(){
    var products = getProductList();
    //es6 syntax
    var cartTemplate = `<tr class="cart-item">
        <td class="product-image">
            <a href="#">
                <img src="__IMAGE__"/>
            </a>
        </td>
        <td class="product-name">
            <a href="../products/product.html?id=__ID__">__NAME__</a>
        </td>
        <td class="product-price">
            $__PRICE__
        </td>
        <td class="product-quantity">
            <div class="quantity">
                <input type="button" class="minus" value="-">
                <input type="number"
                       class="input-text qty text"
                       title="Qty"
                       value="__QTY__"
                       name="quantity">
                <input type="button" class="plus" value="+">
            </div>
        </td>
        <td class="product-total">
            <a href="#">$__TOTAL__</a>
        </td>
    </tr>`;
    var cart = localStorage.cart ? JSON.parse(localStorage.cart) :  [];
    var cartContainer = document.querySelector('.cart-table tbody');
    var total = 0;
    for(var i=0;i<cart.length;i++) {
      total += cart[i].qty * products[cart[i].id].price;
      cartContainer.innerHTML += cartTemplate.replace('__QTY__',cart[i].qty)
                                             .replace('__ID__',cart[i].id)
                                             .replace('__NAME__',cart[i].name)
                                             .replace('__IMAGE__',products[cart[i].id].picture)
                                             .replace('__PRICE__',products[cart[i].id].price)
                                             .replace('__TOTAL__',cart[i].qty * products[cart[i].id].price)
    }
    document.querySelector('.cart-subtotal td:nth-child(2)').innerHTML = '$' + total;
    if(total < 1000) {
      //shipping-costs
      total += 50;
      document.querySelector('.cart-shipping td:nth-child(2)').innerHTML = '$50';
    }
    document.querySelector('.cart-total td:nth-child(2)').innerHTML = '$' + total;
})
