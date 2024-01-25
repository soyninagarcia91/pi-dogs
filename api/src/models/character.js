//definir y hacer el module export del modelo, hacer lo mismo de dogs y temperaments teniendo en cuenta lo que haya en la tabla.
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Character = sequelize.define('Character', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    altura:{
        type:DataTypes.STRING,
        allowNull:false,
      },
      peso:{
        type:DataTypes.STRING,
        allowNull:false,
      },
      añosdevida:{
        type:DataTypes.STRING,
        allowNull:false,
      },
      image:{
        type:DataTypes.STRING,
        allowNull:true,
      },
  }, {
    timestamps: true,
    tableName: 'characters',
  });


  return Character;
};
