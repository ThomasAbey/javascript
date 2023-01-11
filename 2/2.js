function login(){
    var name;
    var email;
    var number;
    var password;

    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    number = document.getElementById("number").value;
    password = document.getElementById("password").value;

    var no_of_numbers = name.match(/\d+/g);
    var namelen = name.length;
    if (name =="" ||name == "null"){
        alert("Name field cannot be empty");
        return false;
    }
    else{
        if(namelen <=3){
            alert("Name field must contain atleast four characters");
            return false;
        }
        if(no_of_numbers != null){
            alert("Name field cannot contain numbers");
            return false;
        }
    }
    if(email ==""|| email =="null"){
        alert("Email field cannot be empty");
        return false;
    }
    else if(
        email.match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"
            
        )
    ){}
    else{
        alert("Email is not valid");
    }
    if(number ==""|| number == "null"){
        alert("Number field cannot be empty");
        return false;

    }
    else if(number.length <10){
        alert("Phone number must have 10 numbers");
    }
    if (password =="" || password == "null"){
        alert("Password field cannot be empty");
        return false;
    }
    else if (password.length <6){
        alert("Password must have 10 numbers");
    }
    
    

       

}