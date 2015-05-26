// exported
var global_shared_var = "";

ScopePermissionDemo = function(aString) {
  var self = this;
  // self._simpleSchema = simpleSchema;

  self._public_variable = aString;
  var _private_variable = aString;
  global_shared_unvar = aString;
  global_shared_var = aString;

  _private_function_by_unvar_function = function() {
    console.log('this is a private function created by unvar function (shared globally)');

    console.log('_private_variable:',_private_variable);
  }

  var _private_function_by_var_function = function() {
    console.log('this is a private function created by var function (one function object per instance)');

    console.log('_private_variable:',_private_variable);

    
  }


  _best_practice_private_function = function() {
    console.log('this is the best way to make a private function accessible by prototype functions');
  }
  
  _best_practice_getter_for_private_variable = function() {
    return _private_variable;
  }

  _best_practice_setter_for_private_variable = function(new_private) {
    _private_variable = new_private;
  }

  self.instance_function_by_self = function() {
    console.log('this is a public instance function created by "self"');

    var self = this;

    console.log('global_shared_var:',global_shared_var);
    console.log('global_shared_unvar:',global_shared_unvar);
    console.log('self._public_variable:', self._public_variable);

    try {
      console.log('_private_variable:', _private_variable);
    } catch (e) {
      console.error('_private_variable failed');
      console.error(e);
    }

    try {
      console.log('calling _private_function_by_var_function...');
      _private_function_by_var_function();
    } catch (e) {
      console.error('calling _private_function_by_var_function failed');
      console.error(e);
    }

    try {
      console.log('calling _private_function_by_unvar_function...');
      _private_function_by_unvar_function();
    } catch (e) {
      console.error('calling _private_function_by_unvar_function failed');
      console.error(e);
    }
  }

  // this.instance_function_by_this = function() {
  //   console.log('this is a public instance function created by "this"');

  //   var self = this;

  //   console.log('global_shared_var:',global_shared_var);
  //   console.log('global_shared_unvar:',global_shared_unvar);
  //   console.log('self._public_variable:', self._public_variable);

  //   try {
  //     console.log('_private_variable:', _private_variable);
  //   } catch (e) {
  //     console.error('_private_variable failed');
  //     console.error(e);
  //   }

  //   try {
  //     console.log('calling _private_function_by_var_function...');
  //     _private_function_by_var_function();
  //   } catch (e) {
  //     console.error('calling _private_function_by_var_function failed');
  //     console.error(e);
  //   }

  //   try {
  //     console.log('calling _private_function_by_unvar_function...');
  //     _private_function_by_unvar_function();
  //   } catch (e) {
  //     console.error('calling _private_function_by_unvar_function failed');
  //     console.error(e);
  //   }
  // }
}


ScopePermissionDemo.prototype.instance_function_by_prototype = function() {
  
  console.log('this is a public instance function created by prototype');

  var self = this;

  console.log('global_shared_var:',global_shared_var);
  console.log('global_shared_unvar:',global_shared_unvar);
  console.log('self._public_variable:', self._public_variable);

  try {
    console.log('_private_variable:', _private_variable);
  } catch (e) {
    console.error('_private_variable failed');
    console.error(e);
  }

  try {
    console.log('calling _private_function_by_var_function...');
    _private_function_by_var_function();
  } catch (e) {
    console.error('calling _private_function_by_var_function failed');
    console.error(e);
  }

  try {
    console.log('calling _private_function_by_unvar_function...');
    _private_function_by_unvar_function();
  } catch (e) {
    console.error('calling _private_function_by_unvar_function failed');
    console.error(e);
  }
}

ScopePermissionDemo.prototype.best_practice_public_function = function() {
  var current_private = _best_practice_getter_for_private_variable();
  console.log('access to _private variable by calling a private getter:',current_private);
  console.log('updating _private to new vaule with _best_practice_setter_for_private_variable...');
  _best_practice_setter_for_private_variable(current_private+" updated!");
  console.log('_private:',_best_practice_getter_for_private_variable());
}

ScopePermissionDemo.static_function = function() {
  
  console.log('this is a public static function');

}

ScopePermissionDemo.test = function() {
  
  console.log('creating 2 variables for demostration...');

  x = new ScopePermissionDemo('this is x');
  y = new ScopePermissionDemo('this is y');

  console.log('lets look at x:');
  x.instance_function_by_prototype();
  x.instance_function_by_self();
  console.log('lets look at y:');
  y.instance_function_by_prototype();
  y.instance_function_by_self();

}