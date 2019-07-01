"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const ApiConstant_1 = require("./constant/ApiConstant");
const port = process.env.PORT || ApiConstant_1.DEFAULT_PORT;
// console.log('env',process.env);
app_1.default.listen(port, () => {
    // console.log('env', process.env);
    console.log(`Listening on port ${port} success!`);
});
