"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const axios_1 = __importDefault(require("axios"));
const url = "https://dummyjson.com/products";
let id = 1;
function getData(id) {
    return axios_1.default.get(url + `/${id}`)
        .then(response => response.data)
        .catch(error => console.log(error));
}
const observable = (0, rxjs_1.interval)(1000).pipe((0, operators_1.switchMap)(() => {
    console.log("Making HTTP request......");
    const data = getData(id);
    id++;
    return data;
}));
observable.subscribe((data) => (console.log("Recieved data: ", data)));
