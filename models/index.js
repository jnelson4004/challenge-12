const User = require('./User');
const Project = require('./Blogs');
const Blogs = require('./Blogs');

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Blogs };
