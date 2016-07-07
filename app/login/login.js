document.addEventListener('DOMContentLoaded',function(){
    //the dom has been loaded
    //get a reference to our form
    var form = document.querySelector('#loginForm');
    //a collection of input ids
    var inputs = ['#username','#password'];
    requireFields(form, inputs)
})
