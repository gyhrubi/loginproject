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
        
        document.querySelector(DOM.addNewUser_btn).addEventListener('click',ctrlNewUserPage);

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
        currentUserData = DataController.getUserData(selectedUserID);
        ctrlUI.showSelectedUserData(currentUserData);
        
    }
    
    var ctrlLogout = function() {
        DataController.logoutUser();
    }
    
    var ctrlNewUserPage = function() {
        ctrlUI.showNewUserPage();
    } 
    
    var ctrlAddNewUser = function() {
         
        // 1. A UI Controllerben a getNewUserInputData-tól a kapunk 5 paramétert.
        
        // 2. Ezeket a paramétereket tovább adjuk az addUser-hez a DataControllerben
        
        // 3. A DataControllerben a getUserList-et ujra lekérjük
        
        // 4. Az új listát tovább küldjük a UI-ban a listUser függvénynek.
    }

    // Public part of the module:
    return {
        init: function() {
            setupEventListeners();
        }
        
    };
    
})(DataController,UIController);

AppController.init();