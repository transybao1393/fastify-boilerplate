module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      }
    });
  
    return User;
  };