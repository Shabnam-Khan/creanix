$(function(){ 
 //vertical slider
 $('.slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows:false,
    vertical:true,
    verticalSwiping:true,
    centerMode:true,
    centerPadding:false,
  });

// scroll spy 
$(window).scroll(function(){
  var scrolling = $(this).scrollTop();
  if(scrolling > 300){
    $('.navbar').addClass('navbg');
  }
  else{
    $('.navbar').removeClass('navbg');
  }
});

//animation scroll js
var html_body = $('html, body');
$('nav a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
        html_body.animate({
        scrollTop: target.offset().top - 95
        }, 1500);
        return false;
        }
      }
  });

// counter
  $('.counter').counterUp({
      delay: 5,
      time: 1000
  });

//  back to top 
$(window).scroll(function(){
  var scrolling = $(this).scrollTop();
  if(scrolling > 100){
    $('.back-to-top').fadeIn(500);
 }
  else{
    $('.back-to-top').fadeOut(500);
  }
});

// venobox
$('.venobox').venobox(); 

//team wow js
new WOW().init();

// testimonial slider 
$('.testimonials').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  arrows:false,
  speed:2500,
  dots:true,
});

 // marketplace slider 
 $('.market-slide').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  arrows:false,
});
});


// contact form validation 
var firstname = document.getElementById('firstname');
var firstname_error = document.getElementById('firstname_error');

var lastname = document.getElementById('lastname');
var lastname_error = document.getElementById('lastname_error');

var email = document.getElementById('email');
var email_error = document.getElementById('email_error');
var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

var phone = document.getElementById('phone');
var phone_error = document.getElementById('phone_error');
var phoneregex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

var subject = document.getElementById('subject');
var subject_error = document.getElementById('subject_error');

var message = document.getElementById('message');
var message_error = document.getElementById('message_error');


function sub(){
  if(firstname.value == ''){
      firstname_error.innerHTML = "Enter your first name";
      firstname.style.border = '2px solid red';
      firstname.focus();
      return false;
  }
  if(lastname.value == ''){
      lastname_error.innerHTML = "Enter your last name";
      lastname.style.border = '2px solid red';
      lastname.focus();
      return false;
  }
  if(email.value == ''){
      email_error.innerHTML = "Enter your email address";
      email.style.border = '2px solid red';
      email.focus();
      return false;
  }
  if(!regex.test(email.value)){
      email_error.innerHTML = "Enter a valid email address";
      email.style.border = '2px solid red';
      email.focus();
      return false;
  }
  if(phone.value == ''){
      phone_error.innerHTML = "Enter your phone number";
      phone.style.border = '2px solid red';
      phone.focus();
      return false;
  }
  if(!phoneregex.test(phone.value)){
      phone_error.innerHTML = "Enter a 10-digit phone number";
      phone.style.border = '2px solid red';
      phone.focus();
      return false;
  }
  if(subject.value == ''){
    subject_error.innerHTML = "Enter your subject";
    subject.style.border = '2px solid red';
    subject.focus();
    return false;
}
  if(message.value == ''){
    message_error.innerHTML = "Enter your message";
    message.style.border = '2px solid red';
    message.focus();
    return false;
}
 
}

function errorvalidate(){
  if(firstname.value != ''){
      firstname_error.innerHTML = "";
      firstname.style.border = '2px solid green';
  }
  if(lastname.value != ''){
      lastname_error.innerHTML = "";
      lastname.style.border = '2px solid green';
  }
  if(email.value != ''){
      email_error.innerHTML = "";
      email.style.border = '2px solid green';
  }
  if(phone.value != ''){
      phone_error.innerHTML = "";
      phone.style.border = '2px solid green';
  }
  if(subject.value != ''){
    subject_error.innerHTML = "";
    subject.style.border = '2px solid green';
}
  if(message.value != ''){
    message_error.innerHTML = "";
    message.style.border = '2px solid green';
}
}

firstname.addEventListener('blur', errorvalidate);
lastname.addEventListener('blur', errorvalidate);
email.addEventListener('blur', errorvalidate);
phone.addEventListener('blur', errorvalidate);
subject.addEventListener('blur', errorvalidate);
message.addEventListener('blur', errorvalidate);

// newsletter email validation

var newsemail = document.getElementById('news-email');
var newsemail_error = document.getElementById('news_email_error');
var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

function sub(){
    if(newsemail.value == ''){
        newsemail_error.innerHTML = "Please Enter Your Email Address";
        newsemail.style.border = '2px solid red';
        newsemail.focus();
        return false;
    }
    if(!regex.test(newsemail.value)){
        newsemail_error.innerHTML = "Please Enter A Valid Email Address";
        newsemail.style.border = '2px solid red';
        newsemail.focus();
        return false;
    }
}

function errvalidate(){
    if(newsemail.value != ''){
        newsemail_error.innerHTML = "";
        newsemail.style.border = '2px solid green';
    }
}

newsemail.addEventListener('blur', errvalidate);