function login(){
    var email = document.getElementById("input").value;

    if(!email){
     console.log("digite seu email")
return;
    }

    window.location.href='../login-page/login.html'

}
