const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// create our Post model
class Post extends Model {}

// create fields/columns for Post model
Post.init(
  {
    title: {
      type: DataTypes.STRING,
    },
    post_content: {
      type: DataTypes.STRING,
    },
    date_created: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    modelName: "post",
  }
);

module.exports = Post;
