
var DataController = (function(){

    // Private part of the module:
    
    var User = function(userName, password, firstName, lastName, email) {
        this.userName = userName;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    };
    
    //newUser = new User('JohnDoe', 'John', 'Doe' ......)
    
    
    
    // User példa 
    // Stored passwords are  encrypted passwords!!!
    /*
    Johny84 = {
        //userName : userName,
        password : 'JohnyIsTheKing1984',
        firstName : 'John',
        lastName : 'Smith',
        email : 'johny84@gmail.com',
    };
    */
/*   
    var users = ['Johny84', 'Jane5', 'Mike10'];
    var usersObject = {
        Johny84: {
            userName : 'Johny84',
            password : 'JohnyIsTheKing1984',
            firstName : 'John',
            lastName : 'Smith',
            email : 'johny84@gmail.com'
            //userlevel: basicUser
        },
        Jane5: {
            userName : 'Jane5',
            password : 'JaneIsTheQueen1990',
            firstName : 'Jane',
            lastName : 'Doe',
            email : 'jane90@gmail.com'
            //userlevel: advancedUser
        },
        Mike10: {
            userName : 'Mike10',
            password : 'MikeIsTheKing1972',
            firstName : 'Mike',
            lastName : 'Keane',
            email : 'mike72@gmail.com'
            //userlevel: admin
        }
    };
  */ 
    
    
    var encryptedPasswordFull="";   //beírt jelszó
    
    
    // Encrypt Password
     var encryptPassword = function (username, password) {
         var encryptedPassword ="";
         
         for (var i = 0; i < password.length; i++){
             encryptedPassword += String.fromCharCode((password.charCodeAt(i) - 1) * 2 );
         }
         encryptedPasswordFull = encryptedPassword.split("").reverse().join("");
         console.log(username + " - "+"Beírt jelszó: |" + password + "|");
         console.log("Kódolt jelszó: |" + encryptedPasswordFull + "|");
         return username, encryptedPasswordFull;
     }
    
    encryptPassword("Johny84", "mackó43");
    
    
    // Decrypt Password
    var decryptPassword = function (username, password) {
        var decryptedPassword = "", passwordBackward= "";
        
        for (var i = 0; i < password.length; i++){
            decryptedPassword += String.fromCharCode(password.charCodeAt(i) / 2 + 1);
        }
        decryptedPasswordFull = decryptedPassword.split("").reverse().join("");                       
        console.log("Kapott kódolt jelszó: |" + password  + "|");
        console.log("Eredeti password: |" + decryptedPasswordFull + "|");
    }
    decryptPassword("username", encryptedPasswordFull);
    
    // Public part of the module:
    return {
        
    
    };
    
})();



var indexOfUser = users.indexOf('Jane5');
//Check if the USER is in the database (users[])
if (indexOfUser !== -1){
    console.log(indexOfUser);
    if (username.password === encryptedPasswordFull) {
             // Beléphet
        console.log('indexOfUser');
        console.log('Beléphet');
    } else {
        alert('Helytelen jelszó!')
    }
} else {
    alert('Nincs ilyen felhasználó regisztrálva! Ellenőrizze, hogy helyesen adta-e meg a bejelentkezéshez szükséges adatokat!')
}





















