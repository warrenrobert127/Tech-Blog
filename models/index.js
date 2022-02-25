const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');

Post.belongsTo(User,{
  foreignKey: 'user_id', onDelete: 'CASCADE'
});
Post.hasMany(Comment, {
  foreignKey: 'blogpost_id',
  onDelete : 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id', onDelete: 'CASCADE'
});

module.exports = { User, Comment, Post };
