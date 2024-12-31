import { RowID, RowElement } from "./interface";

export function insertRow(row): number;
export function deleteRow(rowId);
export function updateRow(rowId, row): number;
