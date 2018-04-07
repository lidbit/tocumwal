var sticky = 0;


window.onscroll = function() {myFunction() };//if scrolling

function myFunction() {
    var navbar = document.getElementById("navbar");


    console.log("print the offset value before if loop " + sticky);
    sticky = navbar.offsetTop; 
    if (window.pageYOffset >= sticky) {
        console.log("print the offset value " + sticky);
        navbar.classList.add('sticky')

} else {
    console.log("print the offset value " + sticky);
    navbar.classList.remove('sticky');
}
}


/*
    var navbar = document.getElementById("navbar");
    var sticky = "";


document.ready(function () {
    init();
});

function init(){
    
    window.onscroll = function() {myFunction() };//if scrolling
    console.log("pring the offse value " + sticky); 
    
}


    function myFunction() {
        console.log("pring the offse value " + sticky);
        sticky = navbar.offsetTop; 
        if (window.pageYOffset >= sticky) {
            console.log("pring the offse value " + sticky);
            navbar.classList.add('sticky')

    } else {
        console.log("pring the offse value " + sticky);
        navbar.classList.remove('sticky');
    }
    }
    */