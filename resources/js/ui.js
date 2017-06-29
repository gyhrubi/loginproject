// Eszti része:
var UIController = (function(){

    // Private part of the module:
    var DOMstrings = {
        input_username: '#login-field-username',
        input_password: '#login-field-password',
        login_btn: '.login-btn',
        loginpage: '.login-page',
        userpage: '.user-page',
        errortext: '.login-console-message',
        userList: '.user-list',
        currentUserLabel: '.current-user',
        dataUserName: 'data-username',
        dataFirstName: 'data-firstname',
        dataLastName: 'data-lastname',
        dataEmail: 'data-email',
        loguot_btn: '.logout-btn'
    };
 
    
/*    var listUsers = function(users) {
      
        var html, newHtml, userList;
        
        userList = document.querySelector(DOMstrings.userList);
        
        html = '<li class="user-list-item" id="user-%username%">%username%</li>';
        
        // Userek törlése a listából
        while (userList.firstChild) {
            userList.removeChild(userList.firstChild);
        }
        
        for (i = 0; i<users.length; i++) {
            
            newHtml = html.replace('%username%', users[i]);
            newHtml = newHtml.replace('%username%', users[i]);
            userList.insertAdjacentHTML('beforeend',newHtml);
            
        }
        
    };
*/    
    var showCurrentUser = function(curUser) {
        
        document.querySelector(DOMstrings.currentUserLabel).textContent = curUser;
        
    };
    
    var showSelectedUserData = function(selUserData) {
        
        document.getElementById(DOMstrings.dataUserName).value = selUserData[0];
        document.getElementById(DOMstrings.dataFirstName).value = selUserData[1];
        document.getElementById(DOMstrings.dataLastName).value = selUserData[2];
        document.getElementById(DOMstrings.dataEmail).value = selUserData[3];
        
        colorSelectedUser(selUserData[0]);
        
    };
    
    var colorSelectedUser = function(selUserName) {
      
        var userList, nodeElements;
        userList = document.querySelector(DOMstrings.userList).childNodes;
        
        nodeElements = getOnlyNodeElements(userList);
            
        for(i = 0; i<nodeElements.length; i++) {
            
            nodeElements[i].classList.remove('selected');
            
            if (nodeElements[i].id === 'user-' + selUserName) {
                 nodeElements[i].classList.add('selected');        
            }            
        }
        
    };
    
    var getOnlyNodeElements = function(childNodeList) {
        
        var temp = [];
        
        for (i = 0; i<childNodeList.length; i++) {
            
            if (childNodeList.item(i).nodeType === 1) {
                temp.push(childNodeList.item(i));
            }
            
        }
        
        return temp;
        
    };
    
    // Public part of the module:
    return {
        
        listUsers: function(users) {
      
            var html, newHtml, userList;

            userList = document.querySelector(DOMstrings.userList);

            html = '<li class="user-list-item" id="user-%username%">%username%</li>';

            // Userek törlése a listából
            while (userList.firstChild) {
                userList.removeChild(userList.firstChild);
            }

            for (i = 0; i<users.length; i++) {

                newHtml = html.replace('%username%', users[i]);
                newHtml = newHtml.replace('%username%', users[i]);
                userList.insertAdjacentHTML('beforeend',newHtml);

            }

        },
        
        
        getInput: function() {
          
            return {
                user_name: document.querySelector(DOMstrings.input_username).value,
                password: document.querySelector(DOMstrings.input_password).value
            };
        }, 
        
        showUserList: function() {
            
            var x = document.querySelector(DOMstrings.loginpage).classList;
            x.remove('show');
            var y = document.querySelector(DOMstrings.userpage).classList;
            y.toggle('show');
            
        },
        
        loginFails: function(error_reason) {
            
            var z = document.querySelector(DOMstrings.errortext);

            switch(error_reason) {
                case 0:
                     z.textContent = 'Hibás jelszó';
                    break;
                case 1:
                    z.textContent = 'Hibás felhasználó';
                    break;
                default:
                     z.textContent = 'Hibás bejelentkezés';
            }
            
        },
        
        clearFields: function() {
            
            var fields, fieldsArr;
            
            fields = document.querySelectorAll(DOMstrings.input_username +', '+ DOMstrings.input_password);            
            fieldsArr = Array.prototype.slice.call(fields);
            
            fieldsArr.forEach(function(current, index, array) {
               current.value = ""; 
            });
            
            document.querySelector(DOMstrings.errortext).textContent = '';
 
        },
        
        renderUserPage: function(users,currentUser,currentUserData) {
            
            // Aktuális bejelentkezett felhasználó nevének kijelzése
            showCurrentUser(currentUser);
            
            // Rendszerben lévő felhasználók kilistázása
            listUsers(users);
            
            // Aktuális felhasználó kijelölés és adatainak megjelenítése
            showSelectedUserData(currentUserData);
            
        },
    
        getDOMstrings: function() {
            return DOMstrings;
        }
    }
    
})();