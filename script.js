
let menuicon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuicon.onclick = () =>{
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



let section=document.querySelectorAll('section');
let navlinks= document.querySelectorAll('header nav a');

window.onscroll=()=> {
    section.forEach(sec =>{

        let top =window.scrollY;
        let offset=sec.offsetTop -150;
        let height=sec.offsetHeight;
        let id= sec.getAttribute('id');

        if(top >= offset && top <offset +height){
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            });
        };

    });

    let header=document.querySelector('header');
    header.classList.toggle('sticky',window.scrolly > 100);


    menuicon.classList.remove('bx-x');
    navbar.classList.removell  ('active');
};

// Scroll Reveal
ScrollReveal({ 
    //reset: true ,
    distance:'80px',
    duration:1500,
    delay:200

    
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-content .social-media', { origin: 'left' });
ScrollReveal().reveal('.home-content .btn', { origin: 'right' });
ScrollReveal().reveal('.home-image, .portfolio-box, .contact form', { origin: 'bottom' });

ScrollReveal().reveal('.about-image', { origin: 'left' });
ScrollReveal().reveal('.about-content', { origin: 'right' });

const typed = new Typed('#typing-text',{
    strings:['Undergraduate','Undergraduate'],
    typeSpeed:50
   
});



