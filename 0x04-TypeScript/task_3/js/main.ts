/// <reference path="crud.d.ts" />
import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud.js";
const obj = { firstName: "Guillaume", lastName: "Salva" };
const newRowID: RowID = CRUD.insertRow(obj);

const updatedRow: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
  age: 23,
};
CRUD.updateRow(newRowID, updatedRow);

CRUD.deleteRow(125);
