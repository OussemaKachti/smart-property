const express = require('express');
const router = express.Router();
const aiController = require('../controllers/aiController');

// AI-powered routes
router.post('/generate-description/:id', aiController.generateDescription);
router.post('/analyze-images/:id', aiController.analyzeImages);
router.post('/apply-features/:id', aiController.applyDetectedFeatures);

module.exports = router;
