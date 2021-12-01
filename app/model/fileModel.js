import pkg from "sequelize";
const {DataTypes} = pkg;

export  const modelAttributes = () => {
  return {
    path: {
      type: DataTypes.STRING,
      notNull: true
    }
  }
}