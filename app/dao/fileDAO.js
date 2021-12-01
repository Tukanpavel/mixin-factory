import {modelAttributes} from "../model/fileModel.js";
import pipe from "lodash/fp/flow.js";
import {withConnection} from "./connection.js";

const withConstructor = constructor => o => ({
    __proto__: {
      constructor
    },
    ...o
  }
)

const withFile = o => {
  return {
    ...o,
    async getAll() {
      return await this.model().findAll({
        raw: true
      })
    },
    async getById({id = 0}) {
      return await this.model().findAll({
        raw: true,
        where: {
          id: id,
        }
      })
    },
    async create({path:string}) {},
    async delete({id:number, path:string}) {}
  }
}

export const createFileDB = ({name = 'files', attributes = modelAttributes}) => pipe(
  withFile,
  withConnection(name, attributes),
  withConstructor(createFileDB)
)({});