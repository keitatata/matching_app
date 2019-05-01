/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tags', {
    id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true
    }
  }, {
    tableName: 'tags',
    underscored: true
  });
};
