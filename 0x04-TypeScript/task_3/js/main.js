"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CRUD = require("./crud.js");
var obj = { firstName: "Guillaume", lastName: "Salva" };
var newRowID = CRUD.insertRow(obj);
var updatedRow = {
    firstName: "Guillaume",
    lastName: "Salva",
    age: 23,
};
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(125);
