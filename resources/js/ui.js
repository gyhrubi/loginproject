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
        dataPassword: 'data-password',
        dataFirstName: 'data-firstname',
        dataLastName: 'data-lastname',
        dataEmail: 'data-email',
        loguot_btn: '.logout-btn',
        addNewUser_btn: '.add-newUser-btn',
        userTableData: '.user-table-data',
        user_list_item_selected: '.user-list-item selected',
        addUser_btn: '.add-user',
        newUserPassword: '.new-user-password'
    };
 
    
    var showCurrentUser = function(curUser) {
        
        document.querySelector(DOMstrings.currentUserLabel).textContent = curUser;
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
        
        showLoginPage: function() {
            document.querySelector(DOMstrings.userpage).classList.toggle('show');
            document.querySelector(DOMstrings.loginpage).classList.toggle('show');
            document.querySelector(DOMstrings.input_username).focus();
        },
        
        showNewUserPage: function() {
            var x = document.querySelectorAll(DOMstrings.userTableData);
            for (var i = 0; i < x.length; i++) {
                x[i].classList.add('editable');
                x[i].disabled = false;
                x[i].value = "";
            }
            document.querySelector(DOMstrings.addNewUser_btn).classList.add("show");            
            document.querySelector(DOMstrings.newUserPassword).classList.add("show-tablerow");            
        },
        
        listUsers: function(users) {
      
            var html, newHtml, userList;

            userList = document.querySelector(DOMstrings.userList);

            html = '<li class="user-list-item" id="user-%username%">%username%</li>';

            // Userek törlése a listából
            while (userList.firstChild) {
                userList.removeChild(userList.firstChild);
            }

            for (i = 0; i<users.length; i++) {

                newHtml = html.replace(/%username%/g, users[i]);
                //newHtml = newHtml.replace('%username%', users[i]);
                userList.insertAdjacentHTML('beforeend',newHtml);
            }
        },
        
        showSelectedUserData: function(selUserData) {
        
            document.getElementById(DOMstrings.dataUserName).value = selUserData[0];
            document.getElementById(DOMstrings.dataFirstName).value = selUserData[1];
            document.getElementById(DOMstrings.dataLastName).value = selUserData[2];
            document.getElementById(DOMstrings.dataEmail).value = selUserData[3];
            
            var x = document.querySelectorAll(DOMstrings.userTableData);
            for (var i = 0; i < x.length; i++) {
                x[i].classList.remove('editable');
                x[i].disabled = true;
                //x[i].value = "";
            }
            document.querySelector(DOMstrings.addNewUser_btn).classList.remove("show");            
            document.querySelector(DOMstrings.newUserPassword).classList.remove("show-tablerow");
            
            

            colorSelectedUser(selUserData[0]);
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
        
        clearNewUserFields: function() {
 
            fields = document.querySelectorAll('#'+DOMstrings.dataUserName +', #'+ DOMstrings.dataPassword+', #'+ DOMstrings.dataFirstName+', #'+ DOMstrings.dataLastName+', #'+ DOMstrings.dataEmail);            
            fieldsArr = Array.prototype.slice.call(fields);
            
            fieldsArr.forEach(function(current) {
                current.value = ""; 
            });
            
        },
        
        renderUserPage: function(users,currentUser,currentUserData) {
            
            // Aktuális bejelentkezett felhasználó nevének kijelzése
            showCurrentUser(currentUser);
            
            // Rendszerben lévő felhasználók kilistázása
            UIController.listUsers(users);
            
            // Aktuális felhasználó kijelölés és adatainak megjelenítése
            UIController.showSelectedUserData(currentUserData);
        },
        
        getNewUserInputData: function() {
            
            var newUserData = {
                userName: document.getElementById(DOMstrings.dataUserName).value,
                password: document.getElementById(DOMstrings.dataPassword).value,
                firstName: document.getElementById(DOMstrings.dataFirstName).value,
                lastName: document.getElementById(DOMstrings.dataLastName).value,
                email: document.getElementById(DOMstrings.dataEmail).value
            }
            
            return newUserData;
                
        },
    
        getDOMstrings: function() {
            return DOMstrings;
        }
    }
    
})();