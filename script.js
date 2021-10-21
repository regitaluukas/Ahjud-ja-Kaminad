var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function getProduct() {
  const queryString = window.location.search
  let productid = new URLSearchParams(queryString).get('id')
  let price_product = document.getElementById('price-product')

  if (productid == null) {
    price_product.style.display = 'none'
    return
  }

  price_product.getElementsByTagName('h2')[0].textContent = 'Toode ' + productid
  price_product.getElementsByTagName('img')[0].src = 'Kamin' + productid + '.jpg'
}