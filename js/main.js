



window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    headerElement.classList.add("scroll-down")
  } else {
    headerElement.classList.remove("scroll-down")
  }
})

const addToCartButtons =document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(function(button) {
 button.addEventListener('click', function(e) {
    e.preventDefault(); 
    const productCard =button.closest('.card');


    const productImage =productCard.querySelector('img').src;
    const productTitle =productCard.querySelector('.title').innerText;
    const productPrice =productCard.querySelector('.price').innerText;

    
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];


    cartItems.push({
      image: productImage,
      title: productTitle,
      price: productPrice
    });


    localStorage.setItem('cartItems',JSON.stringify (cartItems));

    window.location.href = './pages/cart.html';
  });



