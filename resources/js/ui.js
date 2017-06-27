// Eszti része:
var UIController = (function(){

    // Private part of the module:
    var DOMstrings = {
        input_username: '#login-field-username',
        input_password: '#login-field-password',
        login_btn: '.login-btn',
        loginpage: '.login-page',
        userpage: '.user-page',
        errortext: '.login-console-message'
    };
    
    // Public part of the module:
    return {
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
            var z;
            z = document.querySelector(DOMstrings.errortext).textContent;
           switch(error_reason) {
            case 0:
                 z = 'Hibás jelszó';
                break;
            case 1:
                z = 'Hibás felhasználó';
                break;
            default:
                 z = 'Hibás bejelentkezés';
} 
        },
        
        clearFields: function() {
            var fields, fieldsArr;
            fields = document.querySelectorAll(DOMstrings.input_username +', '+ DOMstrings.input_password);
            
            fieldsArr = Array.prototype.slice.call(fields);
            fieldsArr.forEach(function(current, index, array) {
               current.value = ""; 
            });
            
        },
       
    
        getDOMstrings: function() {
            return DOMstrings;
        }
    }
    
})();