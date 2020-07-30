// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class task extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   };
//   task.init({
//     value: DataTypes.STRING,
//     isDone: DataTypes.BOOLEAN,
//     deadline: DataTypes.DATE
//   }, {
//     sequelize,
//     modelName: 'task',
//   });
//   return task;
// };

// models/task.js 'use strict';

module.exports = (sequelize, DataTypes) => {
  const Task=sequelize.define('Task',{
    isDone: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    value: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    deadline: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: true,
        isAfter: new Date(),
      }
    }
  }, {});

  Task.associate = function (models) {
    Task.belongsTo(models.User, {
      foreignKey: {
        field: 'userId',
      },
      as: 'owner'
    });
  };
  return Task;
};