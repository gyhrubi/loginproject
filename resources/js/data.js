var DataController = (function () {

    // Private part of the module:

    var User = function (userName, password, firstName, lastName, email) {
        this.userName = userName;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    };
    
    var usersArray = [
        {
            userName: 'admin',
            password: 'ÚÐØÆÀ',
            firstName: 'adminFirst',
            lastName: 'adminLast',
            email: 'admin@gmail.com'
        }
        
        ];

    var currentUser;
 
    // Encrypt Password
    var encryptPassword = function (password) {
        var encryptedPassword = "";
        for (var i = 0; i < password.length; i++) {
            encryptedPassword += String.fromCharCode((password.charCodeAt(i) - 1) * 2);
        }
        encryptedPasswordFull = encryptedPassword.split("").reverse().join("");

        return encryptedPasswordFull;
    };
 
    // Decrypt Password
    var decryptPassword = function (password) {
        var decryptedPassword = "", passwordBackward = "";

        for (var i = 0; i < password.length; i++) {
            decryptedPassword += String.fromCharCode(password.charCodeAt(i) / 2 + 1);
        }
        decryptedPasswordFull = decryptedPassword.split("").reverse().join("");
        //console.log("Kapott kódolt jelszó: |" + password + "|");
        //console.log("Eredeti password: |" + decryptedPasswordFull + "|");
        return decryptedPasswordFull;
    }

    // Public part of the module:
    return {
        login: function (nameOfUser, pass) {
            var temp = -1;
            for (var i = 0; i < usersArray.length; i++) {

                if (usersArray[i].userName.toUpperCase() === nameOfUser.toUpperCase()) {
                    temp = i;
                    break;
                }
            }
            if (temp > -1) {
                var passTemp = decryptPassword(usersArray[temp].password);
                if (pass === passTemp) {
                    currentUser = usersArray[temp].userName;
                    return loginResult = [true];
                } else {
                    return loginResult = [false, 0];
                }
            }
            return loginResult = [false, 1];
        },

        //Get User list
        getUserList: function () {
            var userList = [];
            for (var i = 1; i < usersArray.length; i++) {
                userList[i - 1] = usersArray[i].userName;
            }

            return userList;
        },

        //Get User Data
        getUserData: function (nameOfUser) {
            var userData = [];
            for (var i = 0; i < usersArray.length; i++) {
                if (nameOfUser === usersArray[i].userName) {
                    var x = usersArray[i];
                    //userData.push(usersArray[i]);
                    userData.push(x.userName, x.firstName, x.lastName, x.email);
                    //console.log("User Data:");
                    //console.log(userData);
                    return userData;
                }
            }
            return -1;
        },

        //Get current User
        getCurrentUser: function () {
            console.log(currentUser);
            return currentUser;
        },
        
        logoutUser: function() {
            currentUser = "";
        },
        
        // Új felhasználó hozzáadása
        addUser: function (userName, password, firstName, lastName, email) {
		if (currentUser === usersArray[0].userName){
			if (userName.length > 6) {
                newUser = new User(userName, encryptPassword(password), firstName, lastName, email);
                var hasNumber = /\d/, patt1 = /\D/g, result;
                result = password.match(patt1);
                if (hasNumber.test(password) && result !== null && password.length > 5){
                    if (newUser.userName !== "" && newUser.password !== "") {
                        for (var i = 0; i < usersArray.length; i++){
                            if (usersArray[i].userName.toUpperCase() === newUser.userName.toUpperCase()) {
                                alert('Regisztráció sikertelen! A(z) '+ userName+ ' felhasználónév már létezik az adatbázisban.');
                                return -1;
                            }
                        }
                        usersArray.push(newUser);
                        console.log(usersArray);
                        return newUser;
                    } else {
                        alert('Hiányzó adatok! (felhasználónév / jelszó)');
                    }
                }else {
                    alert('A jelszónak min. 6 karakter hosszúnak kell lennie, és betűt és számot is tartalmaznia kell');
                }
            } else {
                alert('A felhasználónévnek legalább 6 karaktert kell tartalmaznia!');
            }
		}
            
    },
        
        // Felhasználó törlés
        deleteUser: function(userName) {
            
            var userNames = usersArray.map(function(cur) {
                return cur.userName;    
            });
            
            var curUserIndex = userNames.indexOf(userName);
            
            if (curUserIndex > -1) {
                
                usersArray.splice(curUserIndex,1);
                
            }
            
        }
        
    };
})();



// addUser('ManBearPig', 'halfmanhalfbearhalfpig', 'ManBear', 'Pig','manbearpig@gmail.com');
// DataController.addUser('ManBearPig', 'halfmanhalfbearhalfpig', 'ManBear', 'Pig','manbearpig@gmail.com');


/*
 //Add User
        addUser: function (userName, password, firstName, lastName, email) {
            newUser = new User(userName, encryptPassword(password), firstName, lastName, email);
            usersArray.push(newUser);
            return newUser;
        }
*/







