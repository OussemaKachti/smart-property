const openai = require('../config/openai');

/**
 * Service centralisé pour les appels OpenAI
 */

// Generate chat completion
exports.createChatCompletion = async (messages, options = {}) => {
  try {
    const response = await openai.chat.completions.create({
      model: options.model || 'gpt-4-turbo-preview',
      messages,
      temperature: options.temperature || 0.7,
      max_tokens: options.max_tokens || 1000,
      ...options,
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error('OpenAI API Error:', error.message);
    throw new Error('Failed to generate AI response');
  }
};

// Generate vision completion (GPT-4 Vision)
exports.createVisionCompletion = async (prompt, imageUrls, options = {}) => {
  try {
    const messages = [
      {
        role: 'user',
        content: [
          { type: 'text', text: prompt },
          ...imageUrls.map(url => ({
            type: 'image_url',
            image_url: { url, detail: options.detail || 'high' },
          })),
        ],
      },
    ];

    const response = await openai.chat.completions.create({
      model: 'gpt-4-vision-preview',
      messages,
      max_tokens: options.max_tokens || 1500,
      ...options,
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error('OpenAI Vision API Error:', error.message);
    throw new Error('Failed to analyze images with AI');
  }
};

// Generate structured JSON response
exports.createStructuredCompletion = async (prompt, schema, options = {}) => {
  try {
    const messages = [
      {
        role: 'system',
        content: `You are a helpful assistant that responds in JSON format following this schema: ${JSON.stringify(schema)}`,
      },
      {
        role: 'user',
        content: prompt,
      },
    ];

    const response = await openai.chat.completions.create({
      model: options.model || 'gpt-4-turbo-preview',
      messages,
      response_format: { type: 'json_object' },
      temperature: options.temperature || 0.5,
      ...options,
    });

    return JSON.parse(response.choices[0].message.content);
  } catch (error) {
    console.error('OpenAI Structured API Error:', error.message);
    throw new Error('Failed to generate structured AI response');
  }
};
