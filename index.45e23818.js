!function(){function t(t,o,e,s){Object.defineProperty(t,o,{get:e,set:s,enumerable:!0,configurable:!0})}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},s={},n=o.parcelRequired7c6;function i(){const t=localStorage.getItem("currentUser");if(!t)return console.log("Pease login first");const o=JSON.parse(t);console.log(o);const e=o.wishList;if(!e)return console.log("There is no books in wish-list");const s=e.length;console.log(s),function(t){const o=document.querySelector(".page-nav__cart-number");o.classList.remove("visually-hidden"),o.textContent=t}(s)}null==n&&((n=function(t){if(t in e)return e[t].exports;if(t in s){var o=s[t];delete s[t];var n={id:t,exports:{}};return e[t]=n,o.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,o){s[t]=o},o.parcelRequired7c6=n),n.register("iE7OH",(function(o,e){var s,n;t(o.exports,"register",(function(){return s}),(function(t){return s=t})),t(o.exports,"resolve",(function(){return n}),(function(t){return n=t}));var i={};s=function(t){for(var o=Object.keys(t),e=0;e<o.length;e++)i[o[e]]=t[o[e]]},n=function(t){var o=i[t];if(null==o)throw new Error("Could not resolve bundle with id "+t);return o}})),n.register("aNJCr",(function(o,e){var s;t(o.exports,"getBundleURL",(function(){return s}),(function(t){return s=t}));var n={};function i(t){return(""+t).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}s=function(t){var o=n[t];return o||(o=function(){try{throw new Error}catch(o){var t=(""+o.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(t)return i(t[2])}return"/"}(),n[t]=o),o}})),n("iE7OH").register(JSON.parse('{"EVgbq":"index.45e23818.js","eMZls":"amazon.a26c5207.png","eKenW":"ibook.dbc85e35.png","i996a":"bookshop.27255142.png","9oBKr":"ShoppingPage.f1c485ad.js"}')),n("dNYR7"),n("hlD4l"),n("d4MZv"),n("lksGo"),i();const a="https://books-backend.p.goit.global/books/category?category=",r=document.querySelector(".books-cards__list");async function c(t){r.insertAdjacentHTML("afterbegin",'<div class="bookshelf_wrapper"><ul class="books_list"><li class="book_item first"></li><li class="book_item second"></li><li class="book_item third"></li><li class="book_item fourth"></li><li class="book_item fifth"></li><li class="book_item sixth"></li></ul><div class="shelf"></div></div>');const o=await fetch(`${a}${t}`);if(!o.ok)throw new Error(o.status);return await o.json()}const l="https://books-backend.p.goit.global/books/",d=document.querySelector(".books-cards__list");async function u(t){d.insertAdjacentHTML("afterbegin",'<div class="bookshelf_wrapper"><ul class="books_list"><li class="book_item first"></li><li class="book_item second"></li><li class="book_item third"></li><li class="book_item fourth"></li><li class="book_item fifth"></li><li class="book_item sixth"></li></ul><div class="shelf"></div></div>');const o=await fetch(`${l}${t}`);if(!o.ok)throw new Error(o.status);return await o.json()}const b={booksCardsList:document.querySelector(".books-cards__list"),booksCardsTitle:null,topBooksCategories:null,booksCardsButton:null};function k(){u("top-books").then((t=>{b.booksCardsList.classList.remove("category-books-list"),b.booksCardsList.classList.add("top-books-list"),b.booksCardsList.innerHTML="",m("Best Sellers Books"),function(t){const o=t.map((({list_name:t})=>`\n    <li class="top-books__item">\n    <h2 class="top-books-title">${t}</h2>\n    <ul class="top-books-categories__list">\n                \n    </ul>\n    <div class="top-books__button-box">\n    <button class="top-books__button" data-list_name="${t}">See More</button>\n    </div>\n    </li>\n    `)).join("");b.booksCardsList.insertAdjacentHTML("beforeend",o)}(t),b.topBooksCategories=document.querySelectorAll(".top-books-categories__list"),b.booksCardsButton=document.querySelector(".top-books__button"),function(t){let o=0;b.topBooksCategories.forEach((e=>{const s=t[o].books.map((({_id:t,book_image:o,title:e,author:s})=>`\n          <li data-id="${t}" class="category-books__item is-hidden-books">\n          <a href="" class="category-books__link">\n          <div class="category-books__img-thumb">\n          <img src="${o}" alt="${e}" class="category-books__img">\n          <p class="card-overlay">Quick view</p>\n          </div>\n          <h2 class="category-books__title">${e}</h2>\n          <p class="category-books__author">${s}</p>\n          </a>\n          </li>`)).join("");e.insertAdjacentHTML("beforeend",s),o++}))}(t)})).catch((()=>{console.log("Проблема з запитом!")}))}b.booksCardsList.addEventListener("click",(async function(t){if(t.preventDefault(),!t.target.classList.contains("top-books__button"))return;console.log("Ти натиснув на кнопку."),b.booksCardsList.classList.remove("top-books-list"),b.booksCardsList.classList.add("category-books-list");const o=t.target.dataset.list_name;b.booksCardsTitle=document.querySelector(".books-cards__title"),b.booksCardsTitle.remove(),e=o,[...document.querySelectorAll(".js-cat-link")].forEach((t=>{t.textContent===e?t.classList.add("current-category"):t.classList.contains("current-category")&&t.classList.remove("current-category")})),m(o),b.booksCardsList.innerHTML="";var e;p(await c(o))})),k();const _=document.querySelector(".list-categories"),f=document.querySelector(".books-cards__list");function g(){const t=document.querySelector(".books-cards__title");t&&t.remove(),function(){document.querySelectorAll(".category__link").forEach((t=>{t.classList.remove("current-category")}));const t=document.querySelector(".category__link-all");t.classList.contains("current-category")&&t.classList.remove("current-category")}(),f.innerHTML=""}function m(t){if(!document.querySelector(".books-cards__title")){const o=t.split(" "),e=o.pop(o[o.length-1]),s=`<h1 class="books-cards__title">${o.join(" ")}\n\t        <span class="books-cards__title-accent"> ${e}</span></h1>`;f.insertAdjacentHTML("beforebegin",s)}}function p(t){f.innerHTML="";const o=t.map((t=>{const{_id:o,book_image:e,title:s,author:n}=t;return`\n    <li data-id="${o}" class="category-books__item">\n    <a href="" class="category-books__link">\n    <div class="category-books__img-thumb">\n    <img src="${e}" alt="${s}" class="category-books__img">\n    <p class="card-overlay">Quick view</p>\n    </div>\n    <h2 class="category-books__title">${s}</h2>\n    <p class="category-books__author">${n}</p>\n    </a>\n    </li>`})).join("");f.insertAdjacentHTML("beforeend",o)}_.addEventListener("click",(async function(t){f.classList.remove("top-books-list"),f.classList.add("category-books-list"),t.preventDefault(),t.target.classList.contains("category__link-all")&&(g(),t.target.classList.add("current-category"),k());if(t.target.classList.contains("category__link")){g();const o=t.target.textContent;t.target.classList.add("current-category"),m(o);p(await c(o))}}));const h=document.querySelector(".list-categories");h.insertAdjacentHTML("afterbegin",'<li><a href="./index.html" class="js-cat-link category__link-all current-category">All category</a></li>'),async function(){const t=await u("category-list"),o=[];for(const{list_name:e}of t)o.push(e);const e=o.sort(((t,o)=>t.localeCompare(o))).map((t=>`<li class="category__item"><a href="" class="js-cat-link category__link">${t}</a></li>`)).join("");h.insertAdjacentHTML("beforeend",e)}();var y,v=n("6JpON"),L=n("dNYR7"),w=n("3P64e"),S=n("hlD4l"),E=n("6riBy");y=n("aNJCr").getBundleURL("EVgbq")+n("iE7OH").resolve("eMZls");const C=new URL(y);var q;q=n("aNJCr").getBundleURL("EVgbq")+n("iE7OH").resolve("eKenW");const H=new URL(q);var $;$=n("aNJCr").getBundleURL("EVgbq")+n("iE7OH").resolve("i996a");const j=new URL($);function T(t){const{_id:o,list_name:e,book_image:s,title:n,author:i,buy_links:a,description:r}=t,c=`<div class="data-book">\n<div class="data-book__info">\n<img src="${s}" alt="${e}" class="data-book__img">\n<div class="data-book__thumb"><h2 class="data-book__title">${n}</h2>\n<h3 class="data-book__subtitle">${i}</h3>\n<p class="data-book__description">${r||"Sorry, book`s description not found"}\n</p></div>\n</div>\n<button type="button" class="button-js-storage data-book__shop" data-favoriteid='${o}'>Add to shopping list</button>\n<p class="data-book__success">Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>\n`;x.insertAdjacentHTML("beforeend",c);const l=document.querySelector(".data-book__thumb"),d=document.createElement("div");d.classList.add("social-shop-thumb"),l.append(d),d.insertAdjacentHTML("beforeend",function(t){let o="";const e=[C,H,j];for(let s=0;s<3;s++)o+=`<a target="_blank" href="${t[s].url}"><img class="social-img" src='${e[s]}' alt='${t[s].name}'/>\n\t\t`;return o}(a))}document.querySelector(".books-cards__list").addEventListener("click",(async function(t){x.innerHTML="";const o=t.target.closest(".category-books__item");if(!o)return;const e=o.dataset.id;try{const t=await(0,L.fetchBooksForID)(e);A.classList.toggle("is-hidden-book-backdrop"),T(t.data);const o=document.querySelector(".data-book__success"),s=document.querySelector(".button-js-storage");if(S.IS_USER_LOG){const t=new(0,w.User);(await t.getWishList(E.auth.currentUser.email)).includes(s.dataset.favoriteid)&&(s.textContent="remove from the shopping list",o.style.display="block"),s.addEventListener("click",(async()=>{const e=await t.getWishList(E.auth.currentUser.email);if("Add to shopping list"===s.textContent){if(e.includes(s.dataset.favoriteid))return;await t.addToWishList(s.dataset.favoriteid,E.auth.currentUser.email),i(),s.textContent="remove from the shopping list",o.style.display="block"}else if("remove from the shopping list"===s.textContent){if(!e.includes(s.dataset.favoriteid))return;return await t.removeFromWishlist(s.dataset.favoriteid,E.auth.currentUser.email),i(),s.textContent="Add to shopping list",void(o.style.display="none")}}))}else s.textContent="To but this book you must Sign In",s.addEventListener("click",S.openForm)}catch(t){v.Notify.failure(t.message)}}));const x=document.querySelector(".book-info");const A=document.querySelector("[data-book-modal-open]");document.querySelector(".book-modal");document.querySelector(".modal-close-book-btn").addEventListener("click",(function(){A.classList.add("is-hidden-book-backdrop")})),A.addEventListener("click",(t=>{t.target.closest(".book-modal")||A.classList.add("is-hidden-book-backdrop")})),n("3vy1G");const M=document.querySelector(".scrollBtn");window.addEventListener("scroll",(function(){window.pageYOffset>0?M.classList.add("visible"):M.classList.remove("visible")})),M.addEventListener("click",(function(){window.scrollTo({top:0,behavior:"smooth"})})),n("jJwcr")}();
//# sourceMappingURL=index.45e23818.js.map
