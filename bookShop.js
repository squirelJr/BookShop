
//Creating Header
let nav = document.createElement("div");
nav.className = "nav";
nav.style.cssText = `height:100px; display:flex; flex-direction:row;justify-content:space-between;align-items:center;box-shadow: 4px 5px 6px 6px #ccc;padding-right:40px;`
let logoAnchor = document.createElement("a");

let navLogo = document.createElement("img");
navLogo.className = "navLogo";
navLogo.src = "https://cdn.iconscout.com/icon/premium/png-256-thumb/bookstore-2580986-2152263.png";
navLogo.style.width = "100px";
let cart = document.createElement("img");
cart.src = "./assets/cart.svg";
cart.className = "cart";
cart.style.cssText = "width:50px;height:50px;margin-right:30px;"
let added = document.createElement("div");
added.style.cssText = "width:30px;height:30px;border-radius:50%;background-color:red;position:absolute;right:60px;top:10px;text-align:center;color:white"
let cartAnchor = document.createElement("a");
cartAnchor.className = "cartAnchor";
cartAnchor.append(added);
cartAnchor.appendChild(cart);
let boughtAmount = 0;
//added.innerText = boughtAmount;
let navUl = document.createElement("ul");
let li;
for (let i = 0; i < 4; i++) {
  li = document.createElement("li");
  let liA = document.createElement("a");
  liA.appendChild(li);

  li.className = `${i}`;
  switch (i) {
    case 0:
      li.innerText = "Home";
      break;
    case 1:
      li.innerText = "Offers";
      break;
    case 2:
      li.innerText = "Categories"
      break;
    case 3:
      li.innerText = "Sign In";
      break;
  }
  li.addEventListener("mouseover", function (event) { event.target.style.cssText = "border-bottom:2px solid black; cursor: pointer;"; });
  li.addEventListener("mouseleave", function (event) { event.target.style.cssText = ""; });
  navUl.append(liA);

}

navUl.style.cssText = `display:flex; flex-direction:row;align-items:center;justify-content:space-around;width:50%; text;list-style:none; `;
let search = document.createElement("input");
search.style.cssText = `width:300px;height:40%;border:2px solid #ccc;border-radius:50px`;
search.setAttribute("placeholder", "Search any Book you want <3")
logoAnchor.appendChild(navLogo);
nav.appendChild(logoAnchor);
nav.appendChild(search);
nav.append(navUl, cartAnchor);
document.body.append(nav);

let modal = document.createElement("div");
modal.className = "modal";
modal.style.cssText = `width:300px;border:1px solid black;max-height:84vh;position:absolute;top:110px;right:0px;background-color:#D7FFCF;z-index:5;display:flex;flex-direction:column;flex-wrap:nowrap; overflow-x:scroll;`
let confirmbtn = document.createElement("button");
confirmbtn.innerText = "Confirm Order";
confirmbtn.style.cssText = `margin-bottom:20px;height:30px;font-weight:900;`;
confirmbtn.addEventListener('mouseover', event => {
  confirmbtn.style.cssText = `background-color:grey;color:white;margin-bottom:20px;height:30px;font-weight:900;cursor:pointer;`
})
confirmbtn.addEventListener('mouseleave', event => {
  confirmbtn.style.cssText = `margin-bottom:20px;height:30px;font-weight:900;`;
});

let form = document.createElement("a");
form.className = "formPage";
form.href = "./form.html"
confirmbtn.append(form);
confirmbtn.addEventListener('click', event => {
  window.location.href = "./form.html"
});
modal.prepend(confirmbtn)
cartAnchor.addEventListener("mouseover", function (event) {
  this.style.cursor = "pointer";
})
let bool = false;
cartAnchor.addEventListener("click", function (event) {
  bool = !bool;
  if (bool) {
    document.body.append(modal);
    main.style.paddingRight = "360px";
  } else {
    document.body.removeChild(modal);
    main.style.paddingRight = "30px";
  }

})


let showModal = document.createElement("div");
showModal.className = "showModal";
showModal.style.cssText = `width:500px;border:1px solid black;height:300px;position:absolute;top:150px;right:30%;background-color:#D7FFCF;z-index:5;display:flex;flex-direction:column;flex-wrap:nowrap;align-items:center; overflow-x:scroll;`
let closeModal = document.createElement("button");
closeModal.innerText = "ClOSE";
showModal.append(closeModal);
closeModal.style.alignSelf = "flex-end";


let removeBook = document.createElement("button");
removeBook.innerText = "X";
removeBook.style.alignSelf = "baseline";


//Main 


let grandTotal = 0;
let total = document.createElement("div");
total.style.cssText = `font-weight:bolder;color: red;padding-bottom:5px;`
let main = document.createElement("div");
main.className = "main";
main.style.cssText = `display:flex; flex-direction:row;align-items:center;justify-content:space-around;width:100%; flex-wrap:wrap;height:60vw;border:2px solid black;padding:30px;box-sizing:border-box;`;
document.body.append(main);
let booksInCart = [];
let removable=[];

function getBooks() {
  return fetch('Books.json')
    .then(resp => {
      return resp.json();
    })
    .then(data => {
      for (let i = 0; i < data.length; i++) {
        let card = document.createElement("div");

        card.style.cssText = ` display:flex;flex-direction:column;width:20%;`;
        card.draggable = true;
        let image = document.createElement("img");
        image.draggable = false;
        let bookContent = document.createElement("div");
        bookContent.className = "bookContent"
        bookContent.style.cssText = `width:200px;height:100px;display:flex;justify-content:space-around;align-items:space-around;flex-direction:column;`
        image.src = data[i].imageLink;
        card.className = `book${i + 1}`;

        card.id = `book${i + 1}`;
        image.style.cssText = `width:150px;height:200px;`
        console.log(image);

        let title = document.createElement("h5")
        title.className = "bookTitle";
        title.style.margin = "5px 0px 0px 0px"
        title.innerText = `Title:` + "  " + `${data[i].title}`;
        let author = document.createElement("p");
        author.style.margin = "5px 0pc 0px 0px"
        author.className = "bookAuthor";
        let price = document.createElement("p");
        price.className = "price";
        bookContent.style.padding = "10px 0px 0px 0px"
        price.innerText = `Price:${data[i].price}`;
        author.innerText = `Author: ${data[i].author}`;
        bookContent.append(author, title, price);
        card.appendChild(image);
        card.appendChild(bookContent);
        main.appendChild(card);

        let addCart = document.createElement("button");
        addCart.className = "btn-buy";
        addCart.innerText = "ADD TO CART"
        addCart.style.cssText = `width:75px;height:50px;background-color:white;color:green;border:1px solid green;box-shadow: 4px 5px 6px 6px #ccc;`
        let showMore = document.createElement("button");
        showMore.className = "showMore";
        showMore.innerText = "SHOW MORE"
        showMore.style.cssText = `width:75px;height:50px;background-color:white;color:green;border:1px solid green;box-shadow: 4px 5px 6px 6px #ccc;`
        let btnContainer = document.createElement("div");
        btnContainer.cssText = `display:flex;flex-direction:row;justify-items:center;width:75px;height:55px;background-color:white;color:green;border:1px solid green;box-shadow: 4px 5px 6px 6px #ccc;`
        btnContainer.append(addCart, showMore);
        card.addEventListener("mouseover", function (event) {
          image.style.boxShadow = "rgb(150 150 150) 4px 3px 6px 6px";
          image.style.position = "relative";
          bookContent.innerHTML = "";
          bookContent.append(btnContainer);
        });
        card.addEventListener("mouseleave", function (event) {
          image.style.boxShadow = "none";
          bookContent.style.display = "flex";
          bookContent.removeChild(btnContainer);
          bookContent.append(author, title, price);
        });

        addCart.addEventListener("mouseover", e => {
          addCart.style.cursor = "pointer";
          addCart.style.color = "white";
          addCart.style.backgroundColor = "green";
        });
        addCart.addEventListener("mouseleave", e => {
          addCart.style.cursor = "cursor";
          addCart.style.color = "green";
          addCart.style.backgroundColor = "white";
        });
        showMore.addEventListener("mouseover", e => {
          showMore.style.cursor = "pointer";
          showMore.style.color = "white";
          showMore.style.backgroundColor = "green";
        });
        showMore.addEventListener("mouseleave", e => {
          showMore.style.cursor = "cursor";
          showMore.style.color = "green";
          showMore.style.backgroundColor = "white";
        });





        addCart.addEventListener("click", e => {
          added.innerText = "";
          ++boughtAmount;


          added.append(boughtAmount);
          let a = addCart.parentElement;
          let b = a.parentElement.parentElement;
          // b.removeChild(removeBook);
          bookContent.innerHTML = "";

          bookContent.append(author, title, price);
          b.prepend(removeBook);
          let clone = b.cloneNode(true);

          grandTotal += data[i].price;
          
          modal.append(clone);
          b.removeChild(removeBook);
          total.innerText = `TOTAL:${grandTotal}`;



        });

        let bool = false;
        showMore.addEventListener("click", function (event) {

          bool = !bool;
          if (bool) {
            let a = showMore.parentElement;
            let b = a.parentElement.parentElement;
            bookContent.innerHTML = "";
            bookContent.style.height = "max-content";

            let desc = data[i].description;
            let p = document.createElement("p");
            p.innerText = `descreption: ${desc}`;
            bookContent.append(author, title, price, p);
            let clone = b.cloneNode(true);
            showModal.append(clone);
            document.body.append(showModal);
            main.style.opacity = "0.3";
          } else {
            document.body.removeChild(showModal);
            main.style.opacity = "1";
            showModal.removeChild(clone);
          }

        })
        closeModal.addEventListener("click", e => {
          document.body.removeChild(showModal);
          main.style.opacity = "1";
          showModal.innerHTML = "";
          showModal.append(closeModal);
        });



        modal.prepend(total);
        let draggable;
        card.addEventListener("drag", ev => {
          let a = document.getElementById(`${ev.currentTarget.id}`);
          bookContent.removeChild(btnContainer);
          bookContent.append(author, title, price);
          a = a.cloneNode(true);
          a.prepend(removeBook);
          console.log(a);
          draggable = a;
        });
        modal.addEventListener("dragover", ev => {
          ev.preventDefault();
        });
        modal.addEventListener("drop", ev => {
          ev.preventDefault();

          if (draggable != undefined) {
            added.innerText = "";
            ++boughtAmount;
            console.log(data[i].price);
            grandTotal += data[i].price;
            added.append(boughtAmount);
            modal.append(draggable);
            total.innerText = `TOTAL:${grandTotal}`;
            // modal.prepend(total);

          };
        });





        image.addEventListener('click', function (event) {
          added.innerText = "";
          ++boughtAmount;

          bookContent.removeChild(btnContainer);

          bookContent.append(author, title, price);
          added.append(boughtAmount);
          let classnames = image.parentElement.getAttribute("class");
          booksInCart.push(classnames);
          console.log(added.innerText);
          grandTotal += data[i].price;

          booksInCart.forEach(x => {
            let a = document.getElementsByClassName(x).item(0);
            a.prepend(removeBook);
            let clone = a.cloneNode(true);
            console.log(clone);

            modal.append(clone);
            a.removeChild(removeBook);


          },
            modal.innerHTML="",

          );
          total.innerText = `TOTAL:${grandTotal}`;
          modal.prepend(total);
          modal.prepend(confirmbtn);


          console.log(removeBook.parentElement);

        })


      }

    })

}
console.log(grandTotal)
getBooks();
