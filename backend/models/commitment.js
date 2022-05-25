const Commitment = (sequelize, DataTypes) => {
  const Commitment = sequelize.define("Commitment", {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
  });

  return Commitment;
};

module.exports = Commitment;