const PasswordGen = () =>{
    var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&*()^';
    var password='';
    for(var i=0; i<8; i++){
        randomNum = Math.floor(Math.random()*chars.length);
        password+= chars.charAt(randomNum);
    }
    return password;
}

module.exports=PasswordGen;