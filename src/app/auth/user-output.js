"use strict";
/**
* name
*/
var User = (function () {
    function User() {
    }
    return User;
}());
exports.User = User;
(function (UserType) {
    UserType[UserType["IsNotManager"] = 0] = "IsNotManager";
    UserType[UserType["IsManager"] = 1] = "IsManager";
})(exports.UserType || (exports.UserType = {}));
var UserType = exports.UserType;
//# sourceMappingURL=user-output.js.map