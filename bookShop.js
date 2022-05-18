
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
