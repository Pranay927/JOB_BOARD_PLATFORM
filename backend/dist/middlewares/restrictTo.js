"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restrictTo = void 0;
var restrictTo = function () {
    var rolesAllowed = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rolesAllowed[_i] = arguments[_i];
    }
    return function (req, res, next) {
        var userRole = req.role;
        if (!userRole) {
            console.log(userRole);
            return;
        }
        ;
        if (!rolesAllowed.includes(userRole)) {
            console.log(userRole);
            res.status(403).json({ Message: 'Access denied' });
            return;
        }
        next();
    };
};
exports.restrictTo = restrictTo;
