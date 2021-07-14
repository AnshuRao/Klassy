$(document).ready(function () {

    $('.menu-trigger').click(function(){
        $(this).toggleClass("active");
        $('#menu1').toggleClass('show');
        

    });




    $('.right-carusol .owl-carousel').owlCarousel({
        nav: true,
        autoWidth: true,
        loop: true,
        items: 1,
        autoplay: true,
        dots: false,
    });




    $('.carousel .owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        dots: false,
        autoplay: true,
        nav: true,
        responsive: {
            0:{
                items:1
            },
            799:{
                items:2
            },



            1000: {
                items: 4
            }
        }
    });



    /*   carousel hover starts */

    $('.carousel .item .back-menu1').hover(function () {

        $('.info1').addClass('upp');
    }, function () {
        $('.info1').removeClass('upp');

    });

    $('.carousel .item .back-menu2').hover(function () {

        $('.info2').addClass('upp');
    }, function () {
        $('.info2').removeClass('upp');

    });
    $('.carousel .item .back-menu3').hover(function () {

        $('.info3').addClass('upp');
    }, function () {
        $('.info3').removeClass('upp');

    });
    $('.carousel .item .back-menu4').hover(function () {

        $('.info4').addClass('upp');
    }, function () {
        $('.info4').removeClass('upp');

    });
    $('.carousel .item .back-menu5').hover(function () {

        $('.info5').addClass('upp');
    }, function () {
        $('.info5').removeClass('upp');

    });

    $('.carousel .item .back-menu6').hover(function () {

        $('.info6').addClass('upp');
    }, function () {
        $('.info6').removeClass('upp');

    });

 /*   carousel hover ends*/


 /* Meal box STARTS */
$('#breakfast').click(function(){
    $(this).css('color' , 'tomato');
    $('#lunch').css('color' , 'black');
    $('#dinner').css('color' , 'black');
    $('.breakfast-box').removeClass('non-active-box');
    $('.breakfast-box').addClass('active-box');
    $('.lunch-box').addClass('non-active-box');
    $('.dinner-box').addClass('non-active-box');

});


$('#lunch').click(function(){
    $(this).css('color' , 'tomato');
    $('#breakfast').css('color' , 'black');
    $('#dinner').css('color' , 'black');
    $('.lunch-box').removeClass('non-active-box');
    $('.breakfast-box').addClass('non-active-box');
    $('.lunch-box').addClass('active-box');
    $('.dinner-box').addClass('non-active-box');

});


$('#dinner').click(function(){
    $(this).css('color' , 'tomato');
    $('#lunch').css('color' , 'black');
    $('#breakfast').css('color' , 'black');
    $('.dinner-box').removeClass('non-active-box');
    $('.dinner-box').addClass('active-box');
    $('.breakfast-box').addClass('non-active-box');
    $('.lunch-box').addClass('non-active-box');

});

 /* Meal box ENDS */


 /* Chef Box hover Start */

 $('.change-chef1').hover(function(){
     $('.chef-image1').css('filter', 'brightness(30%)');
     $('.chef-name1').css('color', 'tomato');
     $('.contact-chef-1').css('display' , 'block')
    }, function(){
        $('.chef-image1').css('filter', 'brightness(100%)');
        $('.chef-name1').css('color', 'black');
        $('.contact-chef-1').css('display' , 'none')

    });


    $('.change-chef2').hover(function(){
        $('.chef-image2').css('filter', 'brightness(30%)');
        $('.chef-name2').css('color', 'tomato');
        $('.contact-chef-2').css('display' , 'block');
       }, function(){
           $('.chef-image2').css('filter', 'brightness(100%)');
           $('.chef-name2').css('color', 'black');
           $('.contact-chef-2').css('display' , 'none');

       });


       $('.change-chef3').hover(function(){
        $('.chef-image3').css('filter', 'brightness(30%)');
        $('.chef-name3').css('color', 'tomato');
        $('.contact-chef-3').css('display' , 'block');
       }, function(){
           $('.chef-image3').css('filter', 'brightness(100%)');
           $('.chef-name3').css('color', 'black');
           $('.contact-chef-3').css('display' , 'none');

       });



       $(window).scroll(function(){

           var scroll = $(window).scrollTop();
           var box = $('.wrapper-1').height();
           var header = $('nav').height();


           if (scroll >= box - header) {
             $("nav").addClass("background-header");



           } else {
             $("nav").removeClass("background-header");
           }
       });


 /* Chef Box hover ENDS */





/* nav fixing*/


const sections = document.querySelectorAll(' .wrappers');
const navLi =  document.querySelectorAll('nav #menu li');

window.addEventListener('scroll', () => {
    let  current = '';
    console.log(pageYOffset);
    sections.forEach( section => {
        const sectionTop = section.offsetTop;
       const sectionHeight = section.clientHeight;
       if(window.pageYOffset >= sectionTop - sectionHeight/3){
           current = section.getAttribute('id');
       }
    })
   navLi.forEach( li => {
       li.classList.remove('current');
       if(li.classList.contains(current)){
           li.classList.add('current')
       }

   })
});





const sections1 = document.querySelectorAll(' .wrappers');
const navLi1 =  document.querySelectorAll('nav #menu1 li');

window.addEventListener('scroll', () => {
    let  current = '';
    console.log(pageYOffset);
    sections1.forEach( section => {
        const sectionTop = section.offsetTop;
       const sectionHeight = section.clientHeight;
       if(window.pageYOffset >= sectionTop - sectionHeight/3){
           current = section.getAttribute('id');
       }
    })
   navLi1.forEach( li => {
       li.classList.remove('current');
       if(li.classList.contains(current)){
           li.classList.add('current')
       }

   })
});






});