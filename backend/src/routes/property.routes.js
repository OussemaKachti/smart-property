const express = require('express');
const router = express.Router();
const propertyController = require('../controllers/propertyController');
const { uploadImages } = require('../middleware/upload.middleware');
const { validateProperty, validatePropertyUpdate } = require('../middleware/validator');

// Property CRUD routes
router.get('/', propertyController.getAllProperties);
router.get('/:id', propertyController.getPropertyById);
router.post(
  '/',
  uploadImages,
  validateProperty,
  propertyController.createProperty
);
router.put(
  '/:id',
  uploadImages,
  validatePropertyUpdate,
  propertyController.updateProperty
);
router.delete('/:id', propertyController.deleteProperty);

// Image management
router.delete('/:id/images/:imageId', propertyController.deletePropertyImage);

module.exports = router;
