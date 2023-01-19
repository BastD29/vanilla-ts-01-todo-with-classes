import { STATUS } from "../enums/status";
import { dType } from "../types/dType";

export class TodoStructure {
  constructor(public id: dType, public input: dType, public status: STATUS) {}
}
