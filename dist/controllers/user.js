"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsers = exports.updateUsers = exports.postUsers = exports.getUser = exports.getUsers = void 0;
const getUsers = (req, res) => {
    res.json({
        msg: 'get Users'
    });
};
exports.getUsers = getUsers;
const getUser = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'get User'
    });
};
exports.getUser = getUser;
const postUsers = (req, res) => {
    const body = req.body;
    res.json({
        msg: 'POST Users',
        body
    });
};
exports.postUsers = postUsers;
const updateUsers = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    res.json({
        msg: 'update Users',
        body
    });
};
exports.updateUsers = updateUsers;
const deleteUsers = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'delete Users'
    });
};
exports.deleteUsers = deleteUsers;
//# sourceMappingURL=user.js.map