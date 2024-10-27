// toggle navbar//
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>
    {
        menuIcon.classList.toggle('fa-xmark');
        navbar.classList.toggle('active');
    }


//scroll section active link
let sections=document.querySelectorAll('.section');
let navlinks=document.querySelectorAll('header nav a');

window.onscroll=()=>
    {

        //sticky navbar
        let header=document.querySelector('header');
        header.classList.toggle('sticky',window.scrollY>100);   

        //remove toggle icon and nav bar
        menuIcon.classList.remove('fa-xmark');
        navbar.classList.remove('active');
    };



    
    //typed js
    const typed=new Typed('.multiple-text', {
        strings:['Web Developer','Web Designer'],
        typeSpeed:70,
        backSpeed:70,
        backDelay:1000,
        loop:true,
    });