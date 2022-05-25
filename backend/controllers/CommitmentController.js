const commitmentService = require('../services/CommitmentService');
const { formatMap } = require('./helpers/split');

const getAllCommitments = async (req, res) => {
  const commitments = await commitmentService.getAllCommitments();
  const formated = formatMap(commitments)
  return res.status(200).json(formated);
};

module.exports = {
  getAllCommitments,
};
