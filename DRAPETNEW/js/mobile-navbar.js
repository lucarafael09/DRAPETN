// class MobileNavbar {
//   constructor(mobileMenu, navList, navLinks) {
//     this.mobileMenu = document.querySelector(mobileMenu);
//     this.navList = document.querySelector(navList);
//     this.navLinks = document.querySelectorAll(navLinks);
//     this.activeClass = "active";

//     this.handleClick = this.handleClick.bind(this);
//   }

//   animateLinks() {
//     this.navLinks.forEach((link, index) => {
//       link.style.animation
//         ? (link.style.animation = "")
//         : (link.style.animation = `navLinkFade 0.5s ease forwards ${
//             index / 7 + 0.3
//           }s`);
//     });
//   }

//   handleClick() {
//     this.navList.classList.toggle(this.activeClass);
//     this.mobileMenu.classList.toggle(this.activeClass);
//     this.animateLinks();
//   }

//   addClickEvent() {
//     this.mobileMenu.addEventListener("click", this.handleClick);
//   }

//   init() {
//     if (this.mobileMenu) {
//       this.addClickEvent();
//     }
//     return this;
//   }
// }

// const mobileNavbar = new MobileNavbar(
//   ".mobile-menu",
//   ".nav-list",
//   ".nav-list li",
// );
// mobileNavbar.init();







window.onload = function(){
    const sidebar = document.querySelector(".sidebar");
    const closeBtn = document.querySelector("#btn");
    const searchBtn = document.querySelector(".bx-search")

    closeBtn.addEventListener("click",function(){
        sidebar.classList.toggle("open")
        menuBtnChange()
    })

    searchBtn.addEventListener("click",function(){
        sidebar.classList.toggle("open")
        menuBtnChange()
    })

    function menuBtnChange(){
        if(sidebar.classList.contains("open")){
            closeBtn.classList.replace("bx-menu","bx-menu-alt-right")
        }else{
            closeBtn.classList.replace("bx-menu-alt-right","bx-menu")
        }
    }
}

function openModal(){
    const modal = document.getElementById('modal-container')
    modal.classList.add('mostrar')

    modal.addEventListener('click', (e) =>{
        if (e.target.id == 'modal-container' || e.target.id == "fechar"){
            modal.classList.remove('mostrar')
            localStorage.fechaModal = 'modal-container'
        }
    })
}