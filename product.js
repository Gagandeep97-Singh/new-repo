const items= [
  {
    "id": "1" ,
      "title": "queen panel bed",
      "price": 10.99,
      "image": "./img/img1.jpg" ,
      "cat":"Ikea" },
  
  {
    "id": "2" ,
      "title": "king panel bed",
      "price": 12.99,
      "image": "./img/img2.jpg",
      "cat":"Ikea"
    }
  ,
  
    {"id": "3",
      "title": "single panel bed",
      "price": 12.99,
      "image": "./img/img3.jpg",
      "cat":"Ikea"
    },
  {
     "id": "4" ,
      "title": "twin panel bed",
      "price": 22.99,
      "image": "./img/img4.jpg" ,
      "cat":"Ikea"
  },
  {
    "id": "5" ,
      "title": "fridge",
      "price": 88.99,
      "image": "./img/img5.jpg",
      "cat":"liddy"
  },
  {
   "id": "6" ,
      "title": "dresser",
      "price": 32.99,
      "image": "./img/img6.jpg",
      "cat":"liddy"

    
  },
  {
    "id": "7" ,
      "title": "couch",
      "price": 45.99,
      "image": "./img/img7.jpg",
      "cat":"liddy"
      
    
  },
  {
    "id": "8" ,
      "title": "table",
      "price": 33.99,
      "image": "./img/img8.jpg",
      "cat":"Marcos"

    
  },
  {
    "id": "9" ,
      "title": "table",
      "price": 223.99,
      "image": "./img/img9.jpg",
      "cat":"Marcos"

    
  },
  {
    "id": "10" ,
      "title": "table",
      "price": 113.99,
      "image": "./img/img10.jpg",
      "cat":"Marcos"

    
  },
  {
    "id": "11" ,
      "title": "table",
      "price": 323.99,
      "image": "./img/img11.jpg",
      "cat":"caresa"

    
  }
  ,{
    "id": "12" ,
      "title": "table",
      "price": 133.99,
      "image": "./img/img12.jpg",
      "cat":"caresa"

    
  }
]
const box = document.querySelector('.box-right')
const menubar = document.querySelector(".bar");
const nav = document.querySelector('.navs');
const close = document.querySelector('.close');
const shop = document.querySelector('.shop');
const closecart = document.querySelector('.closecart');
const cartpage = document.querySelector('.cart-overlay');
const cartbox = document.querySelector('.cart-box');
let count = document.querySelector('.count');
const filterbtns = document.querySelectorAll('.filter-item')
let countnum=1;

document.addEventListener('click',showmenu);


window.addEventListener('DOMContentLoaded',()=>{
loadcontent(items)
})

// all click events goes here
function showmenu(e) {
if (e.target.classList.contains('fa-bars')) {
  nav.classList.add("open")
}
if (e.target.classList.contains('fa-xmark')) {
nav.classList.remove("open")
}
if (e.target.classList.contains('link')) {
nav.classList.remove("open")
}
if (e.target.classList.contains('shops')) {
cartpage.classList.add('showcart')
}
if (e.target.classList.contains('closecart')) {
cartpage.classList.remove('showcart')
}

}

function loadcontent(product) {
  const proitem= product.map((element)=>{
    const{id,title,price,image}=element;
   return ` <div class="main-box" data-id=${id}>
   <div class="img-box">
       <img src=${image} alt="" id="img">
       <div class="addcart">
          <i class="fa-solid fa-cart-plus"></i>
          <p>add to cart</p>
       </div>
   </div>
   <div class="des">
       <h3 class="title">
          ${title}
       </h3>
       <p class="price">
          $ ${price}
       </p>
       </div>
   </div>
 `

  })
 const filterpro= proitem.join("");
 box.innerHTML=filterpro
 const addcart = box.querySelectorAll('.addcart');
addcart.forEach((btns)=>{
  btns.addEventListener("click",()=>{
    alert('PRODUCT HAS BEEN ADDED IN CART')
    countnum++
    count.innerHTML=countnum
    
    btns.classList.add('inactive')
    let cartimg=btns.previousElementSibling.src;
    let pos=cartimg.indexOf("img")+3;
    let items={};
    let imgpos=cartimg.slice(pos)
    items.pic=`img${imgpos}`
   let cartname=btns.parentElement.nextElementSibling.firstElementChild.innerHTML
   items.name=cartname
   let cartprice= btns.parentElement.nextElementSibling.lastElementChild.innerHTML
   items.price=cartprice;

   
 let cartitems=` <div class="cart-mean">
 <div class="cart-pic">
     <img src=${items.pic} alt="">
 </div>
 <div class="product-name">
     <h3>${items.name}</h3>
     <p class="product-price">${items.price}</p>
     <h3 class="remove">Remove</h3>
 </div>
</div>`

cartbox.innerHTML+=cartitems;
  })
})
}




filterbtns.forEach((btn)=>{
btn.addEventListener('click',function(e) {
  const cata=e.currentTarget.dataset.id;
   
  const filteritems = items.filter(item=>{
     if (item.cat===cata) {
       return item;
       
      } 
    })
    if (cata==='all') {
      loadcontent(items)
    } else {
    
   loadcontent(filteritems)
  }
})
})

// making functionallty of taps about page
const buttons = document.querySelectorAll('.btn');
const box1 = document.querySelector('.text-box');
const article= document.querySelectorAll('.text-box1')
const und = document.querySelector('.un')
//we remove the class from buttons and add on one which we clicked

box1.addEventListener("click",(e)=>{
  let id = e.target.dataset.id;
  if (id) {
    buttons.forEach(btn=>{
      btn.classList.remove('act')
    })
  }
  e.target.classList.add('act');
  article.forEach(ar=>{
    ar.classList.remove('active');
  })
  
  const tab= document.getElementById(id);
  tab.classList.add('active')
})

