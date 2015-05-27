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
A public instance function created by ScopePermissionDemo.prototype (ScopePermissionDemo.prototype.instance_function_by_prototype). It do not have access to any of the _private variables defined inside the object (with `var`) and require other publicly available functions like `self.instance_function_by_self` to access these variables. When prototype is used, one can consider exposing the varibles in question as `self.public_variable` unless extra setting / getting logic is required.

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

### Best Practice using Prototypes
- Create private variables using `var` inside Object declaration like `_private`.
- Expose varibles like `self.public_variable`, use `_` in front to "denote it as private" (still accessible publicly) or access private variables via public getters and setters like `self._best_practice_getter_for_private_variable` and `self._best_practice_setter_for_private_variable`.
- Create pubilc functions with `prototype` like `best_practice_public_function_prototype`.

### Best Practice using self.public_function
- Create private variables using `var` inside Object declaration like `_private`.
- Create pubilc functions with `self` like `self.best_practice_public_function_self`.

### Prototype vs SELF / THIS
- SELF / THIS duplicate functions in each instance, prototype allow the same function to only be defined once and shared.
- SELF / THIS allow private variables where as prototype can only access public varibles
- Real access permission vs memory efficency
- As JavaScript is lexically scoped, you can simulate this on a per-object level by using the constructor function as a closure over your 'private members' and defining your methods in the constructor, but this won't work for methods defined in the constructor's prototype property.
- http://thecodeship.com/web-development/methods-within-constructor-vs-prototype-in-javascript/
- http://stackoverflow.com/questions/6784927/how-to-acces-javascript-object-variables-in-prototype-function