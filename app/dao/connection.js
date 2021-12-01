import pkg from 'sequelize';
const {DataTypes, Sequelize} = pkg;
const uri = 'postgres://someuser:somepass@localhost:8800/somedb';

const defaultAttributes = () => {
  return {
    data: {
      type: DataTypes.STRING
    }
  }
}

export const withConnection = (
  name = 'unnamed',
  attributes = defaultAttributes
) => o => {
  const modelAttributes = attributes;
  const modelName = 'Files';
  let model;
  return ({
//  Using spread operator before properties to implement interface

    model() {
      return model
    },
    modelAttributes() {
      return modelAttributes;
    },

    async connect() {
      const connection = new Sequelize(uri, {
        logging: console.log
      });
      await connection.authenticate();
      model = await connection.define(modelName, modelAttributes());
      return this;
    },
    ...o
  })
}
