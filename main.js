let formSignin = document.querySelector('#signin')
let formSignup = document.querySelector('#signup')
let btnColor = document.querySelector('.btn-color')

document.querySelector('#btnSignIn').addEventListener('click', function(){
     formSignin.style.left = '25px'
     formSignup.style.left = '450px'
     btnColor.style.left = '0px'     
})

document.querySelector('#btnSignUp').addEventListener('click', function(){
     formSignin.style.left = '-450px'
     formSignup.style.left = '25px'
     btnColor.style.left = '110px'     
})