const User = require('./User');
const Comment = require('./Comment');
const BlogPost = require('./BlogPost');

BlogPost.belongsTo(User,{
  foreignKey: 'user_id', onDelete: 'CASCADE'
});
BlogPost.hasMany(Comment, {
  foreignKey: 'blogpost_id',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id', onDelete: 'CASCADE'
});

module.exports = { User, Comment, BlogPost };
