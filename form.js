let cash =document.getElementById("cash");
let card=document.getElementById("card");

let bool = false;
cash.addEventListener("click", function (event) {
  bool = !bool;
  if (bool) {
    cash.checked=false;
    card.checked=true;
  } else {
    cash.checked=true;
    card.checked=false;
  }

});
card.addEventListener("click", function (event) {
    bool = !bool;
    if (bool) {
      cash.checked=false;
      card.checked=true;
    } else {
      cash.checked=true;
      card.checked=false;
    }
  
  });

  let checkedGifts=0;
  let gifts = document.getElementsByClassName('gift');
  console.log(gifts);
  for(i=0;i<gifts.length;i++){
    gifts[i].addEventListener("click",e=>{
       
          if(e.target.checked==true){
              checkedGifts++;
          }else{
              checkedGifts--;
          }
          
          let giftContainer=document.getElementById("gift-container");
          let p=document.createElement("p");
          if(checkedGifts>2 ){
          
                      
              console.log(gifts)
            
              p.style.cssText="color:red;margin:0px;padding:0px;";
              p.innerText="you can choose only 2 gifts";
              giftContainer.append(p);
          }else{
            
          }
        
          console.log(checkedGifts)
          
          if(checkedGifts<3){
           
            p.remove();
        }
        
    });
    
    console.log(checkedGifts)
    
}

   