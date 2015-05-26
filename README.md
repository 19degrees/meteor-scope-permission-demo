## Overview
This package is used to demonstrate how scoping works in Meteor JS by taking an in-depth look into scoping and permissions of Meteor. Testing when to use var, when to use self / this, and when to use prototype as well as how to ensure a property is public / private.

## Static Functions
##### ScopePermissionDemo.static_function()
Just a static function for demo.
##### ScopePermissionDemo.test()
A static function to perform the test. The variables `x` and `y` will be created using:
```javascript
x = new ScopePermissionDemo('this is x');
y = new ScopePermissionDemo('this is y');
```

## Public Instance Functions
##### ScopePermissionDemo.instance_function_by_self
A public instance function created by self.function_name (self.instance_function_by_self) inside the object declaration. It has access to all the _private variables and functions defined (scope controlled by using `var`) inside the object.
##### ScopePermissionDemo.instance_function_by_prototype
A public instance function created by ScopePermissionDemo.prototype (ScopePermissionDemo.prototype.instance_function_by_prototype). It do not have access to any of the _private variables defined inside the object and require globally defined private functions (defined by *not* using `var` in Object declaration) to access the _private variables.

## Private Instance Functions
##### ScopePermissionDemo._private_function_by_unvar_function
Private instance functions defrined by *not* using `var` in Object declaration.
```javascript
_private_function_by_unvar_function = function() {...}
```
It can be accessed by functions (both public and private) also defined in the same Object declaration as well as other functions inside the same file since it is *not* `var`. Therefore this private function can be used by public functions created by *prototypes* and allow these functions to access _private variables.
##### ScopePermissionDemo._private_function_by_var_function
Private instance functions defrined by using `var` in Object declaration.
```javascript
var _private_function_by_var_function = function() {...}
```
It can only be access by functions (both public and private) defined in the same Object declaration but not by public functions created using *prototypes*.