const commitmentService = require('../services/CommitmentService');

const getAllCommitments = async (req, res) => {
  const commitments = await commitmentService.getAllCommitments();

  return res.status(200).json(commitments);
};

module.exports = {
  getAllCommitments,
};
