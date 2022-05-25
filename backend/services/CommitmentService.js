const { Commitment } = require('../models');

const getAllCommitments = async () => {
  const commitments = await Commitment.findAll();

  return commitments;
};

module.exports = {
  getAllCommitments,
};
