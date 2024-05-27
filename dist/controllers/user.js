"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsers = exports.updateUsers = exports.postUsers = exports.getUser = exports.getUsers = void 0;
const user_1 = __importDefault(require("../models/user"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield user_1.default.findAll();
    res.json({ users });
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield user_1.default.findByPk(id);
    if (user) {
        res.json(user);
    }
    else {
        res.status(401).json({
            msg: `There's no user with id ${id}`
        });
    }
});
exports.getUser = getUser;
const postUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const mailExistence = yield user_1.default.findOne({
            where: {
                email: body.email
            }
        });
        if (mailExistence) {
            return res.status(400).json({
                msg: 'Mail has already existed'
            });
        }
        const user = new user_1.default(body);
        yield user.save();
        res.json(user);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Communicate with administrator'
        });
    }
});
exports.postUsers = postUsers;
const updateUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const user = yield user_1.default.findByPk(id);
        if (!user) {
            return res.status(404).json({
                msg: 'Theres no user with these id'
            });
        }
        yield user.update(body);
        res.json(user);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Communicate with administrator'
        });
    }
});
exports.updateUsers = updateUsers;
const deleteUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield user_1.default.findByPk(id);
    if (!user) {
        return res.status(404).json({
            msg: 'Theres no user with these id'
        });
    }
    // physic delete
    // await user.destroy();
    // logic delete
    yield user.update({ state: false });
    res.json({
        msg: 'User deleted'
    });
});
exports.deleteUsers = deleteUsers;
//# sourceMappingURL=user.js.map