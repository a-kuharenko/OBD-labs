const Sequelize = require("sequelize");
const { sequelize } = require("../db.config");

const User = sequelize.define(
  "User",
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {}
);

module.exports = { User };
