/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    account_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    remove: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'users',
    underscored: true
  });
};
