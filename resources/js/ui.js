// Eszti része:
var UIController = (function(){

    // Private part of the module:
    var DOMstrings = {
        input_username: '#login-field-username',
        input_password: '#login-field-password',
        login_btn: '.login-btn'
    };
    
    // Public part of the module:
    return {
      getInput: function() {
          return {
           user_name: document.querySelector(DOMstrings.input_username).value,
            password: document.querySelector(DOMstrings.input_password).value
          };
      }, 
        // addListItem: function
        // deleteList item: function
        // clearFields: function
        /* displayLogin: function(obj) {
            document.querySelector(DOMstrings.input_username).textContent = user_name;
            document.querySelector(DOMstrings.input_password).textContent = password;
        } */
        getDOMstrings: function() {
            return DOMstrings;
        }
    }
    
})();