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
        var authResult = ctrlData.authUser(loginData.user_name, loginData.password);
       
        // Render the authorization result
        if (1) {
            ctrlUI.clearFields();
            ctrlUI.showUserList();
        } else {
            ctrlUI.loginFails(0);
        }
        
    };
    
>>>>>>> cce6236a499a125425ca4ca21108780b54d4f592
    
    // Public part of the module:
    return {
        init: function() {
            setupEventListeners();
        }
        
    };
    
})(DataController,UIController);

AppController.init();