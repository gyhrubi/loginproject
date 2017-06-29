var AppController = (function(ctrlData,ctrlUI){

    // Private part of the module:

    var setupEventListeners = function() {
        
        var DOM = ctrlUI.getDOMstrings();
        
        document.querySelector(DOM.login_btn).addEventListener('click',ctrlLogin);
        
        document.addEventListener('keypress', function(event){
           
            if (event.keyCode === 13 || event.which === 13) {
                ctrlLogin();
            }
            
        });
        
    };
    
    var ctrlLogin = function() {
        
        // Get login input datas
        var loginData = ctrlUI.getInput();
        
       
        // Authorize current login
        var authResult = ctrlData.login(loginData.user_name, loginData.password);
        
        if (authResult[0]) {
            ctrlLoadUserPage();
        } else {
            ctrlUI.loginFails(authResult[1]);
        }

    };
    
    var ctrlLoadUserPage = function() {
        
        var users,currentUser,currentUserData,fullselected,splitID,itemword,selectedUserID;
        users = ctrlData.getUserList();
        currentUser = ctrlData.getCurrentUser();
        currentUserData = ctrlData.getUserData(currentUser);
        // meghivni az UI-ból a függvényeket
        ctrlUI.clearFields();
        ctrlUI.showUserList();
        ctrlUI.renderUserPage(users,currentUser,currentUserData);
        var DOM = ctrlUI.getDOMstrings();
        
        document.querySelector(DOM.loguot_btn).addEventListener('click',ctrlLogout);
        
        document.querySelector(DOM.addUser_btn).addEventListener('click',function() {
            
            if (ctrlData.getCurrentUser() == 'admin') {
                ctrlNewUserPage();
            } else {
                alert('No authorization.');
            }
            
        });

        document.querySelector(DOM.userList).addEventListener('click',function(event){
                        
            fullselected = event.target.id;
            splitID = fullselected.split('-');
            itemword = splitID[0];
            selectedUserID = splitID[1];
            
            ctrlSelectUser(selectedUserID);

        });
    };
    
    var ctrlSelectUser = function(selectedUserID) {
        
        var currentUserData;
        currentUserData = ctrlData.getUserData(selectedUserID);
        ctrlUI.showSelectedUserData(currentUserData);
        
    }
    
    var ctrlLogout = function() {
        ctrlData.logoutUser();
        ctrlUI.showLoginPage();
    }
    
    var ctrlNewUserPage = function() {
        
        var DOM = ctrlUI.getDOMstrings();
        
        ctrlUI.showNewUserPage();
        document.querySelector(DOM.addNewUser_btn).addEventListener('click',ctrlAddNewUser);
    } 
    
    var ctrlAddNewUser = function() {
        
         var newUserDatas,updatedUserList;
        // 1. A UI Controllerben a getNewUserInputData-tól a kapunk 5 paramétert.
        newUserDatas = ctrlUI.getNewUserInputData();
        // 2. Ezeket a paramétereket tovább adjuk az addUser-hez a DataControllerben
        ctrlData.addUser(newUserDatas.userName,newUserDatas.password,newUserDatas.firstName,newUserDatas.lastName,newUserDatas.email);
        // 3. A DataControllerben a getUserList-et ujra lekérjük
        updatedUserList = ctrlData.getUserList();
        // 4. Az új listát tovább küldjük a UI-ban a listUser függvénynek.
        ctrlUI.listUsers(updatedUserList);
        // 5. Beviteli mezők tartalmának törlése
        ctrlUI.clearNewUserFields();
    
    }
    // Public part of the module:
    return {
        init: function() {
            setupEventListeners();
            document.getElementById('login-field-username').focus();
        }
        
    };
    
})(DataController,UIController);

AppController.init();