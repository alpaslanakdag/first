function sendmail(){
    var name= document.getElementById("name");
    var email= document.getElementById("email");
    var text= document.getElementById("text");
    if(!name && !email){
        alert("Name and email can not be empty");
       
    }
    else{
        Email.send({
            Host:"smtp.gmail.com",
            to:"alpaslanakdag@gmail.com",
            from:email,
            body:text

        })
        .then(function(message){
            alert("mail sent succesfully")
        })
    }
}