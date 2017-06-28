var DataController = (function () {

    // Private part of the module:

    var User = function (userName, password, firstName, lastName, email) {
        this.userName = userName;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    };
    /*    
        User.prototype.encryptPassword = function(password) {
            var encryptedPassword ="";
             
             for (var i = 0; i < password.length; i++){
                 encryptedPassword += String.fromCharCode((password.charCodeAt(i) - 1) * 2 );
             }
             encryptedPasswordFull = encryptedPassword.split("").reverse().join("");
            
             console.log("Beírt jelszó: |" + password + "|");
             console.log("Kódolt jelszó: |" + encryptedPasswordFull + "|");
             return encryptedPasswordFull;
        };
      */
    var encryptedPasswordFull = "";
    var usersArray = [];
    var currentUser;


    
    

    var encryptedPasswordFull = ""; //beírt jelszó

    ///////////////////////////////////////////////////////////////////////// 
    // Encrypt Password
    var encryptPassword = function(password) {
        var encryptedPassword = "";

        for (var i = 0; i < password.length; i++) {
            encryptedPassword += String.fromCharCode((password.charCodeAt(i) - 1) * 2);
        }
        encryptedPasswordFull = encryptedPassword.split("").reverse().join("");

        console.log("Beírt jelszó: |" + password + "|");
        console.log("Kódolt jelszó: |" + encryptedPasswordFull + "|");
        return encryptedPasswordFull;
    };

    ////    encryptPassword("mackó43");


    ///////////////////////////////////////////////////////////////////////// 
    // Decrypt Password
    var decryptPassword = function (password) {
        var decryptedPassword = "",
            passwordBackward = "";

        for (var i = 0; i < password.length; i++) {
            decryptedPassword += String.fromCharCode(password.charCodeAt(i) / 2 + 1);
        }
        decryptedPasswordFull = decryptedPassword.split("").reverse().join("");
        console.log("Kapott kódolt jelszó: |" + password + "|");
        console.log("Eredeti password: |" + decryptedPasswordFull + "|");
        return decryptedPasswordFull;
    }
    ////    decryptPassword(encryptedPasswordFull);
    
    ///////////////////////////////////////////////////////////////////////// 
    // Új felhasználó hozzáadása
    var addUser = function (userName, password, firstName, lastName, email) {
        newUser = new User(userName, encryptPassword(password), firstName, lastName, email);
        usersArray.push(newUser);
        return newUser;
    };

    addUser('ADMIN', 'adminPass', 'adminFirst', 'adminLast','admin@gmail.com');
    addUser('elso', 'elsoPass', 'elsoFirst', 'elsoLast','elso@gmail.com');
    addUser('masodik', 'admin', 'masodikFirst', 'masodikLast','masodik@gmail.com');
    addUser('harmadik', 'admin', 'harmadikFirst', 'harmadikLast','harmadik@gmail.com');


    // Public part of the module:
    return {
        login: function (nameOfUser, pass) {
            var temp = -1;
            for (var i = 0; i < usersArray.length; i++) {

                if (usersArray[i].userName === nameOfUser) {
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
                userList[i-1] = usersArray[i].userName;
            }
            console.log("User List:");
            console.log(userList);
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
                    console.log("User Data:");
                    console.log(userData);
                    return userData;
                }
            }
            return -1;
        },

        //Get current User
        getCurrentUser: function () {
            console.log(currentUser);
            return currentUser;
        }

    };
})();

/*
////////////////////////////////////////////////////////////////
//Get User list
getUserList = function() {
    var userList = [];
    for (var i = 0; i < usersArray.length; i++) {
        userList[i] = usersArray[i].userName;
    }
    console.log("User List:");
    console.log(userList);
    return userList;
}

////////////////////////////////////////////////////////////////
//Get User Data
getUserData = function(nameOfUser) {
    var userData = [];
    for(var i = 0; i < usersArray.length; i ++) {
        if(nameOfUser === usersArray[i].userName) {
            var x = usersArray[i];
            userData.push(usersArray[i]);
            userData.push(x.userName, x.firstName, x.lastName, x.email);
            console.log("User Data:");
            console.log(userData);
            return userData;        
        }
    }
    return -1;
}

////////////////////////////////////////////////////////////////
//Get current User
getCurrentUser = function() {
    console.log(currentUser);
    return currentUser;
}

var usersArray = [];
var User = function(userName, password, firstName, lastName, email) {
    this.userName = userName;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
};
var addUser = function (userName, password, firstName, lastName, email) {
    newUser = new User(userName, password, firstName, lastName, email);
    usersArray.push(newUser);
    return newUser;
};



addUser('ADMIN', 'adminPass', 'adminFirst', 'adminLast','admin@gmail.com');
addUser('elso', 'elsoPass', 'elsoFirst', 'elsoLast','elso@gmail.com');
addUser('masodik', 'admin', 'masodikFirst', 'masodikLast','masodik@gmail.com');
addUser('harmadik', 'admin', 'harmadikFirst', 'harmadikLast','harmadik@gmail.com');

getUserList();
getUserData('elso');*/
/*
var newArray = [];
for (var prop in usersArray[0]) {
  if (usersArray[0].hasOwnProperty(prop)) {
	var innerObj = {};
	innerObj[prop] = usersArray[0][prop];
	newArray.push(innerObj)
  }
}

console.log(newArray);

*/
