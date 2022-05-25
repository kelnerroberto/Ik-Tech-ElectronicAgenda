const commitmentService = require('../services/CommitmentService');
const { formatMap } = require('./helpers/split');

const getAllCommitments = async (_req, res) => {
  const commitments = await commitmentService.getAllCommitments();
  const formated = formatMap(commitments)
  return res.status(200).json(formated);
};

const postNewCommitment = async (req, res) => {
  const { name, title } = req.body;
}

module.exports = {
  getAllCommitments,
};
