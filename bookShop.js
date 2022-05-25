
//Creating Header
let nav = document.createElement("div");
nav.className="nav";
nav.style.cssText=`height:100px; display:flex; flex-direction:row;justify-content:space-between;align-items:center;box-shadow: 4px 5px 6px 6px #ccc;padding-right:40px;`
let logoAnchor=document.createElement("a");

let navLogo = document.createElement("img");
navLogo.className="navLogo";
navLogo.src="https://cdn.iconscout.com/icon/premium/png-256-thumb/bookstore-2580986-2152263.png";
navLogo.style.width="100px";
let cart= document.createElement("img");
cart.src="./assets/cart.svg";
cart.className="cart";
cart.style.cssText="width:50px;height:50px;margin-right:30px;"
let added = document.createElement("div");
added.style.cssText="width:30px;height:30px;border-radius:50%;background-color:red;position:absolute;right:60px;top:10px;text-align:center;color:white"
let cartAnchor=document.createElement("a");
cartAnchor.className ="cartAnchor";
cartAnchor.append(added);
cartAnchor.appendChild(cart);
let boughtAmount=0;
added.innerText=boughtAmount;
let navUl=document.createElement("ul");
let li;
for (let i=0;i<4;i++){
    li = document.createElement("li");
    let liA =document.createElement("a");
    liA.appendChild(li);

    li.className=`${i}`;
    switch (i){
        case 0:
            li.innerText="Home";
            break;
            case 1:
                li.innerText="Offers";
                break;
                case 2:
                    li.innerText="Categories"
                    break;
                    case 3:
                        li.innerText="Sign In";
                        break;
    }
    li.addEventListener("mouseover",function(event){event.target.style.cssText ="border-bottom:2px solid black; cursor: pointer;"; });
    li.addEventListener("mouseleave",function(event){event.target.style.cssText =""; });
    navUl.append(liA);
  
}

navUl.style.cssText= `display:flex; flex-direction:row;align-items:center;justify-content:space-around;width:50%; text;list-style:none; `;
let search= document.createElement("input");
search.style.cssText=`width:300px;height:40%;border:2px solid #ccc;border-radius:50px`;
search.setAttribute("placeholder","Search any Book you want <3")
logoAnchor.appendChild(navLogo);
nav.appendChild(logoAnchor);
nav.appendChild(search);
nav.append(navUl,cartAnchor);
document.body.append(nav);

let modal = document.createElement("div");
modal.className="modal";
modal.style.cssText=`width:300px;border:1px solid black;max-height:84vh;position:absolute;top:110px;right:0px;background-color:#D7FFCF;z-index:5;display:flex;flex-direction:column;flex-wrap:nowrap; overflow-x:scroll;`
cartAnchor.addEventListener("mouseover",function(event){
  this.style.cursor="pointer";
})
let bool=false;
cartAnchor.addEventListener("click",function(event){
  bool=!bool;
  if(bool){
 document.body.append(modal);
 main.style.paddingRight="360px";
  }else{
    document.body.removeChild(modal);
    main.style.paddingRight="30px";
  }
 
})
//Main 

let main = document.createElement("div");
main.className="main";
main.style.cssText=`display:flex; flex-direction:row;align-items:center;justify-content:space-around;width:100%; flex-wrap:wrap;height:60vw;border:2px solid black;padding:30px;box-sizing:border-box;`;
document.body.append(main);
let booksInCart = [];

function getBooks() {
    return fetch('Books.json')
      .then(resp=> {
        return resp.json();
      })
      .then(data=> {
        for(let i=0;i<data.length;i++){
          let card= document.createElement("div");
          
          card.style.cssText=` display:flex;flex-direction:column;width:20%;`;
          let image = document.createElement("img");
          let bookContent = document.createElement("div");
          bookContent.className="bookContent"
          bookContent.style.cssText=`width:200px;height:100px;display:flex;justify-content:space-around;align-items:space-around;flex-direction:column;`
          image.src=data[i].imageLink;
          card.className=`book${i+1}`
          image.style.cssText=`width:150px;height:200px;`
          console.log(image);
         let title= document.createElement("h5")
         title.className="bookTitle";
         title.style.margin="5px 0px 0px 0px"
         title.innerText=`Title:` +"  "+ `${data[i].title}`;
         let author =document.createElement("p");
         author.style.margin="5px 0pc 0px 0px"
         author.className="bookAuthor";
         let price = document.createElement("p");
         price.className="price";
         bookContent.style.padding="10px 0px 0px 0px"
         price.innerText=`Price:${data[i].price}`;
         author.innerText=`Author: ${data[i].author}`;
         bookContent.append(author,title,price);
          card.appendChild(image);
          card.appendChild(bookContent);
          main.appendChild(card);
          let button = document.createElement("button");
          button.className="btn-buy";
          button.innerText="ADD TO CART"
          button.style.cssText=`width:150px;height:50px;background-color:white;color:green;border:1px solid green;box-shadow: 4px 5px 6px 6px #ccc;`
          
          image.addEventListener("mouseover",function(event){image.style.boxShadow ="rgb(150 150 150) 4px 3px 6px 6px";
          image.style.position="relative";
          bookContent.innerHTML="";
          bookContent.append(button);
        });
          image.addEventListener("mouseleave", function(event){image.style.boxShadow ="none"; 
          bookContent.style.display="flex";
          bookContent.removeChild(button);
          bookContent.append(author,title,price);
        });

          image.addEventListener("click",function(event){
            added.innerText="";
            ++boughtAmount;
            bookContent.removeChild(button);
            bookContent.append(author,title,price);
            added.append(boughtAmount);
           let classnames= image.parentElement.getAttribute("class");
           booksInCart.push(classnames);
           
           booksInCart.forEach(x =>
             {
               let a= document.getElementsByClassName(x).item(0);
               let clone = a.cloneNode(true);
               console.log(clone);
               modal.append(clone);
               

             },
             modal.innerHTML=""
           );
          
            console.log(booksInCart);

          })
          
      }
      })
  }
  getBooks();
 
