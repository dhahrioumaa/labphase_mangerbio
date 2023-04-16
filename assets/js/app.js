
//home Carsouel//
$('.home-carsouel').owlCarousel({
    loop:true,
    margin:0,
    dots: true,
    autoplay:true,
    autoplayTimeout: 7000,
    animateOut: 'fadOut',
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

//navbar//
window.addEventListener('scroll', function(){
    let navbar = this.document.getElementById('navbar');
    navbar.classList.toggle('fixed', this.window.scrollY > 0);
})
//Nav Button
let menuBtn = document.querySelector('.menu-btn');
let searchBtn = document.querySelector('.searchbtn');
let cartBtn = document.querySelector('.cartbtn');
let darkBtn = document.querySelector('.darkbtn');
menuBtn.onclick = function(){
    document.getElementById("nav-items").classList.toggle('active');
    if(document.getElementById("nav-items").classList.contains('active')){
        menuBtn.classList.remove('bx-menu');
        menuBtn.classList.add('bx-x');
    }
else{
    menuBtn.classList.add('bx-menu');
    menuBtn.classList.remove('bx-x');


}
}
searchBtn.onclick = function(){
    document.getElementById("search-form").classList.toggle('active');
    if(document.getElementById("search-form").classList.contains('active')){
        searchBtn.classList.remove('bx-search-alt-2');
        searchBtn.classList.add('bx-x');
    }
else{
    searchBtn.classList.add('bx-search-alt-2');
    searchBtn.classList.remove('bx-x');


}
}
cartBtn.onclick = function(){
    document.getElementById("cart").classList.toggle('active');
    if(document.getElementById("cart").classList.contains('active')){
        cartBtn.classList.remove('bx-cart');
        cartBtn.classList.add('bx-x');
    }
    else{
        cartBtn.classList.add('bx-cart');
        cartBtn.classList.remove('bx-x');
    }
}
darkBtn.onclick = function(){
    document.body.classList.toggle('dark-moder');
    //changer les icons lorsque j'ai cliqué
    if(document.body.classList.contains('dark-moder')){
        darkBtn.classList.remove('bxs-moon');
        darkBtn.classList.add('bx-sun');
        signImg = 'assets\img\about.jpg'
    }
    else{
        darkBtn.classList.add('bxs-moon');
        darkBtn.classList.remove('bx-sun');
        signImg = 'img\plats\img-rest1.jpg';
    }
}
//menu section
let menuTab = document.querySelector('.menu-tabs');
menuTab.addEventListener('click', function(e){
  if(e.target.classList.contains('menu-tab-item') && !e.target.classList.contains('active')){
    // Récupère la valeur  data-target
    const target = e.target.getAttribute('data-target');
    // Retire la classe "active"
    menuTab.querySelector('.active').classList.remove('active');
    // Ajoute la classe "active"
    e.target.classList.add('active');
    let menuSection = document.querySelector('.menu-section');
    menuSection.querySelector('.menu-tab-content.show').classList.remove('show');
    // Ajoute la classe "show" au contenu de l'onglet cliqué
    menuSection.querySelector(target).classList.add('show');
  } else {
    return; 
  }
});

//events Carsouel//
$('.events-carsouel').owlCarousel({
    loop:true,
    margin:30,
    dots: true,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        750:{
            items:2
        },
        1000:{
            items:2
        }
    }
})
//team carsouel
$('.team-carsouel').owlCarousel({
    loop:true,
    margin:20,
    dots: true,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
}) 
//review
$('.review-carsouel ').owlCarousel({
    loop:true,
    margin:10,
    dots: false,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
//Blog Carsouel
$('.blog-carsouel').owlCarousel({
    loop:true,
    margin:5,
    
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();

  // Vérifier si le nom et le prénom contiennent des lettres
  const nameRegex = /^[a-zA-Z\s]*$/;
  if (!nameRegex.test(nameValue)) {
    alert('Le nom et le prénom doivent contenir des lettres uniquement.');
    return;
  }

//@ pour email
  if (!emailValue.includes('@')) {
    alert('L\'adresse e-mail doit contenir le caractère @.');
    return;
  }

  form.submit();
});




  