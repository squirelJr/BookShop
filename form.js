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

let FirstName=document.forms["form"]["name"].value;
let lastName =document.forms["form"]["lastName"].value;
let deliveryDate =document.forms["form"]["deliveryDate"].value;
var formdata=new FormData();
 formdata.append("name",FirstName);
 formdata.append("lastName",lastName);
 formdata.append("deliveryDate",deliveryDate);

 let form =document.getElementsByTagName("form");
 let button= document.getElementsByTagName("button");




  


function validateForm(){
  let First = document.forms["form"]["name"].value ;
  let lastName =document.forms["form"]["lastName"].value;
  let date =document.forms["form"]["deliveryDate"].value;
  let now =new Date;
  if (First ==" " || First.length<2){
    document.getElementById("name").style.border="2px solid red";
   //return false;
 
  }
    if (lastName=="" || lastName.length<2){
     
      document.getElementById("lastName").style.border="2px solid red";
     // return false;
    }

 
  if (date<now.getDate() ){
    
    document.getElementById("deliveryDate").style.border="2px solid red";
   //return false;

  }

};
button.addEventListener('click',e=>{ validateForm()})