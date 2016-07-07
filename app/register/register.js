document.addEventListener('DOMContentLoaded',function(){
    //the dom has been loaded
    //get a reference to our form
    var registerForm = document.querySelector('#register');
    //a collection of input ids
    var inputs = ['#username','#email','#password','#confirm-password'];
    requireFields(registerForm, inputs)
})
