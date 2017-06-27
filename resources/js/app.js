var AppController = (function(ctrlData,ctrlUI){

    // Private part of the module:
    var setupEventListeners = function() {
        
        var DOM = ctrlUI.getDOMStrings();
        
        document.querySelector(DOM.loginBtn).addEventListener('click',ctrlLogin);
        
        document.addEventListener('keypress', function(event){
           
            if (event.keyCode === 13 || event.which === 13) {
                ctrlLogin();
            }
            
        });
        
    };
    
    var ctrlLogin = function() {
      
        console.log('Login method.');
        
        /*
        // Get login input datas
        var loginData = ctrlUI.getLoginInput();
        
        // Authorize current login
        var authResult = ctrlData.authUser();
        
        // Render the authorization result
        if (authResult === 1) {
            ctrlUI.showUserList(param);
        } else {
            ctrlUI.loginFails(param);
        }
        */
    };
    
    
    // Public part of the module:
    return {
        init: function() {
            setupEventListeners();
        }
        
    };
    
})(DataController,UIController);

AppController.init();