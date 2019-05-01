/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users_tags', {
    user_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    tag_id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tags',
        key: 'id'
      }
    }
  }, {
    tableName: 'users_tags',
    underscored: true
  });
};
