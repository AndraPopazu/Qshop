document.addEventListener('DOMContentLoaded',function(){
    var products = getProductList();
    var product = products[getParameterByName('id')];
    var slideIndicatorTemplate = '<li data-target="#carousel-example-generic" data-slide-to="__POS__"></li>';
    var slideTemplate = `<div class="item">
        <img src="__IMAGE__" alt="__ALT__">
        <div class="carousel-caption">
            __CAPTION__
        </div>
    </div>`
    var slideIndicator = document.querySelector('.carousel-indicators');
    var slidesContainer = document.querySelector('.carousel-inner');
    for(var i=0;i<product.pictures.length;i++) {
      slideIndicator.innerHTML += slideIndicatorTemplate.replace('__POS__',i);
      slidesContainer.innerHTML += slideTemplate.replace('__IMAGE__',product.pictures[i])
                                                .replace('__ALT__','Product Image '+i)
                                                .replace('__CAPTION__',product.name);
    }
    //activate the first slide
    slideIndicator.querySelector('li').className += ' active';
    slidesContainer.querySelector('.item').className += ' active';

    //set description, name, price and review count
    var descriptionContainers = document.querySelectorAll('.description,#description')
    for( i=0;i<descriptionContainers.length;i++) {
      descriptionContainers[i].innerHTML = product.description
    }
    document.querySelector('.price').innerHTML = '$ ' + product.price;
    document.querySelector('h2').innerHTML = product.name;
    document.querySelector('.review-count').innerHTML = product.reviews.length;
    //set reviews
    var reviewContainer = document.querySelector('#reviews');
    for(var i=0;i<product.reviews.length;i++) {
      reviewContainer.innerHTML += product.reviews[i].name+': ' + product.reviews[i].text + '<br/>';
    }

    //set specs
    var specContainer = document.querySelector('#specifications table tbody');
    for(var i=0;i<product.specifications.length;i++) {
      specContainer.innerHTML += '<th>' + product.specifications[i].label+'</th><td>' + product.specifications[i].value + '<td/>';
    }

    document.querySelector("#addToCart").addEventListener('click', function() {
      addToCart(getParameterByName('id'), document.querySelector("#qty").value, product.name);
    })
})
