document.addEventListener('DOMContentLoaded',function(){
    //the dom has been loaded
    //get a reference to our form
    var registerForm = document.querySelector('#contactForm');
    //a collection of input ids
    var inputs = ['#subject','#email','#message'];
    requireFields(registerForm, inputs)
})
