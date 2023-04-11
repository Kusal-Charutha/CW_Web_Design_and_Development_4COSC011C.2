var total = 0;

function openPopup() {
    document.getElementById("popup-overlay").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup-overlay").style.display = "none";
}

function addToCart(productId){

    const product = document.getElementById(productId);


    var productTitle = product.querySelector("h2").innerText;
    var productPriceText = product.querySelector("p").textContent;
    var productPrice = parseFloat(productPriceText.substring(1));

    total += productPrice;
    document.getElementById("cart-total").innerHTML = "$" + total;

    let cart = document.querySelector('#cart');
    cart.innerHTML += "<li class='cart-item'><span class='item-name'>" + productTitle + "</span><span class='item-price'>" +productPriceText+ "</span></li>"
      
      

    }

    function clearCart(productId){
    
        document.querySelector('#cart').innerHTML = '';
          
          total = 0;
          document.getElementById("cart-total").innerHTML = "$" + total;
        //   document.querySelector(".checkout-btn").disabled = true;
          closePopup();
    
        }

        function checkout(){
            
            localStorage.setItem("total", total);
            localStorage.setItem("email", document.getElementById("email-input").value);
              
        
            }

            function buyNow(productId){

              addToCart(productId);
              openPopup();
                
          
              }

    console.log('js running');