function validateForm(){

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();

    let msg = document.getElementById("msg");

    let namePattern = /^[a-zA-Z]+$/;
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let phonePattern = /^[0-9]{10}$/;


    if(name === ""){
        msg.innerHTML = "Enter your name";
        return false;
    }

    if(!namePattern.test(name)){
         msg.innerHTML = "Enter only A-Z in name";
        return false;
    }

    if(email === ""){
         msg.innerHTML = "Enter your email ID";
        return false;
    }

    if(!emailPattern.test(email)){
         msg.innerHTML = "Enter valid email with '@'";
        return false;
    }

    if(phone === ""){
        msg.innerHTML = "Enter your phone number ";
        return false;
    }

    if(!phonePattern.test(phone)){
         msg.innerHTML = "Enter your 10 digit phone number";
        return false;
    }

    alert("Form submitted successfully!");
    return true;
    
}