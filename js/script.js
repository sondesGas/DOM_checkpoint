
// like button
const likebtn=document.getElementsByClassName('fa-heart')
//  console.log(likebtn)
 for (const like of likebtn) {
    like.addEventListener('click', function(event) {
      event.target.classList.toggle('likeIcone')
    })
  }
  // Remove button
const remove=document.getElementsByClassName('fa-trash')
//  console.log(Array.from(remove));
Array.from(remove).forEach(function (e) {
  e.addEventListener('click', function(event){
    event.target.parentElement.parentElement.remove()
  })
  e.addEventListener("mouseover",function(event) {event.target.style.color="red"})
  e.addEventListener("mouseout",function(event) {event.target.style.color="unset"}) 
})
// Calcul total-Price-Cart
  var cartItemContainer = document.getElementsByClassName('shopping-cart');
  var items= document.querySelectorAll('.item');
      let total = 0
      // let newTotalPrice=0
      // var newTotalPrice=0
    for (var i = 0; i < items.length; i++) {
     var item = items[i]
    let priceProduct = Number(item.querySelector('.item-price span').innerText);
    //  console.log(priceProduct)
    var btnPlus=item.querySelector('.fa-plus-square')
    btnPlus.addEventListener('click',function (){
      let priceProductBeforeChange =Number(this.closest('.item').querySelector('.item-price span').innerText);
      let totalPriceBeforeChange = total
       console.log(priceProduct, priceProductBeforeChange, totalPriceBeforeChange)
      var input = this.nextElementSibling;
      var inputValue = input.value;
      var newinput = parseInt(inputValue) + 1 ;
      input.value = newinput
      // console.log(newinput);
      var newTotalPrice = total - priceProductBeforeChange + (newinput * priceProduct)
      document.querySelector('.totprice span').innerText =total
      // console.log(priceProduct, priceProductBeforeChange,newTotalPrice)
      console.log(newTotalPrice)
      this.closest('.item').querySelector('.item-price span').innerText = newinput * priceProduct
      document.querySelector('.totprice span').innerText =newTotalPrice 
    })
    var btnMinus=item.querySelector('.fa-minus-square')
    btnMinus.addEventListener('click',function (){
      let priceProductBeforeChange =Number(this.closest('.item').querySelector('.item-price span').innerText);
      let totalPriceBeforeChange = total
      // console.log(priceProduct, priceProductBeforeChange, totalPriceBeforeChange)
      var input = this.previousElementSibling;
      var inputValue = input.value;
      if (inputValue > 1) {
      var newinput = parseInt(inputValue) - 1 ;
      input.value = newinput
      // console.log(newinput);
     var newTotalPrice = total - priceProductBeforeChange + (newinput * priceProduct)
      this.closest('.item').querySelector('.item-price span').innerText = newinput * priceProduct 
      document.querySelector('.totprice span').innerText =newTotalPrice
    }
    })
    total += priceProduct
    
  }
  
  
  

      
