module.exports = function (sequelize, DataTypes) {

    var Contact = sequelize.define("Contact", {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
          }
      },
      message: {
        type: DataTypes.BLOB,
        allowNull: false,
        validate: {
            len: [1]
        }
      }
    });
  
    // Deal.associate = function (models) {
    //   Deal.belongsTo(models.User, {
    //     foreignKey: {
    //       allowNull: false
    //     }
    //   });
    // };
  
    return Contact;
  };