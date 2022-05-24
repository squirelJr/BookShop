
//Creating Header
let nav = document.createElement("div");
nav.className="nav";
nav.style.cssText=`height:100px; display:flex; flex-direction:row;justify-content:space-between;align-items:center;box-shadow: 4px 5px 6px 6px #ccc;`
let logoAnchor=document.createElement("a");

let navLogo = document.createElement("img");
navLogo.className="navLogo";
navLogo.src="https://cdn.iconscout.com/icon/premium/png-256-thumb/bookstore-2580986-2152263.png";
navLogo.style.width="100px";

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
nav.append(navUl);
document.body.append(nav);


//Main 

let main = document.createElement("div");
main.className="main";
main.style.cssText=`display:flex; flex-direction:row;align-items:center;justify-content:space-around;width:100%; flex-wrap:wrap;height:60vw;border:2px solid black;padding:30px;`;
document.body.append(main);

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
          card.addEventListener("mouseover",function(event){image.style.boxShadow ="rgb(150 150 150) 4px 3px 6px 6px"; });
          card.addEventListener("mouseleave", function(event){image.style.boxShadow ="none"; })
          
      }
        
      })
  }
  getBooks();
 
