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
        
        var users,currentUser,currentUserData;
        users = ctrlData.getUserList();
        currentUser = ctrlData.getCurrentUser();
        currentUserData = ctrlData.getUserData(currentUser);
        // meghivni az UI-ból a függvényeket
        ctrlUI.clearFields();
        ctrlUI.showUserList();
        ctrlUI.renderUserPage(users,currentUser,currentUserData);
    };

    // Public part of the module:
    return {
        init: function() {
            setupEventListeners();
        }
        
    };
    
})(DataController,UIController);

AppController.init();