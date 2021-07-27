
//navbar
let homeOffset = $('.navbar').outerHeight();
$(window).scroll(function(){
    let topOffset=$(window).scrollTop();
    if(topOffset>homeOffset){
        $('.navbar').css({'background-color':'#fff','transition':'all 1s'});
        $('.nav-link').css({'color':'black','transition':'all 1s'});
        $('.social i').css({'color':'black','transition':'all 1s'});
        $('.navbar').removeClass('py-3')
    }
    else{
        $('.navbar').css({'background-color':'transparent'})
        $('.nav-link').css({'color':'#fff'});
        $('.social i').css({'color':'#fff'});
        $('.navbar').addClass('py-3')
    }
    })

    //loader
    $(document).ready(function(){
      $('.loader').fadeOut(3000,function(){
          $('body').css('overflow','visible')
      })
        }); 
        
    //plugin
    var typed = new Typed('.element',{
        strings:['robotics','mobile platforms'],
        smartBackspace: true,
        backSpeed: 100,
        typeSpeed: 100,
        loop:true

    });

    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'js/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });


  //animation
  
$('header').animate({ 'height': '60vw'}, 1000);
$('header').animate({ 'width': '50vh' }, 1000);
$('.caption h1').slideDown(2000);
$('.caption p').slideDown(2000);
$('.caption a').slideDown(2000);





