const { Router } = require('express');
const commitmentController = require('../controllers/CommitmentController');

const commitment = Router();

commitment.get('/all', commitmentController.getAllCommitments);

module.exports = {
  commitment,
}