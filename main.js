var hamburger = document.querySelector('#nav .nav-bar .hamburger');
var nav_bar_cover = document.querySelector('.nav-bar-close');
var nav_close_hamburger = document.querySelector('.nav-bar-close .nav-close-hamburger');
var body_active = document.querySelector('.body')


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav_bar_cover.classList.toggle('active');
    nav_close_hamburger.classList.toggle('active');
    body_active.classList.toggle('active');
})

nav_close_hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav_bar_cover.classList.toggle('active');
    nav_close_hamburger.classList.toggle('active');
    body_active.classList.toggle('active');
})


//proof of stake section

//proofs top elements
var proofs_one = document.querySelector('.proofs#one');
var proofs_two = document.querySelector('.proofs#two');
var proofs_three = document.querySelector('.proofs#three');
var proofs_four = document.querySelector('.proofs#four');
var proofs_five = document.querySelector('.proofs#five');

//proofs bottom elements
var proofs_bottom_one = document.querySelector('.proofs-for-bottom#one');
var proofs_bottom_two = document.querySelector('.proofs-for-bottom#two');
var proofs_bottom_three = document.querySelector('.proofs-for-bottom#three');
var proofs_bottom_four = document.querySelector('.proofs-for-bottom#four');
var proofs_bottom_five = document.querySelector('.proofs-for-bottom#five');


//proof one
proofs_one.addEventListener('click', () => {

    proofs_one.classList.add('active');
    proofs_two.classList.remove('active');
    proofs_three.classList.remove('active');
    proofs_four.classList.remove('active');
    proofs_five.classList.remove('active');

    proofs_bottom_one.classList.add('active');
    proofs_bottom_two.classList.remove('active');
    proofs_bottom_three.classList.remove('active');
    proofs_bottom_four.classList.remove('active');
    proofs_bottom_five.classList.remove('active');

});

//proof two
proofs_two.addEventListener('click', () => {

    proofs_one.classList.remove('active');
    proofs_two.classList.add('active');
    proofs_three.classList.remove('active');
    proofs_four.classList.remove('active');
    proofs_five.classList.remove('active');

    proofs_bottom_one.classList.remove('active');
    proofs_bottom_two.classList.add('active');
    proofs_bottom_three.classList.remove('active');
    proofs_bottom_four.classList.remove('active');
    proofs_bottom_five.classList.remove('active');

});

//proof three
proofs_three.addEventListener('click', () => {

    proofs_one.classList.remove('active');
    proofs_two.classList.remove('active');
    proofs_three.classList.add('active');
    proofs_four.classList.remove('active');
    proofs_five.classList.remove('active');

    proofs_bottom_one.classList.remove('active');
    proofs_bottom_two.classList.remove('active');
    proofs_bottom_three.classList.add('active');
    proofs_bottom_four.classList.remove('active');
    proofs_bottom_five.classList.remove('active');

});

//proof four
proofs_four.addEventListener('click', () => {

    proofs_one.classList.remove('active');
    proofs_two.classList.remove('active');
    proofs_three.classList.remove('active');
    proofs_four.classList.add('active');
    proofs_five.classList.remove('active');

    proofs_bottom_one.classList.remove('active');
    proofs_bottom_two.classList.remove('active');
    proofs_bottom_three.classList.remove('active');
    proofs_bottom_four.classList.add('active');
    proofs_bottom_five.classList.remove('active');

});

//proof five
proofs_five.addEventListener('click', () => {

    proofs_one.classList.remove('active');
    proofs_two.classList.remove('active');
    proofs_three.classList.remove('active');
    proofs_four.classList.remove('active');
    proofs_five.classList.add('active');

    proofs_bottom_one.classList.remove('active');
    proofs_bottom_two.classList.remove('active');
    proofs_bottom_three.classList.remove('active');
    proofs_bottom_four.classList.remove('active');
    proofs_bottom_five.classList.add('active');

});
    

//end of proof section




//fixed and scroll stuff

var go_to_top = document.querySelector('.go-to-top');

document.addEventListener('scroll', ()=>{
    var scroll_position = window.scrollY;
    if (scroll_position < 230) {
        go_to_top.style.display = "none";
    }else{
        go_to_top.style.display = "flex";
    }
})


