const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id: {
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      allowNull: false,
      primaryKey:true
    },
    name:{
      type:DataTypes.STRING,
      allowNull:false,
    },
   peso:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    altura:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    temperamento:{
      type: DataTypes.ENUM('Aloof, Clownish, Dignified, Independent, Happy'),
      allowNull:false,
    },
    image:{
      type:DataTypes.STRING,
      allowNull:true,
    },
createdInDb:{
  type:DataTypes.BOOLEAN,
  allowNull:false,
  defaultValue:true,
},
  });
};
