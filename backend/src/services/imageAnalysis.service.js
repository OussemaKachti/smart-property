const openaiService = require('./openai.service');

/**
 * Service pour la détection automatique des caractéristiques à partir des photos
 * Utilise GPT-4 Vision pour analyser les images
 */

exports.analyzePropertyImages = async (imageUrls) => {
  try {
    const prompt = `
Analyze these real estate property images and extract the following information in JSON format:

{
  "roomCount": <number of rooms detected>,
  "estimatedSurface": <estimated surface area in m²>,
  "propertyType": "APARTMENT" | "HOUSE" | "VILLA" | "STUDIO",
  "detectedRooms": ["bedroom", "kitchen", "bathroom", "living room", ...],
  "amenities": ["parking", "balcony", "garden", "pool", "terrace", ...],
  "condition": "excellent" | "good" | "fair" | "needs renovation",
  "style": "modern" | "classic" | "contemporary" | "rustic" | "industrial",
  "naturalLight": "excellent" | "good" | "moderate" | "low",
  "furnishing": "furnished" | "semi-furnished" | "empty",
  "floorType": "tiles" | "wood" | "carpet" | "concrete",
  "wallCondition": "excellent" | "good" | "fair" | "poor",
  "keyFeatures": ["feature 1", "feature 2", ...],
  "suggestedImprovements": ["improvement 1", "improvement 2", ...],
  "marketingHighlights": ["highlight 1", "highlight 2", ...]
}

Be precise and only include features that are clearly visible in the images.
If something is not visible or uncertain, use null or omit the field.
`;

    const schema = {
      roomCount: 'number',
      estimatedSurface: 'number',
      propertyType: 'string',
      detectedRooms: 'array',
      amenities: 'array',
      condition: 'string',
      style: 'string',
      naturalLight: 'string',
      furnishing: 'string',
      floorType: 'string',
      wallCondition: 'string',
      keyFeatures: 'array',
      suggestedImprovements: 'array',
      marketingHighlights: 'array',
    };

    // Limit to first 5 images to avoid token limits
    const limitedImageUrls = imageUrls.slice(0, 5);

    const result = await openaiService.createStructuredCompletion(
      prompt,
      schema,
      { 
        model: 'gpt-4-vision-preview',
        max_tokens: 2000,
      }
    );

    return result;
  } catch (error) {
    console.error('Image Analysis Error:', error.message);
    throw error;
  }
};

exports.detectRoomType = async (imageUrl) => {
  try {
    const prompt = `
Identify the type of room in this image. Respond with only one word from:
bedroom, kitchen, bathroom, living_room, dining_room, office, balcony, terrace, garage, garden, entrance, hallway, storage, other
`;

    const result = await openaiService.createVisionCompletion(
      prompt,
      [imageUrl],
      { 
        max_tokens: 50,
        temperature: 0.3,
      }
    );

    return result.trim().toLowerCase();
  } catch (error) {
    console.error('Room Type Detection Error:', error.message);
    throw error;
  }
};
