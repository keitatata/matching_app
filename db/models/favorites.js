/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('favorites', {
    user_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    favorited_user_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    tableName: 'favorites',
    underscored: true
  });
};
