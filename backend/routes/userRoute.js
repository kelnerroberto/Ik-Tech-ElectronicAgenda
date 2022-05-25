const { Router } = require('express');
const commitmentController = require('../controllers/CommitmentController');

const commitment = Router();

commitment.get('/home', commitmentController.getAllCommitments);

module.exports = {
  commitment,
}